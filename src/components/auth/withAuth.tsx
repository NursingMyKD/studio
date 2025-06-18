
"use client";

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AppSidebarSkeleton from '@/components/layout/AppSidebarSkeleton';
// import SidebarInset from '@/components/layout/SidebarInset'; // SidebarInset is part of AppLayout directly
import { Skeleton } from '@/components/ui/skeleton';
import { Menu, Info } from "lucide-react"; // For header skeleton

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuthComponent = (props: P) => {
    const { user, loading, initialLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!initialLoading && !loading && !user) {
        // router.push('/login'); // Temporarily commented out for preview
      }
    }, [user, loading, initialLoading, router]);

    if (initialLoading) { // Show skeleton only during initial auth state check
      return (
        <div className="flex min-h-screen bg-background">
          <AppSidebarSkeleton />
          {/* Simplified Main Content Skeleton */}
          <div className="flex flex-col flex-1">
            <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 shadow-sm backdrop-blur-sm sm:px-6">
                <Skeleton className="h-7 w-7 md:hidden" />
                <Skeleton className="h-7 w-7 hidden md:flex" />
                <Skeleton className="h-6 w-24" />
                <div className="flex-1" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
            </header>
            <main className="flex-1 p-4 md:p-6 lg:p-8">
              <div className="space-y-4">
                <Skeleton className="h-10 w-1/2" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-40 w-full" />
                <Skeleton className="h-40 w-full" />
              </div>
            </main>
          </div>
        </div>
      );
    }

    // If not initial loading and no user, and redirection is active, this would redirect.
    // For now, allow component rendering even if no user.
    // if (!user && !initialLoading && !loading) {
    //   return null; // Or a more specific "login required" component if not redirecting immediately
    // }

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
