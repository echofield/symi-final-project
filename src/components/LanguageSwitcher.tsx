"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher({locale}: {locale: "fr" | "en"}) {
  const pathname = usePathname() || `/${locale}`;
  const toPath = (target: "fr" | "en") =>
    pathname.startsWith(`/${locale}`) ? pathname.replace(`/${locale}`, `/${target}`) : `/${target}`;

  const persistLocale = (target: "fr" | "en") => {
    document.cookie = `NEXT_LOCALE=${target}; Path=/; Max-Age=31536000; SameSite=Lax`;
    localStorage.setItem("NEXT_LOCALE", target);
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <Link
        href={toPath("fr")}
        className={locale === "fr" ? "underline font-medium" : "opacity-70 hover:opacity-100"}
        onClick={() => persistLocale("fr")}
      >
        FR
      </Link>
      <span>/</span>
      <Link
        href={toPath("en")}
        className={locale === "en" ? "underline font-medium" : "opacity-70 hover:opacity-100"}
        onClick={() => persistLocale("en")}
      >
        EN
      </Link>
    </div>
  );
}
