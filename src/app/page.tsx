import HeroSection from "@/components/home/HeroSection";
import SavingsShowcase from "@/components/home/SavingsShowcase";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import Calculator from "@/components/home/Calculator";
import ProcessSteps from "@/components/home/ProcessSteps";
import VideoSection from "@/components/home/VideoSection";
import FeaturesBento from "@/components/home/FeaturesBento";
import ContactForm from "@/components/home/ContactForm";

export const revalidate = 86400; // Validade do cache: 24 horas

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <SavingsShowcase />
      <ServicesShowcase />
      <FeaturesBento />
      <Calculator />
      <ProcessSteps />
      <VideoSection />
      <ContactForm />
    </div>
  );
}
