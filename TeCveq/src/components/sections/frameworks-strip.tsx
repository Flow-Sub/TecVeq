import { cn } from "@/lib/utils";

const frameworks = [
  "Next.js",
  "TypeScript",
  "React",
  "n8n",
  "Zapier",
  "Make",
  "Tailwind CSS",
  "Genkit",
  "Google AI",
  "Firebase",
];

const FrameworkLogo = ({ name }: { name: string }) => {
  // In a real app, you'd use SVGs or images here.
  // For this demo, we'll use styled text.
  return (
    <div className="flex items-center justify-center h-16 px-8 py-2 mx-4 bg-background border rounded-lg shadow-sm whitespace-nowrap">
      <span className="text-lg font-medium text-muted-foreground">{name}</span>
    </div>
  );
};


export default function FrameworksStrip() {
  const logos = [...frameworks, ...frameworks]; // Duplicate for seamless looping

  return (
    <div className="relative w-full py-12 overflow-hidden bg-secondary/30 dark:bg-secondary/20">
      <div
        className="flex w-max"
      >
        <div className="flex items-center animate-scroll-x group-hover:animation-pause">
            {logos.map((name, index) => (
                <FrameworkLogo key={index} name={name} />
            ))}
        </div>
        <div className="flex items-center animate-scroll-x group-hover:animation-pause" aria-hidden="true">
            {logos.map((name, index) => (
                <FrameworkLogo key={index + frameworks.length} name={name} />
            ))}
        </div>
      </div>
    </div>
  );
}
