import { motion, useReducedMotion } from "framer-motion";
import { IconWhatsapp, IconInstagram, IconFacebook } from "../ui/Icons";

const blocks = [
  {
    title: "Endereço",
    lines: ["Rua dos Doces, 456", "Centro — São Paulo / SP"],
    href: "https://www.google.com/maps/search/?api=1&query=Av.+Paulista+São+Paulo",
  },
  {
    title: "Telefone",
    lines: ["(11) 98765-4321", "(11) 91234-5678"],
    href: "tel:+5511987654321",
  },
  {
    title: "Horário",
    lines: ["Segunda a sábado", "09:00 — 19:00"],
  },
];

export default function Contact({ waHref }) {
  const reduce = useReducedMotion();

  return (
    <section
      id="contato"
      className="scroll-mt-[5.5rem] relative overflow-hidden bg-cream-50 py-16 sm:scroll-mt-28 sm:py-20 md:py-28"
      aria-labelledby="heading-contato"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh-light opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-content-ultra px-4 sm:px-6 md:px-10">
        <motion.header
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-muted">
            Visite
          </p>
          <h2
            id="heading-contato"
            className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl"
          >
            Contato & localização
          </h2>
          <p className="mt-3 text-neutral-600">
            Atendimento consultivo para encomendas e parcerias.
          </p>
        </motion.header>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="space-y-4"
            initial={reduce ? false : { opacity: 0, x: -12 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {blocks.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-neutral-900/[0.06] bg-white/75 p-5 shadow-card backdrop-blur-md sm:p-6"
              >
                <h3 className="font-display text-lg text-ink">{b.title}</h3>
                {b.href ? (
                  <a
                    href={b.href}
                    className="mt-2 block text-sm text-neutral-600 underline-offset-4 transition hover:text-ink hover:underline"
                    target={b.title === "Endereço" ? "_blank" : undefined}
                    rel={b.title === "Endereço" ? "noopener noreferrer" : undefined}
                  >
                    {b.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </a>
                ) : (
                  <p className="mt-2 text-sm text-neutral-600">
                    {b.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            ))}

            <div className="rounded-2xl border border-neutral-900/[0.06] bg-white/75 p-5 shadow-card backdrop-blur-md sm:p-6">
              <h3 className="font-display text-lg text-ink">Redes</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#f58529] to-[#dd2a7b] text-white shadow-md transition hover:scale-105"
                  aria-label="Instagram"
                >
                  <IconInstagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-md transition hover:scale-105"
                  aria-label="Facebook"
                >
                  <IconFacebook className="h-5 w-5" />
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-md transition hover:scale-105"
                  aria-label="WhatsApp"
                >
                  <IconWhatsapp className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[1.35rem] border border-neutral-900/[0.06] bg-white/60 shadow-card backdrop-blur-md"
            initial={reduce ? false : { opacity: 0, x: 12 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className="aspect-[4/3] w-full min-h-[280px] sm:aspect-auto sm:min-h-[420px]">
              <iframe
                title="Mapa — Jusato Confeitaria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754267452926!2d-46.65342658440729!3d-23.565734367638635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[280px] w-full sm:min-h-[420px]"
              />
            </div>
            <div className="border-t border-neutral-900/[0.05] px-5 py-4 sm:px-6">
              <a
                href="https://maps.google.com/?q=Av.+Paulista,+São+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gold-muted underline-offset-4 transition hover:text-ink hover:underline"
              >
                Abrir rotas no Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
