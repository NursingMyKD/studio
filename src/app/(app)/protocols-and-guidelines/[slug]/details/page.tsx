import { getContentItemBySlug } from "@/lib/data-access";
import { notFound } from "next/navigation";
import ProtocolDetailsClientPage from "@/components/protocols-and-guidelines/ProtocolDetailsClientPage"; // New client component
import type { Metadata } from 'next';

interface ProtocolDetailsPageProps {
  params: Promise<{ slug: string }>;
}

// Function to generate metadata
export async function generateMetadata(
  { params }: ProtocolDetailsPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Policy') {
    return {
      title: "Content Not Found",
      description: "The requested protocol or guideline details could not be found."
    };
  }

  return {
    title: `${item.title} - In-Depth Details | ICU Hub Protocols`,
    description: `In-depth considerations for the protocol or guideline: ${item.title}. ${item.summary || ''}`,
    // openGraph: { 
    //   title: `${item.title} - In-Depth Details`,
    //   description: item.summary,
    // },
  };
}

export default async function ProtocolOrGuidelineInDepthDetailPageServer({ params }: ProtocolDetailsPageProps) {
  const { slug } = await params;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Policy') {
    notFound();
  }

  return <ProtocolDetailsClientPage item={item} />;
}
