"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher({locale}: {locale: "fr" | "en"}) {
  const pathname = usePathname() || `/${locale}`;
  const alt = locale === "fr" ? "en" : "fr";
  const altPath = pathname.startsWith(`/${locale}`) ? pathname.replace(`/${locale}`, `/${alt}`) : `/${alt}`;

  const persistLocale = () => {
    document.cookie = `NEXT_LOCALE=${alt}; Path=/; Max-Age=31536000; SameSite=Lax`;
    localStorage.setItem("NEXT_LOCALE", alt);
  };

  return (
    <Link href={altPath} className="text-sm underline" onClick={persistLocale}>
      {alt.toUpperCase()}
    </Link>
  );
}
