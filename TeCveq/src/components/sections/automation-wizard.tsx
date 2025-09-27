"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { automationConsultation } from "@/ai/flows/automation-consultation";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wand2 } from "lucide-react";

const formSchema = z.object({
  businessRequirements: z.string().min(50, "Please describe your requirements in at least 50 characters."),
});

export default function AutomationWizard() {
  const [recommendation, setRecommendation] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessRequirements: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError("");
    setRecommendation("");
    try {
      const result = await automationConsultation(values);
      setRecommendation(result.platformRecommendation);
    } catch (e) {
      setError("An error occurred. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="wizard" className="py-20 md:py-28">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Automation Wizard</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Not sure which automation tool is right for you? Describe your needs, and our AI will suggest the best platform (e.g., n8n, Zapier, Make).
          </p>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Get Your Recommendation</CardTitle>
              <CardDescription>Tell us what you want to automate.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="businessRequirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Requirements</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'I need to connect my Shopify store to Google Sheets to automatically log new orders. I also want to send a welcome email via Mailchimp...'"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? "Analyzing..." : <> <Wand2 className="mr-2 h-4 w-4" /> Get Suggestion </>}
                  </Button>
                </form>
              </Form>

              {recommendation && (
                <div className="mt-6 p-4 bg-secondary rounded-lg border">
                  <h3 className="font-semibold text-foreground">Our Recommendation:</h3>
                  <p className="text-muted-foreground mt-2">{recommendation}</p>
                </div>
              )}
              {error && (
                <div className="mt-6 p-4 bg-destructive/10 text-destructive rounded-lg border border-destructive/20">
                  <h3 className="font-semibold">Error</h3>
                  <p>{error}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
