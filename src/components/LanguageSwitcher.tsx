"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher({ locale }: { locale: "fr" | "en" }) {
  const pathname = usePathname();
  const alt = locale === "fr" ? "en" : "fr";
  const altPath = pathname?.startsWith(`/${locale}`)
    ? pathname.replace(`/${locale}`, `/${alt}`)
    : `/${alt}`;
  return (
    <Link href={altPath} className="text-sm underline">
      {alt.toUpperCase()}
    </Link>
  );
}


