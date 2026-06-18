import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/business";
import { autoRepairJsonLd, SITE_URL } from "@/lib/jsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["600", "700", "800"],
});

const description = `${business.tagline}. ${business.intro} Smog checks, brakes, diagnostics, and maintenance at ${business.address.street} in ${business.address.city}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} — ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description,
  keywords: [
    "auto repair Cupertino",
    "smog check Cupertino",
    "brake repair",
    "oil change",
    "check engine diagnostics",
    "Tesla and EV service",
    business.name,
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: business.name,
    title: `${business.name} — ${business.tagline}`,
    description,
    url: SITE_URL,
    images: [
      {
        // TODO: swap for a higher-res landscape shot (1200x630) for cleaner link previews.
        url: "/images/storefront.jpg",
        width: 348,
        height: 348,
        alt: `Inside the service bay at ${business.name}`,
      },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#14161b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = autoRepairJsonLd();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          // JSON-LD: escape "<" to avoid any HTML injection via the payload.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
