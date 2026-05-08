import { useScrollY } from "../../hooks/useScrollY";
import { BRAND_JPG, fallbackBrandImg } from "../../utils/brandImage";
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
  /** Só alterna quando já saiu do hero — menos “nome preto sobre fundo sujo/claro”. */
  const glass = y > 88;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-[background,box-shadow] duration-300 ease-out ${
        glass
          ? "border-b border-neutral-900/[0.08] bg-[#faf8f6]/[0.98] shadow-[0_8px_32px_-18px_rgba(12,12,13,0.12)]"
          : "border-transparent bg-transparent"
      }`}
    >
      {/* No modo “flutuante”: faixa bem leve atrás só da linha do logo/botões — não usa preto */}
      {!glass ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[4.75rem] bg-gradient-to-b from-black/50 via-black/28 to-transparent sm:h-[5.25rem]"
          aria-hidden
        />
      ) : null}

      <div className="relative mx-auto flex max-w-content-ultra min-h-[56px] items-center justify-between gap-4 px-4 py-3 sm:min-h-[72px] sm:px-6 sm:py-4 md:px-10">
        <a
          href="#topo"
          className={`group relative z-[102] flex min-h-0 min-w-0 items-center gap-3 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft/50 ${
            glass ? "text-ink" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.35)] ring-2 ring-white/40 ring-offset-2 ring-offset-black/35 sm:h-11 sm:w-11 md:ring-offset-black/45">
            <img
              src={BRAND_JPG}
              alt=""
              width={44}
              height={44}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              decoding="async"
              onError={fallbackBrandImg}
            />
          </span>
          <span className="flex min-w-0 flex-col text-left leading-tight">
            <span className="font-display text-lg tracking-tight sm:text-xl">Jusato</span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px] ${
                glass ? "text-neutral-600" : "text-white/92 drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)]"
              }`}
            >
              Confeitaria
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative px-3 py-2 text-sm font-semibold transition-colors ${
                glass
                  ? "text-neutral-800 hover:text-ink"
                  : "text-white/95 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.65)]"
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
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#1fa855] px-4 py-2 text-sm font-semibold text-white shadow-card transition duration-200 hover:bg-[#1a9b4d]"
          >
            <IconWhatsapp className="h-4 w-4" />
            Encomendar
          </a>
        </nav>

        <button
          type="button"
          className={`relative z-[102] flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border transition-transform duration-200 lg:hidden active:scale-[0.97] ${
            glass
              ? "border-neutral-900/12 bg-white text-ink shadow-sm"
              : "border-white/35 bg-black/45 text-white shadow-[0_2px_12px_rgba(0,0,0,0.45)] backdrop-blur-[2px]"
          }`}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block h-0.5 w-5 origin-center rounded-full bg-current transition duration-200 ease-out ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ease-out ${
              menuOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 origin-center rounded-full bg-current transition duration-200 ease-out ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile: só transições CSS; overlay permanece no DOM */}
      <div
        id="menu-mobile"
        className={`fixed inset-0 z-[101] flex flex-col px-4 pb-10 pt-[4.75rem] transition-[opacity,visibility] duration-[200ms] ease-out lg:hidden motion-reduce:transition-none ${
          menuOpen
            ? "visible bg-[rgba(10,10,11,0.97)] opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        aria-hidden={!menuOpen}
        role="presentation"
        inert={!menuOpen ? true : undefined}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          className={`relative z-[1] mx-auto mt-4 flex max-h-[min(72vh,520px)] w-full max-w-md flex-col gap-0.5 overflow-y-auto rounded-2xl border border-white/14 bg-neutral-900 p-2 shadow-xl ring-1 ring-white/5 transition-[opacity,transform] duration-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-[0.01]"
          }`}
          aria-label="Mobile"
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl px-4 py-3.5 text-base font-semibold text-white/95 transition hover:bg-white/10 active:bg-white/15"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 mt-2 mb-2 flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#1fa855] px-5 py-3.5 text-base font-semibold text-white shadow-card"
            onClick={() => setMenuOpen(false)}
          >
            <IconWhatsapp className="h-5 w-5" />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
