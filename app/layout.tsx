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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thecodebrains.com"),
  title: {
    default: "TCB — Custom AI Agents & Intelligent Workflow Automation Studio",
    template: "%s | TCB AI Studio",
  },
  description:
    "Your Business. Your Challenges. Our AI Agents. We design and deploy custom autonomous AI agents, 24/7 RAG chatbots, voice callers, and enterprise workflow automations built around the way your business actually works.",
  keywords: [
    "AI Agents",
    "Custom AI Solutions",
    "Workflow Automation",
    "Autonomous AI Agents",
    "AI Voice Calling Agent",
    "RAG Chatbot",
    "n8n Automation",
    "Make Automation",
    "Enterprise AI Studio",
    "Python AI Engineering",
    "TCB",
    "The Code Brains",
    "Autonomous Sales Agent",
    "AI Document Automation",
    "Business Process Automation",
    "LangChain",
    "OpenAI GPT-4o",
  ],
  authors: [{ name: "The Code Brains (TCB)" }],
  creator: "The Code Brains",
  publisher: "The Code Brains",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://thecodebrains.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thecodebrains.com",
    siteName: "The Code Brains (TCB)",
    title: "TCB — Your Business. Your Challenges. Our AI Agents.",
    description:
      "We design and deploy custom autonomous AI agents and intelligent workflow automations built around how your business actually works. Automate today, scale tomorrow.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 675,
        alt: "TCB AI Studio — Your Business. Your Challenges. Our AI Agents.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TCB — Custom AI Agents & Intelligent Workflow Automation",
    description:
      "Your Business. Your Challenges. Our AI Agents. Automate today, scale tomorrow with custom autonomous AI agents & workflow pipelines.",
    creator: "@thecodebrains",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/tcb-logo.png",
    shortcut: "/tcb-logo.png",
    apple: "/tcb-logo.png",
  },
};

import { LeadModalProvider } from "@/components/LeadModalContext";
import { GlobalCountryProvider } from "@/components/GlobalCountryContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden w-full max-w-full">
        <GlobalCountryProvider>
          <LeadModalProvider>
            {children}
            <VoiceAssistant />
          </LeadModalProvider>
        </GlobalCountryProvider>
      </body>
    </html>
  );
}
