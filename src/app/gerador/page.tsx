import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import GeneratorBenefitsGrid from "@/components/generator/GeneratorBenefitsGrid";
import GeneratorHowItWorks from "@/components/generator/GeneratorHowItWorks";
import EnergySources from "@/components/generator/EnergySources";
import GeneratorTestimonials from "@/components/generator/GeneratorTestimonials";
import GeneratorNumbers from "@/components/generator/GeneratorNumbers";
import GeneratorForm from "@/components/generator/GeneratorForm";
import FAQAccordion from "@/components/shared/FAQAccordion";
import GeneratorCtaBanner from "@/components/generator/GeneratorCtaBanner";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

export const metadata: Metadata = {
  title: "Gerador",
  description:
    "Maximize o retorno dos seus créditos de energia excedentes. A PagLuz conecta geradores a consumidores com transparência e eficiência.",
};

const GENERATOR_FAQS = [
  {
    question: "Qual o tamanho mínimo de usina para participar?",
    answer: "Para usinas solares, aceitamos a partir de 75 kWp de capacidade instalada. Para usinas eólicas, o mínimo é de 500 kW, e para biomassa, 1 MW. Caso sua usina tenha uma capacidade diferente, entre em contato conosco para uma análise personalizada."
  },
  {
    question: "Como funciona o processo de remuneração?",
    answer: "A partir da sua geração mensal, calculamos o valor dos créditos distribuídos, aplicamos nossa taxa de serviço (que varia de acordo com o volume e contrato) e realizamos o pagamento diretamente em sua conta bancária até o dia 15 do mês subsequente à geração."
  },
  {
    question: "É preciso fazer alguma alteração técnica na usina?",
    answer: "Não. Nosso sistema funciona através da gestão administrativa dos créditos junto à distribuidora. Apenas precisamos de acesso às informações de geração."
  },
  {
    question: "Quais são os custos para participar?",
    answer: "Não há custos de adesão ou mensalidades. Nosso modelo é baseado em uma taxa sobre os créditos efetivamente comercializados. Geralmente fica entre 10% e 15% do valor dos créditos."
  },
  {
    question: "Qual o prazo de contrato?",
    answer: "Contratos mínimos de 12 meses, com renovação automática e flexibilidade para atender às necessidades de cada gerador. A rescisão pode ocorrer com aviso prévio de 60 dias após o período mínimo."
  },
  {
    question: "Como garantem a segurança dos pagamentos?",
    answer: "Trabalhamos com consumidores pré-qualificados e análise de crédito. Mantemos um fundo garantidor para assegurar o pagamento aos geradores, mesmo em caso de inadimplência. Nosso histórico é de 100% de pagamentos em dia."
  }
];

export default function GeradorMainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Maximize o valor da sua" 
        highlight="energia" 
        description="Transforme seus créditos em maior rentabilidade. Nossa plataforma conecta sua usina a consumidores que buscam energia limpa com eficiência e transparência." 
        bgImage="/assets/images/usina-solar.jpg"
      >
        <FloatingOrbs variant="green" intensity="normal" />
      </PageHeader>
      
      <GeneratorBenefitsGrid />
      <GeneratorHowItWorks />
      <EnergySources />
      <GeneratorTestimonials />
      <GeneratorNumbers />
      <GeneratorForm />
      
      <FAQAccordion 
        title="Perguntas Frequentes" 
        subtitle="Encontre respostas para as dúvidas mais comuns sobre como funciona a PagLuz para geradores." 
        items={GENERATOR_FAQS} 
      />
      
      <GeneratorCtaBanner />
    </div>
  );
}
