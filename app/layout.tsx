import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, IBM_Plex_Serif } from "next/font/google";


const inter = Inter({subsets : ["latin"], variable : '--font-inter'});
const ibmplexserif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400' , '700'],
  variable: '--font-ibm-plex-serif'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LUTERA",
  description: "LUTERA IA A MODERN BANKING PLATFORM FOR EVERYONE",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmplexserif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
