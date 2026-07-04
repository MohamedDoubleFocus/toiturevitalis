import Link from "next/link";
import { site } from "@/lib/site";
import HeroVideo from "@/components/HeroVideo";
import { PhoneIcon, ArrowRight, Check } from "@/components/icons";

const trust = [
  "Certifié GoNano",
  "Licencié et assuré",
  "Sans arrachage",
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-navy-deep">
      {/* Fond vidéo + poster (LCP). Autoplay muet prioritaire ; sinon poster seul. */}
      <HeroVideo />

      {/* Overlay navy (lisibilité) + vignette */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/85 via-navy-deep/70 to-navy/60"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_35%,rgba(15,27,42,0.55)_100%)]"
      />

      <div className="container-x relative py-24 sm:py-28">
        <div className="max-w-4xl">
          <p
            className="eyebrow mb-5 animate-fade-up text-white/90"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="inline-block h-px w-8 bg-brand" />
            Traitement nano de toiture · {site.region}
          </p>

          <h1
            className="headline animate-fade-up text-[2.9rem] text-white sm:text-[3.8rem] lg:text-[4.6rem] xl:text-[5.2rem]"
            style={{ animationDelay: "0.12s" }}
          >
            Prolongez la vie de votre toiture, sans la{" "}
            <span className="kw-bright">remplacer.</span>
          </h1>

          <p
            className="mt-6 max-w-2xl animate-fade-up text-[1.05rem] leading-relaxed text-white/90 sm:text-[1.15rem]"
            style={{ animationDelay: "0.2s" }}
          >
            Traitement nano certifié GoNano — appliqué en une journée, sans
            arrachage, à une fraction du coût d&apos;un remplacement.
          </p>

          <div
            className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.28s" }}
          >
            <Link href="#soumission" className="btn-primary text-[1.02rem]">
              Obtenez une inspection gratuite
              <ArrowRight className="h-[18px] w-[18px]" />
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn-outline text-[1.02rem]">
              <PhoneIcon className="h-[18px] w-[18px]" />
              {site.phoneDisplay}
            </a>
          </div>

          <ul
            className="mt-9 flex animate-fade-up flex-wrap gap-x-6 gap-y-2"
            style={{ animationDelay: "0.36s" }}
          >
            {trust.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 text-[14px] font-medium text-white/85"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/20">
                  <Check className="h-3.5 w-3.5 text-brand" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Transition douce vers la section suivante */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/0 to-transparent"
      />
    </section>
  );
}
