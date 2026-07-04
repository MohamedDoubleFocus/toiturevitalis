import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function ProblemSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texte */}
          <Reveal>
            <p className="eyebrow mb-4">Le vrai problème</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.6rem]">
              Votre toiture vieillit ? Vous n&apos;avez pas à la remplacer{" "}
              <span className="kw">tout de suite.</span>
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.75] text-greytext">
              Avec le temps, les bardeaux d&apos;asphalte sèchent, perdent leurs
              granules et deviennent cassants sous l&apos;effet des UV, du gel-dégel et
              des intempéries québécoises. Un remplacement complet coûte cher et envoie
              des tonnes de matériaux à l&apos;enfouissement.
            </p>
            <p className="mt-4 text-[1.05rem] leading-[1.75] text-greytext">
              Le traitement nano de Vitalis redonne flexibilité et protection à vos
              bardeaux, prolongeant leur vie utile de plusieurs années — pour une
              fraction du prix.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-xl border border-greyborder bg-greylight px-5 py-4">
                <div className="font-display text-[1.7rem] leading-none tracking-tightest text-navy">
                  9 000&nbsp;$ – 15 000&nbsp;$
                </div>
                <p className="mt-1.5 text-[13px] font-medium text-greytext">
                  Coût typique d&apos;un remplacement complet
                </p>
              </div>
              <div className="rounded-xl border border-brand/25 bg-brand/5 px-5 py-4">
                <div className="font-display text-[1.7rem] leading-none tracking-tightest text-brand-strong">
                  ~30&nbsp;%
                </div>
                <p className="mt-1.5 text-[13px] font-medium text-greytext">
                  Du prix, avec le traitement nano
                </p>
              </div>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal delay={120}>
            <div className="photo-treat relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/man-spraying-roof.jpg"
                alt="Application du traitement de toiture depuis une nacelle élévatrice"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
