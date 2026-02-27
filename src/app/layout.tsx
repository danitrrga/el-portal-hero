import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "El Portal - The personal OS",
  description:
    "El Portal is the all-in-one productivity engine for teams and agents. Manage habits, track deep work cycles, and align your foundational goals in one beautifully crafted interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-gradient-to-br from-slate-950 via-black to-slate-950 text-slate-300 font-sans antialiased selection:bg-primary/30 selection:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
