
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User, Edit3, LogOut } from "lucide-react";

export default function ProfilePage() {
  // This role is currently static based on the CardDescription.
  // In a real application, this would come from user data.
  // You can change this value to "Staff Nurse" or "Assistant Nurse Manager"
  // to see the conditional UI for "Role Specifics" in action.
  const userRole = "ICU Registered Nurse"; 

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
          <CardDescription>{userRole}</CardDescription>
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
          <div className="space-y-2">
            <h3 className="text-lg font-semibold font-headline">Certifications</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>CCRN (Critical Care Registered Nurse)</li>
              <li>TNCC (Trauma Nursing Core Course)</li>
              <li>ACLS Provider</li>
              <li>PALS Provider</li>
              <li>Basic Life Support (BLS)</li>
            </ul>
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold font-headline">Competencies</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Continuous Renal Replacement Therapy (CRRT)</li>
              <li>Extracorporeal Membrane Oxygenation (ECMO) - Initiation & Management</li>
              <li>Impella Device Management</li>
              <li>Advanced Hemodynamic Monitoring (e.g., PA Catheter, Arterial Line)</li>
              <li>Ventilator Management - Advanced Modes</li>
              <li>Intra-Aortic Balloon Pump (IABP) Management</li>
            </ul>
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold font-headline">Role Specifics</h3>
            {(userRole === "Staff Nurse" || userRole === "ICU Registered Nurse") && (
              <div>
                <p className="font-medium">Manager:</p>
                <p className="text-muted-foreground">Dr. Emily Carter (Unit Manager - Placeholder)</p>
              </div>
            )}
            {userRole === "Assistant Nurse Manager" && (
              <div>
                <p className="font-medium">Direct Reports:</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Nurse Alice Smith (RN, ICU)</li>
                  <li>Nurse Bob Johnson (RN, ICU)</li>
                  <li>Technician Carol White (CCT, ICU)</li>
                </ul>
              </div>
            )}
            {/* Fallback for other roles or if no specific condition is met */}
            {userRole !== "Staff Nurse" && userRole !== "ICU Registered Nurse" && userRole !== "Assistant Nurse Manager" && (
               <div>
                <p className="font-medium">Role Description:</p>
                <p className="text-muted-foreground">Details specific to the role of {userRole}.</p>
              </div>
            )}
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
