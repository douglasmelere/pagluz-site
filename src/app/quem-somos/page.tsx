import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import WhoWeAreStory from "@/components/who-am-i/WhoWeAreStory";
import Timeline from "@/components/who-am-i/Timeline";
import TeamSection from "@/components/who-am-i/TeamSection";
import ValuesGrid from "@/components/who-am-i/ValuesGrid";
import ImpactCounters from "@/components/who-am-i/ImpactCounters";
import Testimonials from "@/components/shared/Testimonials";
import CtaBanner from "@/components/shared/CtaBanner";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a história e missão da PagLuz, conectando geradores a consumidores com energia limpa e economia de até 30% na sua conta.",
};

export default function QuemSomosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Quem" 
        highlight="Somos"
        description="Conheça nossa história, visão e os valores que guiam nosso compromisso em transformar o mercado de energia no Brasil."
      >
        <FloatingOrbs variant="warm" intensity="normal" />
      </PageHeader>
      
      <WhoWeAreStory />
      <Timeline />
      <ValuesGrid />
      <ImpactCounters />
      <TeamSection />
      <Testimonials />
      <CtaBanner />
    </div>
  );
}
