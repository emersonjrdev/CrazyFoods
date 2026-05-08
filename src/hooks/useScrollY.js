import { useEffect, useRef, useState } from "react";

/**
 * Scroll vertical com throttle via rAF — evita re-renders excessivos no header
 * (melhora sensação de “travamento” no mobile com menu / blur).
 */
export function useScrollY() {
  const [y, setY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const read = () => {
      setY(window.scrollY || 0);
      ticking.current = false;
    };
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}
