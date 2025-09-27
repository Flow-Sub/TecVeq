"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "Sarah L.",
    title: "CEO, Innovate Co.",
    quote: "Tecveq transformed our operations with their automation expertise. Our efficiency has skyrocketed, and we've saved countless hours. Truly a game-changer for our business.",
    avatarId: "testimonial-1",
  },
  {
    name: "Mike R.",
    title: "CTO, FutureGadget",
    quote: "The AI agent they developed for us has revolutionized our customer support. It's smart, fast, and our customers love it. The team at Tecveq is brilliant and highly professional.",
    avatarId: "testimonial-2",
  },
  {
    name: "Emily W.",
    title: "Founder, Creative App",
    quote: "Working with Tecveq on our mobile app was a fantastic experience. They delivered a beautiful, high-quality product on time and on budget. I can't recommend them enough.",
    avatarId: "testimonial-3",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/30 dark:bg-secondary/20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're proud to have partnered with amazing companies.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatar = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col h-full justify-between">
                      <CardContent className="p-6">
                        <p className="text-muted-foreground">"{testimonial.quote}"</p>
                      </CardContent>
                      <div className="flex items-center gap-4 p-6 pt-0">
                        <Avatar>
                          {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} />}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
