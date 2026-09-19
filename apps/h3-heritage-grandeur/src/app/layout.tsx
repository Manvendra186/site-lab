import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Marcellus, Karla } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { ReserveBar } from "@/components/navigation/reserve-bar";
import { pageMeta } from "@/lib/seo";
import { site } from "@/data/site.config";
import { IMAGES } from "@/data/images";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = pageMeta({
  title: "The Alkari — a haveli inside the Jaisalmer fort",
  description: site.description,
  path: site.url,
  ogImage: IMAGES.hero.url,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${karla.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-ivory font-body text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ReserveBar />
      </body>
    </html>
  );
}
