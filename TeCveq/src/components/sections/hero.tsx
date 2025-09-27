import AnimatedTagline from './animated-tagline';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, BrainCircuit, Code } from 'lucide-react';

export default async function HeroSection() {
  const tagline = "Automate. Innovate. Dominate. — The Tecveq Way.";
  // Use fallback animation directly, removing API key dependency
  const animatedTaglineContent = `<span style='animation: fadeIn 1s ease-in-out;'>Automate.</span> <span style='animation: fadeIn 1.5s ease-in-out;'>Innovate.</span> <span style='animation: fadeIn 2s ease-in-out;'>Dominate.</span>`;

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,249,255,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_center,rgba(125,249,255,0.1),transparent_40%)]"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            <AnimatedTagline content={animatedTaglineContent} />
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            We build cutting-edge IT solutions to propel your business into the future.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contact">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>
        <div className="relative mt-16 flex justify-center gap-8 md:gap-12 animate-fade-in-up" style={{animationDelay: '1s', animationFillMode: 'forwards', opacity: 0}}>
          <Bot className="h-12 w-12 text-primary/80" />
          <BrainCircuit className="h-12 w-12 text-primary/80" />
          <Code className="h-12 w-12 text-primary/80" />
        </div>
      </div>
    </section>
  );
}