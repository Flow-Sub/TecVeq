import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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

        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full max-w-7xl mx-auto mt-16"
        >
          <CarouselContent>
            {services.map((service) => {
              const image = PlaceHolderImages.find(p => p.id === service.imageId);
              return (
                <CarouselItem key={service.title} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/60 dark:bg-card/70 backdrop-blur-xl rounded-2xl">
                      {image && (
                         <div className="aspect-video overflow-hidden border-b">
                           <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                              data-ai-hint={image.imageHint}
                            />
                         </div>
                      )}
                      <CardHeader className="flex-row items-center gap-4 space-y-0">
                        {service.icon}
                        <div className="flex-1">
                          <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 pt-0">
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4" />
          <CarouselNext className="hidden sm:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
