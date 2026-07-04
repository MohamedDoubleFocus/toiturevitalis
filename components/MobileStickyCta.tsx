"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

/**
 * CTA flottant sticky — MOBILE UNIQUEMENT (masqué dès 768px via md:hidden).
 * Apparaît après ~260px de scroll (fade + slide-up), mène au formulaire.
 * Global : rendu dans le layout, présent sur toutes les pages.
 */
export default function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Si la page contient le formulaire (#soumission), on y défile en douceur.
    // Sinon on laisse le lien /#soumission naviguer vers le formulaire de l'accueil.
    const el = document.getElementById("soumission");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 md:hidden transition-[opacity,transform] duration-300 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="/#soumission"
        onClick={handleClick}
        aria-label="Obtenir une soumission gratuite"
        className="flex h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-brand text-[16px] font-bold text-navy-deep shadow-[0_8px_24px_rgba(84,195,234,0.5)] transition-transform duration-200 active:scale-[0.98]"
      >
        Soumission gratuite
        <ArrowRight className="h-5 w-5" strokeWidth={2.4} aria-hidden />
      </a>
    </div>
  );
}
