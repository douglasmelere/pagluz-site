import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EMAILJS_GENERATOR_TEMPLATE_ID } from './constants';

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  consumption: string;
}

export interface GeneratorEmailData {
  nome: string;
  email: string;
  telefone: string;
  cargo: string;
  nome_usina?: string;
  tipo_energia: string;
  capacidade_kw: string;
  estado_usina: string;
  cidade_usina: string;
  distribuidora_energia: string;
  mensagem_adicional?: string;
}

/**
 * Sends a simulation request email using EmailJS.
 */
export async function sendSimulationEmail(data: EmailData): Promise<boolean> {
  try {
    const templateParams = {
      from_name: data.name,
      to_name: "Equipe PagLuz", // Can be dynamic or static
      name: data.name,
      email: data.email,
      phone: data.phone,
      consumption: data.consumption,
      message: `Nova solicitação de simulação. Consumo médio: R$ ${data.consumption}`,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return response.status === 200;
  } catch (error) {
    console.error("Failed to send simulation email:", error);
    return false;
  }
}

/**
 * Sends a generator registration email using EmailJS.
 */
export async function sendGeneratorEmail(data: GeneratorEmailData): Promise<boolean> {
  try {
    const templateParams = {
      nome_responsavel: data.nome,
      email_responsavel: data.email,
      telefone_responsavel: data.telefone,
      cargo_responsavel: data.cargo,
      nome_usina: data.nome_usina || 'Não informado',
      tipo_energia: data.tipo_energia,
      capacidade_kw: data.capacidade_kw,
      estado_usina: data.estado_usina,
      cidade_usina: data.cidade_usina,
      distribuidora_energia: data.distribuidora_energia,
      mensagem_adicional: data.mensagem_adicional || '',
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_GENERATOR_TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return response.status === 200;
  } catch (error) {
    console.error("Failed to send generator registration email:", error);
    return false;
  }
}
