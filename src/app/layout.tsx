import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vicky — Backend Engineer & AI Product Builder",
  description:
    "BTech CSE student building production-grade Java/Spring Boot backends and AI-powered products. Open for internships and freelance.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vicky — Backend Engineer & AI Product Builder",
    description: "Production-grade backends. AI products that ship. Available for internships.",
    url: "https://vicky.dev",
    siteName: "Vicky's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Vicky — Backend Engineer & AI Product Builder",
    description: "Production-grade backends. AI products that ship.",
  },
  metadataBase: new URL("https://vicky.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
