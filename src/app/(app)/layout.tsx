"use client";

import { SidebarProvider, Sidebar, SidebarContent, SidebarFooter, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebarNavigation from '@/components/layout/AppSidebarNavigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react'; 
import { useState, useEffect, type FormEvent, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import AppSidebarSkeleton from '@/components/layout/AppSidebarSkeleton';
import { ThemeToggle } from '@/components/ThemeToggle';
import { UserNav } from '@/components/UserNav';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import withAuth from '@/components/auth/withAuth';
import { logAnalyticsEvent } from '@/lib/analytics';


function AppLayout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const [headerSearchTerm, setHeaderSearchTerm] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Log page/module view
    logAnalyticsEvent('page_view', { path: pathname });
    startTimeRef.current = Date.now();
    return () => {
      if (startTimeRef.current) {
        const duration = Math.round((Date.now() - startTimeRef.current) / 1000); // seconds
        logAnalyticsEvent('time_spent', { path: pathname, duration });
      }
    };
  }, [pathname]);

  const handleHeaderSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!headerSearchTerm.trim()) return;
    router.push(`/search?q=${encodeURIComponent(headerSearchTerm.trim())}`);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-background">
        {isClient ? (
          <Sidebar className="border-r bg-sidebar text-sidebar-foreground">
            <div className="flex items-center justify-end p-4 border-b border-sidebar-border md:hidden">
            </div>
            <SidebarContent className="p-2">
              <AppSidebarNavigation />
            </SidebarContent>
            <SidebarFooter className="p-4 border-t border-sidebar-border">
            </SidebarFooter>
          </Sidebar>
        ) : (
          <AppSidebarSkeleton />
        )}

        <div className="flex flex-col flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 shadow-sm backdrop-blur-sm sm:px-6">
            {isClient ? (
              <>
                <SidebarTrigger asChild className="md:hidden"> 
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Sidebar</span>
                  </Button>
                </SidebarTrigger>
                <SidebarTrigger asChild className="hidden md:flex">
                   <Button variant="ghost" size="icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                     <span className="sr-only">Toggle Sidebar</span>
                   </Button>
                </SidebarTrigger>

                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                  <span className="flex items-center gap-2">
                    <Image src="/assets/LOGO.PNG" alt="ICU Hub Logo" width={32} height={32} className="h-8 w-8 object-contain text-primary" />
                    <span className="font-headline text-primary">ICU Hub</span>
                  </span>
                </Link>
                
                <div className="ml-auto flex items-center gap-2">
                  <ThemeToggle />
                  <UserNav />
                </div>
              </>
            ) : (
              <>
                <Skeleton className="h-7 w-7 md:hidden" />
                <Skeleton className="h-7 w-7 hidden md:flex" />
                <Skeleton className="h-6 w-24" />
                <div className="flex-1" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </>
            )}
          </header>
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default withAuth(AppLayout);
