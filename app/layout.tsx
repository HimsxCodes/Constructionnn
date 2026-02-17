import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JB Engineering | Commercial & Residential Builders",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  description:
    "Expert construction services delivering excellence, reliability, and unmatched quality for over 25 years. Specializing in residential, commercial, and industrial construction projects.",
  keywords: [
    "construction",
    "building",
    "renovation",
    "contractor",
    "commercial construction",
    "residential building",
    "construction company",
    "general contractor",
    "construction services",
  ],
  authors: [{ name: "JB Engineering" }],
  openGraph: {
    title: "JB Engineering | Commercial & Residential Builders",
    description:
      "Expert construction services delivering excellence, reliability, and unmatched quality for over 25 years.",
    type: "website",
    locale: "en_US",
    siteName: "JB Engineering",
  },
  twitter: {
    card: "summary_large_image",
    title: "JB Engineering | Commercial & Residential Builders",
    description:
      "Expert construction services delivering excellence, reliability, and unmatched quality for over 25 years.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <SchemaMarkup />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
