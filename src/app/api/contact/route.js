import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 30;

const withTimeout = async (promise, timeoutMs = 10000) => {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error('Operation timed out')), timeoutMs);
  });
  try {
    return await Promise.race([promise, timeout]);
  } finally {
    clearTimeout(timer);
  }
};

export async function POST(request) {
  try {
    const { fullName, company, email, description } = await request.json();
    if (!fullName || !email || !description) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_TO_EMAIL || 'contact@symi.io';

    if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
      return NextResponse.json({ message: 'Email not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const subject = `New Consultation Request — ${fullName}`;
    const text = `Full Name: ${fullName}\nCompany: ${company || '-'}\nEmail: ${email}\n\nDescription:\n${description}`;

    await withTimeout(transporter.sendMail({
      from: `Symi System <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text,
    }), 10000);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}


