
"use client";

import Link from "next/link";
import { LogOut, Settings, UserCircle as UserIcon } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserNav() {
  const { user, userProfile, logout, loading: authLoading } = useAuth();

  const getInitials = (name: string | undefined | null) => {
    if (!name) return "?";
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };
  
  if (authLoading && !user) {
     return <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />;
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            {user && userProfile?.name ? (
              <AvatarImage src={`https://placehold.co/32x32.png?text=${getInitials(userProfile.name)}`} alt={userProfile.name || "User"} data-ai-hint="person avatar" />
            ) : user && user?.email ? (
              <AvatarImage src={`https://placehold.co/32x32.png?text=${getInitials(user.email)}`} alt={user.email} data-ai-hint="person initial" />
            ) : (
              <AvatarImage src="https://placehold.co/32x32.png" alt="User" data-ai-hint="placeholder user"/>
            )}
            <AvatarFallback>
              {user && userProfile?.name ? getInitials(userProfile.name) : user && user?.email ? getInitials(user.email) : <UserIcon className="h-5 w-5"/>}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {user ? (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userProfile?.name || user.displayName || "User"}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href="/profile" passHref>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout} disabled={authLoading}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>{authLoading ? "Logging out..." : "Log out"}</span>
            </DropdownMenuItem>
          </>
        ) : (
          <Link href="/login" passHref>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log in</span>
            </DropdownMenuItem>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
