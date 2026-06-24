import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // 1. Configure Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 2. Send Admin Email
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL, // Send to yourself
      subject: `New Inquiry: ${subject}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 3. Send Client Confirmation Email
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: email, // Send to the client
      subject: 'We received your inquiry - HD Seedlink Agro',
      html: `
        <h1>Hello ${name},</h1>
        <p>Thank you for reaching out to HD Seedlink Agro.</p>
        <p>We have received your request regarding <strong>${subject}</strong>. Our team will process your inquiry and get back to you within 24 hours.</p>
        <br />
        <p>Best regards,<br />The HD Seedlink Agro Team</p>
      `,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}