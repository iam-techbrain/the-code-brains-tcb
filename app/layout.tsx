import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import VoiceAssistant from "@/components/VoiceAssistant";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TCB — Custom AI Agents, Workflow Automation & Multi-SaaS Studio",
  description:
    "We design, build, and deploy autonomous AI agents, n8n & Make automation pipelines, and specialized AI-driven SaaS solutions.",
  icons: {
    icon: "/tcb-logo.png",
    shortcut: "/tcb-logo.png",
    apple: "/tcb-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <VoiceAssistant />
      </body>
    </html>
  );
}
