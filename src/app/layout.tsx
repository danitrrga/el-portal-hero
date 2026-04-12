import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Portal - Your Personal Operating System",
  description:
    "Portal is a mobile-first personal operating system. Manage habits with drag-and-drop, track deep work cycles, and align your goals with elegant simplicity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} bg-cream text-charcoal font-sans antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
