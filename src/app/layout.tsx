import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dental Brass Tacks | Premium Dental Clinic in Sector 48, Gurgaon",
    template: "%s | Dental Brass Tacks, Gurgaon",
  },
  description:
    "Dental Brass Tacks is Gurgaon's premier dental clinic in Sector 48, offering implants, orthodontics, pediatric dentistry, smile makeovers, and more. Book your appointment today.",
  keywords: [
    "dentist gurgaon",
    "dental clinic sector 48 gurgaon",
    "dental implants gurgaon",
    "orthodontist gurgaon",
    "pediatric dentist gurgaon",
    "teeth whitening gurgaon",
    "root canal gurgaon",
    "smile makeover gurgaon",
    "braces gurgaon",
    "best dentist gurgaon",
  ],
  authors: [{ name: "Dental Brass Tacks" }],
  creator: "Dental Brass Tacks",
  metadataBase: new URL("https://dentalbrassttacks.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dentalbrassttacks.com",
    siteName: "Dental Brass Tacks",
    title: "Dental Brass Tacks | Premium Dental Clinic in Gurgaon",
    description:
      "Expert dental care in Sector 48, Gurgaon. Implants, orthodontics, pediatric dentistry, smile makeovers and more.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Brass Tacks Clinic – Sector 48, Gurgaon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Brass Tacks | Premium Dental Clinic in Gurgaon",
    description:
      "Expert dental care in Sector 48, Gurgaon. Book your appointment today.",
    images: ["/images/og-image.jpg"],
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dental Brass Tacks",
  image: "https://dentalbrassttacks.com/images/clinic-front.jpg",
  url: "https://dentalbrassttacks.com",
  telephone: "+91-XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector 48",
    addressLocality: "Gurgaon",
    addressRegion: "Haryana",
    postalCode: "122018",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4089,
    longitude: 77.0422,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
