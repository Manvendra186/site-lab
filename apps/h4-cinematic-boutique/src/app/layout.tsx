import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { ReserveBar } from "@/components/navigation/reserve-bar";
import { pageMeta } from "@/lib/seo";
import { site } from "@/data/site.config";
import { IMAGES } from "@/data/images";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = pageMeta({
  title: "Nocturne — a boutique hotel in Mumbai's old film district",
  description: site.description,
  path: site.url,
  ogImage: IMAGES.hero.url,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${grotesk.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-charcoal font-sans text-silver antialiased">
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
