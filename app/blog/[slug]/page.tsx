"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Clock,
  Calendar,
  ChevronRight,
  ArrowRight,
  Share2,
  Check,
  Copy,
  BookOpen,
  Sparkles,
  Zap,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Linkedin,
  Twitter,
} from "lucide-react";
import WorldwideClientsBanner from "@/components/WorldwideClientsBanner";
import EcosystemHeader from "@/components/EcosystemHeader";
import Footer from "@/components/Footer";
import DemoFloatWidget from "@/components/DemoFloatWidget";
import { useLeadModal } from "@/components/LeadModalContext";
import JsonLd from "@/components/JsonLd";
import { getBlogPostJsonLd } from "@/lib/jsonLd";
import { BLOG_POSTS } from "@/data/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { openLeadModal } = useLeadModal();
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState<string>(
    post.tableOfContents[0]?.id || ""
  );

  // Scroll reading progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - globalThis.innerHeight;
      if (totalHeight > 0) {
        const progress = (globalThis.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // Track active heading for Table of Contents
      for (const item of post.tableOfContents) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 0) {
            setActiveHeading(item.id);
            break;
          }
        }
      }
    };

    globalThis.addEventListener("scroll", handleScroll, { passive: true });
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, [post.tableOfContents]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  const copyShareLink = () => {
    if (typeof document !== "undefined") {
      navigator.clipboard.writeText(globalThis.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Related posts lookup
  const relatedPosts = BLOG_POSTS.filter((p) =>
    post.relatedSlugs.includes(p.slug)
  ).slice(0, 2);

  return (
    <main className="min-h-screen overflow-x-hidden w-full max-w-full bg-white text-slate-900 antialiased selection:bg-[#305eff] selection:text-white">
      <JsonLd data={getBlogPostJsonLd(post)} />
      {/* Real-Time Scroll Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#305eff] to-[#1f47e0] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Global Banners & Navigation */}
      <WorldwideClientsBanner />
      <EcosystemHeader />

      {/* Article Header & Breadcrumbs */}
      <header className="relative bg-slate-50/60 px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 lg:px-8 border-b border-slate-200/80">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-[#305eff] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-[#305eff] transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-slate-400 truncate max-w-[240px] sm:max-w-none">
              {post.category}
            </span>
          </div>

          {/* Meta Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="rounded-full bg-blue-50 border border-blue-200/90 px-3.5 py-1 text-xs font-bold text-[#305eff]">
              {post.category}
            </span>
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {post.publishDate}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18] font-display">
            {post.title}
          </h1>

          {/* Excerpt Lead */}
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            {post.excerpt}
          </p>

          {/* Author & Share Row */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`h-11 w-11 rounded-full ${post.author.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-xs`}
              >
                {post.author.avatarInitials}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  {post.author.name}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {post.author.role}
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyShareLink}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-[#305eff] hover:text-[#305eff] shadow-2xs transition-colors cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-3.5 w-3.5" />
                    <span>Share</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  globalThis.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      post.title
                    )}&url=${encodeURIComponent(
                      typeof document !== "undefined" ? globalThis.location.href : ""
                    )}`,
                    "_blank"
                  );
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#305eff] hover:border-[#305eff] shadow-2xs transition-colors cursor-pointer"
                title="Share on X / Twitter"
              >
                <Twitter className="h-3.5 w-3.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  globalThis.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      typeof document !== "undefined" ? globalThis.location.href : ""
                    )}`,
                    "_blank"
                  );
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#305eff] hover:border-[#305eff] shadow-2xs transition-colors cursor-pointer"
                title="Share on LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout with Sticky Sidebar */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Executive Summary / Key Takeaways Box */}
          <div className="mb-12 rounded-3xl border border-blue-200/90 bg-blue-50/50 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#305eff] mb-3">
              <Zap className="h-4 w-4 text-[#305eff]" />
              <span>Executive Summary &amp; Key Architectural Takeaways</span>
            </div>
            <div className="space-y-3">
              {post.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left Main Article Column */}
            <article className="lg:col-span-8 text-slate-800 leading-relaxed text-sm sm:text-base space-y-8">
              {/* Introduction */}
              <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal border-l-4 border-[#305eff] pl-4 italic">
                {post.content.introduction}
              </p>

              {/* Sections */}
              {post.content.sections.map((section) => (
                <div key={section.id} id={section.id} className="pt-4 scroll-mt-24 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 font-display">
                    {section.title}
                  </h2>

                  {section.body.map((para, pIdx) => (
                    <p key={pIdx} className="text-slate-600 leading-relaxed">
                      {para}
                    </p>
                  ))}

                  {/* Optional Callout Alert */}
                  {section.callout && (
                    <div
                      className={`my-6 rounded-2xl p-4 sm:p-5 border ${
                        section.callout.type === "metric"
                          ? "bg-slate-900 text-white border-slate-800"
                          : section.callout.type === "tip"
                          ? "bg-emerald-50 text-emerald-950 border-emerald-200"
                          : "bg-amber-50 text-amber-950 border-amber-200"
                      }`}
                    >
                      <div className="text-xs font-mono font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-[#305eff]" />
                        <span>{section.callout.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-mono opacity-90 leading-relaxed">
                        {section.callout.text}
                      </p>
                    </div>
                  )}

                  {/* Optional Code Snippet */}
                  {section.codeSnippet && (
                    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-200 shadow-lg">
                      {/* Code Header */}
                      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5 bg-slate-900/90 text-xs font-mono">
                        <span className="text-slate-400">{section.codeSnippet.filename}</span>
                        <button
                          type="button"
                          onClick={() =>
                            copyToClipboard(section.codeSnippet!.code, section.id)
                          }
                          className="inline-flex items-center gap-1.5 rounded bg-slate-800 hover:bg-slate-700 px-2.5 py-1 text-[11px] font-bold text-slate-300 transition-colors cursor-pointer"
                        >
                          {copiedCodeId === section.id ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      {/* Code Body */}
                      <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-slate-300">
                        <pre>
                          <code>{section.codeSnippet.code}</code>
                        </pre>
                      </div>
                    </div>
                  )}

                  {/* Optional Topology Diagram */}
                  {section.diagram && (
                    <div className="my-6 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-5">
                      <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-[#305eff]" />
                        <span>{section.diagram.title}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 overflow-x-auto py-2">
                        {section.diagram.nodes.map((node, nIdx) => (
                          <div key={nIdx} className="flex items-center gap-2">
                            <div
                              className={`rounded-xl border p-3 text-center min-w-[120px] shadow-2xs ${
                                node.highlight
                                  ? "bg-blue-50/90 border-blue-200 text-[#305eff]"
                                  : "bg-white border-slate-200 text-slate-800"
                              }`}
                            >
                              <div className="text-xs font-bold font-mono">{node.label}</div>
                              <div className="text-[10px] text-slate-500 font-semibold mt-0.5">
                                {node.sub}
                              </div>
                            </div>
                            {nIdx < section.diagram!.nodes.length - 1 && (
                              <span className="text-[#305eff] font-bold hidden sm:inline">
                                ➔
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div className="pt-6 border-t border-slate-200/80">
                <h3 className="text-lg font-bold text-slate-900 font-display mb-3">
                  Summary &amp; Engineering Outlook
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {post.content.conclusion}
                </p>
              </div>

              {/* Tags List */}
              <div className="pt-4 flex flex-wrap gap-2">
                {post.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-mono font-medium text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Right Sticky Sidebar (TOC, Author, Lead CTA) */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents Box */}
                <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-100">
                    <BookOpen className="h-4 w-4 text-[#305eff]" />
                    <span>Table of Contents</span>
                  </div>

                  <nav className="space-y-1.5">
                    {post.tableOfContents.map((item) => {
                      const isActive = activeHeading === item.id;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block py-1.5 px-3 rounded-xl text-xs transition-all font-medium ${
                            isActive
                              ? "bg-blue-50 text-[#305eff] font-bold border-l-2 border-[#305eff]"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                          }`}
                        >
                          {item.title}
                        </a>
                      );
                    })}
                  </nav>
                </div>

                {/* Author Info Card */}
                <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Written by Architect
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`h-12 w-12 rounded-full ${post.author.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-xs`}
                    >
                      {post.author.avatarInitials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        {post.author.name}
                      </div>
                      <div className="text-xs text-[#305eff] font-semibold">
                        {post.author.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>

                {/* Sticky Consultation Callout Box */}
                <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50/40 p-5 sm:p-6 shadow-sm">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#305eff] uppercase tracking-wider mb-2">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Private Cloud Deployment
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    Deploy this architecture for your enterprise
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Get full source code ownership, private VPC isolation, and direct access to senior solutions engineers.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      openLeadModal({
                        title: `Consultation: ${post.title}`,
                        source: `Blog Post Article - ${post.slug}`,
                        planName: post.category,
                        defaultNote: `Inquiring about deploying architecture described in article: ${post.title}`,
                      })
                    }
                    className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-[#305eff]/20 transition-all cursor-pointer"
                  >
                    <span>Schedule Architecture Review</span>
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles Carousel / Grid */}
      {relatedPosts.length > 0 && (
        <section className="bg-slate-50/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 border-t border-slate-200/80">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#305eff]">
                  CONTINUE READING
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mt-1 font-display">
                  Recommended Architecture Blueprints
                </h3>
              </div>

              <Link
                href="/blog"
                className="text-xs font-bold text-[#305eff] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View All Articles</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#305eff]/50 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-bold text-[#305eff]">
                        {relPost.category}
                      </span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {relPost.readTime}
                      </span>
                    </div>

                    <h4 className="text-base font-bold tracking-tight text-slate-900 group-hover:text-[#305eff] transition-colors leading-snug font-display">
                      {relPost.title}
                    </h4>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {relPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">
                      By {relPost.author.name}
                    </span>
                    <span className="font-bold text-[#305eff] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Read Deep-Dive</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global Corporate Footer */}
      <Footer />
      <DemoFloatWidget />
    </main>
  );
}
