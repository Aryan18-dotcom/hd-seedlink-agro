import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./Components/SmoothScrolling";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "HD Seedlink Agro LLP | Cultivating Tomorrow, Connecting Growth",
    template: "%s | HD Seedlink Agro",
  },
  description: "HD Seedlink Agro LLP is a premier agricultural solution provider. We bridge traditional farming expertise with modern sustainable technology to cultivate growth, improve yields, and connect farmers to markets.",
  keywords: ["Agriculture", "Agrotech", "Seedlink", "Sustainable Farming", "Ahmedabad Agriculture", "HD Seedlink", "Crop Solutions"],
  authors: [{ name: "Aryan Chheda" }],
  creator: "Aryan Chheda",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hd-seedlink-agro.vercel.app", // Replace with your actual domain
    title: "HD Seedlink Agro LLP | Cultivating Tomorrow, Connecting Growth",
    description: "Bridging the gap between traditional farming and modern sustainable agricultural technology.",
    siteName: "HD Seedlink Agro",
    images: [
      {
        url: "/opengraph-image.png", // Ensure this exists in your 'public' folder
        width: 1200,
        height: 630,
        alt: "HD Seedlink Agro Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HD Seedlink Agro LLP | Cultivating Tomorrow, Connecting Growth",
    description: "Bridging the gap between traditional farming and modern sustainable agricultural technology.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" cz-shortcut-listen="true">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}