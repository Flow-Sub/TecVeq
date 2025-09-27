'use server';

/**
 * @fileOverview Animates the hero section tagline using GenAI to create engaging transitions.
 *
 * - generateAnimatedTagline - A function that generates an animated tagline for the hero section.
 * - AnimatedTaglineInput - The input type for the generateAnimatedTagline function.
 * - AnimatedTaglineOutput - The return type for the generateAnimatedTagline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnimatedTaglineInputSchema = z.object({
  tagline: z
    .string()
    .describe('The tagline to animate.'),
});

type AnimatedTaglineInput = z.infer<typeof AnimatedTaglineInputSchema>;

const AnimatedTaglineOutputSchema = z.object({
  animatedTagline: z
    .string()
    .describe('The animated tagline with engaging transitions.'),
});

export type AnimatedTaglineOutput = z.infer<typeof AnimatedTaglineOutputSchema>;

export async function generateAnimatedTagline(input: AnimatedTaglineInput): Promise<AnimatedTaglineOutput> {
  return heroSectionAnimationFlow(input);
}

const heroSectionAnimationPrompt = ai.definePrompt({
  name: 'heroSectionAnimationPrompt',
  input: {schema: AnimatedTaglineInputSchema},
  output: {schema: AnimatedTaglineOutputSchema},
  prompt: `You are an expert in creating engaging and dynamic animations for website hero sections.

  Based on the given tagline, generate an animated version with smooth transitions and attention-grabbing effects.

  Tagline: {{{tagline}}}

  Consider the following animation styles:
  - Fade-in/out effects
  - Slide-in/out effects
  - Zoom-in/out effects
  - Typing animation
  - Color transitions

  Return only the animated tagline, use HTML tags and CSS styles to control animation such as <span style='animation: fadeIn 1s'>Automate.</span>. Limit to only use inline styles.
  `,
});

const heroSectionAnimationFlow = ai.defineFlow(
  {
    name: 'heroSectionAnimationFlow',
    inputSchema: AnimatedTaglineInputSchema,
    outputSchema: AnimatedTaglineOutputSchema,
  },
  async input => {
    const {output} = await heroSectionAnimationPrompt(input);
    return output!;
  }
);
