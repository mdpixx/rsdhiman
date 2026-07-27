import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const siteUrl = "https://www.rsconsultants.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RS Consultants & E Solutions | Government & Private Tender Consultancy",
    template: "%s | RS Consultants & E Solutions",
  },
  description:
    "Your trusted partner in Government & Private tender consultancy. Complete e-tendering, GeM portal, bid management, and procurement solutions to help businesses across India win contracts.",
  keywords: [
    "e-tendering",
    "tender consultancy",
    "GeM portal",
    "Government tenders",
    "bid management",
    "procurement",
    "vendor registration",
    "DSC support",
    "Chandigarh",
    "Mohali",
    "Panchkula",
  ],
  authors: [{ name: "RS Consultants & E Solutions" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "RS Consultants & E Solutions | Government & Private Tender Consultancy",
    description:
      "Turning opportunities into successful contracts. Complete e-tendering & procurement solutions across India.",
    siteName: "RS Consultants & E Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "RS Consultants & E Solutions",
    description:
      "Your trusted partner in Government & Private tender consultancy.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
