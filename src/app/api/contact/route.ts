import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, profession, otherProfession, message } = body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { message: "All required fields must be filled!" },
        { status: 400 }
      );
    }

    // Updated Nodemailer configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "hello@circlonline.com",
      subject: "New Contact Form Submission",
      html: `
        <p>New Contact Form Submission</p>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Profession: ${profession || otherProfession || "Not provided"}</p>
        <p>Message: ${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "✅ Email sent successfully!" },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST'
        }
      }
    );
  } catch (error: unknown) {
    console.error("Email sending error:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { message: "❌ Email sending failed!", error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "❌ An unknown error occurred!" },
      { status: 500 }
    );
  }
}