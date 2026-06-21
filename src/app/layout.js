import { Plus_Jakarta_Sans, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Hydraulic Pump Repair Services in Delhi NCR | Indian Hydraulic Works",
    template: "%s | Indian Hydraulic Works"
  },
  description: "Fast, reliable hydraulic pump repair with emergency service in Faridabad & Delhi NCR. Expert maintenance for motors, valves, and industrial cylinders.",
  keywords: ["hydraulic pump repair", "emergency hydraulic pump repair", "hydraulic pump service", "pump repair near Delhi", "industrial pump repair", "hydraulic system maintenance", "hydraulic cylinders Faridabad", "Rexroth pump repair"],
  authors: [{ name: "Indian Hydraulic Works" }],
  creator: "Indian Hydraulic Works",
  publisher: "Indian Hydraulic Works",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Indian Hydraulic Works — Precision Hydraulic Solutions",
    description: "45+ years of expertise in repairing and manufacturing hydraulic pumps, motors, valves, cylinders, and power packs in Faridabad.",
    url: "https://indianhydraulicworks.com", // You should update this to actual domain later
    siteName: "Indian Hydraulic Works",
    images: [
      {
        url: "/images/og-image.webp", // Ensure an og-image exists in public folder later
        width: 1200,
        height: 630,
        alt: "Indian Hydraulic Works Facility and Products",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Hydraulic Works",
    description: "Expert repair and manufacturing of hydraulic systems.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/lib/ThemeContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Indian Hydraulic Works",
    "image": "https://indianhydraulicworks.com/images/og-image.webp",
    "description": "Fast, reliable hydraulic pump repair with emergency service in Faridabad & Delhi NCR.",
    "url": "https://indianhydraulicworks.com",
    "telephone": "+91-9873320999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 10, New A - 73, Kapra Colony, Behind Aggarwal Dhramshala, Air Force Road, NIT Jawahar Colony",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "postalCode": "121005",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.3842, 
      "longitude": 77.3005 
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "priceRange": "$$"
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${ibmPlexSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {/* Subtle global vignette for depth (high performance) */}
        <div className="fixed inset-0 pointer-events-none z-[9999] shadow-[inset_0_0_100px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_150px_rgba(0,0,0,0.4)] transition-shadow duration-500" />
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
