import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { NAV_LINKS, CONTACT, SOCIAL_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark-surface border-t border-dark-border text-white">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-green/[0.03] blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-blue/[0.06] blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
              {SITE_NAME}
            </h3>
            <p className="text-base text-white/40 text-center md:text-left leading-relaxed">
              Sua conta reduzida,
              <br />
              seu bolso e o planeta felizes.
            </p>
            <div className="mt-8">
              <Image
                src="/assets/logo.svg"
                alt={`Logo ${SITE_NAME}`}
                width={192}
                height={56}
                className="w-40 md:w-48 h-auto"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold font-display mb-6">
              Contato
            </h3>
            <div className="space-y-4">
              <div
                className="flex items-center gap-3 text-white/40 text-sm"
              >
                <Mail
                  size={16}
                  className="text-brand-green"
                />
                <span>{CONTACT.email}</span>
              </div>
              <a
                href={`tel:+${CONTACT.phoneRaw}`}
                className="flex items-center gap-3 text-white/40 hover:text-white transition-colors text-sm group"
              >
                <Phone
                  size={16}
                  className="text-brand-green group-hover:scale-110 transition-transform"
                />
                <span>{CONTACT.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <MapPin size={16} className="text-brand-green" />
                <span>{CONTACT.location}</span>
              </div>
            </div>
          </div>

          {/* Social + Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold font-display mb-6">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              {[
                {
                  icon: Facebook,
                  href: SOCIAL_LINKS.facebook,
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  href: SOCIAL_LINKS.instagram,
                  label: "Instagram",
                },
                {
                  icon: Linkedin,
                  href: SOCIAL_LINKS.linkedin,
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/[0.04] border border-dark-border flex items-center justify-center text-white/40 hover:text-brand-green hover:border-brand-green/30 transition-all duration-300 hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-dark-border w-full">
              <h4 className="text-sm font-medium text-white/30 uppercase tracking-wider mb-4">
                Links Rápidos
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-sm">
              © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/politica-de-privacidade"
                className="text-white/20 hover:text-white/50 transition-colors text-sm"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="text-white/20 hover:text-white/50 transition-colors text-sm"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
