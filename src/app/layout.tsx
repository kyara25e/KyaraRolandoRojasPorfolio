import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://kyara-maite-rolando-rojas-porfolio.vercel.app/"
  ),
  title: "Kyara Rojas Portfolio",
  description: "Portfolio personal de Kyara Rojas",
  openGraph: {
    title: "Kyara Rojas | Frontend Developer",
    description: "Explore my projects, skills and experience in frontend development.",
    url: "https://kyara-maite-rolando-rojas-porfolio.vercel.app/",
    siteName: "kyara Rojas  Portfolio",
    images: [
      {
        url: "/KyaraRojasPortfolio.png",
        width: 1200,
        height: 630,
        alt: "Kyara Rojas - Frontend Developer Portfolio",
      },
    ],
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <body className="min-h-screen bg-[#070707] text-white overflow-x-hidden">
      <LanguageProvider>
        <div className="flex min-h-screen flex-col bg-[#070707]">
          <Navbar />
          <main className="flex-1 pt-36 md:pt-24">
          {children}</main>
          <Footer />
        </div>
      </LanguageProvider>
    </body>
    </html>
  );
}
