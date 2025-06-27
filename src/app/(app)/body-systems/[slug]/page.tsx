import { getContentItemBySlug } from "@/lib/data-access";
import { notFound } from "next/navigation";
import BodySystemClientPage from "@/components/body-systems/BodySystemClientPage"; // New client component
import type { Metadata } from 'next';

interface BodySystemDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Function to generate metadata
export async function generateMetadata(
  { params }: BodySystemDetailPageProps
): Promise<Metadata> {
  const { slug } = await params;
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
  const { slug } = await params;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Body System') {
    notFound();
    return null;
  }

  return <BodySystemClientPage item={item} />;
}
