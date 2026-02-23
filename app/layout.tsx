import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localbusiness from "@/seo/metadata/localbusiness";
import { Header } from "@/components/header"
import "./globals.css";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Northlake Construction",
  description: "Paving Contractor in Chicago",
  robots: 'index, follow'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localbusiness)}}
        />
      </head>
      <html lang="en">
        
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header categories={{ services: [], "featured projects": [], about: []}}/>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
