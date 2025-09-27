'use server';
/**
 * @fileOverview A simple chat flow that responds to user messages.
 *
 * - simpleChat - A function that takes a user message and returns a response.
 * - SimpleChatInput - The input type for the simpleChat function.
 * - SimpleChatOutput - The return type for the simpleChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimpleChatInputSchema = z.object({
  message: z.string().describe('The user message.'),
});
export type SimpleChatInput = z.infer<typeof SimpleChatInputSchema>;

const SimpleChatOutputSchema = z.object({
  response: z.string().describe('The AI response.'),
});
export type SimpleChatOutput = z.infer<typeof SimpleChatOutputSchema>;

export async function simpleChat(input: SimpleChatInput): Promise<SimpleChatOutput> {
  return simpleChatFlow(input);
}

const simpleChatFlow = ai.defineFlow(
  {
    name: 'simpleChatFlow',
    inputSchema: SimpleChatInputSchema,
    outputSchema: SimpleChatOutputSchema,
  },
  async input => {
    const {text} = await ai.generate({
      prompt: `You are a helpful AI assistant. Respond to the user's message: ${input.message}`,
      model: 'googleai/gemini-2.5-flash',
    });
    return {response: text};
  }
);
