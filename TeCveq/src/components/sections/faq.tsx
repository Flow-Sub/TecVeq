import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What kind of automation services do you provide?",
      answer: "We specialize in creating custom automation workflows using platforms like n8n, Zapier, and Make. Whether it's integrating apps, automating data entry, or streamlining marketing campaigns, we can build a solution for you."
    },
    {
      question: "How do you integrate AI into existing systems?",
      answer: "We can connect powerful AI models (like those from Google, OpenAI, or Anthropic) to your current software. This enables features like AI-powered customer support, data analysis, content generation, and more, directly within your existing tools."
    },
    {
      question: "What is the typical process for a web or mobile app project?",
      answer: "Our process starts with a discovery phase to understand your goals. We then move to UI/UX design, followed by development, testing, and launch. We work collaboratively with you at every stage to ensure the final product meets your vision."
    },
    {
      question: "How long does it take to build an automation or AI solution?",
      answer: "The timeline varies depending on the complexity. Simple automations can be set up in a few days, while complex AI integrations or app development projects can take several weeks to months. We provide a detailed timeline after our initial consultation."
    },
    {
        question: "Do you offer support after the project is completed?",
        answer: "Yes, we offer various support and maintenance packages to ensure your solutions continue to run smoothly. We can provide ongoing monitoring, updates, and assistance as your business needs evolve."
    }
  ]
  
  export default function Faq() {
    return (
      <section id="faq" className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions? We've got answers.
            </p>
          </div>
  
          <Accordion type="single" collapsible className="w-full mt-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  