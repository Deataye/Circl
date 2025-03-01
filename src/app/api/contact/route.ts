import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, profession, otherProfession, message } = body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json({ message: "All required fields must be filled!" }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // App Password (Not your regular password)
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "shahzaiba61@gmail.com", // Your email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Profession:</strong> ${profession || otherProfession || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: "✅ Email sent successfully!" }, { status: 200 });
  } catch (error: unknown) {
    console.error("Email sending error:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { message: "❌ Email sending failed!", error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ message: "❌ An unknown error occurred!" }, { status: 500 });
  }
}