import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Nagaraj - Backend Developer Portfolio",
  description: "Backend developer crafting reliable, scalable solutions for ambitious products. Specializing in microservices, cloud-native deployments, and performance optimization.",
  keywords: ["backend developer", "microservices", "cloud native", "API development", "scaleable architecture"],
  authors: [{ name: "Nagaraj" }],
  creator: "Nagaraj",
  metadataBase: new URL("https://nagarajneelam.me"),
  openGraph: {
    title: "Nagaraj - Backend Developer Portfolio",
    description: "Backend developer crafting reliable, scalable solutions for ambitious products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagaraj - Backend Developer Portfolio",
    description: "Backend developer crafting reliable, scalable solutions for ambitious products.",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}