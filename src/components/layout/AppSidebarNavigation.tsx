// src/components/layout/AppSidebarNavigation.tsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, HeartPulse, BookOpenText, ShieldCheck, LayoutDashboard } from 'lucide-react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/body-systems', label: 'Body Systems', icon: HeartPulse },
  { href: '/topics', label: 'Critical Topics', icon: BookOpenText },
  { href: '/policies', label: 'Unit Policies', icon: ShieldCheck },
];

export default function AppSidebarNavigation() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href} passHref legacyBehavior>
            <SidebarMenuButton
              className={cn(
                (pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))) 
                ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                : 'hover:bg-sidebar-accent/50'
              )}
              isActive={pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))}
              tooltip={{ children: item.label, side: 'right' }}
            >
              <item.icon className="h-5 w-5" />
              <span className="truncate">{item.label}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
