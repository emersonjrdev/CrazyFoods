import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useScrollY } from "../../hooks/useScrollY";
import { IconWhatsapp } from "../ui/Icons";

const links = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Ateliê" },
  { href: "#destaques", label: "Destaques" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar({ menuOpen, setMenuOpen, waHref }) {
  const y = useScrollY();
  const reduce = useReducedMotion();
  const glass = y > 56;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-[background,box-shadow,backdrop-filter] duration-300 ease-out ${
        glass
          ? "border-b border-neutral-900/6 bg-white/78 shadow-nav backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content-ultra items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 md:px-10 min-h-[56px] sm:min-h-[72px]">
        <a
          href="#topo"
          className={`group relative z-[102] flex min-h-0 min-w-0 items-center gap-3 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft/50 ${
            glass ? "text-ink" : "text-white"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white/25 shadow-card sm:h-11 sm:w-11">
            <img
              src="/jusato.jpg"
              alt=""
              width={44}
              height={44}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              decoding="async"
            />
          </span>
          <span className="flex min-w-0 flex-col text-left leading-tight">
            <span className="font-display text-lg tracking-tight sm:text-xl">Jusato</span>
            <span
              className={`text-[10px] font-medium uppercase tracking-[0.22em] sm:text-[11px] ${
                glass ? "text-neutral-500" : "text-white/75"
              }`}
            >
              Confeitaria
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Principal"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                glass ? "text-neutral-700 hover:text-ink" : "text-white/88 hover:text-white"
              }`}
            >
              <span className="relative z-10">{l.label}</span>
              <span
                className="absolute inset-x-2 bottom-1.5 h-px origin-left scale-x-0 bg-gold-soft transition duration-300 ease-out group-hover:scale-x-100"
                aria-hidden
              />
            </a>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#1fa855] px-4 py-2 text-sm font-semibold text-white shadow-card transition duration-200 hover:bg-[#1a9b4d] hover:shadow-card-hover"
          >
            <IconWhatsapp className="h-4 w-4" />
            Encomendar
          </a>
        </nav>

        <button
          type="button"
          className={`relative z-[102] flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border transition lg:hidden ${
            glass
              ? "border-neutral-900/10 bg-white/80 text-ink"
              : "border-white/25 bg-white/10 text-white backdrop-blur-md"
          }`}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <motion.span
            className="block h-0.5 w-5 rounded-full bg-current"
            animate={
              reduce
                ? {}
                : menuOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
            }
          />
          <motion.span
            className="block h-0.5 w-5 rounded-full bg-current"
            animate={reduce ? {} : menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          />
          <motion.span
            className="block h-0.5 w-5 rounded-full bg-current"
            animate={
              reduce
                ? {}
                : menuOpen
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
            }
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-mobile"
            key="mm"
            className="fixed inset-0 z-[101] flex flex-col bg-ink/35 px-4 pb-10 pt-[4.5rem] backdrop-blur-xl lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? {} : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            role="presentation"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              className="mx-auto mt-6 flex w-full max-w-md flex-col gap-1 rounded-3xl border border-white/12 bg-white/12 p-2 shadow-glass backdrop-blur-2xl"
              initial={reduce ? false : { y: 12, opacity: 0 }}
              animate={reduce ? {} : { y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: 12, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-2xl px-5 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#1fa855] px-5 py-3.5 text-base font-semibold text-white shadow-card"
                onClick={() => setMenuOpen(false)}
              >
                <IconWhatsapp className="h-5 w-5" />
                WhatsApp
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
