import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localbusiness from "@/seo/metadata/localbusiness";
import { Header } from "@/components/layout/header"
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { sitemap } from "@/content/sitemap";

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
        <body className="min-h-screen flex flex-col">
          <Header categories={sitemap}/>
          <main className="flex-1 container mx-auto">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
