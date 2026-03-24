import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = 'force-dynamic'; // Ensure this runs on every request

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    const authHeader = request.headers.get('Authorization');
    
    // Simple protection against arbitrary crawlers using a hardcoded key
    // Also supports Vercel CRON_SECRET if the user configures it
    if (key !== 'KeepAlive123' && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("[keep-alive] Missing Supabase environment variables");
      return NextResponse.json({ error: "Missing Supabase env vars" }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // 1. Enter specific example data
    const { data, error: insertError } = await supabase
      .from("quote_requests")
      .insert({
        name: "Automated Bot",
        email: "bot-keep-alive@example.com",
        phone: "0000000000",
        project_type: "System Maintenance",
        budget: "0",
        message: "Automated keep-alive ping to prevent Supabase from pausing. Will be deleted instantly.",
      })
      .select()
      .single();

    if (insertError) {
      console.error("[keep-alive] Insert error:", insertError);
      return NextResponse.json({ error: "Failed to insert keep-alive request" }, { status: 500 });
    }

    // 2. Instantly delete it so no garbage data is stored permanently
    if (data && data.id) {
      const { error: deleteError } = await supabase
        .from("quote_requests")
        .delete()
        .eq("id", data.id);
        
      if (deleteError) {
        console.error("[keep-alive] Delete error:", deleteError);
        return NextResponse.json({ error: "Insert successful but delete failed" }, { status: 500 });
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: "Keep-alive successful: Example data inserted and instantly deleted to resume database." 
    });
  } catch (err) {
    console.error("[keep-alive] Unexpected error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
