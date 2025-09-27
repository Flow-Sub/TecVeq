"use client";

import { useState, useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  text: string;
  sender: "user" | "bot";
};

type DemoProps = {
  conversation: Message[];
};

export default function AutomatedAgentDemo({ conversation }: DemoProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([]); // Reset messages when conversation changes
    let messageIndex = 0;
    
    const processMessage = () => {
      if (messageIndex >= conversation.length) {
        // End of conversation, restart after a delay
        setTimeout(() => {
          setMessages([]);
          messageIndex = 0;
          processMessage();
        }, 5000);
        return;
      }
      
      const message = conversation[messageIndex];
      const isBot = message.sender === 'bot';
      const typingDelay = isBot ? 1000 + Math.random() * 500 : 200;
      const messageDelay = 1500 + message.text.length * 30;
      
      if (isBot) {
        setIsTyping(true);
      }

      setTimeout(() => {
        if (isBot) {
          setIsTyping(false);
        }
        setMessages((prev) => [...prev, message]);
        messageIndex++;
        setTimeout(processMessage, messageDelay);
      }, typingDelay);
    };

    const startTimeout = setTimeout(processMessage, 1000);

    return () => clearTimeout(startTimeout);

  }, [conversation]);

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages, isTyping]);


  return (
    <div className="flex flex-col h-[400px] bg-background rounded-lg border">
      <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-3 animate-fade-in-up",
                message.sender === "user" ? "justify-end" : ""
              )}
            >
              {message.sender === "bot" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot size={18} />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  "rounded-lg px-3 py-2 max-w-sm",
                  message.sender === "user"
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted"
                )}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              {message.sender === "user" && (
                 <Avatar className="h-8 w-8">
                    <AvatarFallback>
                        <User size={18} />
                    </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isTyping && (
             <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot size={18} />
                    </AvatarFallback>
                </Avatar>
                <div className="rounded-lg px-3 py-2 bg-muted">
                    <div className="flex items-center space-x-1">
                        <span className="h-2 w-2 bg-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 bg-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 bg-foreground rounded-full animate-pulse"></span>
                    </div>
                </div>
            </div>
          )}
        </div>
      </ScrollArea>
       <div className="p-4 border-t text-center">
        <p className="text-xs text-muted-foreground italic">
            This is an automated demonstration.
        </p>
      </div>
    </div>
  );
}
