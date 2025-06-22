"use client";

import { SidebarProvider, Sidebar, SidebarContent, SidebarFooter, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebarNavigation from '@/components/layout/AppSidebarNavigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search as SearchIcon } from 'lucide-react'; 
import { useState, useEffect, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import AppSidebarSkeleton from '@/components/layout/AppSidebarSkeleton';
import { ThemeToggle } from '@/components/ThemeToggle';
import { UserNav } from '@/components/UserNav';
import { Input } from '@/components/ui/input';
import { ErrorBoundary } from '@/components/ErrorBoundary';


function AppLayout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const [headerSearchTerm, setHeaderSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

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

                <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                  <Image src="https://placehold.co/24x24.png" alt="ICU Hub Logo" width={24} height={24} className="h-6 w-6 text-primary" data-ai-hint="logo abstract" />
                  <span className="font-headline text-primary">ICU Hub</span>
                </Link>
                
                <div className="relative hidden md:flex flex-1 justify-center max-w-sm mx-auto">
                  <form onSubmit={handleHeaderSearch} className="relative w-full">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search topics..."
                      className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-muted/50 border-border focus:border-primary transition-colors"
                      aria-label="Search topics (header)"
                      value={headerSearchTerm}
                      onChange={(e) => setHeaderSearchTerm(e.target.value)}
                    />
                  </form>
                </div>

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
          <main className="flex-1 overflow-y-auto">
            <ErrorBoundary>
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 shadow-sm backdrop-blur-sm sm:px-6">
            <SidebarTrigger className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle sidebar">
                <Menu className="h-6 w-6" />
              </Button>
            </SidebarTrigger>
            <div className="hidden md:flex items-center">
              <Link href="/dashboard" className="mr-6 flex items-center space-x-2">
                <Image src="/assets/app-logo.png" alt="ICU Hub Logo" width={32} height={32} />
                <span className="font-bold hidden lg:inline-block">ICU Hub</span>
              </Link>
            </div>
            <div className="flex-1">
              <form onSubmit={handleHeaderSearch} className="relative ml-auto flex-1 sm:flex-initial">
                <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search topics, guidelines..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-background"
                  value={headerSearchTerm}
                  onChange={(e) => setHeaderSearchTerm(e.target.value)}
                />
              </form>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <UserNav />
            </div>
          </header>
          <div className="p-4 md:p-6 lg:p-8">
            {children}
          </div>
          </ErrorBoundary>
        </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default AppLayout;
