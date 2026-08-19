import { MetadataRoute } from "next";

const BASE = "https://silvertonpublishing.com";

// Pattern matches the Select portfolio's sitemap.ts (goldsilverselect/src/app/sitemap.ts),
// scoped down to what Silverton actually has: no states/cities/dealers arrays,
// just static pages now and blogPosts.map() once Phase 1 ports the blog.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = ["", "/blog", "/privacy", "/terms", "/cookies"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? ("daily" as const) : ("weekly" as const),
    priority: path === "" ? 1.0 : 0.7,
  }));

  // Blog post entries land here in Phase 1, once src/lib/blog.ts exists:
  // const blogPages = blogPosts.map((p) => ({ url: `${BASE}/blog/${p.slug}`, ... }));

  return staticPages;
}
