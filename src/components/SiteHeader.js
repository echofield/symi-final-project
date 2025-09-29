import Link from "next/link";
import Button from "./Button";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--black)",
        backgroundColor: "var(--white)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "24px",
          paddingBottom: "24px",
        }}
      >
        <Link href="/" style={{ fontSize: "18px", fontWeight: 500 }}>
          Symi System
        </Link>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            fontSize: "16px",
            fontWeight: 300,
          }}
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Button as="a" href="mailto:contact@symi.io?subject=Project%20Consultation">
          Contact Us
        </Button>
      </div>
    </header>
  );
}
