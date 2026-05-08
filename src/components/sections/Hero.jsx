import { motion, useReducedMotion } from "framer-motion";
import { heroShowcasePhoto } from "../../data/siteContent";
import { BRAND_JPG, fallbackBrandImg, fallbackRemoteFoodImg } from "../../utils/brandImage";
import { IconWhatsapp } from "../ui/Icons";

export default function Hero({ waHref }) {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pb-14 pt-28 sm:items-center sm:pb-24 sm:pt-32 md:min-h-[min(100svh,56rem)] md:pb-24 2xl:min-h-[min(88svh,52rem)]"
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
            poster={BRAND_JPG}
            className="absolute inset-0 hidden h-full w-full object-cover saturate-[1.03] md:block md:opacity-[0.62]"
          >
            <source src="/video-background.mp4" type="video/mp4" />
          </video>
          <img
            src={BRAND_JPG}
            alt=""
            fetchPriority="high"
            decoding="async"
            width={1280}
            height={720}
            className="absolute inset-0 h-full w-full object-cover opacity-[0.58] saturate-[1.03] md:hidden"
            onError={fallbackBrandImg}
          />
        </div>
        {/* Leitura melhorada: menos “maré” escura sobre o texto; vídeo um pouco mais visível */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/38 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent md:from-black/35"
          aria-hidden
        />
        {/* Faixa inferior: no celular o conteúdo fica aqui — fundo sempre escuro = texto branco legível */}
        <div
          className="absolute inset-x-0 bottom-0 h-[min(78%,580px)] bg-gradient-to-t from-ink/[0.96] via-ink/78 to-transparent sm:h-[min(68%,520px)] md:h-[55%] md:max-h-none md:from-ink/85 md:via-ink/42"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_-5%,rgba(232,189,201,0.2),transparent_52%)]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-grain-light opacity-[0.22] mix-blend-overlay md:opacity-[0.28]" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-content-ultra gap-10 px-4 sm:gap-14 sm:px-6 md:grid-cols-12 md:px-10 md:pt-16">
        <div className="col-span-full rounded-2xl bg-black/30 px-3 py-2 ring-1 ring-white/12 backdrop-blur-[2px] sm:px-4 sm:py-3 md:col-span-7 md:rounded-none md:bg-transparent md:px-0 md:py-0 md:ring-0 md:backdrop-blur-none xl:col-span-6">
          <div className="md:p-0">
            <motion.p
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/85 sm:mb-4 sm:text-[13px] md:text-white/72"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Ateliê brasileiro · produção manual
            </motion.p>

            <motion.h1
              id="hero-title"
              className="font-display text-clamp-hero text-white [text-shadow:0_2px_32px_rgba(0,0,0,0.55),0_1px_2px_rgba(0,0,0,0.8)]"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              Doçaria contemporânea, textura memorável.
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl rounded-2xl bg-black/52 px-4 py-4 text-[1.05rem] font-medium leading-[1.65] tracking-[0.01em] text-white shadow-[0_12px_40px_-16px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/18 backdrop-blur-[3px] sm:px-5 sm:py-[1.125rem] sm:text-[1.125rem] sm:leading-[1.7] md:bg-black/46 md:backdrop-blur-[4px]"
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
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover active:translate-y-0"
              >
                Ver cardápio
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/45 bg-white/14 px-7 py-3.5 text-sm font-semibold text-white shadow-card transition hover:border-white/60 hover:bg-white/22 active:translate-y-px"
              >
                <IconWhatsapp className="h-[18px] w-[18px]" />
                Falar com ateliê
              </a>
            </motion.div>

            <motion.dl
              className="mt-8 grid max-w-lg grid-cols-3 gap-3 border-t border-white/28 pt-6 text-left sm:mt-10 sm:gap-4 sm:pt-8"
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
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-white/75 sm:text-[11px]">
                    {k}
                  </dt>
                  <dd className="mt-1 font-display text-lg text-white sm:text-xl">{v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>

        <motion.div
          className="relative md:col-span-5 xl:col-span-5 xl:col-start-8"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="gpu relative overflow-hidden rounded-[1.65rem] border border-white/22 bg-neutral-950/35 shadow-[0_28px_80px_-28px_rgba(0,0,0,0.55)] backdrop-blur-md sm:rounded-[1.85rem] md:backdrop-blur-xl">
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-95"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -120px 100px -80px rgba(0,0,0,0.35)",
              }}
              aria-hidden
            />
            <div className="relative aspect-[4/3] w-full sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-square">
              <img
                src={heroShowcasePhoto}
                alt="Sobremesa artesanal em apresentação minimalista"
                loading="lazy"
                decoding="async"
                width={960}
                height={960}
                className="absolute inset-0 h-full w-full object-cover"
                onError={fallbackRemoteFoodImg}
              />
              <div className="absolute inset-x-5 bottom-4 rounded-xl border border-white/25 bg-neutral-950/55 px-4 py-3 sm:inset-x-8 sm:bottom-6 sm:rounded-[1.1rem] sm:px-5 sm:py-3.5 md:backdrop-blur-md backdrop-blur-sm">
                <p className="text-[13px] font-medium leading-snug text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.65)]">
                  Vídeo em tela cheia com vitrine editorial ao lado — leitura nítida em qualquer
                  luminosidade.
                </p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-soft/15 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -left-14 bottom-[-2rem] h-48 w-48 rounded-full bg-rose-soft/20 blur-3xl" aria-hidden />
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden h-px w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent sm:block"
        aria-hidden
      />
    </section>
  );
}
