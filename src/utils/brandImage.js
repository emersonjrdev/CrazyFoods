/** Caminho público para logo/foto institucional; fallback se o arquivo JPG não existir no deploy. */
export const BRAND_JPG = "/jusato.jpg";
export const BRAND_FALLBACK_SVG = "/brand-mark.svg";

/** Se uma imagem quebrada (URL errado, deploy parcial): asset local sempre disponível */
export const REMOTE_IMG_FALLBACK = "/catalog/dessert-01.svg";

export function fallbackBrandImg(ev) {
  const el = ev.currentTarget;
  if (el.dataset.fallbackApplied) return;
  el.dataset.fallbackApplied = "1";
  el.src = BRAND_FALLBACK_SVG;
}

export function fallbackRemoteFoodImg(ev) {
  const el = ev.currentTarget;
  if (el.dataset.remoteFallbackApplied) return;
  el.dataset.remoteFallbackApplied = "1";
  el.src = REMOTE_IMG_FALLBACK;
}
