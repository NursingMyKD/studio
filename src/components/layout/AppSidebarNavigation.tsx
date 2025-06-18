
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, HeartPulse, BookOpenText, ShieldCheck, LayoutDashboard } from 'lucide-react'; // Removed UserProfileIcon
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/body-systems', label: 'Body Systems', icon: HeartPulse },
  { href: '/topics', label: 'Critical Topics', icon: BookOpenText },
  { href: '/protocols-and-guidelines', label: 'Protocols & Guidelines', icon: ShieldCheck },
];

// Profile item is now handled in UserNav in the main app header.

export default function AppSidebarNavigation() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href}>
            <SidebarMenuButton
              className={cn(
                (pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))) 
                ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                : 'hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground' // Adjusted hover
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
