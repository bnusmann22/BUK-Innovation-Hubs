import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TalentDiscoveryModal from "@/components/TalentDiscoveryModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BUK Innovation Hubs | Discover Innovation Opportunities",
  description:
    "The official digital gateway for the BUK innovation ecosystem. Discover hubs, join programs, register for events, and connect with innovators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f7f2] text-[#172018]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <TalentDiscoveryModal />
      </body>
    </html>
  );
}
