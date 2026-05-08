/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfcfa",
          100: "#faf7f2",
          200: "#f3ece3",
          300: "#e8dfd2",
        },
        rose: {
          mist: "#f8f0f3",
          soft: "#e8bdc9",
          deep: "#9c6b78",
        },
        gold: {
          soft: "#c69f5c",
          muted: "#a68447",
          glow: "rgba(198,159,92,0.35)",
        },
        ink: "#0c0c0d",
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
      },
      fontSize: {
        "clamp-hero": [
          "clamp(2.25rem,5vw+1rem,4.25rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "500" },
        ],
        "clamp-sub": ["clamp(1rem,1.5vw+0.5rem,1.25rem)", { lineHeight: "1.55" }],
      },
      maxWidth: {
        "content-ultra": "min(92rem,calc(100vw-4rem))",
      },
      boxShadow: {
        glass:
          "0 1px 0 rgba(255,255,255,0.65) inset, 0 14px 48px -12px rgba(12,12,13,0.12)",
        card: "0 4px 24px -6px rgba(12,12,13,0.08), 0 0 0 1px rgba(12,12,13,0.04)",
        "card-hover":
          "0 24px 48px -16px rgba(12,12,13,0.14), 0 0 0 1px rgba(198,159,92,0.12)",
        nav: "0 1px 0 rgba(12,12,13,0.06)",
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(900px circle at 10% -10%, rgba(232,189,201,0.22), transparent 45%), radial-gradient(800px circle at 90% 10%, rgba(198,159,92,0.12), transparent 42%), radial-gradient(600px circle at 50% 90%, rgba(243,236,227,0.9), transparent 55%)",
        "grain-light":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280' viewBox='0 0 280 280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
