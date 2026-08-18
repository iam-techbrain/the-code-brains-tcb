import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TCB — Industry-Specific Micro-SaaS Ecosystem",
  description:
    "One simple dashboard for inventory, invoices, student attendance & fee alerts. Purpose-built for Kirana, Retail Stores & Coaching Schools.",
  icons: {
    icon: "/tcb-logo.png",
    shortcut: "/tcb-logo.png",
    apple: "/tcb-logo.png",
  },
};

import VoiceAssistant from "@/components/VoiceAssistant";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        {children}
        <VoiceAssistant />
      </body>
    </html>
  );
}
