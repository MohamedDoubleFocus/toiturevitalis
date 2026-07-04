import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/lib/site";
import { PhoneIcon, ArrowRight } from "@/components/icons";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  titleLead,
  titleKeyword,
  subtitle,
  bgImage,
  bgAlt,
  breadcrumb,
  ctaLabel = "Obtenez une inspection gratuite",
  ctaHref = "#soumission",
  showPhone = true,
}: {
  eyebrow: string;
  titleLead: string;
  titleKeyword: string;
  subtitle: string;
  bgImage: string;
  bgAlt: string;
  breadcrumb: Crumb[];
  ctaLabel?: string;
  ctaHref?: string;
  showPhone?: boolean;
}) {
  return (
    <section className="relative isolate flex min-h-[58vh] items-center overflow-hidden bg-navy-deep">
      {/* Fond photo + overlay navy (cohérent avec l'accueil) */}
      <Image
        src={bgImage}
        alt={bgAlt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* Overlay dégradé horizontal : foncé côté texte (gauche ~75%) → clair à droite (~30%) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/75 via-navy-deep/55 to-navy-deep/30"
      />
      {/* Léger renfort vertical pour la lisibilité du bas de section */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent"
      />

      <div className="container-x relative py-20 sm:py-24">
        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/70">
            {breadcrumb.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="transition-colors duration-200 hover:text-brand"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/90" aria-current="page">
                    {c.label}
                  </span>
                )}
                {i < breadcrumb.length - 1 && (
                  <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-3xl">
          <p className="eyebrow mb-5 text-white/90">
            <span className="inline-block h-px w-8 bg-brand" />
            {eyebrow}
          </p>
          <h1 className="headline text-[2.4rem] text-white sm:text-[3.1rem] lg:text-[3.75rem]">
            {titleLead} <span className="kw-bright">{titleKeyword}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-white/90 sm:text-[1.12rem]">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={ctaHref} className="btn-primary text-[1.02rem]">
              {ctaLabel}
              <ArrowRight className="h-[18px] w-[18px]" />
            </Link>
            {showPhone && (
              <a href={`tel:${site.phoneHref}`} className="btn-outline text-[1.02rem]">
                <PhoneIcon className="h-[18px] w-[18px]" />
                {site.phoneDisplay}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
