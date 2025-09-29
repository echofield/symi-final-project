import Link from "next/link";
import { ContactButton } from "./ContactModal";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-black bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-medium tracking-tight text-black flex items-center gap-2">
          <span className="text-[var(--forest-green)]">✦</span>
          <span>Symi System</span>
        </Link>
        <nav className="hidden items-center gap-8 text-base font-light text-black md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>
        <ContactButton>Contact Us</ContactButton>
      </div>
    </header>
  );
}
