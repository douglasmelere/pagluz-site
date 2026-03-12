"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  // Lock body scroll when modal is open
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

  // Close on Escape key
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 lg:top-10 lg:right-10 p-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-all duration-300 z-10"
            aria-label="Fechar vídeo"
          >
            <X size={32} />
          </button>

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-brand-green/10"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the video itself
          >
            <video
              src={videoSrc}
              controls
              autoPlay
              controlsList="nodownload"
              className="w-full h-full object-cover"
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
