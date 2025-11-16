import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY!);

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, message }: ContactForm = await req.json();

    // Send emails concurrently
    await Promise.all([
      // Email to site owner
      resend.emails.send({
        from: process.env.FROM_EMAIL!,
        to: process.env.TO_EMAIL!,
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
        from: process.env.FROM_EMAIL!,
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
    return NextResponse.json({ message: "Failed to send message." });
  }
}
