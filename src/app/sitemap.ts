import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const BASE = "https://silvertonpublishing.com";

// Pattern matches the Select portfolio's sitemap.ts (goldsilverselect/src/app/sitemap.ts),
// scoped down to what Silverton actually has: no states/cities/dealers arrays,
// just static pages and blogPosts.map().
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = ["", "/blog", "/privacy", "/terms", "/cookies"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? ("daily" as const) : ("weekly" as const),
    priority: path === "" ? 1.0 : 0.7,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.dateModified ?? p.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
