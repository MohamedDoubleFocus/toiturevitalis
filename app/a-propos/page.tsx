import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  BadgeCheck,
  ShieldCheck,
  MapPin,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Credibility from "@/components/Credibility";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "À Propos | Experts en Protection de Toiture | Toitures Vitalis",
  },
  description:
    "Entrepreneur certifié GoNano®, licencié et assuré. Une approche honnête et sans pression de la protection de toiture au Grand Montréal.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: `${site.url}/a-propos`,
    siteName: site.name,
    title: "Une approche honnête de la protection de toiture | Toitures Vitalis",
    description:
      "Certifié GoNano®, licencié et assuré. On évalue honnêtement, on ne survend pas — notre réputation vaut plus qu'une vente.",
    images: [
      {
        url: "/images/worker-and-van.jpg",
        width: 1200,
        height: 630,
        alt: "Équipe Toitures Vitalis et véhicule de service au Grand Montréal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos | Une approche honnête de la protection de toiture",
    description:
      "Certifié GoNano®, licencié et assuré. On évalue honnêtement, sans pression.",
    images: ["/images/worker-and-van.jpg"],
  },
};

const valeurs: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: Handshake,
    title: "Honnêteté d'abord",
    text: "On refuse les toits qui ne sont pas admissibles, et on le dit franchement.",
  },
  {
    Icon: BadgeCheck,
    title: "Certifié GoNano®",
    text: "On applique une technologie éprouvée, testée et reconnue.",
  },
  {
    Icon: ShieldCheck,
    title: "Licencié et assuré",
    text: "Couverture d'assurance complète — vous êtes protégé.",
  },
  {
    Icon: MapPin,
    title: "Local",
    text: "On connaît le climat québécois et ses défis pour vos toitures.",
  },
];

export default function AProposPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "À propos",
        item: `${site.url}/a-propos`,
      },
    ],
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À propos de Toitures Vitalis",
    description:
      "L'histoire et les valeurs de Toitures Vitalis : une approche honnête de la protection de toiture au Grand Montréal.",
    mainEntity: { "@id": `${site.url}/#business` },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <PageHero
        eyebrow="À propos"
        titleLead="Une approche honnête de la protection de"
        titleKeyword="toiture."
        subtitle="Toitures Vitalis est né d'une conviction simple : les propriétaires méritent une évaluation honnête, pas une vente sous pression."
        bgImage="/images/worker-and-van.jpg"
        bgAlt="Équipe Toitures Vitalis et véhicule de service dans un quartier résidentiel du Grand Montréal"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
      />

      {/* Notre histoire */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="photo-treat relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="/images/our-branded-van.png"
                  alt="Véhicule brandé Toitures Vitalis devant une maison résidentielle au Grand Montréal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="eyebrow mb-4">Notre histoire</p>
              <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
                L&apos;honnêteté <span className="kw">d&apos;abord.</span>
              </h2>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-greytext">
                Dans une industrie où beaucoup promettent la lune et survendent, on a
                choisi la transparence. On évalue votre toiture franchement, on refuse
                les toits qui ne sont pas admissibles, et on vous le dit sans détour.
              </p>
              <p className="mt-4 text-[1.05rem] leading-[1.75] text-greytext">
                On traite votre toiture comme si c&apos;était la nôtre. Si le traitement
                nano n&apos;est pas fait pour vous, on vous orientera vers la bonne
                solution — même si ça veut dire ne pas faire la vente.{" "}
                <span className="font-semibold text-navy">
                  Notre réputation vaut plus que ça.
                </span>
              </p>
              <Link
                href="#soumission"
                className="group mt-8 inline-flex items-center gap-2 text-[1rem] font-semibold text-brand-strong transition-colors duration-200 hover:text-navy"
              >
                Rencontrez-nous — inspection gratuite
                <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ce qui nous définit (sombre) */}
      <section className="relative overflow-hidden bg-navy py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Nos valeurs</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-white sm:text-[2.5rem]">
              Ce qui nous <span className="kw-bright">définit.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {valeurs.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand">
                    <v.Icon className="h-6 w-6" strokeWidth={1.9} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-[1.15rem] font-bold text-white">{v.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/70">
                      {v.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Crédibilité — Dans l'œil du dragon (composant réutilisé) */}
      <Credibility />

      <LeadForm />
    </main>
  );
}
