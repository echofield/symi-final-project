import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: "SYMI",
  description: "Systèmes d’analyse décisionnelle pour environnements industriels et réglementés."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen bg-white text-black`}>{children}</body>
    </html>
  );
}
