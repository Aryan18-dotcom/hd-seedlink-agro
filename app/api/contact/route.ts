import { NextResponse } from 'next/server';
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not defined in the environment variables.");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // 1. Send Email to Admin
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Use your verified domain in production
      to: process.env.ADMIN_EMAIL as string,
      subject: `New Inquiry: ${subject}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 2. Send Confirmation Email to Client
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
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
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}