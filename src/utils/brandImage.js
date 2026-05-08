/** Caminho público para logo/foto institucional; fallback se o arquivo JPG não existir no deploy. */
export const BRAND_JPG = "/jusato.jpg";
export const BRAND_FALLBACK_SVG = "/brand-mark.svg";

/** Se uma foto remota falhar (rede/CORS/região), troca por chocolate — sempre válida no CDN Unsplash com ixlib. */
export const REMOTE_IMG_FALLBACK =
  "https://images.unsplash.com/photo-1549007994-cb92cae61054?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=82";

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
