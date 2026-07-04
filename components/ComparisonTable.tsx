import { Fragment } from "react";
import { Check, X, PiggyBank } from "lucide-react";
import Reveal from "@/components/Reveal";

type Row =
  | { label: string; type: "text"; nano: string; nanoSub?: string; remp: string }
  | { label: string; type: "bool" };

const rows: Row[] = [
  {
    label: "Prix des travaux",
    type: "text",
    nano: "≈ 30 %",
    nanoSub: "du coût",
    remp: "9 000 – 15 000 $",
  },
  { label: "Travaux en 1 seule journée", type: "bool" },
  { label: "Aucun arrachage, aucun déchet", type: "bool" },
  { label: "Aucune perturbation à la maison", type: "bool" },
  { label: "Prolonge votre toiture actuelle", type: "bool" },
  { label: "Écologique — évite l'enfouissement", type: "bool" },
];

function YesMark() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand shadow-cta">
      <Check className="h-5 w-5 text-navy-deep" strokeWidth={3} aria-hidden />
      <span className="sr-only">Oui</span>
    </span>
  );
}

function NoMark() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-greytext/15">
      <X className="h-4 w-4 text-greytext" strokeWidth={2.5} aria-hidden />
      <span className="sr-only">Non</span>
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Colonne texte (gauche) */}
          <Reveal>
            <p className="eyebrow mb-4">La comparaison</p>
            <h2 className="font-display text-[2.1rem] leading-[1.06] tracking-tightest text-navy sm:text-[2.7rem]">
              Protéger ou <span className="kw">remplacer&nbsp;?</span>
            </h2>
            <p className="mt-6 max-w-md text-[1.05rem] leading-[1.75] text-greytext">
              Voici la vraie différence entre remplacer votre toiture et la protéger
              avec notre traitement nano.
            </p>
            <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-brand/25 bg-brand/[0.07] py-2.5 pl-3 pr-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/15 text-brand-strong">
                <PiggyBank className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
              </span>
              <span className="text-[15px] font-semibold text-navy">
                Économisez 60 à 70 %
              </span>
            </div>
          </Reveal>

          {/* Tableau comparatif 2 colonnes (droite) */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-greyborder bg-white shadow-card">
              <div className="grid grid-cols-[1.35fr_1fr_1fr]">
                {/* En-têtes */}
                <div className="bg-white" />
                <div className="relative bg-navy px-2 pb-4 pt-8 text-center sm:px-4">
                  <span className="absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-2.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-navy-deep shadow-cta">
                    Recommandé
                  </span>
                  <span className="font-display text-[0.92rem] leading-tight tracking-tightest text-white sm:text-[1rem]">
                    Traitement Nano Vitalis
                  </span>
                </div>
                <div className="bg-greylight px-2 pb-4 pt-8 text-center sm:px-4">
                  <span className="text-[0.85rem] font-semibold leading-tight text-greytext sm:text-[0.95rem]">
                    Remplacement complet
                  </span>
                </div>

                {/* Lignes */}
                {rows.map((r, i) => {
                  const last = i === rows.length - 1;
                  return (
                    <Fragment key={r.label}>
                      <div className="flex items-center border-t border-greyborder px-2 py-4 text-[13.5px] font-semibold leading-snug text-navy sm:px-3 sm:text-[14.5px]">
                        {r.label}
                      </div>
                      <div
                        className={`flex items-center justify-center border-t border-white/10 bg-navy px-2 py-4 sm:px-4 ${
                          last ? "rounded-b-2xl" : ""
                        }`}
                      >
                        {r.type === "text" ? (
                          <span className="flex flex-col items-center leading-none">
                            <span className="font-display text-[1.15rem] tracking-tightest text-white">
                              {r.nano}
                            </span>
                            {r.nanoSub && (
                              <span className="mt-1 text-[11px] font-medium text-white/60">
                                {r.nanoSub}
                              </span>
                            )}
                          </span>
                        ) : (
                          <YesMark />
                        )}
                      </div>
                      <div
                        className={`flex items-center justify-center border-t border-greyborder bg-greylight px-2 py-4 text-center sm:px-4 ${
                          last ? "rounded-b-2xl" : ""
                        }`}
                      >
                        {r.type === "text" ? (
                          <span className="font-display text-[0.98rem] leading-tight tracking-tightest text-navy/80">
                            {r.remp}
                          </span>
                        ) : (
                          <NoMark />
                        )}
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <p className="mt-4 text-center text-[12.5px] text-greytext">
              Coût du remplacement : moyenne au Québec. Le prix exact dépend de votre
              toiture — établi lors de l&apos;inspection gratuite.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
