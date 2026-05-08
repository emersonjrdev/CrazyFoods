import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fallbackRemoteFoodImg } from "../../utils/brandImage";
import { IconStar, IconWhatsapp } from "../ui/Icons";

const labels = { doces: "Doces", bolos: "Bolos", sobremesas: "Sobremesas" };

export default function ProductGrid({ categories, waBase }) {
  const [active, setActive] = useState("doces");
  const reduce = useReducedMotion();

  return (
    <section
      id="cardapio"
      className="relative scroll-mt-[5.5rem] bg-cream-100 bg-mesh-light py-16 sm:scroll-mt-28 sm:py-20 md:py-28"
      aria-labelledby="heading-cardapio"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain-light opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-content-ultra px-4 sm:px-6 md:px-10">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-deep/80">
            Coleção
          </p>
          <h2 id="heading-cardapio" className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
            Cardápio boutique
          </h2>
          <p className="mt-4 text-base text-neutral-600 sm:text-lg">
            Lotes pequenos e precisão francesa com alma brasileira. Toque para encomendar via
            WhatsApp.
          </p>
        </header>

        <div className="mb-8 flex justify-center sm:mb-10">
          <div
            className="inline-flex rounded-full border border-neutral-900/[0.06] bg-white/70 p-1 shadow-card backdrop-blur-md"
            role="tablist"
            aria-label="Categorias"
          >
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active === key}
                onClick={() => setActive(key)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition sm:px-6 ${
                  active === key ? "text-ink" : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                {active === key && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-cream-200/80 shadow-inner"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{labels[key]}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid gap-5 sm:grid-cols-2 lg:gap-7 xl:grid-cols-3 2xl:gap-8"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? {} : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {categories[active].map((item, i) => (
              <ProductCard key={item.nome} item={item} index={i} waBase={waBase} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProductCard({ item, index, waBase }) {
  const reduce = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const wa = `${waBase}${encodeURIComponent(`Olá! Gostaria de encomendar: ${item.nome}`)}`;

  return (
    <motion.article
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: reduce ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[1.35rem] border border-neutral-900/[0.05] bg-white/85 shadow-card backdrop-blur-[2px] transition duration-300 hover:-translate-y-1 hover:border-gold-soft/25 hover:shadow-card-hover"
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-cream-200">
        <img
          src={item.image}
          alt={item.imageAlt ?? item.nome}
          loading="lazy"
          decoding="async"
          sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
          width={720}
          height={495}
          onError={fallbackRemoteFoodImg}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-80"
          aria-hidden
        />
        <div className="absolute bottom-3 left-3 flex gap-1">
          {[...Array(item.stars)].map((_, s) => (
            <IconStar key={s} className="h-4 w-4 text-gold-soft drop-shadow-sm" />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl tracking-tight text-ink">{item.nome}</h3>
        <p className="font-display mt-2 text-2xl tracking-tight text-gold-soft">{item.preco}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{item.desc}</p>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1fa855] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1a9b4d] active:translate-y-px sm:rounded-2xl"
        >
          <IconWhatsapp className="h-[18px] w-[18px]" />
          Pedir esta criação
        </a>
      </div>
    </motion.article>
  );
}
