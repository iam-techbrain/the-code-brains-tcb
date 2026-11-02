import process from "node:process";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import VoiceAssistant from "@/components/VoiceAssistant";
import { LeadModalProvider } from "@/components/LeadModalContext";
import { GlobalCountryProvider } from "@/components/GlobalCountryContext";
import JsonLd from "@/components/JsonLd";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/jsonLd";

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
  verification: {
    google: "google057814141de1481f",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden w-full max-w-full">
        {/* Google & AI Agent Global Structured Data (JSON-LD) */}
        <JsonLd data={getOrganizationJsonLd()} />
        <JsonLd data={getWebSiteJsonLd()} />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5H4DMF2K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5H4DMF2K');
          `}
        </Script>

        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NPN6HTC9J1"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NPN6HTC9J1');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "z4qc6i9s5b");
          `}
        </Script>
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
