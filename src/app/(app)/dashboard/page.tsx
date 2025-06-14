
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lightbulb, BookOpenText, ShieldCheck, HeartPulse, Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  const quickLinks = [
    { title: "Body Systems", href: "/body-systems", icon: HeartPulse, description: "Explore educational content by physiological systems." , dataAiHint: "anatomy chart"},
    { title: "Critical Topics", href: "/topics", icon: BookOpenText, description: "Dive into key ICU subjects like hemodynamics." , dataAiHint: "medical textbook"},
    { title: "Protocols and Guidelines", href: "/protocols-and-guidelines", icon: ShieldCheck, description: "Access important unit-specific protocols and guidelines." , dataAiHint: "hospital policy"},
  ];

  const spotlightModule = {
    title: "Advanced Hemodynamics",
    href: "/topics/hemodynamics",
    icon: Star,
    description: "Deep dive into hemodynamic principles, monitoring techniques, interpretation, and therapeutic interventions in critical care. Essential for managing complex patient scenarios.",
    dataAiHint: "medical chart analysis"
  };

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Welcome to ICU Edu Hub</h1>
        <p className="text-muted-foreground">
          Your central resource for critical care education and unit-specific protocols.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-3 font-headline sr-only">Search Content</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search modules, topics, protocols..."
            className="w-full pl-10 pr-4 py-2 text-base rounded-lg border-2 border-border focus:border-primary transition-colors"
            aria-label="Search content"
          />
        </div>
      </section>

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

      <section>
        <h2 className="text-2xl font-semibold mb-4 font-headline">Spotlight On</h2>
        <Card className="bg-secondary/30 border-secondary/50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-start space-x-4 pb-3">
                <div className="p-3 rounded-full bg-accent/10 text-accent mt-1">
                    <spotlightModule.icon className="h-7 w-7" />
                </div>
                <div>
                    <CardTitle className="text-xl font-headline text-accent-foreground">{spotlightModule.title}</CardTitle>
                    <CardDescription className="text-accent-foreground/90 mt-1">
                        {spotlightModule.description}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                 {/* Placeholder for potential image or more details */}
            </CardContent>
            <div className="p-4 pt-0">
                <Link href={spotlightModule.href} passHref>
                  <Button className="w-full md:w-auto" variant="default">
                    View {spotlightModule.title}
                  </Button>
                </Link>
            </div>
        </Card>
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
