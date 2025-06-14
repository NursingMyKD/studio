
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lightbulb, BookOpenText, ShieldCheck, HeartPulse } from "lucide-react";

export default function DashboardPage() {
  const quickLinks = [
    { title: "Body Systems", href: "/body-systems", icon: HeartPulse, description: "Explore educational content by physiological systems." , dataAiHint: "anatomy chart"},
    { title: "Critical Topics", href: "/topics", icon: BookOpenText, description: "Dive into key ICU subjects like hemodynamics." , dataAiHint: "medical textbook"},
    { title: "Protocols and Guidelines", href: "/protocols-and-guidelines", icon: ShieldCheck, description: "Access important unit-specific protocols and guidelines." , dataAiHint: "hospital policy"},
  ];

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Welcome to ICU Edu Hub</h1>
        <p className="text-muted-foreground">
          Your central resource for critical care education and unit-specific protocols.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4 font-headline">Quick Access</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <Card key={link.href} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <link.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-headline">{link.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </CardContent>
              <div className="p-4 pt-0">
                <Link href={link.href} passHref>
                  <Button className="w-full" variant="outline">
                    Go to {link.title}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Card className="bg-accent/30 border-accent/50">
        <CardHeader className="flex flex-row items-center space-x-3">
          <Lightbulb className="h-8 w-8 text-accent" />
          <div>
            <CardTitle className="text-xl text-accent-foreground font-headline">Tip of the Day</CardTitle>
            <CardDescription className="text-accent-foreground/80">
              Always double-check medication calculations for high-alert drugs.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

