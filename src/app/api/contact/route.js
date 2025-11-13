import nodemailer from 'nodemailer';

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const submissions = new Map();

function sanitizeSingleLine(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u001F\u007F]/g, '').trim();
}

function sanitizeMultiline(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim();
}

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    const rateRecord = submissions.get(ip) || { count: 0, start: now };

    if (now - rateRecord.start > RATE_LIMIT_WINDOW_MS) {
      rateRecord.count = 0;
      rateRecord.start = now;
    }

    if (rateRecord.count >= RATE_LIMIT_MAX_REQUESTS) {
      return new Response(JSON.stringify({ message: 'Rate limit exceeded' }), { status: 429 });
    }

    rateRecord.count += 1;
    submissions.set(ip, rateRecord);

    const payload = await request.json();
    const name = sanitizeSingleLine(payload?.name);
    const email = sanitizeSingleLine(payload?.email).toLowerCase();
    const company = sanitizeSingleLine(payload?.company);
    const projectType = sanitizeSingleLine(payload?.projectType);
    const message = sanitizeMultiline(payload?.message);

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ message: 'Invalid email address' }), { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_TO_EMAIL || 'contact@symi.io';

    if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
      return new Response(JSON.stringify({ message: 'Email not configured' }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const subject = `New Consultation Request — ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company || '—'}\nProject Type: ${projectType || 'Not specified'}\n\nMessage:\n${message}`;

    await transporter.sendMail({
      from: `Symi System <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
  }
}


