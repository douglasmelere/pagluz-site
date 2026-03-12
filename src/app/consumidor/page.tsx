import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ConsumerBenefitsGrid from "@/components/consumer/ConsumerBenefitsGrid";
import ConsumerHowItWorks from "@/components/consumer/ConsumerHowItWorks";
import ComparisonTable from "@/components/shared/ComparisonTable";
import ConsumerNumbers from "@/components/consumer/ConsumerNumbers";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CtaBanner from "@/components/shared/CtaBanner";
import Testimonials from "@/components/shared/Testimonials";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

export const metadata: Metadata = {
  title: "Consumidor",
  description:
    "Reduza sua conta de luz em até 30% sem instalação. Descubra como a PagLuz conecta você a energia limpa com economia garantida todo mês.",
};

const CONSUMER_FAQS = [
  {
    question: "Como posso economizar na conta de luz sem instalar painéis solares?",
    answer: "A PagLuz funciona conectando você a geradores de energia renovável. Através do sistema de geração distribuída, você recebe créditos de energia renovável que são abatidos da sua conta, gerando economia sem necessidade de instalar equipamentos em sua residência ou empresa."
  },
  {
    question: "Preciso mudar de companhia de energia elétrica?",
    answer: "Não! Você continua recebendo energia da mesma distribuidora atual (Celesc, por exemplo). A PagLuz atua na gestão dos créditos de energia que são abatidos da sua conta, mas a infraestrutura e o fornecimento continuam sendo feitos pela sua distribuidora local."
  },
  {
    question: "Quanto tempo leva para começar a economizar?",
    answer: "O processo completo leva, em média, de 30 a 60 dias, dependendo da sua distribuidora local. Após esse período, sua conta já virá com o desconto aplicado automaticamente. O prazo inclui a análise do seu consumo, aprovação da proposta, assinatura do contrato e processamento junto à distribuidora."
  },
  {
    question: "Existe taxa de adesão ou algum custo escondido?",
    answer: "Não há nenhuma taxa de adesão ou custos escondidos. Nosso modelo de negócio é baseado na credibilidade, confiabilidade e segurança. Garantimos que o processo ocorra de modo transparente e legal. Toda nossa operação é amparada pela lei nº 14.300, de 6 de janeiro de 2022."
  },
  {
    question: "A energia realmente vem de fontes renováveis?",
    answer: "Sim! Todos os créditos de energia são provenientes de usinas certificadas de energia solar, eólica ou de biomassa. Trabalhamos apenas com geradores que seguem todas as normas ambientais e regulamentações do setor elétrico brasileiro, garantindo que sua economia tenha um impacto positivo para o planeta."
  },
  {
    question: "Existe um consumo mínimo para poder participar?",
    answer: "Para consumidores residenciais, o valor mínimo da conta mensal é de R$ 350. No entanto, avaliamos cada caso individualmente, então não deixe de solicitar uma simulação mesmo que sua conta seja um pouco menor que esses valores. Lembramos que proporcionamos esse benefício apenas para consumidores de Baixa Tensão (Grupo B)."
  }
];

export default function ConsumidorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Benefícios para" 
        highlight="Consumidores" 
        description="Conectamos você à energia renovável sem instalação de equipamentos. Apenas benefícios e economia garantida, sem complicações."
        bgImage="/assets/images/prédio.jpg"
      >
        <FloatingOrbs variant="blue" intensity="normal" />
      </PageHeader>
      
      <ConsumerBenefitsGrid />
      <ConsumerHowItWorks />
      <ComparisonTable />
      
      {/* Resued Testimonials since the quotes are the same on the legacy file (Shell, PontoCafe) */}
      <Testimonials />
      
      <ConsumerNumbers />
      
      <FAQAccordion 
        title="Perguntas Frequentes" 
        subtitle="Encontre respostas para as dúvidas mais comuns sobre como funciona a PagLuz para consumidores." 
        items={CONSUMER_FAQS} 
      />
      
      <CtaBanner />
    </div>
  );
}
