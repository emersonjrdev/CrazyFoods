import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IconChevronLeft, IconChevronRight, IconStar } from "../ui/Icons";

export default function Testimonials({ items }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const n = items.length;

  const next = useCallback(() => setI((v) => (v + 1) % n), [n]);
  const prev = useCallback(() => setI((v) => (v - 1 + n) % n), [n]);

  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(next, 7200);
    return () => clearInterval(id);
  }, [next, reduce]);

  const t = items[i];

  return (
    <section
      id="depoimentos"
      className="scroll-mt-[5.5rem] relative bg-ink py-16 text-white sm:scroll-mt-28 sm:py-20 md:py-28"
      aria-labelledby="heading-depoimentos"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(232,189,201,0.18),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grain-light opacity-[0.12] mix-blend-overlay"
        aria-hidden
      />

      <div className="relative mx-auto max-w-content-ultra px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/50">
            Confiança
          </p>
          <h2
            id="heading-depoimentos"
            className="mt-2 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl"
          >
            Depoimentos em foco
          </h2>
          <p className="mt-3 max-w-lg text-sm text-white/62 sm:text-base">
            Relatos de quem vive a experiência completa — do briefing à entrega.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white backdrop-blur-md transition hover:bg-white/14"
              aria-label="Depoimento anterior"
            >
              <IconChevronLeft />
            </button>

            <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.07] p-6 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:min-h-[220px] sm:p-8 md:p-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={t.nome}
                  initial={reduce ? false : { opacity: 0, x: 16 }}
                  animate={reduce ? {} : { opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: -16 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="m-0"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {[...Array(t.rating)].map((_, r) => (
                      <IconStar key={r} className="h-4 w-4 text-gold-soft" />
                    ))}
                  </div>
                  <blockquote className="mt-4 font-display text-xl leading-snug text-white/95 sm:text-2xl">
                    “{t.texto}”
                  </blockquote>
                  <figcaption className="mt-6 flex flex-col gap-0.5 text-left text-sm text-white/55">
                    <span className="font-semibold text-white/88">{t.nome}</span>
                    <span>{t.role}</span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white backdrop-blur-md transition hover:bg-white/14"
              aria-label="Próximo depoimento"
            >
              <IconChevronRight />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Indicadores">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === i}
                aria-label={`Ir para depoimento ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-gold-soft" : "w-1.5 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
