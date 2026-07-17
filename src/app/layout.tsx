import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://tpdsmart.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TPD Smart Systems | Industrial IoT Solutions",
    template: "%s | TPD Smart Systems",
  },
  description:
    "Soluciones tecnológicas para conectar, automatizar y administrar espacios físicos inteligentes. Smart Lockers, ESL, Access Control y plataforma IoT.",
  keywords: [
    "IoT",
    "Industrial IoT",
    "Smart Lockers",
    "lockers inteligentes",
    "ESL",
    "etiquetas electrónicas",
    "control de acceso",
    "automatización",
    "infraestructura inteligente",
    "TPD Smart Systems",
    "plataforma IoT",
    "smart building",
    "edificios inteligentes",
  ],
  authors: [{ name: "TPD Smart Systems" }],
  creator: "TPD Smart Systems",
  publisher: "TPD Smart Systems",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "TPD Smart Systems",
    title: "TPD Smart Systems | Industrial IoT Solutions",
    description:
      "Soluciones tecnológicas para conectar, automatizar y administrar espacios físicos inteligentes. Smart Lockers, ESL, Access Control y plataforma IoT.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TPD Smart Systems - Industrial IoT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TPD Smart Systems | Industrial IoT Solutions",
    description:
      "Soluciones tecnológicas para conectar, automatizar y administrar espacios físicos inteligentes. Smart Lockers, ESL, Access Control y plataforma IoT.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
