import { Bot, BrainCircuit, Smartphone, Cloud, PenTool, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    icon: <Bot className="h-8 w-8 text-accent" />,
    title: "Automation Tools",
    description: "Streamline workflows with n8n, Zapier, and Make. We build robust systems that save time and money.",
    imageId: "automation-service",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: "AI Integrations",
    description: "Leverage AI power. We integrate smart agents and models into your existing infrastructure to unlock new capabilities.",
    imageId: "ai-service",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    title: "Web & Mobile Apps",
    description: "From concept to launch, we design and develop stunning, high-performance web and mobile applications.",
    imageId: "dev-service",
  },
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: "UI/UX Design",
    description: "Create intuitive and beautiful user experiences that captivate your audience and drive engagement.",
    imageId: "ux-service",
  },
  {
    icon: <Cloud className="h-8 w-8 text-accent" />,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure to power your applications and data with high availability.",
    imageId: "cloud-service",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: "Cybersecurity",
    description: "Protect your digital assets with cutting-edge security protocols, threat detection, and risk management.",
    imageId: "security-service",
  },
];

export default function ServiceShowcase() {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,249,255,0.05),transparent_30%)]"></div>
      
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a suite of services designed for the new era of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service) => {
            const image = PlaceHolderImages.find(p => p.id === service.imageId);
            return (
              <div key={service.title} className="service-card">
                <div className="card-inner">
                  {image && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {service.icon}
                      <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modern card animation styles */}
      <style jsx global>{`
        .service-card {
          position: relative;
          perspective: 1000px;
        }

        .card-inner {
          position: relative;
          background: hsl(var(--card));
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.1);
          transform-style: preserve-3d;
          height: 100%;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, hsl(var(--primary)/0.3), hsl(var(--accent)/0.3), hsl(var(--primary)/0.3));
          border-radius: 18px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover .card-inner {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.2);
        }

        .service-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}