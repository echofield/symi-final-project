import Link from "next/link";
import {useLocale} from "next-intl";

export default function SiteFooter() {
  const locale = useLocale();
  const toEmail = process.env.NEXT_PUBLIC_CONTACT_TO || "contact@example.com";

  return (
    <footer className="border-t border-black bg-white">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-black">
        <div className="mb-4 rounded-none border border-black bg-white p-4">
          <p>
            {locale === "fr"
              ? "Systèmes basés sur des sources publiques vérifiables, traçabilité documentaire et conformité RGPD."
              : "Systems based on verifiable public sources, documentation traceability, and GDPR compliance."}
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-black sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-black">© 2026 SYMI — {locale === "fr" ? "Tous droits réservés" : "All rights reserved"}</p>
          <p className="max-w-xl leading-relaxed">
            Contact: <a href={`mailto:${toEmail}`} className="underline">{toEmail}</a>
          </p>
        </div>
        <nav className="flex items-center gap-4">
          <Link href={`/${locale}/legal/privacy`} className="hover:opacity-80">{locale === "fr" ? "Confidentialité" : "Privacy"}</Link>
          <span>|</span>
          <Link href={`/${locale}/legal/terms`} className="hover:opacity-80">{locale === "fr" ? "Conditions" : "Terms"}</Link>
        </nav>
      </div>
    </footer>
  );
}
