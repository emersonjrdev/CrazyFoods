import { motion, useReducedMotion } from "framer-motion";
import { IconWhatsapp } from "../ui/Icons";

export default function FloatingWhatsapp({ href }) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-[0_16px_40px_-12px_rgba(31,168,85,0.55)] ring-4 ring-white/90 sm:bottom-7 sm:right-7"
      aria-label="Abrir WhatsApp"
      initial={reduce ? false : { scale: 0 }}
      animate={reduce ? {} : { scale: 1 }}
      transition={{ delay: reduce ? 0 : 0.6, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={reduce ? {} : { scale: 1.06 }}
      whileTap={reduce ? {} : { scale: 0.96 }}
    >
      <IconWhatsapp className="h-7 w-7" />
    </motion.a>
  );
}
