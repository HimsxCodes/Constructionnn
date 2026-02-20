import { Resend } from "resend";

export interface QuoteNotificationData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string | null;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendQuoteNotification(data: QuoteNotificationData): Promise<{ success: boolean; error?: string }> {
  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "RESEND_API_KEY is not configured" };
  }

  const adminEmails = process.env.ADMIN_EMAIL
    ? process.env.ADMIN_EMAIL.split(",").map((e) => e.trim()).filter(Boolean)
    : [];

  if (adminEmails.length === 0) {
    return { success: false, error: "ADMIN_EMAIL is not configured" };
  }

  const budgetLabel = data.budget || "Not specified";
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h1 style="color: #1F2937; margin-bottom: 24px;">New Quote Request</h1>
  <p style="margin-bottom: 20px;">You have received a new quote request from your website.</p>
  <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
    <tr style="background: #f9fafb;">
      <td style="padding: 12px 16px; border: 1px solid #e5e7eb; font-weight: 600;">Name</td>
      <td style="padding: 12px 16px; border: 1px solid #e5e7eb;">${escapeHtml(data.name)}</td>
    </tr>
    <tr>
      <td style="padding: 12px 16px; border: 1px solid #e5e7eb; font-weight: 600;">Email</td>
      <td style="padding: 12px 16px; border: 1px solid #e5e7eb;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
    </tr>
    <tr style="background: #f9fafb;">
      <td style="padding: 12px 16px; border: 1px solid #e5e7eb; font-weight: 600;">Phone</td>
      <td style="padding: 12px 16px; border: 1px solid #e5e7eb;">${escapeHtml(data.phone)}</td>
    </tr>
    <tr>
      <td style="padding: 12px 16px; border: 1px solid #e5e7eb; font-weight: 600;">Project Type</td>
      <td style="padding: 12px 16px; border: 1px solid #e5e7eb;">${escapeHtml(data.projectType)}</td>
    </tr>
    <tr style="background: #f9fafb;">
      <td style="padding: 12px 16px; border: 1px solid #e5e7eb; font-weight: 600;">Budget</td>
      <td style="padding: 12px 16px; border: 1px solid #e5e7eb;">${escapeHtml(budgetLabel)}</td>
    </tr>
    <tr>
      <td style="padding: 12px 16px; border: 1px solid #e5e7eb; font-weight: 600; vertical-align: top;">Message</td>
      <td style="padding: 12px 16px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${escapeHtml(data.message)}</td>
    </tr>
  </table>
  <p style="margin-top: 24px; color: #6b7280; font-size: 14px;">This request was submitted via your website contact form.</p>
</body>
</html>
  `.trim();

  try {
    const { data: result, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: adminEmails,
      subject: `New Quote Request from ${data.name}`,
      html,
    });

    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error sending email";
    return { success: false, error: message };
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}
