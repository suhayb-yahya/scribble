import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const contactEmail = process.env.CONTACT_EMAIL;
  if (!contactEmail?.trim()) {
    return NextResponse.json(
      { error: "Contact email is not configured (CONTACT_EMAIL)." },
      { status: 500 }
    );
  }
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured (RESEND_API_KEY)." },
      { status: 500 }
    );
  }

  let body: { name?: string; email?: string; comments?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const comments = typeof body.comments === "string" ? body.comments.trim() : "";

  if (!name || !email || !comments) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <pre>${escapeHtml(comments)}</pre>
  `;

  const { data, error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Scribble Contact <onboarding@resend.dev>",
    to: [contactEmail],
    replyTo: email,
    subject: `Contact form: ${name}`,
    html,
  });

  if (error) {
    console.error("Contact form send error:", error);
    return NextResponse.json(
      { error: error.message ?? "Failed to send email." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, id: data?.id });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
