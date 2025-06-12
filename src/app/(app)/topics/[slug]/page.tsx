
"use client";

import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { topics } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import LegalDisclaimerModal from '@/components/modals/LegalDisclaimerModal';
import { AlertTriangle, CheckCircle, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function TopicDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const item = useMemo(() => topics.find(t => t.slug === slug), [slug]);

  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Reset state when slug changes
    setIsDisclaimerOpen(false);
    setShowContent(false);
  }, [slug]);

  if (!isClient) {
    return <div className="h-96 animate-pulse bg-muted rounded-lg"></div>;
  }

  if (!item) {
    return (
      <div className="text-center py-20">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h2 className="text-2xl font-semibold mb-2 font-headline">Content Not Found</h2>
        <p className="text-muted-foreground mb-6">The requested topic module could not be found.</p>
        <Button asChild>
          <Link href="/topics">Back to Topics</Link>
        </Button>
      </div>
    );
  }

  const handleAcceptDisclaimer = () => {
    setShowContent(true);
    setIsDisclaimerOpen(false);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <Badge variant="outline" className="mb-2">{item.categoryType}</Badge>
              <CardTitle className="font-headline text-3xl md:text-4xl">{item.title}</CardTitle>
              {item.summary && <CardDescription className="pt-2 text-lg">{item.summary}</CardDescription>}
            </div>
            {!showContent && (
              <Button onClick={() => setIsDisclaimerOpen(true)} size="lg" className="w-full md:w-auto">
                <BookOpen className="mr-2 h-5 w-5" /> View Content
              </Button>
            )}
          </div>
        </CardHeader>
        
        {showContent && (
          <>
            <Separator />
            <CardContent className="pt-6">
              {item.keywordsForImage && (
                <div className="relative w-full h-60 md:h-80 mb-6 rounded-md overflow-hidden shadow-md">
                  <Image
                    src={`https://placehold.co/800x300.png`}
                    alt={`${item.title} visual representation`}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={item.keywordsForImage}
                    priority
                  />
                </div>
              )}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.content}</ReactMarkdown>
              </div>
            </CardContent>
          </>
        )}
      </Card>

      <LegalDisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
        onAccept={handleAcceptDisclaimer}
      />

      {showContent && (
        <div className="flex items-center text-sm text-green-700 dark:text-green-300 p-4 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-200 dark:border-green-700/40">
          <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
          <span>You have accepted the legal disclaimer. The content is provided for educational purposes only.</span>
        </div>
      )}
      <CardFooter className="mt-4">
          <Button variant="outline" asChild>
            <Link href="/topics">Back to All Topics</Link>
          </Button>
        </CardFooter>
    </div>
  );
}

    
