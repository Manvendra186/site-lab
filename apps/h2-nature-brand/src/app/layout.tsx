import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { ReserveBar } from "@/components/navigation/reserve-bar";
import { pageMeta } from "@/lib/seo";
import { site } from "@/data/site.config";
import { IMAGES } from "@/data/images";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = pageMeta({
  title: "Understory — a forest lodge in the Coorg understory",
  description: site.description,
  path: site.url,
  ogImage: IMAGES.hero.url,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable}`}>
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
