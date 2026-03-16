// ===== SITE-WIDE CONSTANTS =====

export const SITE_NAME = "PagLuz";
export const SITE_TAGLINE = "Economize até 30% na sua conta de energia";
export const SITE_DESCRIPTION =
  "Reduza sua conta de luz em até 30% sem instalação. Conectamos geradores a consumidores com energia limpa e sustentável.";
export const SITE_URL = "https://pagluz.com.br";

// Contact Info
export const CONTACT = {
  email: "comercial.pagluz@gmail.com",
  phone: "(49) 99837-6140",
  phoneRaw: "5549998376140",
  location: "R. Dezesseis de Fevereiro, 148, Luzerna - SC, 89609-000",
  whatsappMessage:
    "Olá! Gostaria de saber mais sobre a Pague Minha Luz.",
} as const;

export const WHATSAPP_URL = "https://wa.me/5549998376140";
export const INSTAGRAM_URL = "https://www.instagram.com/pag.luz/";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61567151247215";

export const EMAILJS_SERVICE_ID = "service_pml";
export const EMAILJS_TEMPLATE_ID = "template_7047n9p";
export const EMAILJS_PUBLIC_KEY = "ljf-5Prw0_dPL0950";

export const EMAILJS_GENERATOR_TEMPLATE_ID = "template_omc909d";

// Social Links
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61567151247215",
  instagram: "https://www.instagram.com/pag.luz/",
  linkedin: "https://www.linkedin.com/in/pagluz-opera%C3%A7%C3%B5es-de-energia-482998366/",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Consumidor", href: "/consumidor" },
  { label: "Gerador", href: "/gerador" },
  { label: "Portal de Notícias", href: "/blog" },
] as const;

// EmailJS Config (values come from env, defaults are placeholders)
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_pml",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_wbuntn8",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "ljf-5Prw0_dPL0950",
} as const;

// WhatsApp
export function getWhatsAppUrl(message?: string): string {
  const msg = encodeURIComponent(message || CONTACT.whatsappMessage);
  return `https://wa.me/${CONTACT.phoneRaw}?text=${msg}`;
}
