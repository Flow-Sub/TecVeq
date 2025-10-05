import AnimatedTagline from './animated-tagline';
import Link from 'next/link';
import { ArrowRight, Bot, BrainCircuit, Code } from 'lucide-react';
import DarkVeil from './dark-veil';

export default async function HeroSection() {
  const tagline = "Automate. Innovate. Dominate. — The Tecveq Way.";
  // Use fallback animation directly, removing API key dependency
  const animatedTaglineContent = `<span style='animation: fadeIn 1s ease-in-out;'>Automate.</span> <span style='animation: fadeIn 1.5s ease-in-out;'>Innovate.</span> <span style='animation: fadeIn 2s ease-in-out;'>Dominate.</span>`;

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-background relative overflow-hidden min-h-screen flex items-center">
      {/* DarkVeil background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil 
          hueShift={30}
          noiseIntensity={0.1}
          scanlineIntensity={0.2}
          speed={0.5}
          scanlineFrequency={10}
          warpAmount={0.1}
          resolutionScale={1}
        />
      </div>
      
      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-background/70 dark:bg-background/80 z-0"></div> */}

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Branding with prominent "V" */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            <span className="text-foreground">Tec</span>
            <span className="text-primary relative inline-block">
              V
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full transform scale-x-0 animate-pulse"></span>
            </span>
            <span className="text-foreground">eq</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-headline mb-8">
            <AnimatedTagline content={animatedTaglineContent} />
          </h2>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            We build cutting-edge IT solutions to propel your business into the future.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Brutalist buttons */}
          <Link href="#contact" className="brutalist-button">
            <div className="button-text">
              <span>Start a</span>
              <span>Project</span>
            </div>
          </Link>
          <Link href="#services" className="brutalist-button">
            <div className="button-text">
              <span>Explore</span>
              <span>Services</span>
            </div>
          </Link>
        </div>
        <div className="relative mt-16 flex justify-center gap-8 md:gap-12 animate-fade-in-up" style={{animationDelay: '1s', animationFillMode: 'forwards', opacity: 0}}>
          <Bot className="h-12 w-12 text-primary/80" />
          <BrainCircuit className="h-12 w-12 text-primary/80" />
          <Code className="h-12 w-12 text-primary/80" />
        </div>
      </div>

      {/* Brutalist button styles */}
      <style jsx global>{`
        .brutalist-button {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          width: 169px;
          height: 60px;
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
          text-decoration: none;
          font-family: var(--font-headline), Arial, sans-serif;
          font-weight: bold;
          border: 3px solid hsl(var(--foreground));
          outline: 3px solid hsl(var(--background));
          box-shadow: 6px 6px 0 hsl(var(--primary));
          transition: all 0.1s ease-out;
          padding: 0 15px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .brutalist-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            hsla(var(--foreground) / 0.8),
            transparent
          );
          z-index: 1;
          transition: none;
          /* Initially hide the pseudo-element */
          opacity: 0;
        }

        @keyframes slide {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .brutalist-button:hover::before {
          /* Show the pseudo-element on hover */
          opacity: 1;
          animation: slide 2s infinite;
        }

        .brutalist-button:hover {
          transform: translate(-4px, -4px);
          box-shadow: 10px 10px 0 hsl(var(--foreground));
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
        }

        @keyframes slide {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .brutalist-button:active {
          transform: translate(4px, 4px);
          box-shadow: 0px 0px 0 hsl(var(--primary));
          background-color: hsl(var(--foreground));
          color: hsl(var(--background));
          border-color: hsl(var(--foreground));
        }

        .button-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
          transition: transform 0.2s ease-out;
          position: relative;
          z-index: 1;
        }

        .brutalist-button:hover .button-text {
          transform: skew(-5deg);
        }

        .brutalist-button:active .button-text {
          transform: skew(5deg);
        }

        .button-text span:first-child {
          font-size: 11px;
          text-transform: uppercase;
        }

        .button-text span:last-child {
          font-size: 16px;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  );
}