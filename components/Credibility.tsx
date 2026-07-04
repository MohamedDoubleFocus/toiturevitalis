import Image from "next/image";
import { Tv, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

const points = [
  "Technologie GoNano présentée à Dans l'œil du dragon",
  "Plus de 50 000 toitures traitées en Amérique du Nord",
  "Plus d'un million investi en tests (impact, vent, grêle)",
];

export default function Credibility() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image de l'émission */}
          <Reveal>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-card ring-1 ring-navy/5">
              <Image
                src="/images/dragon-eye-show.jpg"
                alt="La technologie de protection GoNano présentée à l'émission Dans l'œil du dragon"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-navy-deep/85 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-white backdrop-blur-sm">
                <Tv className="h-4 w-4 text-brand" strokeWidth={2} aria-hidden />
                Vu à la télévision
              </span>
            </div>
          </Reveal>

          {/* Texte */}
          <Reveal delay={120}>
            <p className="eyebrow mb-4">Crédibilité</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.6rem]">
              Une technologie <span className="kw">reconnue.</span>
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.75] text-greytext">
              La technologie nano que nous appliquons — GoNano — a été présentée à
              l&apos;émission <span className="font-semibold text-navy">Dans l&apos;œil
              du dragon</span>. Développée au Québec et appuyée par plus d&apos;un million
              de dollars en tests, c&apos;est la même technologie de protection que nous
              appliquons sur votre toiture.
            </p>

            <ul className="mt-8 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/12">
                    <Check className="h-4 w-4 text-brand" strokeWidth={2.6} aria-hidden />
                  </span>
                  <span className="text-[15.5px] font-medium leading-snug text-navy">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-7 border-t border-greyborder pt-5 text-[13px] leading-relaxed text-greytext">
              C&apos;est le produit GoNano qui a été présenté à l&apos;émission, à titre
              de technologie — Toitures Vitalis en est un applicateur certifié.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
