import Reveal from "@/components/Reveal";
import BeforeAfter from "@/components/BeforeAfter";

export default function ResultsSection() {
  return (
    <section className="bg-greylight py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">Avant / Après</p>
          <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.6rem]">
            Des résultats <span className="kw">visibles.</span>
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-greytext">
            Glissez pour comparer une toiture admissible avant et après le traitement.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-12 max-w-4xl">
          <BeforeAfter />
          <p className="mx-auto mt-6 max-w-2xl text-center text-[14px] italic leading-relaxed text-greytext">
            Amélioration réelle sur une toiture admissible — couleur ravivée et surface
            hydrophobe. Le traitement protège et prolonge, il ne transforme pas un toit
            en fin de vie.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
