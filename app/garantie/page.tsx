import type { Metadata } from "next";
import {
  FileText,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  Search,
  Wallet,
  Minus,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { PDF_GARANTIE, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Garantie de Traitement de Toiture jusqu'à 15 ans | Vitalis" },
  description:
    "Garantie fabricant écrite et transférable jusqu'à 15 ans. Comprenez exactement ce qui est couvert, en toute transparence.",
  alternates: { canonical: "/garantie" },
  openGraph: {
    type: "article",
    locale: "fr_CA",
    url: `${site.url}/garantie`,
    siteName: site.name,
    title: "Une garantie écrite, transparente et transférable | Toitures Vitalis",
    description:
      "Le traitement nano GoNano est appuyé par une garantie fabricant écrite jusqu'à 15 ans. Ce qui est couvert, expliqué sans petits caractères.",
    images: [
      {
        url: "/images/water-pearling-hydrophobic-roof.jpg",
        width: 1200,
        height: 630,
        alt: "Bardeau d'asphalte traité et protégé — effet hydrophobe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garantie du traitement de toiture jusqu'à 15 ans | Toitures Vitalis",
    description:
      "Garantie fabricant écrite et transférable. Ce qui est couvert, en toute transparence.",
    images: ["/images/water-pearling-hydrophobic-roof.jpg"],
  },
};

const durees = [
  { product: "Bio-Boost / Boost", duration: "3 – 5 ans", note: "Toitures 10 ans +" },
  { product: "Revive", duration: "7 – 10 ans", note: "Toitures 5 – 20 ans" },
  { product: "Fortify", duration: "12 – 15 ans", note: "Toitures récentes" },
  { product: "Fortify Elite", duration: "jusqu'à 20 ans", note: "2 couches" },
];

const recours = [
  {
    n: "01",
    Icon: Search,
    title: "Inspection gratuite",
    text: "Un entrepreneur certifié évalue la zone concernée.",
  },
  {
    n: "02",
    Icon: RefreshCw,
    title: "Retraitement gratuit",
    text: "Si un défaut couvert est confirmé, la zone est retraitée sans frais.",
  },
  {
    n: "03",
    Icon: Wallet,
    title: "Indemnité",
    text: "Si le retraitement ne règle pas le problème, une indemnité pour les matériaux de bardeaux est versée selon les modalités de la garantie.",
  },
];

const avantages = [
  {
    title: "Écrite et formelle",
    text: "Pas juste une promesse verbale : un document en bonne et due forme.",
  },
  {
    title: "Transférable",
    text: "Elle ajoute de la valeur à votre maison si vous la vendez.",
  },
  {
    title: "N'annule pas votre garantie de bardeaux",
    text: "GoNano vous appuie même auprès du fabricant si nécessaire.",
  },
  {
    title: "Droits du consommateur protégés",
    text: "La garantie respecte la Loi sur la protection du consommateur du Québec.",
  },
];

const exclusions = [
  "Les dommages de force majeure (ouragan, verglas extrême, foudre, inondation).",
  "L'usure naturelle en fin de vie normale de la toiture.",
  "Les fuites, solins ou défauts structurels préexistants.",
  "Les dommages causés après le traitement par des tiers ou un manque d'entretien.",
  "La grêle — sauf sur le produit Fortify Elite, qui inclut une couverture grêle spécifique.",
];

export default function GarantiePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Garantie",
        item: `${site.url}/garantie`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Garantie de traitement nano de toiture",
    name: "Garantie du traitement nano de toiture — Toitures Vitalis",
    description:
      "Garantie fabricant écrite et transférable pouvant aller jusqu'à 15 ans (jusqu'à 20 ans avec Fortify Elite), couvrant les défauts causés par le traitement nano GoNano.",
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
    additionalProperty: durees.map((d) => ({
      "@type": "PropertyValue",
      name: `Durée de garantie — ${d.product}`,
      value: d.duration,
    })),
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
        eyebrow="La garantie"
        titleLead="Une garantie écrite, transparente et"
        titleKeyword="transférable."
        subtitle="Le traitement nano de GoNano est appuyé par une garantie fabricant écrite pouvant aller jusqu'à 15 ans. Voici exactement ce qu'elle couvre — en toute transparence, sans petits caractères cachés."
        bgImage="/images/shingle-texture-macro.png"
        bgAlt="Texture rapprochée d'une toiture en bardeaux d'asphalte"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Garantie" }]}
      />

      {/* Section 1 — Ce que la garantie couvre */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4 justify-center">Ce que la garantie couvre</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Votre <span className="kw">protection.</span>
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.75] text-greytext">
              La garantie assure que les bardeaux traités ne décolleront pas, ne
              gondoleront pas et ne se déformeront pas prématurément à cause du
              traitement, pendant toute la période de couverture. La durée dépend de
              l&apos;état de votre toiture au moment du traitement (évalué par notre
              système de score de santé) et du produit appliqué.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {durees.map((d, i) => (
              <Reveal key={d.product} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-greyborder bg-greylight p-6 text-center shadow-card">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-navy/70">
                    {d.product}
                  </span>
                  <span className="mt-3 font-display text-[1.7rem] leading-none tracking-tightest text-brand-strong">
                    {d.duration}
                  </span>
                  <span className="mt-3 text-[13px] font-medium text-greytext">
                    {d.note}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Recours en 3 étapes */}
      <section className="bg-greylight py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Le recours</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Si un problème couvert <span className="kw">survient.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {recours.map((r, i) => (
              <Reveal key={r.n} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-greyborder bg-white p-7 shadow-card">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 font-display text-[1.4rem] tracking-tightest text-brand-strong">
                      {r.n}
                    </span>
                    <r.Icon className="h-6 w-6 text-brand-strong" strokeWidth={1.8} aria-hidden />
                  </div>
                  <h3 className="mt-5 text-[1.25rem] font-bold text-navy">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[1rem] leading-[1.7] text-greytext">
                    {r.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Avantages clés (sombre) */}
      <section className="relative overflow-hidden bg-navy py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Pourquoi elle a de la valeur</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-white sm:text-[2.5rem]">
              Une garantie qui <span className="kw-bright">compte.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {avantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand">
                    <ShieldCheck className="h-6 w-6" strokeWidth={1.9} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-white">{a.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/70">
                      {a.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Transparence : exclusions + PDF officiel */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-4">En toute transparence</p>
              <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
                Ce que la garantie <span className="kw">ne couvre pas.</span>
              </h2>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-greytext">
                Pour qu&apos;il n&apos;y ait aucune surprise, voici les principales
                exclusions :
              </p>
              <ul className="mt-6 space-y-3">
                {exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Minus
                      className="mt-1 h-4 w-4 flex-shrink-0 text-greytext"
                      strokeWidth={3}
                      aria-hidden
                    />
                    <span className="text-[1rem] leading-[1.6] text-navy/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-greytext">
                Nous vous remettons le document de garantie complet et nous prenons le
                temps de vous l&apos;expliquer avant tout engagement. Aucune surprise,
                aucune pression.
              </p>
            </Reveal>

            {/* Encadré PDF officiel */}
            <Reveal delay={120}>
              <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-brand/25 bg-brand/[0.05] p-6 shadow-card sm:flex-row sm:items-center sm:gap-6 sm:p-8">
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-brand/12 text-brand-strong">
                  <FileText className="h-7 w-7" strokeWidth={1.8} aria-hidden />
                </span>
                <div className="flex-1">
                  <p className="text-[1rem] leading-[1.6] text-navy">
                    Nous croyons en la transparence totale. Consultez le document de
                    garantie officiel de GoNano avant tout engagement — aucune surprise,
                    aucun petit caractère caché.
                  </p>
                  <a
                    href={PDF_GARANTIE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-navy mt-4 !border-brand/40 text-[15px] text-navy hover:!border-brand"
                  >
                    <FileText className="h-[18px] w-[18px] text-brand-strong" aria-hidden />
                    Consulter la garantie complète (PDF)
                    <ExternalLink className="h-4 w-4 text-greytext" aria-hidden />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <LeadForm />
    </main>
  );
}
