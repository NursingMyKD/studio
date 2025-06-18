
"use client";

import { useBookmarks } from "@/hooks/useBookmarks";
import ModuleCard from "@/components/cards/ModuleCard";
import { AlertCircle } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

export default function BookmarksDisplay() {
  const { bookmarkedItems, isLoaded } = useBookmarks();

  if (!isLoaded) {
    return (
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold font-headline text-primary">My Bookmarks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map(i => <Skeleton key={i} className="h-96 w-full rounded-lg" />)}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold font-headline text-primary">My Bookmarks</h2>
      {bookmarkedItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedItems.map((item) => {
            let basePath = "/topics"; // Default or determine from item type
            if (item.categoryType === "Body System") basePath = "/body-systems";
            else if (item.categoryType === "Policy") basePath = "/protocols-and-guidelines";
            
            return <ModuleCard key={item.id} item={item} basePath={basePath} />;
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-10 px-6 rounded-lg bg-card border border-border shadow-sm">
          <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Bookmarks Yet</h3>
          <p className="text-muted-foreground">
            You haven't bookmarked any topics yet. Click the bookmark icon on any content card to save it here.
          </p>
        </div>
      )}
    </section>
  );
}
