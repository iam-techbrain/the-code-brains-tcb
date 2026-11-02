import process from "node:process";
import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thecodebrains.com";
  const baseUrl = rawBaseUrl.replace(/\/+$/, "");

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dynamic blog post pages
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => {
    const parsedDate = new Date(post.publishDate);
    const lastModified = isNaN(parsedDate.getTime()) ? new Date() : parsedDate;

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });

  return [...staticPages, ...blogPages];
}
