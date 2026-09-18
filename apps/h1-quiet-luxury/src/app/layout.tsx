import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { ReserveBar } from "@/components/navigation/reserve-bar";
import { pageMeta } from "@/lib/seo";
import { site } from "@/data/site.config";
import { IMAGES } from "@/data/images";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = pageMeta({
  title: "Sthira — a quiet lakeside house in Udaipur",
  description: site.description,
  path: site.url,
  ogImage: IMAGES.hero.url,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${instrument.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-paper font-body text-ink antialiased">
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

