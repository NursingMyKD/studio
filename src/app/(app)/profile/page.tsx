
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User, Edit3, LogOut } from "lucide-react";

export default function ProfilePage() {
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
            <AvatarImage src="https://placehold.co/100x100.png" alt="User Avatar" data-ai-hint="person avatar" />
            <AvatarFallback>
              <User className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
          <CardTitle className="font-headline text-2xl">Jane Doe</CardTitle>
          <CardDescription>ICU Registered Nurse</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold font-headline">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">jane.doe@example.com</p>
              </div>
              <div>
                <p className="font-medium">Member Since:</p>
                <p className="text-muted-foreground">January 15, 2023</p>
              </div>
              <div>
                <p className="font-medium">Department:</p>
                <p className="text-muted-foreground">Intensive Care Unit</p>
              </div>
              <div>
                <p className="font-medium">Employee ID:</p>
                <p className="text-muted-foreground">ICU-12345</p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold font-headline">Preferences</h3>
            <div className="text-sm">
              <p className="font-medium">Theme:</p>
              <p className="text-muted-foreground">System Default</p>
            </div>
             <div className="text-sm">
              <p className="font-medium">Notifications:</p>
              <p className="text-muted-foreground">Enabled for new content</p>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline">
              <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
            <Button variant="destructive">
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
