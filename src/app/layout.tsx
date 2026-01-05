import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shelfie",
    template: "%s · Shelfie",
  },
  description:
    "Discover books, explore authors, and curate your personal favourites shelf with Shelfie.",
  applicationName: "Shelfie",
  keywords: [
    "books",
    "book search",
    "open library",
    "reading",
    "book discovery",
    "favourites",
    "personal library",
  ],
  authors: [{ name: "Shelfie" }],
  creator: "Shelfie",
  publisher: "Shelfie",
  metadataBase: new URL("https://shelfie-jade.vercel.app"), // change if needed
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shelfie-jade.vercel.app",
    title: "Shelfie — Your personal book shelf",
    description:
      "Search books, explore authors, and save your favourites in one beautifully simple place.",
    siteName: "Shelfie",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shelfie book discovery app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelfie — Your personal book shelf",
    description:
      "Discover books and build your personal favourites shelf.",
    images: ["/og-image.png"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
