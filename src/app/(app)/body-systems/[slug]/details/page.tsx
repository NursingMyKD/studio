import { getContentItemBySlug } from "@/lib/data-access";
import { notFound } from "next/navigation";
import BodySystemDetailsClientPage from "@/components/body-systems/BodySystemDetailsClientPage"; // New client component
import type { Metadata, ResolvingMetadata } from 'next';

interface BodySystemDetailsPageProps {
  params: Promise<{ slug: string }>;
}

// Function to generate metadata
export async function generateMetadata(
  { params }: BodySystemDetailsPageProps
): Promise<Metadata> {
  const { slug } = await params;
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
  const { slug } = await params;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Body System') {
    notFound();
  }

  return <BodySystemDetailsClientPage item={item} />;
}
