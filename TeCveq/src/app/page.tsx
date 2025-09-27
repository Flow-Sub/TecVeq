import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero';
import ServiceShowcase from '@/components/sections/services';
import FrameworksStrip from '@/components/sections/frameworks-strip';
import AiDemo from '@/components/sections/ai-demo';
import AutomationWizard from '@/components/sections/automation-wizard';
import Testimonials from '@/components/sections/testimonials';
import Faq from '@/components/sections/faq';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServiceShowcase />
        <FrameworksStrip />
        <AiDemo />
        <AutomationWizard />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
