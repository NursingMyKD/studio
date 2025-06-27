import { getContentItemBySlug } from "@/lib/data-access";
import { notFound } from "next/navigation";
import TopicDetailsClientPage from "@/components/topics/TopicDetailsClientPage"; // New client component
import type { Metadata } from 'next';

interface TopicDetailsPageProps {
  params: Promise<{ slug: string }>;
}

// Function to generate metadata
export async function generateMetadata(
  { params }: TopicDetailsPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Topic') {
    return {
      title: "Content Not Found",
      description: "The requested content details could not be found."
    };
  }

  return {
    title: `${item.title} - In-Depth Details | ICU Hub`,
    description: `In-depth considerations for the topic: ${item.title}. ${item.summary || ''}`,
    // openGraph: { // Optional: Add OpenGraph metadata if needed
    //   title: `${item.title} - In-Depth Details`,
    //   description: item.summary,
    // },
  };
}

export default async function TopicInDepthDetailPageServer({ params }: TopicDetailsPageProps) {
  const { slug } = await params;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Topic') {
    notFound();
  }

  return <TopicDetailsClientPage item={item} />;
}
