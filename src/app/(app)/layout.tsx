
"use client";

import { SidebarProvider, Sidebar, SidebarContent, SidebarFooter, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebarNavigation from '@/components/layout/AppSidebarNavigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search as SearchIcon } from 'lucide-react'; 
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import AppSidebarSkeleton from '@/components/layout/AppSidebarSkeleton';
import { ThemeToggle } from '@/components/ThemeToggle';
import { UserNav } from '@/components/UserNav';
import { Input } from '@/components/ui/input';


function AppLayout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

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
                  <Image src="/assets/app-logo.png" alt="ICU Hub Logo" width={24} height={24} className="h-6 w-6 text-primary" />
                  <span className="font-headline text-primary">ICU Hub</span>
                </Link>
                
                <div className="relative hidden md:flex flex-1 justify-center max-w-sm mx-auto">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search topics..."
                    className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-muted/50 border-border focus:border-primary transition-colors"
                    aria-label="Search topics (header)"
                    disabled
                  />
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
          <SidebarInset>
            <main className="flex-1 p-4 md:p-6 lg:p-8">
              {children}
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default AppLayout;
