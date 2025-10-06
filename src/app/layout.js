import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { ContactModalProvider } from "../components/ContactModal";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Symi System — Operations Intelligence for Specialized Industries",
  description: "We build custom internal software that turns your workflow into a competitive advantage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-black`}>
        <ContactModalProvider>
          <div className="flex min-h-screen flex-col">
            <ScrollProgress />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <BackToTop />
          </div>
        </ContactModalProvider>
      </body>
    </html>
  );
}
