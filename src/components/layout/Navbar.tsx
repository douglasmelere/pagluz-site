"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useAuth } from "@/hooks/useAuth";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(50);
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-bg/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.04),0_4px_12px_rgba(0,0,0,0.3)] py-3"
            : "bg-transparent py-5"
        }`}
        aria-label="Navegação principal"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="PagLuz - Ir para Home">
            <Image
              src="/assets/logo.svg"
              alt="Logo PagLuz"
              width={160}
              height={48}
              className="h-10 md:h-8 lg:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 xl:px-4 py-2 text-[13px] xl:text-[15px] font-medium whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:rounded-md ${
                    isActive
                      ? "text-brand-green"
                      : "text-white/90 hover:text-brand-green"
                  }`}
                >
                  {link.label}
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand-green transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="/newsletter"
              className={`relative px-3 xl:px-4 py-2 text-[13px] xl:text-[15px] font-bold whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:rounded-md flex items-center gap-1 ${
                pathname === '/newsletter'
                  ? "text-brand-green"
                  : "text-brand-green/90 hover:text-brand-green"
              }`}
            >
              Newsletter IA
            </Link>

            <Link
              href={user ? "/dashboard/newsletter" : "/login"}
              className="ml-1 xl:ml-2 relative px-3 xl:px-4 py-2 text-[13px] xl:text-[15px] font-medium whitespace-nowrap transition-colors duration-300 text-white/90 hover:text-white border border-white/20 rounded-lg hover:bg-white/10"
            >
              {user ? "Minha Conta" : "Entrar"}
            </Link>

            {/* CTA Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 xl:ml-4 px-4 xl:px-6 py-2.5 bg-brand-green text-brand-blue-dark font-semibold rounded-lg text-[13px] xl:text-[15px] whitespace-nowrap transition-all duration-300 hover:bg-brand-green-hover hover:shadow-lg hover:shadow-brand-green/20 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
            >
              Solicitar Simulação
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-white hover:text-brand-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:rounded-md"
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={28} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
