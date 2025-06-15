
"use client";

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AppSidebarSkeleton from '@/components/layout/AppSidebarSkeleton';
import SidebarInset from '@/components/layout/SidebarInset';
import { Skeleton } from '@/components/ui/skeleton';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuthComponent = (props: P) => {
    const { user, loading, initialLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!initialLoading && !loading && !user) {
        router.push('/login');
      }
    }, [user, loading, initialLoading, router]);

    if (initialLoading || loading) {
      return (
        <div className="flex min-h-screen">
          <AppSidebarSkeleton />
          <SidebarInset>
            <header className="sticky top-0 z-10 flex h-16 items-center justify-end border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
              <Skeleton className="h-7 w-7 hidden md:flex" />
            </header>
            <main className="flex-1 p-4 md:p-6 lg:p-8">
              <div className="space-y-4">
                <Skeleton className="h-10 w-1/2" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-40 w-full" />
                <Skeleton className="h-40 w-full" />
              </div>
            </main>
          </SidebarInset>
        </div>
      );
    }

    if (!user) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
