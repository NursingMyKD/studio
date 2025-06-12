"use client";

import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { policies } from '@/lib/data';
import type { ContentItem } from '@/types/content';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import LegalDisclaimerModal from '@/components/modals/LegalDisclaimerModal';
import { AlertTriangle, CheckCircle, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function PolicyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const item = useMemo(() => policies.find(p => p.slug === slug), [slug]);

  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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
        <p className="text-muted-foreground mb-6">The requested policy could not be found.</p>
        <Button asChild>
          <Link href="/policies">Back to Policies</Link>
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
                <FileText className="mr-2 h-5 w-5" /> View Policy
              </Button>
            )}
          </div>
        </CardHeader>
        
        {showContent && (
          <>
            <Separator />
            <CardContent className="pt-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {item.content.split('\\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
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
          <span>You have accepted the legal disclaimer. The content is provided for informational purposes only.</span>
        </div>
      )}
       <CardFooter className="mt-4">
          <Button variant="outline" asChild>
            <Link href="/policies">Back to All Policies</Link>
          </Button>
        </CardFooter>
    </div>
  );
}
