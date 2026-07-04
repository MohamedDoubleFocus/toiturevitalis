import type { Metadata } from "next";
import {
  PiggyBank,
  Ruler,
  Gauge,
  Home,
  BadgeCheck,
  Handshake,
  Zap,
  type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Prix du Traitement de Toiture | Soumission Gratuite | Vitalis",
  },
  description:
    "Économisez 60 à 70 % vs un remplacement complet. Obtenez une soumission gratuite et sans pression pour votre toiture.",
  alternates: { canonical: "/prix" },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: `${site.url}/prix`,
    siteName: site.name,
    title: "Combien coûte un traitement de toiture ? | Toitures Vitalis",
    description:
      "Une fraction du coût d'un remplacement — environ 30 %, soit 60 à 70 % d'économie. Soumission gratuite et sans pression.",
    images: [
      {
        url: "/images/hero-page-prix.jpg",
        width: 1200,
        height: 630,
        alt: "Belle maison résidentielle québécoise avec toiture en bardeaux d'asphalte bien entretenue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prix du traitement de toiture | Soumission gratuite | Vitalis",
    description:
      "Une fraction du coût d'un remplacement. Soumission gratuite et sans pression au Grand Montréal.",
    images: ["/images/hero-page-prix.jpg"],
  },
};

const facteurs: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: Ruler,
    title: "La superficie de la toiture",
    text: "Plus la surface à traiter est grande, plus le prix évolue. On la mesure précisément lors de l'inspection.",
  },
  {
    Icon: Gauge,
    title: "L'état des bardeaux",
    text: "Notre score de santé détermine le produit requis — Bio-Boost, Revive ou Fortify — ce qui influence le prix.",
  },
  {
    Icon: Home,
    title: "L'accès et la complexité",
    text: "La forme du toit, sa pente et son accessibilité influencent le temps de travail nécessaire.",
  },
];

const engagements: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: BadgeCheck,
    title: "Gratuite et sans pression",
    text: "La soumission ne coûte rien et ne vous engage à rien. Aucun vendeur insistant.",
  },
  {
    Icon: Handshake,
    title: "Évaluation honnête",
    text: "Si le traitement n'est pas la bonne solution pour votre toiture, on vous le dit franchement.",
  },
  {
    Icon: Zap,
    title: "Réponse rapide",
    text: "On revient vers vous rapidement pour planifier votre inspection à un moment qui vous convient.",
  },
];

export default function PrixPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      { "@type": "ListItem", position: 2, name: "Prix", item: `${site.url}/prix` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Traitement nano de toiture résidentielle",
    name: "Soumission de traitement nano de toiture — Toitures Vitalis",
    description:
      "Le traitement nano coûte environ 30 % d'un remplacement complet (économie de 60 à 70 %). Soumission gratuite et sans pression après une inspection honnête. Aucun prix fixe : le montant dépend de la superficie, de l'état et de l'accès du toit.",
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
        eyebrow="Prix & soumission"
        titleLead="Combien coûte un traitement de"
        titleKeyword="toiture ?"
        subtitle="Le prix dépend de la superficie et de l'état de votre toiture, mais une chose est certaine : c'est une fraction du coût d'un remplacement complet. Voici comment ça se calcule."
        bgImage="/images/hero-page-prix.jpg"
        bgAlt="Belle maison résidentielle québécoise avec toiture en bardeaux d'asphalte bien entretenue"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Prix" }]}
        ctaLabel="Obtenez votre soumission gratuite"
      />

      {/* Section — Le calcul */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Le calcul</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Une fraction du coût d&apos;un{" "}
              <span className="kw">remplacement.</span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-greyborder bg-greylight p-8 text-center">
                <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-greytext">
                  Remplacement complet
                </span>
                <span className="mt-3 font-display text-[2rem] leading-none tracking-tightest text-navy sm:text-[2.2rem]">
                  9 000 – 15 000 $
                </span>
                <span className="mt-3 text-[13px] font-medium text-greytext">
                  Arrachage, déchets, 2 à 4 jours de travaux
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl bg-navy p-8 text-center shadow-card">
                <span className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white shadow-cta">
                  Recommandé
                </span>
                <span className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/70">
                  Traitement Nano Vitalis
                </span>
                <span className="mt-3 font-display text-[2.4rem] leading-none tracking-tightest text-white">
                  ≈ 30 %
                </span>
                <span className="mt-3 text-[13px] font-medium text-brand">
                  du coût d&apos;un remplacement
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-brand/25 bg-brand/[0.07] py-2.5 pl-3 pr-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-brand">
                <PiggyBank className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
              <span className="text-[1.05rem] font-bold text-navy">
                Économisez 60 à 70 %
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section — Ce qui influence votre prix */}
      <section className="bg-greylight py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Sur mesure</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Ce qui influence votre <span className="kw">prix.</span>
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-greytext">
              Chaque toiture est différente — c&apos;est pourquoi le prix exact vient
              d&apos;une inspection, jamais d&apos;une formule toute faite.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {facteurs.map((f, i) => (
              <Reveal key={f.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-greyborder bg-white p-7 shadow-card">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <f.Icon className="h-6 w-6" strokeWidth={1.9} />
                  </span>
                  <h3 className="text-[1.2rem] font-bold leading-snug text-navy">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 text-[1rem] leading-[1.7] text-greytext">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section — Notre engagement */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Notre engagement</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Une soumission, sans <span className="kw">surprise.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {engagements.map((e, i) => (
              <Reveal key={e.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-greyborder bg-greylight p-7 shadow-card">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <e.Icon className="h-6 w-6" strokeWidth={1.9} />
                  </span>
                  <h3 className="text-[1.2rem] font-bold text-navy">{e.title}</h3>
                  <p className="mt-2.5 text-[1rem] leading-[1.7] text-greytext">
                    {e.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadForm />
    </main>
  );
}
