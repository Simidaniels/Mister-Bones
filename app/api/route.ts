import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    // Ensure all required env variables are set
    const { RESEND_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;
    if (!RESEND_API_KEY || !FROM_EMAIL || !TO_EMAIL) {
      console.error("Missing Resend API key or email addresses.");
      return NextResponse.json({ message: "Server misconfiguration." }, { status: 500 });
    }

    const resend = new Resend(RESEND_API_KEY);

    const { name, email, message }: ContactForm = await req.json();

    // Send emails concurrently
    await Promise.all([
      // Email to site owner
      resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `New message from ${name}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),

      // Auto-reply to user
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "Mister Bones – We received your message!",
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for contacting Mister Bones! We will get back to you soon.</p>
          <p>Best regards,<br/>Paws & Pets Team</p>
        `,
      }),
    ]);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return NextResponse.json({ message: "Failed to send message." }, { status: 500 });
  }
}
