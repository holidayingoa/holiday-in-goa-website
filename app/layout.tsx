import type { Metadata, Viewport } from "next";
import { Sora, Inter, Kaushan_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/data";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  variable: "--font-kaushan",
  display: "swap",
  weight: "400",
});

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.name,
  url: site.url,
  image: `${site.url}/logo.png`,
  logo: `${site.url}/logo.png`,
  description:
    "Curated Goa tours, cruises, scuba diving, water sports, Dudhsagar trips, sightseeing and holiday packages with instant WhatsApp confirmation.",
  email: site.email,
  telephone: site.phone,
  areaServed: "Goa, India",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goa",
    addressRegion: "GA",
    addressCountry: "IN",
  },
  sameAs: [site.whatsappUrl],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Holiday in Goa Tour & Travels — Cruises, Scuba, Tours & Packages",
  description:
    "Book Goa's best cruises, scuba diving, water sports, Dudhsagar trips, sightseeing and holiday packages with Holiday in Goa Tour & Travels. Instant WhatsApp confirmation, free cancellation and secure payments.",
  keywords: [
    "Holiday in Goa",
    "Goa tours",
    "Goa cruises",
    "scuba diving Goa",
    "Dudhsagar waterfall tour",
    "water sports Goa",
    "Goa sightseeing",
    "Goa tour packages",
  ],
  openGraph: {
    title: "Holiday in Goa Tour & Travels",
    description:
      "Curated Goa experiences with instant confirmation and secure payments.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#10897b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${kaushan.variable}`}
    >
      <body>
        <JsonLd data={organizationLd} />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
