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
        navy: {
          DEFAULT: "#1B3A5C",
          deep: "#0F1B2A",
        },
        brand: {
          DEFAULT: "#4A90E0", // accent bleu marque
          hover: "#3A78C2",
        },
        greytext: "#5A6B7B",
        greylight: "#F4F6F8",
        greyborder: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-archivo-black)", "Arial Black", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        // Ombres teintées navy/bleu, faible opacité, multi-couches (jamais shadow-md plat)
        card: "0 2px 4px -1px rgba(27,58,92,0.05), 0 12px 28px -8px rgba(27,58,92,0.14)",
        "card-hover":
          "0 4px 8px -2px rgba(27,58,92,0.08), 0 20px 40px -10px rgba(27,58,92,0.20)",
        float:
          "0 1px 2px rgba(15,27,42,0.06), 0 10px 30px -6px rgba(15,27,42,0.14)",
        cta: "0 8px 20px rgba(74,144,224,0.28)",
        "cta-hover": "0 12px 26px rgba(74,144,224,0.36)",
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
