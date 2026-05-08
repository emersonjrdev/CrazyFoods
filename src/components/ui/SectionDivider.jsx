import { motion } from "framer-motion";

export default function SectionDivider({ reduceMotion }) {
  return (
    <div className="relative flex items-center justify-center py-6 sm:py-8 md:py-10 px-4" aria-hidden>
      <div className="h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-neutral-300/80 to-transparent" />
      <motion.div
        className="absolute h-2 w-2 rounded-full bg-gold-soft shadow-[0_0_24px_rgba(198,159,92,0.45)] ring-4 ring-[#faf7f2]/90"
        initial={reduceMotion ? false : { scale: 0.85, opacity: 0.6 }}
        whileInView={reduceMotion ? {} : { scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45 }}
      />
    </div>
  );
}
