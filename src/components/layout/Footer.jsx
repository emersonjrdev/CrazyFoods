import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND_JPG, fallbackBrandImg } from "../../utils/brandImage";
import { IconInstagram, IconFacebook, IconWhatsapp } from "../ui/Icons";

export default function Footer({ waHref }) {
  const reduce = useReducedMotion();
  const year = new Date().getFullYear();
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    if (!String(fd.get("email") ?? "").trim()) return;
    setSent(true);
  };

  return (
    <footer className="border-t border-neutral-900/[0.06] bg-cream-100">
      <div className="mx-auto max-w-content-ultra px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <motion.div
            className="md:col-span-4"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <img
                src={BRAND_JPG}
                alt="Jusato"
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-neutral-900/10"
                onError={fallbackBrandImg}
              />
              <div>
                <p className="font-display text-xl tracking-tight">Jusato</p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Confeitaria
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">
              Doces artesanais com linguagem contemporânea — produção manual, acabamento impecável.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900/10 bg-white text-neutral-700 transition hover:border-gold-soft/40 hover:text-ink"
                aria-label="Instagram"
              >
                <IconInstagram className="h-[18px] w-[18px]" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900/10 bg-white text-neutral-700 transition hover:border-gold-soft/40 hover:text-ink"
                aria-label="Facebook"
              >
                <IconFacebook className="h-[18px] w-[18px]" />
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900/10 bg-white text-[#1fa855] transition hover:border-[#1fa855]/30"
                aria-label="WhatsApp"
              >
                <IconWhatsapp className="h-[18px] w-[18px]" />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-5 md:col-start-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Navegação
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                {["#cardapio", "#sobre", "#destaques", "#depoimentos", "#contato"].map((h, idx) => (
                  <li key={h}>
                    <a href={h} className="transition hover:text-ink">
                      {["Cardápio", "Ateliê", "Destaques", "Depoimentos", "Contato"][idx]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Horário
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>Seg — Sáb</li>
                <li>09:00 — 19:00</li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Contato
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>(11) 98765-4321</li>
                <li>
                  <a href="mailto:contato@jusatoconfeitaria.com" className="hover:text-ink">
                    contato@jusatoconfeitaria.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            className="md:col-span-12 lg:col-span-4 lg:col-start-9"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Newsletter
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Lançamentos sazonais e degustações fechadas — sem spam.
            </p>
            <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
              <label htmlFor="nl-email" className="sr-only">
                Email
              </label>
              <input
                id="nl-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="seu@email.com"
                className="min-h-[48px] flex-1 rounded-xl border border-neutral-900/10 bg-white px-4 text-sm text-ink outline-none ring-0 transition placeholder:text-neutral-400 focus:border-gold-soft/50 focus:ring-2 focus:ring-gold-soft/20"
              />
              <button
                type="submit"
                className="min-h-[48px] rounded-xl bg-ink px-5 text-sm font-semibold text-white transition hover:bg-neutral-900"
              >
                {sent ? "Obrigado" : "Inscrever"}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-900/[0.06] pt-8 text-xs text-neutral-500 sm:flex-row sm:text-sm">
          <p>© {year} Jusato Confeitaria. Todos os direitos reservados.</p>
          <p className="text-center sm:text-right">São Paulo — experiências doces sob medida.</p>
        </div>
      </div>
    </footer>
  );
}
