import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import MobileStickyCta from "@/components/MobileStickyCta";
import JsonLd from "@/components/JsonLd";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Traitement Nano Toiture | Protection Bardeaux | Toitures Vitalis",
    template: "%s | Toitures Vitalis",
  },
  description:
    "Prolongez la vie de votre toiture de 10 à 15 ans à une fraction du coût d'un remplacement. Application en 1 jour. Inspection gratuite. Grand Montréal.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: site.url,
    siteName: site.name,
    title: "Traitement Nano Toiture | Protection Bardeaux | Toitures Vitalis",
    description:
      "Prolongez la vie de votre toiture de 10 à 15 ans à une fraction du coût d'un remplacement. Application en 1 jour. Inspection gratuite. Grand Montréal.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Technicien Toitures Vitalis appliquant le traitement nano sur une toiture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Traitement Nano Toiture | Protection Bardeaux | Toitures Vitalis",
    description:
      "Prolongez la vie de votre toiture de 10 à 15 ans à une fraction du coût d'un remplacement. Inspection gratuite au Grand Montréal.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr-CA"
      className={`${archivoBlack.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <AnnouncementBar />
        <SiteNav />
        {children}
        <SiteFooter />
        <MobileStickyCta />
        <JsonLd />
      </body>
    </html>
  );
}
