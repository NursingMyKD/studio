import { getContentItemBySlug } from "@/lib/data-access";
import { notFound } from "next/navigation";
import TopicClientPage from "@/components/topics/TopicClientPage"; // New client component
import type { Metadata } from 'next';

interface TopicDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Function to generate metadata
export async function generateMetadata(
  { params }: TopicDetailPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const item = await getContentItemBySlug(slug);

  if (!item) {
    return {
      title: "Content Not Found",
      description: "The requested content could not be found."
    };
  }

  return {
    title: `${item.title} | ICU Hub Topics`,
    description: item.summary || "Detailed information on the topic.",
    // openGraph: { // Optional: Add OpenGraph metadata if needed
    //   title: item.title,
    //   description: item.summary,
    //   // images: [item.imageUrl || defaultImageUrl],
    // },
  };
}

export default async function TopicDetailPageServer({ params }: TopicDetailPageProps) {
  const { slug } = await params;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Topic') {
    notFound(); // Triggers the not-found.tsx page or default Next.js 404 page
  }

  // The actual rendering will be delegated to a client component
  // This server component is responsible for data fetching and passing it down.
  return <TopicClientPage item={item} />;
}
