import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { site, sectors } from "@/lib/site";

type Secteur = {
  slug: string;
  name: string; // "Montréal"
  nameIn: string; // "à Montréal" / "dans les Laurentides" / "sur la Rive-Nord"
  heroImage: string;
  heroAlt: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  climateTitle: string;
  climateText: string;
  climatePoints: string[];
  offerText: string;
  quartiers: string[];
};

const SECTEURS: Record<string, Secteur> = {
  montreal: {
    slug: "montreal",
    name: "Montréal",
    nameIn: "à Montréal",
    heroImage: "/images/montreal-house.jpg",
    heroAlt: "Traitement de toiture résidentielle sur un plex à Montréal",
    metaTitle: "Traitement de Toiture à Montréal | Protection Bardeaux | Vitalis",
    metaDescription:
      "Traitement nano de toiture à Montréal — plex, duplex et maisons. Prolongez vos bardeaux de 10 à 15 ans, sans remplacement. Inspection gratuite.",
    intro:
      "Vous habitez Montréal ? Entre les plex du Plateau, les maisons d'Ahuntsic et les duplex de Rosemont, le parc immobilier montréalais vieillit — et vos bardeaux avec. Toitures Vitalis protège et prolonge votre toiture, en une seule journée, sans arrachage.",
    climateTitle: "Le climat urbain de Montréal est dur pour vos bardeaux.",
    climateText:
      "Îlots de chaleur l'été, forts écarts de température entre les saisons, cycles de gel-dégel à répétition : en ville, les bardeaux sèchent et se fragilisent plus vite. Sur un parc immobilier souvent plus âgé — plex, duplex, maisons de ville — le traitement nano redonne de la flexibilité avant que les dommages ne s'installent.",
    climatePoints: [
      "Îlots de chaleur urbains qui accélèrent le séchage des bardeaux",
      "Écarts de température marqués d'une saison à l'autre",
      "Parc immobilier vieillissant (plex, duplex, maisons de ville)",
      "Contraintes de stationnement et d'accès : on s'organise en ville",
    ],
    offerText:
      "À Montréal, on traite les bardeaux d'asphalte des plex, duplex et maisons unifamiliales. On compose avec les réalités de la ville — accès, stationnement — et on applique le traitement en une seule journée, sans arrachage ni déchets.",
    quartiers: [
      "Ahuntsic",
      "Rosemont",
      "Villeray",
      "Saint-Laurent",
      "Le Plateau",
      "Ouest-de-l'Île",
    ],
  },
  laval: {
    slug: "laval",
    name: "Laval",
    nameIn: "à Laval",
    heroImage: "/images/maison-laval.jpg",
    heroAlt: "Traitement de toiture d'un bungalow de banlieue à Laval",
    metaTitle: "Traitement de Toiture à Laval | Protection Bardeaux | Vitalis",
    metaDescription:
      "Traitement nano de toiture à Laval — grandes toitures de banlieue à Chomedey, Sainte-Rose, Vimont. Prolongez vos bardeaux, sans remplacement. Inspection gratuite.",
    intro:
      "Propriétaire à Laval ? Les maisons unifamiliales de Chomedey, Sainte-Rose ou Vimont ont souvent de grandes toitures pleinement exposées. Toitures Vitalis les protège et prolonge leur vie utile — sans remplacement coûteux, en une seule journée.",
    climateTitle: "À Laval, de grandes toitures exposées au gel-dégel.",
    climateText:
      "Les toitures de banlieue lavalloises sont larges et pleinement exposées, autant au soleil d'été qu'aux cycles de gel-dégel de l'hiver. Plus la surface est grande, plus le vieillissement des bardeaux finit par se voir — et plus tôt on protège, plus on prolonge la vie du toit.",
    climatePoints: [
      "Grandes surfaces de toiture en pleine exposition",
      "Cycles de gel-dégel complets tout l'hiver",
      "Soleil d'été direct sur toute la surface",
      "Terrain idéal pour l'entretien préventif",
    ],
    offerText:
      "À Laval, on se spécialise dans les grandes toitures résidentielles de banlieue. Inspection gratuite, application en une journée, garantie écrite et transférable — on protège votre toit avant qu'un remplacement ne devienne nécessaire.",
    quartiers: [
      "Chomedey",
      "Sainte-Rose",
      "Vimont",
      "Duvernay",
      "Fabreville",
      "Laval-des-Rapides",
    ],
  },
  laurentides: {
    slug: "laurentides",
    name: "les Laurentides",
    nameIn: "dans les Laurentides",
    heroImage: "/images/maison-laurentides.jpg",
    heroAlt: "Traitement de toiture d'un chalet sous la neige dans les Laurentides",
    metaTitle: "Traitement de Toiture dans les Laurentides | Vitalis",
    metaDescription:
      "Traitement nano de toiture dans les Laurentides — maisons et chalets à Saint-Jérôme, Blainville, Mirabel. Protection contre neige et gel. Inspection gratuite.",
    intro:
      "Dans les Laurentides, entre Saint-Jérôme, Blainville et Mirabel, l'hiver ne fait pas de cadeau aux toitures. Toitures Vitalis protège vos bardeaux contre la neige abondante et le gel prolongé — pour les maisons comme pour les chalets.",
    climateTitle: "Les Laurentides : neige abondante et gel prolongé.",
    climateText:
      "Ici, le climat est plus rigoureux qu'en ville : accumulations de neige, cycles de gel-dégel prolongés, verglas. C'est exactement le type de conditions où l'effet hydrophobe et la flexibilité restaurée par le traitement nano font la plus grande différence — pour une maison de Sainte-Thérèse comme pour un chalet du côté de Mirabel.",
    climatePoints: [
      "Neige abondante et accumulations lourdes sur les toits",
      "Gel prolongé et cycles de gel-dégel intenses",
      "Verglas et glace : l'effet hydrophobe favorise l'écoulement",
      "Maisons et chalets, souvent plus exposés aux intempéries",
    ],
    offerText:
      "Dans les Laurentides, on traite les toitures de maisons et de chalets en bardeaux d'asphalte. La protection contre la neige, la glace et le gel-dégel y est particulièrement pertinente — et on évalue toujours honnêtement l'admissibilité de votre toit avant de recommander quoi que ce soit.",
    quartiers: [
      "Saint-Jérôme",
      "Blainville",
      "Mirabel",
      "Sainte-Thérèse",
      "Boisbriand",
      "Saint-Sauveur",
    ],
  },
  "rive-nord": {
    slug: "rive-nord",
    name: "la Rive-Nord",
    nameIn: "sur la Rive-Nord",
    heroImage: "/images/maison-rive-nord.jpg",
    heroAlt: "Traitement de toiture d'une maison familiale sur la Rive-Nord de Montréal",
    metaTitle: "Traitement de Toiture Rive-Nord de Montréal | Vitalis",
    metaDescription:
      "Traitement nano de toiture sur la Rive-Nord — Terrebonne, Repentigny, Mascouche. Entretien préventif des toitures familiales. Inspection gratuite et sans pression.",
    intro:
      "Sur la Rive-Nord — Terrebonne, Repentigny, Mascouche — les quartiers familiaux se sont développés rapidement, et beaucoup de toitures arrivent à l'âge où un entretien préventif fait toute la différence. Toitures Vitalis prolonge leur vie, sans remplacement.",
    climateTitle: "Rive-Nord : des quartiers familiaux à protéger.",
    climateText:
      "Le vaste territoire résidentiel de la Rive-Nord compte de nombreuses maisons familiales bâties dans les mêmes années — leurs toitures vieillissent donc souvent en même temps. Traiter au bon moment évite bien des remplacements coûteux, que ce soit à Lorraine, Rosemère ou Repentigny.",
    climatePoints: [
      "De nombreuses maisons familiales du même âge",
      "Forte pertinence de l'entretien préventif de toiture",
      "Cycles de gel-dégel typiques du Grand Montréal",
      "Prolonger plutôt que remplacer, quartier par quartier",
    ],
    offerText:
      "Sur la Rive-Nord, on traite les toitures de maisons familiales en bardeaux d'asphalte. Inspection gratuite, évaluation honnête de l'admissibilité, application en une journée — l'entretien préventif fait au bon moment.",
    quartiers: [
      "Terrebonne",
      "Repentigny",
      "Mascouche",
      "Lorraine",
      "Rosemère",
      "Bois-des-Filion",
    ],
  },
  "rive-sud": {
    slug: "rive-sud",
    name: "la Rive-Sud",
    nameIn: "sur la Rive-Sud",
    heroImage: "/images/rivesud-maison.jpg",
    heroAlt:
      "Traitement de toiture d'une maison contemporaine sur la Rive-Sud de Montréal",
    metaTitle: "Traitement de Toiture Rive-Sud de Montréal | Vitalis",
    metaDescription:
      "Traitement nano de toiture sur la Rive-Sud — Longueuil, Brossard, Boucherville. Service honnête et premium pour prolonger vos bardeaux. Inspection gratuite.",
    intro:
      "Sur la Rive-Sud — Longueuil, Brossard, Boucherville — Toitures Vitalis mise sur un service honnête et premium pour protéger et prolonger votre toiture. On évalue franchement, on ne survend pas, et on applique le traitement en une seule journée.",
    climateTitle: "Rive-Sud : le même climat, une approche différente.",
    climateText:
      "Les bardeaux de la Rive-Sud subissent les mêmes UV, le même gel-dégel et les mêmes intempéries que partout au Grand Montréal. Ce qui nous distingue ici, c'est l'honnêteté : si votre toiture n'est pas un bon candidat, on vous le dit franchement — pas de survente, pas de pression.",
    climatePoints: [
      "UV, gel-dégel et grêle comme partout au Québec",
      "Notre différence : l'honnêteté plutôt que la survente",
      "Service premium et évaluation franche",
      "On refuse les toits qui ne sont pas admissibles",
    ],
    offerText:
      "Sur la Rive-Sud, on traite les toitures résidentielles en bardeaux d'asphalte avec un service premium et honnête. Inspection gratuite et sans pression : notre réputation vaut plus qu'une vente.",
    quartiers: [
      "Longueuil",
      "Brossard",
      "Saint-Hubert",
      "Boucherville",
      "Saint-Bruno",
      "La Prairie",
    ],
  },
};

const etapes = [
  {
    n: "01",
    title: "Inspection gratuite et honnête",
    text: "Un expert évalue l'état réel de votre toiture et son admissibilité. Si elle n'est pas un bon candidat, on vous le dit franchement.",
  },
  {
    n: "02",
    title: "Préparation",
    text: "Petites réparations et nettoyage au besoin pour assurer une application optimale du traitement.",
  },
  {
    n: "03",
    title: "Application",
    text: "Le produit est pulvérisé uniformément en une seule journée, sans poussière ni odeur. Vous restez chez vous.",
  },
];

const inclus = [
  "Inspection et évaluation gratuite",
  "Application en 1 seule journée",
  "Garantie écrite et transférable",
  "Évaluation honnête, sans pression",
];

export function generateStaticParams() {
  return Object.keys(SECTEURS).map((ville) => ({ ville }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const s = SECTEURS[ville];
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `/secteurs/${s.slug}` },
    openGraph: {
      type: "website",
      locale: "fr_CA",
      url: `${site.url}/secteurs/${s.slug}`,
      siteName: site.name,
      title: s.metaTitle,
      description: s.metaDescription,
      images: [{ url: s.heroImage, width: 1200, height: 630, alt: s.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: s.metaTitle,
      description: s.metaDescription,
      images: [s.heroImage],
    },
  };
}

export default async function SecteurPage({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville } = await params;
  const s = SECTEURS[ville];
  if (!s) notFound();

  const autres = sectors.filter((x) => x.href !== `/secteurs/${s.slug}`);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: s.name,
        item: `${site.url}/secteurs/${s.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Traitement nano de toiture résidentielle",
    name: `Traitement de toiture ${s.nameIn} — Toitures Vitalis`,
    description: s.metaDescription,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "City", name: s.name },
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
        eyebrow={`Traitement de toiture · ${s.name}`}
        titleLead="Traitement et protection de toiture"
        titleKeyword={`${s.nameIn}.`}
        subtitle={s.intro}
        bgImage={s.heroImage}
        bgAlt={s.heroAlt}
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: s.name }]}
      />

      {/* Climat local */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4">Le climat local</p>
              <h2 className="font-display text-[1.9rem] leading-[1.1] tracking-tightest text-navy sm:text-[2.4rem]">
                {s.climateTitle}
              </h2>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-greytext">
                {s.climateText}
              </p>
              <ul className="mt-8 space-y-3">
                {s.climatePoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/12">
                      <Check className="h-4 w-4 text-brand-strong" strokeWidth={2.6} aria-hidden />
                    </span>
                    <span className="text-[15px] leading-snug text-navy/85">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="photo-treat relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="/images/water-pearling-hydrophobic-roof.jpg"
                  alt={`Effet hydrophobe du traitement nano : gouttes perlant sur un bardeau protégé ${s.nameIn}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ce qu'on offre */}
      <section className="bg-greylight py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Notre service</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Ce qu&apos;on offre <span className="kw">{s.nameIn}.</span>
            </h2>
            <p className="mt-5 text-[1.05rem] leading-[1.75] text-greytext">
              {s.offerText}
            </p>
          </Reveal>

          <Reveal delay={100} className="mx-auto mt-8 max-w-2xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-greytext">
              Quartiers desservis
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5">
              {s.quartiers.map((q) => (
                <span
                  key={q}
                  className="inline-flex items-center gap-1.5 rounded-full border border-greyborder bg-white px-3.5 py-1.5 text-[14px] font-medium text-navy shadow-card"
                >
                  <MapPin className="h-3.5 w-3.5 text-brand-strong" aria-hidden />
                  {q}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inclus.map((item, i) => (
              <Reveal key={item} delay={i * 70}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-greyborder bg-white p-4 shadow-card">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/12">
                    <Check className="h-4 w-4 text-brand-strong" strokeWidth={2.6} aria-hidden />
                  </span>
                  <span className="text-[14.5px] font-medium leading-snug text-navy">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Procédé 3 étapes */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Le procédé</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Du premier appel à la <span className="kw">protection.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {etapes.map((e, i) => (
              <Reveal key={e.n} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-greyborder bg-greylight p-7 shadow-card">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white font-display text-[1.4rem] tracking-tightest text-brand-strong shadow-card">
                    {e.n}
                  </span>
                  <h3 className="mt-5 text-[1.25rem] font-bold text-navy">{e.title}</h3>
                  <p className="mt-2 text-[1rem] leading-[1.7] text-greytext">
                    {e.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage interne — autres secteurs */}
      <section className="bg-greylight py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Zones desservies</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Nous desservons tout le <span className="kw">Grand Montréal.</span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            {autres.map((a, i) => (
              <Reveal key={a.href} delay={i * 60}>
                <Link
                  href={a.href}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-greyborder bg-white px-4 py-3.5 shadow-card transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand/40"
                >
                  <span className="text-[15px] font-semibold text-navy">{a.name}</span>
                  <ArrowRight className="h-4 w-4 text-brand-strong transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-8 text-center">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[1rem] font-semibold text-brand-strong transition-colors duration-200 hover:text-navy"
            >
              Retour à l&apos;accueil
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <LeadForm />
    </main>
  );
}
