import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Sitemap & Architecture Index | TCB AI Studio",
  description:
    "Complete structural directory and index of TCB autonomous AI agents, enterprise workflow automation architectures, voice telephony runtimes, RAG vaults, and engineering playbooks.",
  alternates: {
    canonical: "https://thecodebrains.com/sitemap",
  },
  openGraph: {
    title: "TCB Sitemap & AI Systems Directory",
    description:
      "Explore all available autonomous AI solutions, production workflows, engineering blueprints, and system documentation.",
    url: "https://thecodebrains.com/sitemap",
  },
};

export default function SitemapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
