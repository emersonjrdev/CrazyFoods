import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutPhoto } from "../../data/siteContent";
import { fallbackRemoteFoodImg } from "../../utils/brandImage";
import { SparkIcon } from "../ui/Icons";

function easeOut(t) {
  return 1 - (1 - t) ** 3;
}

function AnimatedNumber({ value, suffix, inView, reduce }) {
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce || !inView) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const dur = 950;
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      setDisplay(Math.round(value * easeOut(p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [inView, value, reduce]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function About({ stats, bullets, waHref }) {
  const reduce = useReducedMotion();
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="sobre"
      className="scroll-mt-[5.5rem] relative overflow-hidden bg-cream-100 py-16 sm:scroll-mt-28 sm:py-20 md:py-28"
      aria-labelledby="heading-sobre"
    >
      <div
        className="pointer-events-none absolute left-[-20%] top-[10%] h-[380px] w-[380px] rounded-full bg-rose-soft/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] right-[-15%] h-[440px] w-[440px] rounded-full bg-gold-soft/10 blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-content-ultra gap-12 px-4 sm:gap-14 sm:px-6 lg:grid-cols-12 lg:gap-16 md:px-10">
        <motion.div
          className="lg:col-span-5"
          initial={reduce ? false : { opacity: 0, x: -16 }}
          whileInView={reduce ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden rounded-[1.5rem] border border-neutral-900/[0.06] bg-white shadow-card">
            <img
              src={aboutPhoto}
              alt="Mão finalizando sobremesa em prato branco"
              loading="lazy"
              decoding="async"
              width={900}
              height={1120}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
              sizes="(max-width:1024px) 100vw, 42vw"
              onError={fallbackRemoteFoodImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-white/12 p-4 backdrop-blur-md">
              <p className="text-sm font-medium text-white">
                Jusato transforma ingredientes em narrativa — do aroma ao último gole de café.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-deep/80">
            Ateliê
          </p>
          <h2
            id="heading-sobre"
            className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-[2.75rem]"
          >
            Oficina silenciosa, resultado expressivo.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Nascida da obsessão por precisão térmica e acabamento limpo, a Jusato une referências
            francesas a matérias-primas brasileiras. Cada encomenda passa por prova sensorial —
            brilho, umami do cacau e equilíbrio de açúcares.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
            Sem conservantes desnecessários. Lotes diários preservam frescor e o brilho que você
            vê nas vitrines de Tokyo e Paris — agora, na sua mesa.
          </p>

          <ul className="mt-8 space-y-4">
            {bullets.map((b) => (
              <li
                key={b.title}
                className="flex gap-4 rounded-2xl border border-neutral-900/[0.05] bg-white/70 p-4 shadow-sm backdrop-blur-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream-200 text-gold-muted">
                  <SparkIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink">{b.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center rounded-full border border-neutral-900/10 bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-900"
          >
            Agendar conversa
          </a>

          <div
            ref={statsRef}
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.key}
                className="rounded-2xl border border-neutral-900/[0.05] bg-white/80 p-4 text-center shadow-card backdrop-blur-sm sm:p-5"
              >
                <p className="font-display text-2xl tabular-nums text-ink sm:text-3xl">
                  <AnimatedNumber
                    value={s.value}
                    suffix={s.suffix}
                    inView={statsInView}
                    reduce={reduce}
                  />
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  {s.label}
                </p>
                <p className="mt-0.5 text-xs text-neutral-400">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
