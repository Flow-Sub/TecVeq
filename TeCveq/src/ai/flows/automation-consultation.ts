'use server';

/**
 * @fileOverview Provides AI-powered consultation for choosing the right automation platforms.
 *
 * - automationConsultation - A function that provides automation platform recommendations.
 * - AutomationConsultationInput - The input type for the automationConsultation function.
 * - AutomationConsultationOutput - The return type for the automationConsultation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomationConsultationInputSchema = z.object({
  businessRequirements: z
    .string()
    .describe('Description of the business requirements for automation.'),
});
type AutomationConsultationInput = z.infer<typeof AutomationConsultationInputSchema>;

const AutomationConsultationOutputSchema = z.object({
  platformRecommendation: z
    .string()
    .describe('The recommended automation platform and justification.'),
});
export type AutomationConsultationOutput = z.infer<typeof AutomationConsultationOutputSchema>;

export async function automationConsultation(
  input: AutomationConsultationInput
): Promise<AutomationConsultationOutput> {
  return automationConsultationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automationConsultationPrompt',
  input: {schema: AutomationConsultationInputSchema},
  output: {schema: AutomationConsultationOutputSchema},
  prompt: `You are an expert in automation platforms such as n8n, Zapier, and Make.
Based on the business requirements provided, recommend the most suitable automation platform and provide a brief justification.

Business Requirements: {{{businessRequirements}}}

Recommendation:`, // Ensure the output is concise and directly answers the query.
});

const automationConsultationFlow = ai.defineFlow(
  {
    name: 'automationConsultationFlow',
    inputSchema: AutomationConsultationInputSchema,
    outputSchema: AutomationConsultationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
