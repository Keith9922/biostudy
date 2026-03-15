import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { UniversitiesMarquee } from "@/components/UniversitiesMarquee";
import { Programs } from "@/components/Programs";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { BackgroundDecorations } from "@/components/BackgroundDecorations";

export default function Index() {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundDecorations />
      <Header />
      <Hero />
      <UniversitiesMarquee />
      <Programs />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
