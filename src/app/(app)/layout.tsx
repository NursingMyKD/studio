
"use client";

import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebarNavigation from '@/components/layout/AppSidebarNavigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UserCircle, LogOut, LogIn } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, usePathname } from 'next/navigation';

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

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const { user, logout, loading: authLoading, initialLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!initialLoading && !authLoading && !user && isClient) {
      // Allow access to login/signup even if trying to access an (app) route initially
      if (pathname !== '/login' && pathname !== '/signup') {
        router.push('/login');
      }
    }
  }, [user, initialLoading, authLoading, router, isClient, pathname]);
  
  if (initialLoading || authLoading) {
    // Full page skeleton or simplified layout while auth is loading
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

  if (!user && isClient) {
    // This should ideally be caught by the useEffect redirect, 
    // but as a fallback, prevent rendering children if no user.
    // Or, you can return null and let the redirect in useEffect handle it.
    // Returning a loading state or null can prevent flicker.
    return null; 
  }


  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen">
        {isClient ? (
          <Sidebar className="border-r">
            <SidebarHeader className="p-0">
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/dashboard" className="text-xl font-bold font-headline text-primary">
                  ICU Edu Hub
                </Link>
                <SidebarTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                  </Button>
                </SidebarTrigger>
              </div>
            </SidebarHeader>
            <SidebarContent className="p-2">
              <AppSidebarNavigation />
            </SidebarContent>
            <SidebarFooter className="p-4 border-t space-y-2">
              {user ? (
                <>
                  <Link href="/profile" passHref legacyBehavior>
                    <Button variant="ghost" className="w-full justify-start">
                        <UserCircle className="mr-2 h-5 w-5" />
                        Profile
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start" onClick={logout} disabled={authLoading}>
                    <LogOut className="mr-2 h-5 w-5" />
                    {authLoading ? 'Logging out...' : 'Logout'}
                  </Button>
                </>
              ) : (
                <Link href="/login" passHref legacyBehavior>
                  <Button variant="ghost" className="w-full justify-start">
                      <LogIn className="mr-2 h-5 w-5" />
                      Login
                  </Button>
                </Link>
              )}
            </SidebarFooter>
          </Sidebar>
        ) : (
          <AppSidebarSkeleton />
        )}
        <SidebarInset>
          <header className="sticky top-0 z-10 flex h-16 items-center justify-end border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
            {isClient ? (
                <SidebarTrigger className="hidden md:flex"/>
              ) : (
                <Skeleton className="h-7 w-7 hidden md:flex" /> 
              )
            }
          </header>
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            {user ? children : null /* Render children only if user is authenticated */}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
