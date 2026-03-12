import type { Metadata } from "next";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade da ${SITE_NAME}. Saiba como coletamos, usamos e protegemos seus dados pessoais.`,
};

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-dark-bg pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Política de <span className="text-gradient">Privacidade</span>
          </h1>
          <p className="text-white/30 text-sm mb-12">
            Última atualização: 12 de março de 2026
          </p>

          <div className="space-y-10 text-white/50 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Introdução</h2>
              <p>
                A {SITE_NAME} (&quot;nós&quot;, &quot;nosso&quot; ou &quot;empresa&quot;), inscrita sob a razão social correspondente, com sede em {CONTACT.location}, é responsável pelo tratamento dos dados pessoais coletados por meio deste site. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Dados Pessoais Coletados</h2>
              <p className="mb-4">Podemos coletar os seguintes dados pessoais:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white/70">Dados de identificação:</strong> nome completo, CPF ou CNPJ, e-mail, telefone.</li>
                <li><strong className="text-white/70">Dados de consumo de energia:</strong> valor da conta de luz, distribuidora, localização (cidade e estado).</li>
                <li><strong className="text-white/70">Dados de usinas (para geradores):</strong> nome da usina, tipo de energia, capacidade instalada, localização.</li>
                <li><strong className="text-white/70">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência, cookies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Finalidade do Tratamento</h2>
              <p className="mb-4">Utilizamos seus dados pessoais para as seguintes finalidades:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Realizar simulações de economia de energia.</li>
                <li>Viabilizar o contato comercial e envio de propostas.</li>
                <li>Cadastrar usinas geradoras em nossa plataforma.</li>
                <li>Melhorar a experiência de navegação no site.</li>
                <li>Enviar comunicações relevantes sobre nossos serviços.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Base Legal para o Tratamento</h2>
              <p>
                O tratamento de dados pessoais pela {SITE_NAME} é realizado com base nas seguintes hipóteses previstas na LGPD: (i) consentimento do titular; (ii) execução de contrato ou de procedimentos preliminares relacionados a contrato; (iii) cumprimento de obrigação legal ou regulatória; e (iv) legítimo interesse do controlador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Compartilhamento de Dados</h2>
              <p className="mb-4">
                Seus dados pessoais poderão ser compartilhados com:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white/70">Distribuidoras de energia:</strong> para processamento de créditos de energia.</li>
                <li><strong className="text-white/70">Prestadores de serviços:</strong> como plataformas de envio de e-mail e hospedagem, que atuam como operadores de dados.</li>
                <li><strong className="text-white/70">Autoridades públicas:</strong> quando exigido por lei ou regulamentação.</li>
              </ul>
              <p className="mt-4">
                Não vendemos, alugamos ou comercializamos seus dados pessoais com terceiros para fins de marketing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Armazenamento e Segurança</h2>
              <p>
                Seus dados são armazenados em servidores seguros e protegidos por medidas técnicas e administrativas adequadas, incluindo criptografia, controle de acesso e monitoramento. Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, respeitando os prazos legais aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Direitos do Titular</h2>
              <p className="mb-4">
                Em conformidade com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Confirmação da existência de tratamento de dados.</li>
                <li>Acesso aos dados coletados.</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                <li>Portabilidade dos dados a outro fornecedor de serviço.</li>
                <li>Eliminação dos dados tratados com consentimento.</li>
                <li>Revogação do consentimento.</li>
              </ul>
              <p className="mt-4">
                Para exercer seus direitos, entre em contato conosco pelo e-mail <strong className="text-white/70">{CONTACT.email}</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">8. Cookies</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar a funcionalidade do site, analisar o tráfego e personalizar sua experiência. Você pode gerenciar as preferências de cookies através das configurações do seu navegador. A desativação de determinados cookies pode impactar a funcionalidade do site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">9. Alterações nesta Política</h2>
              <p>
                Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página com a data de atualização revisada. Recomendamos que você revise esta política periodicamente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">10. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco:
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
