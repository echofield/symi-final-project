Symi System Website

Production repo: `https://github.com/echofield/symi-final-project.git`

Environment Variables
Create a `.env.local` (or set on your host) with:

```
# SMTP for contact form submissions
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=

# Optional: Next.js runtime
NODE_ENV=production
```

Notes:
- If your provider requires SSL, set `SMTP_PORT=465`.
- Emails are sent to `contact@symi.io` and `replyTo` is the submitter email.

Development
```
npm install
npm run dev
```

Deploy
Set the env vars above in your hosting provider (e.g. Vercel Project Settings → Environment Variables), then build:

```
npm run build
npm start
```


