import type { Metadata } from "next";
import { Playfair_Display, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taqueria Azteca",
  description: "Authentic Mexican food — tacos, burritos, quesadillas, and more.",
  openGraph: {
    title: "Taqueria Azteca",
    description: "Authentic Mexican food — tacos, burritos, quesadillas, and more.",
    images: [{ url: "/thumb2.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taqueria Azteca",
    description: "Authentic Mexican food — tacos, burritos, quesadillas, and more.",
    images: ["/thumb2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${bebas.variable} bg-black text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
