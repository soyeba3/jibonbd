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

export const metadata: Metadata = {
  title: {
    default: "JibonBD - Premium Quality Food Products Online",
    template: "%s | JibonBD",
  },
  description:
    "Order premium quality food products online. JibonBD offers fresh spices, powders, and groceries delivered to your doorstep. Call or WhatsApp: +8801885517676",
  keywords: [
    "JibonBD",
    "online grocery",
    "food products",
    "spices",
    "Bangladesh",
    "grocery delivery",
    "premium food",
    "online shopping",
  ],
  authors: [{ name: "JibonBD" }],
  creator: "JibonBD",
  publisher: "JibonBD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://jibonbd.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "/",
    siteName: "JibonBD",
    title: "JibonBD - Premium Quality Food Products Online",
    description:
      "Order premium quality food products online. JibonBD offers fresh spices, powders, and groceries delivered to your doorstep.",
    images: [
      {
        url: "/assets/images/logo/jibon-logo.png",
        width: 1200,
        height: 630,
        alt: "JibonBD Logo",
      },
    ],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
