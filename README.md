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
- Recipient is configured via `CONTACT_TO_EMAIL` and shown in UI via `NEXT_PUBLIC_CONTACT_TO`.

Development
```
npm install
npm run dev
```

### i18n (next-intl)

- Locales: `fr` (default), `en`.
- Middleware in `middleware.ts` prefixes routes with locale (`/fr`, `/en`).
- Messages: `src/messages/<locale>/common.json`.
- Locale layout: `src/app/[locale]/layout.tsx`.

Add a new translation key:
1) Update both `fr/en` JSON files. 2) Use with `useTranslations()`.

Localized pages live under `src/app/[locale]/...`.

Deploy
Set the env vars above in your hosting provider (e.g. Vercel Project Settings → Environment Variables), then build:

```
npm run build
npm start
```


