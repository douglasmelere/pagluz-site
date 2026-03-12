"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 md:w-[60px] md:h-[60px] bg-[#25D366] text-white rounded-full shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#20BA5A] hover:shadow-xl hover:-translate-y-1 hover:scale-105"
        aria-label="Fale conosco pelo WhatsApp"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
        
        <MessageCircle size={28} className="relative z-10 fill-white" />

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-semibold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg"
            >
              Fale conosco
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
            </motion.span>
          )}
        </AnimatePresence>
      </a>
    </div>
  );
}
