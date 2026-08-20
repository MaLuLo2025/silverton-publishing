import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogReadTracker from "@/components/BlogReadTracker";
import { blogPosts } from "@/lib/blog";
import { batch1Content } from "@/lib/blogContent/batch-1";
import { batch2Content } from "@/lib/blogContent/batch-2";
import { batch3Content } from "@/lib/blogContent/batch-3";
import { batch4Content } from "@/lib/blogContent/batch-4";
import { batch5Content } from "@/lib/blogContent/batch-5";
import { batch6Content } from "@/lib/blogContent/batch-6";
import { batch7Content } from "@/lib/blogContent/batch-7";

// Content is split across batch files (one per Phase 4 conversion agent,
// plus one new file per blog-cycle deploy) instead of GSS's single
// 5,019-line blogContent object — same metadata-separate-from-content
// contract, just spread over files that stay reviewable individually.
// Merged here into the same Record<string, ReactNode> shape GSS's
// [slug]/page.tsx uses.
const blogContent = {
  ...batch1Content,
  ...batch2Content,
  ...batch3Content,
  ...batch4Content,
  ...batch5Content,
  ...batch6Content,
  ...batch7Content,
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://silvertonpublishing.com/blog/${params.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = blogContent[params.slug as keyof typeof blogContent];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: "Mark Stetler, J.D." },
    publisher: { "@type": "Organization", name: "Silverton Publishing" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://silvertonpublishing.com/blog/${params.slug}`,
    },
  };

  return (
    <>
      <Header />
      <BlogReadTracker slug={post.slug} title={post.title} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="article-header">
        <div className="article-category">{post.category}</div>
        <h1>{post.title}</h1>
        <div className="article-meta">
          By Mark Stetler, J.D. &nbsp;&bull;&nbsp; Silverton Publishing &nbsp;&bull;&nbsp;{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      <div className="article-body">
        {content ?? <p style={{ color: "var(--faint)" }}>Full article content coming soon.</p>}

        <p className="article-disclaimer">
          <em>
            This article is for educational purposes only and does not constitute legal, tax, or
            financial advice. Consult a qualified professional for guidance specific to your
            situation.
          </em>
        </p>
      </div>

      {post.relatedBook && (
        <div className="article-footer">
          <div className="book-cta">
            <div className="book-cta-text">
              <h4>{post.relatedBook.title}</h4>
              <p>{post.relatedBook.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
