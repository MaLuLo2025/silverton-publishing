// Metadata shape for Silverton's blog posts — same "metadata separate from
// body content" contract as the Select portfolio's BlogPost (goldsilverselect/src/lib/blog.ts),
// adapted to what Silverton's articles actually carry. GSS uses tag/tagColor/series;
// Silverton articles carry a single "category" label per Book volume instead
// (e.g. "Contracts & Legal Foundations — Book 2"), and roughly a quarter of
// them end in a book cross-promo block, captured here as relatedBook.
export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string; // YYYY-MM-DD, from each article's own JSON-LD datePublished
  relatedBook?: {
    title: string;
    description: string;
  };
}
