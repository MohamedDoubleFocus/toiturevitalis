import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Nos Services de Protection de Toiture | Toitures Vitalis" },
  description:
    "Traitement nano pour bardeaux d'asphalte résidentiels. Prolongez la vie de votre toiture de 10 à 15 ans, sans remplacement coûteux. Inspection gratuite.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: `${site.url}/services`,
    siteName: site.name,
    title: "Nos services de protection de toiture | Toitures Vitalis",
    description:
      "Notre spécialité : le traitement nano des toitures résidentielles en bardeaux d'asphalte. Prolongez votre toiture, sans remplacement coûteux.",
    images: [
      {
        url: "/images/man-spraying-roof.jpg",
        width: 1200,
        height: 630,
        alt: "Application professionnelle du traitement nano sur une toiture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos services de protection de toiture | Toitures Vitalis",
    description:
      "Traitement nano des toitures résidentielles en bardeaux d'asphalte. Prolongez votre toiture, sans remplacement coûteux.",
    images: ["/images/man-spraying-roof.jpg"],
  },
};

const residentiel = [
  "Traitement nano de bardeaux d'asphalte",
  "Prolongation de la vie utile de 10 à 15 ans",
  "Sans arrachage, appliqué en une seule journée",
  "Évaluation honnête de l'admissibilité",
];

const inclus = [
  "Inspection et évaluation honnête gratuite",
  "Préparation de surface",
  "Application professionnelle en 1 jour",
  "Garantie écrite et transférable",
  "Document de garantie remis et expliqué",
];

const produits = [
  {
    img: "/images/Nuroof-fortify.png",
    alt: "Produit GoNano NuRoof Fortify pour toitures récentes",
    title: "NuRoof Fortify",
    subtitle: "Toitures récentes (moins de 5 ans)",
    desc: "Un bouclier préventif pour protéger un toit encore neuf. Nanotechnologie haute concentration + bio-huile. Prolongation jusqu'à 15 ans.",
  },
  {
    img: "/images/Nuroof-revive.png",
    alt: "Produit GoNano NuRoof Revive pour toitures de 5 à 20 ans",
    title: "NuRoof Revive",
    subtitle: "Toitures de 5 à 20 ans",
    desc: "Restaure et protège un toit qui commence à vieillir. Nanotechnologie avancée qui redonne flexibilité et résistance. Prolongation jusqu'à 10 ans.",
  },
  {
    img: "/images/Nuroof-bioboost.png",
    alt: "Produit GoNano NuRoof Bio-Boost pour toitures de 10 ans et plus",
    title: "Bio-Boost",
    subtitle: "Toitures de 10 ans et plus",
    desc: "Solution économique pour les toitures vieillissantes. Nanotechnologie + bio-huiles renouvelables. Prolongation de 3 à 5 ans.",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${site.url}/services`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Traitement nano de toiture résidentielle",
    name: "Traitement nano de toiture résidentielle — Toitures Vitalis",
    description:
      "Traitement nanotechnologique GoNano pour bardeaux d'asphalte résidentiels. Protège et prolonge la toiture de 10 à 15 ans, sans arrachage ni remplacement. Certifié GoNano.",
    category: "Residential roof protection",
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Nos services"
        titleLead="Nos services de protection de"
        titleKeyword="toiture."
        subtitle="Toitures Vitalis se spécialise dans la protection des toitures résidentielles en bardeaux d'asphalte grâce à la nanotechnologie GoNano. Prolongez la vie de votre toit, sans remplacement coûteux."
        bgImage="/images/man-spraying-roof.jpg"
        bgAlt="Application professionnelle du traitement nano sur une toiture résidentielle"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Services" }]}
      />

      {/* Notre spécialité — résidentiel */}
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
                <span className="absolute left-4 top-4 rounded-full bg-navy-deep/85 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-white backdrop-blur-sm">
                  100 % résidentiel
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="eyebrow mb-4">Notre spécialité</p>
              <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
                La protection des toitures{" "}
                <span className="kw">résidentielles.</span>
              </h2>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-greytext">
                Toitures Vitalis se concentre exclusivement sur les toitures
                résidentielles en bardeaux d&apos;asphalte. Notre traitement nano GoNano
                redonne flexibilité et protection à vos bardeaux, prolongeant leur vie de
                10 à 15 ans — idéal pour une toiture encore en bon état qu&apos;on veut
                préserver.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {residentiel.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/12">
                      <Check className="h-4 w-4 text-brand" strokeWidth={2.6} aria-hidden />
                    </span>
                    <span className="text-[15px] font-medium leading-snug text-navy">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compris dans chaque service — bande texturée (overlay navy) */}
      <section className="relative isolate overflow-hidden py-16 md:py-20">
        <Image
          src="/images/shingle-texture-macro.png"
          alt="Texture rapprochée de bardeaux d'asphalte d'une toiture"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-navy-deep/[0.93]" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/50 to-navy-deep/70"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-brand/12 blur-3xl"
        />
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Compris partout</p>
            <h2 className="font-display text-[1.9rem] leading-[1.1] tracking-tightest text-white sm:text-[2.3rem]">
              Ce qui est toujours <span className="kw">inclus.</span>
            </h2>
          </Reveal>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inclus.map((item) => (
              <Reveal key={item}>
                <li className="flex h-full items-start gap-3 rounded-xl border border-white/15 bg-white/[0.08] p-4">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/20">
                    <Check className="h-4 w-4 text-brand" strokeWidth={2.6} aria-hidden />
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-white/90">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Produits NuRoof — bannière d'ensemble + 3 cartes */}
      <section className="bg-greylight py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Les produits NuRoof</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Un produit pour chaque <span className="kw">toiture.</span>
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-greytext">
              Trois formulations GoNano, adaptées à l&apos;âge et à l&apos;état de votre
              toit.
            </p>
          </Reveal>

          {/* Bannière d'ensemble */}
          <Reveal delay={100} className="mt-12">
            <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-greyborder bg-white shadow-card">
              <Image
                src="/images/produits-nuroof-ensemble.jpg"
                alt="Gamme de produits GoNano NuRoof : Fortify, Revive et Bio-Boost"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* 3 cartes produits */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {produits.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-greyborder bg-white shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative aspect-[4/3] bg-white">
                    <Image
                      src={p.img}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-[1.3rem] tracking-tightest text-navy">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] font-semibold uppercase tracking-[0.06em] text-brand">
                      {p.subtitle}
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.65] text-greytext">
                      {p.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-[14px] italic leading-relaxed text-greytext">
              Le bon produit dépend de l&apos;état réel de votre toiture — c&apos;est ce
              qu&apos;on détermine lors de l&apos;inspection gratuite.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Le traitement en action */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="photo-treat relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="/images/traitement-bardeau-closeup.jpg"
                  alt="Gros plan de l'application du traitement nano sur des bardeaux d'asphalte"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow mb-4">Le traitement en action</p>
              <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
                Appliqué en une seule <span className="kw">journée.</span>
              </h2>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-greytext">
                Nos techniciens certifiés pulvérisent le traitement uniformément sur
                toute la surface, sans poussière ni odeur. Le produit pénètre les
                bardeaux, sèche rapidement, et votre toiture est protégée dès la fin de
                la journée.
              </p>
              <p className="mt-4 text-[1.05rem] leading-[1.75] text-greytext">
                Vous restez chez vous pendant les travaux — aucune démolition, aucun
                arrachage, aucun déchet envoyé à l&apos;enfouissement.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <LeadForm />
    </main>
  );
}
