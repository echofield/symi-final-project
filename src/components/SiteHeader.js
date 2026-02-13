import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { key: "nav.audit", href: "audit-industriel" },
  { key: "nav.evidence", href: "evidence-pack" },
  { key: "nav.monitoring", href: "monitoring" },
  { key: "nav.services", href: "services" },
  { key: "nav.cases", href: "case-studies" },
  { key: "nav.process", href: "process" },
  { key: "nav.contact", href: "contact" }
];

export default function SiteHeader() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-20 border-b border-black bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
        <Link href={`/${locale}`} className="text-lg font-medium tracking-tight text-black flex items-center gap-2">
          <span className="text-[var(--forest-green)]">*</span>
          <span>{t("brand.name")}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-light text-black md:flex">
          {navItems.map((item) => (
            <Link key={item.key} href={`/${locale}/${item.href}`} className="transition hover:opacity-80">
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
      <nav className="md:hidden border-t border-black">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="flex gap-4 overflow-x-auto whitespace-nowrap text-sm font-light text-black">
            {navItems.map((item) => (
              <Link key={`mobile-${item.key}`} href={`/${locale}/${item.href}`} className="transition hover:opacity-80">
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
