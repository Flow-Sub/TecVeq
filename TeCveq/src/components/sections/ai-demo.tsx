"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, BarChart2, Briefcase } from "lucide-react";
import AutomatedAgentDemo from "./automated-agent-demo";

const supportConversation = [
  { sender: "user", text: "I'm having trouble with my recent order. It hasn't arrived yet." },
  { sender: "bot", text: "I'm sorry to hear that. Could you please provide your order number?" },
  { sender: "user", text: "Sure, it's #12345." },
  { sender: "bot", text: "Thank you. I see your order was shipped two days ago and is currently in transit. It's expected to be delivered by tomorrow evening." },
  { sender: "user", text: "Oh, okay. Thanks for the update!" },
  { sender: "bot", text: "You're welcome! Is there anything else I can assist you with today?" },
];

const analyticsConversation = [
  { sender: "user", text: "Can you analyze our sales data for the last quarter and highlight key trends?" },
  { sender: "bot", text: "Of course. I'm accessing the sales data now. One moment." },
  { sender: "bot", text: "Analysis complete. The data shows a 15% increase in sales, primarily driven by the new product line. However, there's a slight dip in performance in the western region." },
  { sender: "user", text: "Interesting. Can you generate a report with visualizations?" },
  { sender: "bot", text: "Certainly. I've generated a full report with charts and sent it to your email." },
];

const hrConversation = [
    { sender: "user", text: "I'm a new hire starting next week. What do I need to do?" },
    { sender: "bot", text: "Welcome aboard! I'm here to help you get started. I've just sent the initial onboarding documents to your email. Please review and sign them electronically." },
    { sender: "user", text: "Done. What's next?" },
    { sender: "bot", text: "Great. I've now enrolled you in the mandatory 'Welcome to the Company' training course. You can access it through your employee dashboard. Your first-week schedule is also available there." },
    { sender: "user", text: "Perfect, thank you!" },
];


const demos = [
  {
    value: "support",
    icon: <MessageSquare className="mr-2 h-4 w-4"/>,
    title: "AI Support Agent",
    description: "An AI-powered chatbot that provides instant, 24/7 customer support, resolves queries, and escalates complex issues.",
    details: "Watch how our AI agent understands natural language, accesses knowledge bases, and provides personalized responses to customer inquiries in real-time. Reduces response times by 90%.",
    component: <AutomatedAgentDemo conversation={supportConversation} />,
  },
  {
    value: "analytics",
    icon: <BarChart2 className="mr-2 h-4 w-4"/>,
    title: "Data Analytics Agent",
    description: "An AI agent that processes vast datasets, identifies trends, and generates actionable insights and reports.",
    details: "This demo showcases the agent's ability to connect to multiple data sources, perform complex analyses, and create visualizations on the fly. Empowers data-driven decision making.",
    component: <AutomatedAgentDemo conversation={analyticsConversation} />
  },
  {
    value: "hr",
    icon: <Briefcase className="mr-2 h-4 w-4"/>,
    title: "HR Onboarding Agent",
    description: "An automated assistant that guides new hires through the onboarding process, from paperwork to training.",
    details: "See how the agent personalizes the onboarding journey, answers common questions, and ensures a smooth and engaging experience for new employees, improving retention.",
    component: <AutomatedAgentDemo conversation={hrConversation} />
  }
];

export default function AiDemo() {
  return (
    <section id="demos" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,249,255,0.1),transparent_30%)]"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">AI in Action</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore interactive demos of our smart AI agents and see their capabilities firsthand.
          </p>
        </div>

        <Tabs defaultValue="support" className="mt-16 max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-background/50 backdrop-blur-sm">
            {demos.map(demo => (
              <TabsTrigger key={demo.value} value={demo.value}>
                {demo.icon} {demo.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {demos.map(demo => (
            <TabsContent key={demo.value} value={demo.value}>
              <Card className="mt-4 bg-background/80 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle>{demo.title}</CardTitle>
                  <CardDescription>{demo.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {demo.component}
                  <p className="text-sm text-muted-foreground">{demo.details}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
