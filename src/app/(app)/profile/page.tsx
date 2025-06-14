
"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import type { UserProfile } from '@/types/user';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User, Edit3, AlertTriangle, Loader2 } from "lucide-react";
import { format } from 'date-fns'; // For formatting timestamp

export default function ProfilePage() {
  const { user, userProfile: authProfile, initialLoading: authInitialLoading } = useAuth();
  const [profileData, setProfileData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authInitialLoading) {
      if (user && authProfile) {
        setProfileData(authProfile);
        setLoading(false);
      } else if (user && !authProfile) {
        // User is authenticated but profile might still be loading or missing
        // This case is handled by AuthContext which fetches profile
        // If authProfile is consistently null for an auth'd user, it might indicate an issue
        // or new user without profile data yet.
        // For now, we assume AuthContext handles the initial fetch.
        // If it remains null, it means no profile data in Firestore.
        setProfileData(null); // Explicitly set to null if authProfile is null
        setLoading(false);
      } else {
        // No user, or still initial loading
        setLoading(false); // Auth context handles redirection
      }
    }
  }, [user, authProfile, authInitialLoading]);

  if (authInitialLoading || loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="ml-4 text-lg">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
     // This should be caught by AppLayout redirect, but good to have a fallback.
    return (
      <div className="text-center py-20">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Access Denied</h2>
        <p className="text-muted-foreground mb-6">Please log in to view your profile.</p>
        <Button onClick={() => window.location.href = '/login'}>Go to Login</Button>
      </div>
    );
  }
  
  if (!profileData) {
    return (
      <div className="text-center py-20">
        <AlertTriangle className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Profile Not Found</h2>
        <p className="text-muted-foreground mb-6">
          Your profile data could not be loaded. If you just signed up, it might take a moment, or you may need to complete your profile.
        </p>
        {/* Add a button to an "Edit Profile" page here if you build one */}
      </div>
    );
  }

  const { 
    name, 
    email, 
    role, 
    memberSince, 
    department, 
    employeeId, 
    certifications, 
    competencies,
    manager, // Placeholder for manager data
    directReports // Placeholder for direct reports data
  } = profileData;

  const memberSinceDate = memberSince ? 
    (typeof memberSince === 'string' ? format(new Date(memberSince), 'MMMM dd, yyyy') : format(memberSince.toDate(), 'MMMM dd, yyyy')) 
    : 'N/A';

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">User Profile</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </header>
      <Separator />
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader className="text-center">
          <Avatar className="mx-auto h-24 w-24 mb-4">
            <AvatarImage src={`https://placehold.co/100x100.png?text=${name ? name.charAt(0) : 'U'}`} alt={`${name || 'User'} Avatar`} data-ai-hint="person avatar" />
            <AvatarFallback>
              <User className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
          <CardTitle className="font-headline text-2xl">{name || 'User Name'}</CardTitle>
          <CardDescription>{role || 'Role not set'}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold font-headline">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">{email || 'N/A'}</p>
              </div>
              <div>
                <p className="font-medium">Member Since:</p>
                <p className="text-muted-foreground">{memberSinceDate}</p>
              </div>
              <div>
                <p className="font-medium">Department:</p>
                <p className="text-muted-foreground">{department || 'N/A'}</p>
              </div>
              <div>
                <p className="font-medium">Employee ID:</p>
                <p className="text-muted-foreground">{employeeId || 'N/A'}</p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold font-headline">Preferences</h3>
            <div className="text-sm">
              <p className="font-medium">Theme:</p>
              <p className="text-muted-foreground">{profileData.themePreference || 'System Default'}</p>
            </div>
             <div className="text-sm">
              <p className="font-medium">Notifications:</p>
              <p className="text-muted-foreground">{profileData.notificationsEnabled ? 'Enabled' : 'Disabled (Placeholder)'}</p>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold font-headline">Certifications</h3>
            {certifications && certifications.length > 0 ? (
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {certifications.map((cert, index) => <li key={index}>{cert}</li>)}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No certifications listed.</p>
            )}
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold font-headline">Competencies</h3>
            {competencies && competencies.length > 0 ? (
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {competencies.map((comp, index) => <li key={index}>{comp}</li>)}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No competencies listed.</p>
            )}
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold font-headline">Role Specifics</h3>
            {(role === "Staff Nurse" || role === "ICU Registered Nurse") && (
              <div>
                <p className="font-medium">Manager:</p>
                <p className="text-muted-foreground">{manager || 'Dr. Emily Carter (Unit Manager - Placeholder)'}</p>
              </div>
            )}
            {(role === "Assistant Nurse Manager" || role === "Manager" || role === "Director") && (
              <div>
                <p className="font-medium">Direct Reports:</p>
                {directReports && directReports.length > 0 ? (
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {directReports.map((report, index) => <li key={index}>{report}</li>)}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">No direct reports listed (Placeholder).</p>
                )}
              </div>
            )}
            {/* Fallback for other roles or if no specific condition is met */}
            {role && !["Staff Nurse", "ICU Registered Nurse", "Assistant Nurse Manager", "Manager", "Director"].includes(role) && (
               <div>
                <p className="font-medium">Role Description:</p>
                <p className="text-muted-foreground">Details specific to the role of {role}.</p>
              </div>
            )}
          </div>
          <Separator />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" disabled> {/* Editing not implemented yet */}
              <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
            {/* Logout button is in AppLayout */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
