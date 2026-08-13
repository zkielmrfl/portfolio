import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as ContactBody | null;
  const name = body?.name?.trim();
  const email = body?.email?.trim();
  const message = body?.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY ?? process.env.EMAIL_SERVICE_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json({ ok: false, error: "Email service is not configured." }, { status: 500 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      text: `New portfolio message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    })
  });

  if (!resendResponse.ok) {
    const error = await resendResponse.json().catch(() => null);
    return NextResponse.json({ ok: false, error: error?.message ?? "Email failed to send." }, { status: 502 });
  }

  const result = await resendResponse.json().catch(() => null);
  return NextResponse.json({ ok: true, id: result?.id ?? null });
}
