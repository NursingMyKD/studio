import { searchContent } from "@/lib/data-access";
import SearchClientContent from "@/components/search/SearchClientContent";
import type { ContentItem } from "@/types/content";
import type { Metadata } from 'next';

interface SearchPageProps {
  searchParams?: Promise<{
    q?: string;
  }>;
}

export async function generateMetadata(
  { searchParams }: SearchPageProps
): Promise<Metadata> {
  const params = await searchParams;
  const query = params?.q || "";
  if (query) {
    return {
      title: `Search Results for "${query}" | ICU Hub`,
      description: `Search results for queries related to "${query}" on ICU Hub.`,
    };
  }
  return {
    title: "Search | ICU Hub",
    description: "Search for critical care topics, body systems, and protocols on ICU Hub.",
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params?.q || "";
  let results: ContentItem[] = [];

  if (query.trim()) {
    results = await searchContent(query);
  }

  return <SearchClientContent initialQuery={query} initialResults={results} />;
}
