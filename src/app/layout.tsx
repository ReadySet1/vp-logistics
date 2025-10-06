import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { Analytics } from "@/components/analytics"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vp-logistics.vercel.app'),
  title: {
    default: "VP Logistics - Professional Last-Mile Delivery Solutions",
    template: "%s | VP Logistics",
  },
  description:
    "Leading logistics partner specializing in efficient package delivery, driver management, and comprehensive supply chain solutions. VP Logistics ensures reliable, on-time delivery with advanced tracking and professional service.",
  keywords: [
    "logistics",
    "package delivery",
    "last-mile delivery",
    "driver dispatch",
    "supply chain",
    "route optimization",
    "delivery tracking",
    "professional logistics",
    "24/7 support",
    "quality assurance",
  ],
  authors: [{ name: "VP Logistics" }],
  creator: "VP Logistics",
  publisher: "VP Logistics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "VP Logistics - Professional Last-Mile Delivery Solutions",
    description:
      "Leading logistics partner specializing in efficient package delivery, driver management, and comprehensive supply chain solutions with 99.8% on-time delivery.",
    siteName: "VP Logistics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VP Logistics - Professional Last-Mile Delivery Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VP Logistics - Professional Last-Mile Delivery Solutions",
    description:
      "Leading logistics partner specializing in efficient package delivery with 99.8% on-time delivery and 24/7 support.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VP Logistics",
    description:
      "Professional last-mile delivery solutions with reliable, on-time service and advanced tracking.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://vp-logistics.vercel.app",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://vp-logistics.vercel.app"}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "05:00",
        closes: "18:00",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "500",
    },
    sameAs: [],
  }

  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
