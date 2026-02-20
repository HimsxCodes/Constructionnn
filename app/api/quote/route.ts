import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendQuoteNotification } from "@/lib/email";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, budget, message } = body;

    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, projectType, message" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { error: dbError } = await supabase.from("quote_requests").insert({
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      project_type: String(projectType).trim(),
      budget: budget != null && String(budget).trim() !== "" ? String(budget).trim() : null,
      message: String(message).trim(),
    });

    if (dbError) {
      console.error("[quote] Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save your request. Please try again." },
        { status: 500 }
      );
    }

    const emailResult = await sendQuoteNotification({
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      projectType: String(projectType).trim(),
      budget: budget != null && String(budget).trim() !== "" ? String(budget).trim() : null,
      message: String(message).trim(),
    });

    if (!emailResult.success) {
      console.error("[quote] Resend email error:", emailResult.error);
      // Do not fail the request; data is stored.
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[quote] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
