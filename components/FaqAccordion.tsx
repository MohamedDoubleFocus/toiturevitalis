"use client";

import { useState } from "react";
import {
  ChevronDown,
  FlaskConical,
  Droplets,
  Leaf,
  Wallet,
  Home,
  ShieldCheck,
  FileCheck,
  ClipboardCheck,
  Clock3,
  MapPin,
  type LucideIcon,
} from "lucide-react";

/**
 * Clés d'icônes thématiques (chaînes → sérialisables à travers la frontière
 * serveur/client, contrairement aux composants d'icône eux-mêmes).
 */
const ICONS: Record<string, LucideIcon> = {
  flask: FlaskConical,
  droplets: Droplets,
  leaf: Leaf,
  wallet: Wallet,
  home: Home,
  shield: ShieldCheck,
  file: FileCheck,
  clipboard: ClipboardCheck,
  clock: Clock3,
  map: MapPin,
};

export type FaqIconKey = keyof typeof ICONS;
export type FaqItem = { q: string; a: string; icon?: FaqIconKey };

/**
 * Accordéon FAQ réutilisable (accueil + page /faq).
 * headingTag : niveau de titre des questions (h2 ou h3 selon le contexte).
 * icon (optionnel) : clé d'icône thématique.
 */
export default function FaqAccordion({
  items,
  idPrefix = "faq",
  headingTag: Heading = "h3",
  defaultOpen = 0,
}: {
  items: FaqItem[];
  idPrefix?: string;
  headingTag?: "h2" | "h3";
  defaultOpen?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  return (
    <div className="overflow-hidden rounded-2xl border border-greyborder bg-white px-5 shadow-card sm:px-7">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const btnId = `${idPrefix}-btn-${i}`;
        const Ico = item.icon ? ICONS[item.icon] : null;
        return (
          <div
            key={i}
            className={i > 0 ? "border-t border-greyborder" : undefined}
          >
            <Heading className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-brand-strong"
              >
                <span className="flex items-center gap-3">
                  {Ico && (
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand-strong">
                      <Ico className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden />
                    </span>
                  )}
                  <span className="text-[1.02rem] font-bold text-navy sm:text-[1.1rem]">
                    {item.q}
                  </span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-brand-strong transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className={`pb-5 pr-6 text-[1rem] leading-[1.75] text-greytext ${
                    Ico ? "sm:pl-12" : ""
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
