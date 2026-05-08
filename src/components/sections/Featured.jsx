import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fallbackRemoteFoodImg } from "../../utils/brandImage";
import { IconStar, IconWhatsapp } from "../ui/Icons";

export default function Featured({ items, waBase }) {
  const reduce = useReducedMotion();

  return (
    <section
      id="destaques"
      className="scroll-mt-[5.5rem] border-y border-neutral-900/[0.04] bg-cream-50 py-16 sm:scroll-mt-28 sm:py-20 md:py-24"
      aria-labelledby="heading-destaques"
    >
      <div className="mx-auto max-w-content-ultra px-4 sm:px-6 md:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-muted">
              Edição mensal
            </p>
            <h2
              id="heading-destaques"
              className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl"
            >
              Destaques do ateliê
            </h2>
            <p className="mt-3 text-neutral-600">
              Curadorias limitadas para mesas contemporâneas e gifting corporativo.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-7 2xl:gap-10">
          {items.map((item, i) => (
            <FeaturedCard key={item.nome} item={item} index={i} waBase={waBase} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ item, index, waBase, reduce }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });
  const wa = `${waBase}${encodeURIComponent(`Olá! Tenho interesse em: ${item.nome}`)}`;

  return (
    <motion.article
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-[1.35rem] border border-neutral-900/[0.05] bg-gradient-to-br from-white to-cream-100/95 shadow-card transition hover:border-gold-soft/30 hover:shadow-card-hover"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt ?? item.nome}
          loading="lazy"
          decoding="async"
          sizes="(max-width:768px) 100vw, 33vw"
          className="h-full w-full object-cover duration-500 group-hover:scale-[1.03]"
          width={800}
          height={500}
          onError={fallbackRemoteFoodImg}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-ink/20 via-transparent to-transparent opacity-70" aria-hidden />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-xl text-ink">{item.nome}</h3>
          <p className="font-display text-lg text-gold-soft">{item.preco}</p>
        </div>
        <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(item.stars)].map((_, s) => (
              <IconStar key={s} className="h-4 w-4 text-gold-soft" />
            ))}
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-2 rounded-full border border-neutral-900/10 bg-ink px-4 py-2 text-xs font-semibold text-white transition hover:bg-neutral-900"
          >
            <IconWhatsapp className="h-4 w-4 text-emerald-300" />
            Reservar lote
          </a>
        </div>
      </div>
    </motion.article>
  );
}
