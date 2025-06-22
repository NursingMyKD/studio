import { getContentItemBySlug } from "@/lib/firebase-admin";
import { notFound } from "next/navigation";
import BodySystemDetailsClientPage from "@/components/body-systems/BodySystemDetailsClientPage"; // New client component
import type { Metadata, ResolvingMetadata } from 'next';
import type { ContentItem } from "@/types/content";

interface BodySystemDetailsPageProps {
  params: { slug: string };
}

// Function to generate metadata
export async function generateMetadata(
  { params }: BodySystemDetailsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Body System') {
    return {
      title: "Content Not Found",
      description: "The requested body system details could not be found."
    };
  }

  return {
    title: `${item.title} - In-Depth Details | ICU Hub`,
    description: `In-depth considerations for the body system: ${item.title}. ${item.summary || ''}`,
    // openGraph: { 
    //   title: `${item.title} - In-Depth Details`,
    //   description: item.summary,
    // },
  };
}

export default async function BodySystemInDepthDetailPageServer({ params }: BodySystemDetailsPageProps) {
  const slug = params.slug;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Body System') {
    notFound();
  }

  return <BodySystemDetailsClientPage item={item} />;
}
