"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Zap,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Send,
  Check,
  Filter,
  Layers,
} from "lucide-react";
import WorldwideClientsBanner from "@/components/WorldwideClientsBanner";
import EcosystemHeader from "@/components/EcosystemHeader";
import Footer from "@/components/Footer";
import DemoFloatWidget from "@/components/DemoFloatWidget";
import { useLeadModal } from "@/components/LeadModalContext";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogPost } from "@/data/blogData";

export default function BlogHubPage() {
  const { openLeadModal } = useLeadModal();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 4000);
  };

  return (
    <main className="min-h-screen overflow-x-hidden w-full max-w-full bg-white text-slate-900 antialiased selection:bg-[#305eff] selection:text-white">
      {/* 0. Top Worldwide Ticker & Header */}
      <WorldwideClientsBanner />
      <EcosystemHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 border-b border-slate-200/80">
        {/* Soft Ambient Radial Lighting */}
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 top-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-5xl bg-[radial-gradient(circle_at_center,rgba(48,94,255,0.07)_0%,rgba(0,192,243,0.03)_50%,transparent_70%)] blur-2xl"
        />

        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb Navigation - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-500"
          >
            <Link href="/" className="hover:text-[#305eff] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#305eff] font-bold">Blog &amp; Architecture Intelligence</span>
          </motion.div>

          {/* Centered Hero Content */}
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15] font-display max-w-3xl mx-auto text-center"
            >
              Architectural blueprints &amp; production telemetry for{" "}
              <span className="electric-gradient-text inline-block">Enterprise AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg mx-auto text-center"
            >
              Real-world benchmarks, multi-agent state machines, low-latency telephony runtimes, and private VPC automation pipelines from our solutions engineering team.
            </motion.p>

            {/* Search & Category Filter Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col gap-6 w-full max-w-2xl items-center"
            >
              {/* Search Input */}
              <div className="relative w-full max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by topic, keyword, tech stack, or architect..."
                  className="w-full rounded-2xl border border-slate-200/90 bg-white/95 py-3.5 pl-12 pr-10 text-sm font-medium text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[#305eff] focus:outline-none focus:ring-2 focus:ring-[#305eff]/20 transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1.5">
                  <Filter className="h-3.5 w-3.5" />
                  Category:
                </span>
                {BLOG_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#305eff] text-white shadow-md shadow-[#305eff]/25 border border-[#305eff]"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/90"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Flagship Article Section (When not searching / on All) */}
      {!searchQuery && selectedCategory === "All" && featuredPost && (
        <section className="bg-slate-50/50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 border-b border-slate-200/80">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#305eff] flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                FLAGSHIP ARCHITECTURAL BLUEPRINT
              </span>
              <span className="text-xs font-bold text-slate-500">
                Staff Pick · March 2026
              </span>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl hover:border-[#305eff]/50 hover:shadow-2xl transition-all"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-[#305eff]">
                      {featuredPost.category}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {featuredPost.publishDate}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`} className="block group">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl group-hover:text-[#305eff] transition-colors leading-tight font-display">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                    {featuredPost.excerpt}
                  </p>

                  {/* Key Takeaways Preview */}
                  <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200/80 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-[#305eff]" />
                      Key Architectural Highlights
                    </div>
                    <div className="space-y-1.5">
                      {featuredPost.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Author & Action Row */}
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-10 w-10 rounded-full ${featuredPost.author.avatarColor} text-white flex items-center justify-center font-bold text-xs shadow-sm`}
                      >
                        {featuredPost.author.avatarInitials}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {featuredPost.author.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {featuredPost.author.role}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-[#305eff]/20 transition-all cursor-pointer"
                    >
                      <span>Read Full Deep-Dive</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Visual / Metric Blueprint Container */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-white shadow-lg overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-[#305eff]/20 blur-2xl" />
                    
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
                      <span className="text-cyan-400 font-bold">RUNTIME TELEMETRY</span>
                      <span className="text-emerald-400 font-bold">● 284ms ACTIVE</span>
                    </div>

                    <div className="py-6 space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-slate-400">Audio Ingress:</span>
                        <span className="text-white font-bold">8kHz μ-law (G.711)</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-slate-400">Streaming STT:</span>
                        <span className="text-cyan-300 font-bold">Deepgram Nova-2 (74ms)</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-slate-400">LLM Reasoning:</span>
                        <span className="text-emerald-300 font-bold">Claude 3.5 Sonnet</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-slate-400">Speech Synthesis:</span>
                        <span className="text-[#38bdf8] font-bold">ElevenLabs Turbo (62ms)</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>VPC: AWS us-east-1</span>
                      <span className="text-emerald-400 font-bold">0 Dropped Frames</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Articles Grid Section */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl font-display">
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : selectedCategory === "All"
                  ? "All Architecture Dispatches"
                  : `${selectedCategory} Articles`}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Showing {filteredPosts.length} of {BLOG_POSTS.length} publications
              </p>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-12 text-center max-w-xl mx-auto my-8">
              <BookOpen className="h-10 w-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900">No articles matched your criteria</h3>
              <p className="mt-1 text-xs text-slate-500">
                Try searching for different terms like "Voice", "LangGraph", "RAG", or clear your filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#305eff] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#1f47e0] transition-colors cursor-pointer"
              >
                Reset Search &amp; Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-[#305eff]/50 hover:shadow-xl transition-all"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="rounded-full bg-blue-50 border border-blue-200/90 px-3 py-0.5 text-[11px] font-bold text-[#305eff]">
                        {post.category}
                      </span>
                      <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#305eff] transition-colors leading-snug font-display">
                        {post.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-0.5 text-[10px] font-mono text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author & Read Link Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`h-8 w-8 rounded-full ${post.author.avatarColor} text-white flex items-center justify-center font-bold text-[10px] shadow-2xs`}
                      >
                        {post.author.avatarInitials}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 leading-tight">
                          {post.author.name}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {post.publishDate}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#305eff] hover:translate-x-1 transition-transform group-hover:underline cursor-pointer"
                    >
                      <span>Read</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* "The Architecture Dispatch" Newsletter Subscription Section */}
      <section className="bg-slate-50/70 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 border-y border-slate-200/80">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#305eff] mb-4">
              <Send className="h-3.5 w-3.5 text-[#305eff]" />
              <span>THE ARCHITECTURE DISPATCH</span>
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl font-display">
              Production AI blueprints delivered to your inbox
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              No generic hype. Just monthly technical deep-dives on multi-agent runtimes, speech pipeline latency, vector databases, and enterprise VPC compliance.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your corporate email..."
                className="flex-1 rounded-full border border-slate-200 bg-slate-50/80 px-5 py-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#305eff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#305eff]/20 transition-all"
              />
              <button
                type="submit"
                disabled={newsletterSubscribed}
                className="inline-flex items-center justify-center rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-6 py-3 text-xs font-bold text-white shadow-md shadow-[#305eff]/20 transition-all active:scale-95 cursor-pointer disabled:bg-emerald-600"
              >
                {newsletterSubscribed ? (
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5" />
                    Subscribed!
                  </span>
                ) : (
                  <span>Subscribe Free</span>
                )}
              </button>
            </form>

            <div className="mt-4 text-[11px] text-slate-400 flex items-center justify-center gap-4">
              <span>🔒 Zero spam</span>
              <span>•</span>
              <span>100% technical architecture</span>
              <span>•</span>
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA Banner */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-blue-200/80 bg-blue-50/50 p-8 sm:p-10 shadow-sm">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#305eff]">
              Custom Engineering Partnership
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 mt-1 font-display">
              Ready to deploy these architectures in your infrastructure?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
              Schedule a 1-on-1 discovery session with our Principal AI Solutions Architect to review your workflow topology and data residency requirements.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              openLeadModal({
                title: "Schedule Architecture Review",
                source: "Blog Hub Footer CTA",
                defaultNote: "Inquiring about custom AI agent architecture deployment.",
              })
            }
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#305eff]/20 transition-all active:scale-95 cursor-pointer"
          >
            <span>Book Architecture Review</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Global Corporate Footer */}
      <Footer />
      <DemoFloatWidget />
    </main>
  );
}
