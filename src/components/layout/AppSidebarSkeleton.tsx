
import { Skeleton } from '@/components/ui/skeleton';

const AppSidebarSkeleton = () => {
  return (
    <div className="hidden md:flex flex-col h-screen bg-sidebar text-sidebar-foreground border-r p-2" style={{width: "var(--sidebar-width, 16rem)"}}>
      <div className="flex items-center justify-between p-4 border-b mb-2">
        <Skeleton className="h-6 w-24" />
      </div>
      <div className="p-2 space-y-3 flex-grow">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>
      <div className="p-4 border-t mt-2">
        <Skeleton className="h-9 w-full" />
      </div>
    </div>
  );
};

export default AppSidebarSkeleton;
