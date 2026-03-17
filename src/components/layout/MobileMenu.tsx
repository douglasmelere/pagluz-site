"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Smartphone, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SOCIAL_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { useAuth } from "@/hooks/useAuth";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { user } = useAuth();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
          className="lg:hidden fixed inset-0 z-50 flex flex-col bg-dark-bg/98 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <Link href="/" onClick={onClose} aria-label="PagLuz Home">
              <Image
                src="/assets/logo.svg"
                alt="Logo PagLuz"
                width={120}
                height={36}
                className="h-10 w-auto"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-white hover:text-brand-green transition-all duration-300 hover:rotate-90"
              aria-label="Fechar menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col mt-6 px-6 space-y-1" aria-label="Navegação mobile">
            {NAV_LINKS.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block w-full py-4 px-5 border-l-4 rounded-r-lg transition-all duration-200 text-lg font-medium ${
                      isActive
                        ? "border-brand-green bg-white/5 text-brand-green"
                        : "border-transparent text-white hover:border-brand-green hover:text-brand-green hover:bg-white/5"
                    }`}
                  >
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + NAV_LINKS.length * 0.05 }}
            >
              <Link
                href="/newsletter"
                onClick={onClose}
                className={`block w-full py-4 px-5 border-l-4 rounded-r-lg transition-all duration-200 text-lg font-bold ${
                  pathname === '/newsletter'
                    ? "border-brand-green bg-white/5 text-brand-green"
                    : "border-transparent text-brand-green/90 hover:border-brand-green hover:text-brand-green hover:bg-white/5"
                }`}
              >
                Newsletter IA
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + (NAV_LINKS.length + 1) * 0.05 }}
            >
              <Link
                href={user ? "/dashboard/newsletter" : "/login"}
                onClick={onClose}
                className="block w-full py-4 px-5 border-l-4 rounded-r-lg transition-all duration-200 text-lg font-medium border-transparent text-white hover:border-white/40 hover:text-white hover:bg-white/5"
              >
                {user ? "Minha Conta" : "Entrar / Login"}
              </Link>
            </motion.div>

            <div className="w-full h-px bg-white/10 my-4" />

            {/* Download App (placeholder) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
            >
              <button className="w-full flex items-center justify-between py-4 px-5 bg-white/5 text-white/80 hover:bg-white/10 rounded-lg transition-colors text-lg">
                <span>Baixar Aplicativo</span>
                <Smartphone size={20} />
              </button>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block w-full py-4 px-5 bg-brand-green text-brand-blue-dark font-bold rounded-lg text-center text-lg transition-all hover:bg-brand-green-hover mt-2"
              >
                Solicitar Simulação
              </a>
            </motion.div>
          </nav>

          {/* Footer */}
          <footer className="mt-auto p-6 border-t border-white/10">
            <div className="flex justify-center gap-8 mb-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-white/40 text-center text-sm">
              © {new Date().getFullYear()} PagLuz
            </p>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
