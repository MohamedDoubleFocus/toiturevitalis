import Reveal from "@/components/Reveal";
import LazyVideo from "@/components/LazyVideo";
import {
  DropletIcon,
  SunIcon,
  SnowflakeIcon,
  ShieldIcon,
  LeafIcon,
  RecycleIcon,
} from "@/components/icons";

const benefits = [
  { Icon: DropletIcon, title: "Hydrophobe", text: "Repousse l'eau, la neige et la glace." },
  { Icon: SunIcon, title: "Protection UV", text: "Ralentit le vieillissement et la décoloration." },
  { Icon: SnowflakeIcon, title: "Résistance gel-dégel", text: "Protège contre les cycles hivernaux." },
  { Icon: ShieldIcon, title: "Résistance aux impacts", text: "Renforce contre la grêle et les débris." },
  { Icon: LeafIcon, title: "Rétention des granules", text: "Garde vos bardeaux intacts plus longtemps." },
  { Icon: RecycleIcon, title: "Écologique", text: "Évite l'envoi de bardeaux à l'enfouissement." },
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 md:py-28">
      {/* Lueur d'ambiance */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">Les bénéfices</p>
          <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-white sm:text-[2.6rem]">
            Une protection complète contre le{" "}
            <span className="kw-bright">climat québécois.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Preuve hydrophobe */}
          <Reveal className="lg:col-span-5">
            <div className="photo-treat relative aspect-[4/5] overflow-hidden rounded-2xl shadow-float sm:aspect-[4/3] lg:aspect-[4/5]">
              <LazyVideo
                src="/videos/hydrophobic-shingles.mp4"
                poster="/images/water-pearling-hydrophobic-roof.jpg"
                ariaLabel="Effet hydrophobe : gouttes d'eau perlant sur un bardeau traité"
                className="h-full w-full"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-navy-deep/90 to-transparent p-5">
                <p className="text-[14px] font-medium text-white/90">
                  Effet hydrophobe réel : les gouttes perlent sur un bardeau traité.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Grille bénéfices */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <div className="group h-full rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-[transform,background-color,border-color] duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.07]">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 text-brand">
                    <b.Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-[1.1rem] font-bold text-white">{b.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/70">
                    {b.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
