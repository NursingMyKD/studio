import { getContentItemBySlug } from "@/lib/firebase-admin";
import { notFound } from "next/navigation";
import ProtocolClientPage from "@/components/protocols-and-guidelines/ProtocolClientPage"; // New client component
import type { Metadata, ResolvingMetadata } from 'next';
import type { ContentItem } from "@/types/content";

interface ProtocolDetailPageProps {
  params: { slug: string };
}

// Function to generate metadata
export async function generateMetadata(
  { params }: ProtocolDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Policy') { // Assuming Policies/Protocols are of categoryType 'Policy'
    return {
      title: "Content Not Found",
      description: "The requested protocol or guideline could not be found."
    };
  }

  return {
    title: `${item.title} | ICU Hub Protocols`,
    description: item.summary || "Detailed information on the protocol or guideline.",
    // openGraph: { 
    //   title: item.title,
    //   description: item.summary,
    // },
  };
}

export default async function ProtocolOrGuidelineDetailPageServer({ params }: ProtocolDetailPageProps) {
  const slug = params.slug;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Policy') { // Ensure it's a policy/protocol
    notFound();
  }

  return <ProtocolClientPage item={item} />;
}
