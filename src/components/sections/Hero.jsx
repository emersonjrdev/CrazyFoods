import { motion, useReducedMotion } from "framer-motion";
import { IconWhatsapp } from "../ui/Icons";

export default function Hero({ waHref }) {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-32 md:min-h-[min(100svh,56rem)] 2xl:min-h-[min(88svh,52rem)]"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/jusato.jpg"
            className="absolute inset-0 hidden h-full w-full object-cover opacity-[0.55] saturate-[1.05] contrast-[1.02] md:block"
          >
            <source src="/video-background.mp4" type="video/mp4" />
          </video>
          <img
            src="/jusato.jpg"
            alt=""
            fetchPriority="high"
            decoding="async"
            width={1280}
            height={720}
            className="absolute inset-0 h-full w-full object-cover opacity-55 saturate-[1.05] md:hidden"
          />
        </div>
        {/* Overlay premium */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink via-ink/50 to-cream-100/92"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_-10%,rgba(232,189,201,0.25),transparent_50%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_120%,rgba(198,159,92,0.18),transparent_45%)]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-grain-light opacity-[0.35] mix-blend-overlay" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-content-ultra gap-10 px-4 sm:gap-14 sm:px-6 md:grid-cols-12 md:px-10 md:pt-16">
        <div className="md:col-span-7 xl:col-span-6">
          <motion.p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/60 sm:text-[13px]"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Ateliê brasileiro · produção manual
          </motion.p>

          <motion.h1
            id="hero-title"
            className="font-display text-clamp-hero text-white drop-shadow-[0_2px_48px_rgba(0,0,0,0.35)]"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Doçaria contemporânea, textura memorável.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base text-white/76 sm:text-clamp-sub"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Encomendas sob medida, linha boutique e pairing com café especial — menos excesso,
            mais precisão. Ingredientes selecionados, acabamento editorial.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#cardapio"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover active:translate-y-0"
            >
              Ver cardápio
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white shadow-card backdrop-blur-md transition hover:bg-white/16 hover:border-white/50 active:translate-y-px"
            >
              <IconWhatsapp className="h-[18px] w-[18px]" />
              Falar com ateliê
            </a>
          </motion.div>

          <motion.dl
            className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-white/14 pt-8 text-left sm:gap-4"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? {} : { opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.45 }}
          >
            {[
              { k: "Lotes", v: "Diários" },
              { k: "Encomendas", v: "Sob briefing" },
              { k: "Entrega", v: "Zona SP" },
            ].map(({ k, v }) => (
              <div key={k}>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-white/46 sm:text-[11px]">
                  {k}
                </dt>
                <dd className="mt-1 font-display text-lg text-white/92 sm:text-xl">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="relative md:col-span-5 xl:col-span-5 xl:col-start-8"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="gpu relative overflow-hidden rounded-[1.65rem] border border-white/18 bg-white/[0.07] shadow-[0_28px_80px_-28px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:rounded-[1.85rem]">
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-95"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -120px 100px -80px rgba(0,0,0,0.35)",
              }}
              aria-hidden
            />
            <div className="relative aspect-[4/3] w-full sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=960&q=75"
                alt="Sobremesa artesanal em apresentação minimalista"
                loading="lazy"
                decoding="async"
                width={960}
                height={960}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-x-6 bottom-5 rounded-2xl border border-white/18 bg-black/38 px-5 py-3.5 backdrop-blur-md sm:inset-x-8 sm:bottom-6 sm:rounded-[1.1rem]"
              >
                <p className="text-[13px] font-medium leading-snug text-white/90">
                  Vídeo em tela cheia com vitrine editorial ao lado — menos ruído visual, mais ritmo
                  de alta confeitaria.
                </p>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-soft/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-14 bottom-[-2rem] h-48 w-48 rounded-full bg-rose-soft/20 blur-3xl"
            aria-hidden
          />
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden h-px w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent sm:block"
        aria-hidden
      />
    </section>
  );
}
