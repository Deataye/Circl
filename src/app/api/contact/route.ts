import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Load environment variables
const EMAIL = process.env.EMAIL_USER;
const PASSWORD = process.env.EMAIL_PASS;

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, profession, otherProfession, message } = await req.json();

    // Validate form fields (basic check)
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json({ message: "❌ All fields are required!" }, { status: 400 });
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: EMAIL,
      to: "shahzaiba61@gmail.com", // Your Gmail
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Profession: ${profession || "Not specified"}
        Other Profession: ${otherProfession || "N/A"}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "✅ Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "❌ Failed to send email." }, { status: 500 });
  }
}
