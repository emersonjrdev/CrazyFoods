import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsapp from "./components/layout/FloatingWhatsapp";
import Hero from "./components/sections/Hero";
import ProductGrid from "./components/sections/ProductGrid";
import Featured from "./components/sections/Featured";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import SectionDivider from "./components/ui/SectionDivider";
import { useReducedMotion } from "framer-motion";
import {
  menuCategories,
  featuredItems,
  testimonials,
  aboutStats,
  aboutBullets,
  whatsappNumber,
  whatsappMessage,
} from "./data/siteContent";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const waBase = `https://wa.me/${whatsappNumber}?text=`;

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onMove = useCallback((e) => {
    document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
    document.documentElement.style.setProperty("--my", `${e.clientY}px`);
  }, []);

  useEffect(() => {
    const mq =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)");
    if (mq.matches) return undefined;
    let raf = 0;
    const wrapped = (ev) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => onMove(ev));
    };
    window.addEventListener("mousemove", wrapped, { passive: true });
    return () => {
      window.removeEventListener("mousemove", wrapped);
      cancelAnimationFrame(raf);
    };
  }, [onMove]);

  return (
    <div className="relative cursor-halo bg-cream-100">
      {/* Z-index layering: halo stays behind content */}
      <div className="relative z-[1]">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} waHref={waHref} />
        <main>
          <Hero waHref={waHref} />

          <SectionDivider reduceMotion={reduceMotion} />
          <ProductGrid categories={menuCategories} waBase={waBase} />

          <SectionDivider reduceMotion={reduceMotion} />
          <About stats={aboutStats} bullets={aboutBullets} waHref={waHref} />

          <SectionDivider reduceMotion={reduceMotion} />
          <Featured items={featuredItems} waBase={waBase} />

          <SectionDivider reduceMotion={reduceMotion} />
          <Testimonials items={testimonials} />

          <SectionDivider reduceMotion={reduceMotion} />
          <Contact waHref={waHref} />

          <Footer waHref={waHref} />
        </main>

        {!menuOpen ? <FloatingWhatsapp href={waHref} /> : null}
      </div>
    </div>
  );
}
