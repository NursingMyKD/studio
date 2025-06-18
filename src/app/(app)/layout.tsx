
"use client";

import { SidebarProvider, Sidebar, SidebarContent, SidebarFooter, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebarNavigation from '@/components/layout/AppSidebarNavigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu, Info, Search as SearchIcon } from 'lucide-react'; // Added SearchIcon
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
// import { useAuth } from '@/contexts/AuthContext'; // Commented out for now, can be re-enabled
import AppSidebarSkeleton from '@/components/layout/AppSidebarSkeleton';
import { ThemeToggle } from '@/components/ThemeToggle';
import { UserNav } from '@/components/UserNav';
import { Input } from '@/components/ui/input';


function AppLayout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  // const { user, logout, loading: authLoading } = useAuth(); // Temporarily disable auth for preview

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-background">
        {isClient ? (
          <Sidebar className="border-r bg-sidebar text-sidebar-foreground">
            {/* Sidebar Header is now simplified as title is in main app header */}
            <div className="flex items-center justify-end p-4 border-b border-sidebar-border md:hidden">
                {/* Mobile-only close trigger for sidebar itself if needed, or handled by SidebarTrigger in main header */}
            </div>
            <SidebarContent className="p-2">
              <AppSidebarNavigation />
            </SidebarContent>
            {/* Footer content might be removed if UserNav handles all user actions */}
            <SidebarFooter className="p-4 border-t border-sidebar-border">
              {/* Example: Could have app version or other info here */}
            </SidebarFooter>
          </Sidebar>
        ) : (
          <AppSidebarSkeleton />
        )}

        {/* Main content area including the new header */}
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
                {/* Desktop Sidebar Trigger - more subtle if needed */}
                <SidebarTrigger asChild className="hidden md:flex">
                   <Button variant="ghost" size="icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                     <span className="sr-only">Toggle Sidebar</span>
                   </Button>
                </SidebarTrigger>

                <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                  <Info className="h-6 w-6 text-primary" /> {/* Placeholder Logo */}
                  <span className="font-headline text-primary">ICU Hub</span>
                </Link>
                
                <div className="relative hidden md:flex flex-1 justify-center max-w-sm mx-auto">
                  {/* Header Search Bar - Visual Placeholder for now */}
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search topics..."
                    className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-muted/50 border-border focus:border-primary transition-colors"
                    aria-label="Search topics (header)"
                    disabled // Non-functional for now
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
          <SidebarInset> {/* SidebarInset handles margin adjustment based on sidebar state */}
            <main className="flex-1 p-4 md:p-6 lg:p-8">
              {children}
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}

// Temporarily remove withAuth to allow preview without login
// export default withAuth(AppLayout);
export default AppLayout;

