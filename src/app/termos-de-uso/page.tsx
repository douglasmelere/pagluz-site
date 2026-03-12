import type { Metadata } from "next";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de Uso da ${SITE_NAME}. Leia as condições para utilização de nossos serviços e plataforma.`,
};

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-dark-bg pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Termos de <span className="text-gradient">Uso</span>
          </h1>
          <p className="text-white/30 text-sm mb-12">
            Última atualização: 12 de março de 2026
          </p>

          <div className="space-y-10 text-white/50 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o site da {SITE_NAME}, você concorda com estes Termos de Uso e com nossa Política de Privacidade. Se você não concordar com algum dos termos aqui descritos, recomendamos que não utilize nossa plataforma. O uso continuado do site constitui aceitação integral destes Termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Descrição dos Serviços</h2>
              <p className="mb-4">
                A {SITE_NAME} atua como gestora de créditos de energia renovável, conectando geradores de energia a consumidores finais por meio do sistema de geração distribuída, conforme regulamentação da ANEEL e da Lei nº 14.300/2022. Nossos serviços incluem:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Simulação de economia na conta de energia.</li>
                <li>Intermediação entre geradores de energia renovável e consumidores.</li>
                <li>Gestão administrativa dos créditos de energia junto às distribuidoras.</li>
                <li>Cadastro e gerenciamento de usinas geradoras.</li>
                <li>Suporte e atendimento ao cliente.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Elegibilidade</h2>
              <p className="mb-4">Para utilizar nossos serviços, você deve:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ter pelo menos 18 anos de idade ou possuir capacidade civil plena.</li>
                <li>Fornecer informações verdadeiras, atualizadas e completas no momento do cadastro.</li>
                <li>No caso de consumidores, possuir unidade consumidora em Baixa Tensão (Grupo B) atendida por distribuidora compatível com nosso serviço.</li>
                <li>No caso de geradores, possuir usina com capacidade mínima conforme especificado em nossa plataforma.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Obrigações do Usuário</h2>
              <p className="mb-4">Ao utilizar nossos serviços, você se compromete a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer dados corretos e verídicos.</li>
                <li>Não utilizar a plataforma para fins ilícitos ou fraudulentos.</li>
                <li>Manter a confidencialidade de informações contratuais compartilhadas.</li>
                <li>Comunicar prontamente qualquer alteração em seus dados cadastrais ou de consumo.</li>
                <li>Respeitar os direitos de propriedade intelectual da {SITE_NAME}.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Cadastro e Simulações</h2>
              <p>
                As simulações de economia disponíveis no site são estimativas baseadas nos dados fornecidos pelo usuário e em parâmetros médios de mercado. Os valores reais de economia podem variar de acordo com fatores como consumo mensal, tarifas da distribuidora, geração efetiva das usinas e condições climáticas. A realização de uma simulação não constitui oferta vinculante ou garantia de resultado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Contratos e Formalização</h2>
              <p>
                A adesão aos serviços da {SITE_NAME} será formalizada mediante contrato específico, que conterá todas as condições comerciais, prazos, obrigações das partes e demais termos aplicáveis. O presente Termo de Uso não substitui nem se sobrepõe ao contrato firmado entre as partes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo do site, incluindo mas não se limitando a textos, imagens, logotipos, ícones, fotografias, vídeos, códigos-fonte, design e identidade visual, é de propriedade exclusiva da {SITE_NAME} ou licenciado para ela, e está protegido pelas leis brasileiras de propriedade intelectual. É proibida a reprodução, distribuição, modificação ou uso comercial de qualquer conteúdo sem autorização prévia por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">8. Limitação de Responsabilidade</h2>
              <p className="mb-4">
                A {SITE_NAME} não será responsável por:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Interrupções ou falhas no fornecimento de energia pela distribuidora.</li>
                <li>Atrasos no processamento de créditos de energia decorrentes de ações de terceiros ou distribuidoras.</li>
                <li>Danos resultantes de caso fortuito ou força maior.</li>
                <li>Perdas decorrentes de informações incorretas fornecidas pelo usuário.</li>
                <li>Indisponibilidade temporária do site por manutenção ou problemas técnicos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">9. Rescisão</h2>
              <p>
                A {SITE_NAME} reserva-se o direito de suspender ou encerrar o acesso do usuário aos serviços em caso de violação destes Termos de Uso, fornecimento de informações falsas, ou comportamento que possa prejudicar outros usuários ou a operação da plataforma. A rescisão de contratos de serviço segue as condições específicas estabelecidas no contrato firmado entre as partes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">10. Alterações nos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor a partir de sua publicação nesta página. O uso continuado do site após a publicação de alterações constitui aceitação dos novos termos. Recomendamos revisar esta página periodicamente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">11. Legislação Aplicável e Foro</h2>
              <p>
                Estes Termos de Uso são regidos pela legislação da República Federativa do Brasil. Para resolver qualquer controvérsia decorrente destes Termos, fica eleito o foro da comarca de Joaçaba — SC, com renúncia de qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">12. Contato</h2>
              <p>
                Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="mt-4 bg-dark-card border border-dark-border rounded-xl p-6 space-y-2">
                <p><strong className="text-white/70">{SITE_NAME}</strong></p>
                <p>E-mail: {CONTACT.email}</p>
                <p>Telefone: {CONTACT.phone}</p>
                <p>Localização: {CONTACT.location}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
