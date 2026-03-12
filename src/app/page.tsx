import HeroSection from "@/components/home/HeroSection";
import SavingsShowcase from "@/components/home/SavingsShowcase";
import Calculator from "@/components/home/Calculator";
import ProcessSteps from "@/components/home/ProcessSteps";
import VideoSection from "@/components/home/VideoSection";
import FeaturesBento from "@/components/home/FeaturesBento";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <SavingsShowcase />
      <FeaturesBento />
      <Calculator />
      <ProcessSteps />
      <VideoSection />
      <ContactForm />
    </div>
  );
}
