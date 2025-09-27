"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, User, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const contactDetails = [
    {
        icon: <User className="h-6 w-6 text-accent" />,
        label: "CEO",
        value: "Faizan",
    },
    {
        icon: <Phone className="h-6 w-6 text-accent" />,
        label: "Phone",
        value: "+44 7586 988198",
        href: "tel:+447586988198"
    },
    {
        icon: <Mail className="h-6 w-6 text-accent" />,
        label: "Email",
        value: "Info@tecveq.com",
        href: "mailto:Info@tecveq.com"
    },
]

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const whatsAppNumber = "447586988198";
    const message = `Hello! I'd like to get in touch.\n\nName: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message is ready to be sent.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? Let's talk.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
                <h3 className="text-2xl font-bold font-headline">Contact Information</h3>
                <div className="space-y-6">
                    {contactDetails.map((detail) => (
                        <div key={detail.label} className="flex items-start gap-4">
                            {detail.icon}
                            <div>
                                <p className="font-semibold text-foreground">{detail.label}</p>
                                {detail.href ? (
                                    <a href={detail.href} className="text-muted-foreground hover:text-accent transition-colors">{detail.value}</a>
                                ) : (
                                    <p className="text-muted-foreground">{detail.value}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl><Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} /></FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? "Preparing..." : <> <Send /> Send via WhatsApp </>}
                        </Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
