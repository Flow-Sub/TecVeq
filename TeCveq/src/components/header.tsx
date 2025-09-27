import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg font-headline">Tecveq</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#services" className="transition-colors hover:text-foreground/80 text-foreground/60">Services</Link>
            <Link href="#demos" className="transition-colors hover:text-foreground/80 text-foreground/60">Demos</Link>
            <Link href="#testimonials" className="transition-colors hover:text-foreground/80 text-foreground/60">Testimonials</Link>
            <Link href="#faq" className="transition-colors hover:text-foreground/80 text-foreground/60">FAQ</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="ghost">
            <Link href="#contact">Contact</Link>
          </Button>
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex bg-accent hover:bg-accent/90">
            <Link href="#wizard">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
