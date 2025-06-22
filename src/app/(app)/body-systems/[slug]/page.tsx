import { getContentItemBySlug } from "@/lib/firebase-admin";
import { notFound } from "next/navigation";
import BodySystemClientPage from "@/components/body-systems/BodySystemClientPage"; // New client component
import type { Metadata, ResolvingMetadata } from 'next';
import type { ContentItem } from "@/types/content";

interface BodySystemDetailPageProps {
  params: { slug: string };
}

// Function to generate metadata
export async function generateMetadata(
  { params }: BodySystemDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params?.slug;
  if (!slug) {
    return {
      title: "Content Not Found",
      description: "No slug provided."
    };
  }
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Body System') {
    return {
      title: "Content Not Found",
      description: "The requested body system content could not be found."
    };
  }

  return {
    title: `${item.title} | ICU Hub Body Systems`,
    description: item.summary || "Detailed information on the body system.",
    // openGraph: { 
    //   title: item.title,
    //   description: item.summary,
    // },
  };
}

export default async function BodySystemDetailPageServer({ params }: BodySystemDetailPageProps) {
  const slug = params.slug;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Body System') {
    notFound();
    return null;
  }

  return <BodySystemClientPage item={item} />;
}
