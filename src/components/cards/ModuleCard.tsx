import type { ContentItem } from '@/types/content';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface ModuleCardProps {
  item: ContentItem;
  basePath: string;
}

export default function ModuleCard({ item, basePath }: ModuleCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={`https://placehold.co/400x200.png`}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={item.keywordsForImage || "medical education"}
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold font-headline">{item.title}</CardTitle>
          <Badge variant="secondary" className="capitalize">{item.categoryType.toLowerCase().replace(' system', '')}</Badge>
        </div>
        <CardDescription className="mt-1 h-16 overflow-hidden text-ellipsis">
          {item.summary}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Additional content can go here if needed */}
      </CardContent>
      <CardFooter>
        <Link href={`${basePath}/${item.slug}`} passHref className="w-full">
          <Button variant="outline" className="w-full">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
