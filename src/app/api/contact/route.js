import nodemailer from 'nodemailer';
import {NextResponse} from 'next/server';

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
    const {fullName, company, email, description} = await request.json();
    if (!fullName || !email || !description) {
      return NextResponse.json({message: 'Missing required fields'}, {status: 400});
    }

    // Brevo-safe defaults with env overrides.
    const smtpHost = process.env.SMTP_HOST || 'smtp-relay.brevo.com';
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER || process.env.BREVO_SMTP_LOGIN;
    const smtpPass = process.env.SMTP_PASS || process.env.BREVO_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_TO_EMAIL || 'contact@symi.io';
    const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser || 'contact@symi.io';

    if (!smtpUser || !smtpPass || !toEmail) {
      return NextResponse.json(
        {
          message: 'Email not configured',
          code: 'EMAIL_CONFIG_MISSING',
          required: ['SMTP_USER (or BREVO_SMTP_LOGIN)', 'SMTP_PASS (or BREVO_API_KEY)', 'CONTACT_TO_EMAIL']
        },
        {status: 500}
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {user: smtpUser, pass: smtpPass}
    });

    const subject = `New Consultation Request - ${fullName}`;
    const text = `Full Name: ${fullName}\nCompany: ${company || '-'}\nEmail: ${email}\n\nDescription:\n${description}`;

    await withTimeout(
      transporter.sendMail({
        from: `SYMI <${fromEmail}>`,
        to: toEmail,
        replyTo: email,
        subject,
        text
      }),
      10000
    );

    return NextResponse.json({ok: true}, {status: 200});
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      {
        message: 'Email delivery failed',
        code: 'EMAIL_SEND_FAILED',
        detail: process.env.NODE_ENV === 'development' ? String(err?.message || err) : undefined
      },
      {status: 500}
    );
  }
}
