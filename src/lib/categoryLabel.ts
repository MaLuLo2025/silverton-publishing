// Blog `category` strings are stored as "<Topic> — Book N" (or "Books N & M").
// The book tag is dropped from public display while the series is unreleased;
// the stored value keeps the volume mapping for editorial tooling.
export function topicCategory(category: string): string {
  return category.replace(/\s+—\s+Books?\s+\d+(\s*&\s*\d+)?\s*$/, "");
}
