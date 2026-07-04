import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "navy" = tokens sombres de la marque, désormais NOIR (pivot Miami : noir + cyan)
        navy: {
          DEFAULT: "#111418", // near-black (titres, surfaces sombres)
          deep: "#000000", // noir pur (overlays profonds, footer, badges)
        },
        brand: {
          DEFAULT: "#54C3EA", // Miami blue — accent vif (fonds, sur fond noir, glows, CTA)
          hover: "#2AA8D6", // cyan plus foncé (survol de fond)
          strong: "#0E7BA6", // cyan accessible pour TEXTE sur fond clair (WCAG AA)
        },
        greytext: "#5A6B7B",
        greylight: "#F4F6F8",
        greyborder: "#E2E8F0",
      },
      fontFamily: {
        // Figtree partout (titres + corps). La graisse « display » est forcée en CSS.
        display: ["var(--font-figtree)", "system-ui", "sans-serif"],
        sans: ["var(--font-figtree)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        // Ombres teintées noir, faible opacité, multi-couches (jamais shadow-md plat)
        card: "0 2px 4px -1px rgba(10,14,22,0.06), 0 12px 28px -8px rgba(10,14,22,0.16)",
        "card-hover":
          "0 4px 8px -2px rgba(10,14,22,0.10), 0 20px 40px -10px rgba(10,14,22,0.22)",
        float:
          "0 1px 2px rgba(0,0,0,0.06), 0 10px 30px -6px rgba(0,0,0,0.16)",
        // CTA : lueur cyan Miami
        cta: "0 8px 20px rgba(84,195,234,0.30)",
        "cta-hover": "0 12px 26px rgba(84,195,234,0.42)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.9s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
