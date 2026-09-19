import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { jsonLd } from "@site-lab/shared";
import "./globals.css";
import { site } from "@/data/site.config";
import { lodgingSchema } from "@/lib/seo";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — a five-stay house on the Leh road`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    title: `${site.name} — a five-stay house on the Leh road`,
    description: site.description,
    url: site.url,
    type: "website",
    images: [{ url: site.image! }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — a five-stay house on the Leh road`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${unbounded.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-ice text-slate antialiased">
        {jsonLd(lodgingSchema())}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}