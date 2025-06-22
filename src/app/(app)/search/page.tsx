import { searchContent } from "@/lib/firebase-admin";
import SearchClientContent from "@/components/search/SearchClientContent";
import type { ContentItem } from "@/types/content";
import type { Metadata } from 'next';

interface SearchPageProps {
  searchParams?: {
    q?: string;
  };
}

export async function generateMetadata(
  { searchParams }: SearchPageProps
): Promise<Metadata> {
  const query = searchParams?.q || "";
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
  const query = searchParams?.q || "";
  let results: ContentItem[] = [];

  if (query.trim()) {
    results = await searchContent(query);
  }

  return <SearchClientContent initialQuery={query} initialResults={results} />;
}
