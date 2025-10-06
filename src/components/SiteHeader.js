import Link from "next/link";
import { ContactButton } from "./ContactModal";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "next-intl";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const locale = useLocale?.() || 'fr';
  return (
    <header className="sticky top-0 z-20 border-b border-black bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href={`/${locale}`} className="text-lg font-medium tracking-tight text-black flex items-center gap-2">
          <span className="text-[var(--forest-green)]">✦</span>
          <span>Symi System</span>
        </Link>
        <nav className="hidden items-center gap-8 text-base font-light text-black md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`} className="transition hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale === 'en' ? 'en' : 'fr'} />
          <ContactButton>Schedule 15-Min Demo</ContactButton>
        </div>
      </div>
    </header>
  );
}
