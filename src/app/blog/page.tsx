import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical answers to the legal and business questions entrepreneurs search for every day, from the Million Dollar Highway series.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  // Three-way comparator — equal dates return 0 so the stable sort preserves
  // blogPosts array order for same-day articles. See the note in app/page.tsx.
  const sorted = [...blogPosts].sort((a, b) =>
    a.date === b.date ? 0 : a.date < b.date ? 1 : -1
  );

  return (
    <>
      <Header />

      <div className="page-header">
        <h1>Real Advice</h1>
        <p>
          Before the series launches, we&apos;re publishing practical answers to the legal and
          business questions entrepreneurs search for every day. No jargon, no hedging &mdash; just
          what you need to know.
        </p>
      </div>

      <div className="articles">
        {sorted.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="article-item">
            <div className="cat">{post.category}</div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <div className="meta">
              {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <span className="read">Read the Answer &rarr;</span>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}
