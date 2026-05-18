import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SafeCheck — Never go unnoticed.",
  description:
    "A simple daily safety check-in. If you don't check in, we alert your emergency contacts.",
  openGraph: {
    title: "SafeCheck — Daily Safety Check-in for Solo Living",
    description:
      "One click a day keeps worry away. Free for basic protection.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}
