
"use client";

import { useMemo, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { policies } from '@/lib/data'; // policies array contains items of type 'Policy'
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Separator } from '@/components/ui/separator';

export default function ProtocolOrGuidelineInDepthDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const item = useMemo(() => policies.find(p => p.slug === slug), [slug]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-96 animate-pulse bg-muted rounded-lg"></div>;
  }

  if (!item) {
    return (
      <div className="text-center py-20">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h2 className="text-2xl font-semibold mb-2 font-headline">Content Not Found</h2>
        <p className="text-muted-foreground mb-6">The requested protocol or guideline details could not be found.</p>
        <Button asChild>
          <Link href="/protocols-and-guidelines">Back to Protocols and Guidelines</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button variant="outline" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Overview
      </Button>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl">{item.title} - In-Depth Details</CardTitle>
          {item.summary && <CardDescription className="pt-2 text-lg">{item.summary}</CardDescription>}
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.inDepthConsiderations}</ReactMarkdown>
          </div>
        </CardContent>
      </Card>
       <div className="mt-8 text-center">
        <Button variant="outline" onClick={() => router.push(`/protocols-and-guidelines/${slug}`)}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Overview
        </Button>
      </div>
    </div>
  );
}
