import Link from "next/link";
import Reveal from "@/components/Reveal";
import LazyVideo from "@/components/LazyVideo";
import { ArrowRight } from "@/components/icons";

const steps = [
  {
    n: "01",
    title: "Inspection gratuite",
    text: "On évalue honnêtement l'état de votre toiture. Si elle n'est pas admissible, on vous le dit franchement.",
  },
  {
    n: "02",
    title: "Préparation",
    text: "Petites réparations au besoin pour bien préparer la surface avant le traitement.",
  },
  {
    n: "03",
    title: "Application",
    text: "Le traitement nano est appliqué en une seule journée, sans poussière ni odeur. Vous restez chez vous.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-greylight py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">Le procédé</p>
          <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.6rem]">
            Simple, rapide, <span className="kw">sans tracas.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Vidéo procédé (lazy-load, poster instantané) */}
          <Reveal>
            <div className="photo-treat relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
              <LazyVideo
                src="/videos/man-spraying-over-roof.mp4"
                poster="/images/roofer-spraying-roof.jpg"
                ariaLabel="Technicien Toitures Vitalis appliquant le traitement nano sur une toiture"
                className="h-full w-full"
              />
            </div>
          </Reveal>

          {/* Étapes */}
          <div className="flex flex-col">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="flex gap-5 py-5">
                  <div className="flex-shrink-0">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white font-display text-[1.4rem] tracking-tightest text-brand shadow-card">
                      {s.n}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[1.3rem] font-bold text-navy">{s.title}</h3>
                    <p className="mt-1.5 text-[1rem] leading-[1.7] text-greytext">
                      {s.text}
                    </p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="ml-7 h-6 w-px bg-greyborder" aria-hidden />
                )}
              </Reveal>
            ))}

            <Reveal delay={120}>
              <Link
                href="/comment-ca-fonctionne"
                className="group mt-6 inline-flex items-center gap-2 text-[1rem] font-semibold text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                En savoir plus sur le procédé
                <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
