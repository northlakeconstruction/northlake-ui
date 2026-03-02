import type { Metadata } from "next";
import { Oswald, Lato } from "next/font/google";
import localbusiness from "@/seo/metadata/localbusiness";
import { Header } from "@/components/layout/header"
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { sitemap } from "@/content/sitemap";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ['500']
})

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ['400'],
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
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
