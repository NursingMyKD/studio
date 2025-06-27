import { getContentItemBySlug } from "@/lib/data-access";
import { notFound } from "next/navigation";
import ProtocolClientPage from "@/components/protocols-and-guidelines/ProtocolClientPage"; // New client component
import type { Metadata } from 'next';

interface ProtocolDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Function to generate metadata
export async function generateMetadata(
  { params }: ProtocolDetailPageProps
): Promise<Metadata> {
  const { slug } = await params;
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
  const { slug } = await params;
  const item = await getContentItemBySlug(slug);

  if (!item || item.categoryType !== 'Policy') { // Ensure it's a policy/protocol
    notFound();
  }

  return <ProtocolClientPage item={item} />;
}
