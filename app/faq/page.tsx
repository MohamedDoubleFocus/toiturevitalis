import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  FlaskConical,
  Home,
  ShieldCheck,
  ArrowRight,
  Phone,
  type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Questions Fréquentes sur le Traitement de Toiture | Vitalis",
  },
  description:
    "Toutes vos questions sur le traitement nano de toiture : durée, coût, garantie, admissibilité. Réponses honnêtes et claires.",
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: `${site.url}/faq`,
    siteName: site.name,
    title: "Questions fréquentes sur le traitement nano de toiture | Vitalis",
    description:
      "Durée, coût, garantie, admissibilité — toutes vos questions sur le traitement nano de toiture, avec des réponses honnêtes.",
    images: [
      {
        url: "/images/roofer-spraying-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Technicien Toitures Vitalis appliquant le traitement nano sur une toiture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Questions fréquentes sur le traitement de toiture | Vitalis",
    description:
      "Durée, coût, garantie, admissibilité — réponses honnêtes sur le traitement nano de toiture.",
    images: ["/images/roofer-spraying-hero.jpg"],
  },
};

const categories: {
  id: string;
  number: string;
  title: string;
  items: FaqItem[];
}[] = [
  {
    id: "science",
    number: "01",
    title: "Le produit et la science",
    items: [
      {
        icon: "flask",
        q: "Est-ce que le traitement nano fonctionne vraiment ?",
        a: "Oui, sur une toiture admissible. Le traitement redonne de la flexibilité aux bardeaux et crée une barrière hydrophobe et anti-UV qui ralentit leur vieillissement. Il est appuyé par plus d'un million de dollars en tests (impact, rétention des granules, résistance au vent). Cela dit, ce n'est pas une solution miracle : il fonctionne sur une toiture encore en bon état, pas sur un toit en fin de vie. C'est pourquoi on commence toujours par une inspection honnête.",
      },
      {
        icon: "droplets",
        q: "Est-ce que ça répare les fuites ?",
        a: "Non, et c'est important d'être clair là-dessus. Le traitement nano est une solution de préservation : il protège et prolonge une toiture en bon état. Il ne répare pas les fuites, les solins ou les problèmes de structure. Si votre toiture a ces problèmes, on vous orientera vers la bonne solution.",
      },
      {
        icon: "leaf",
        q: "Est-ce écologique ?",
        a: "Oui. En prolongeant la vie de votre toiture, le traitement évite l'envoi de tonnes de bardeaux aux sites d'enfouissement. La technologie est reconnue comme rapidement biodégradable et sans danger pour les organismes aquatiques.",
      },
    ],
  },
  {
    id: "prix-garantie",
    number: "02",
    title: "Prix, garantie et admissibilité",
    items: [
      {
        icon: "wallet",
        q: "Combien ça coûte ?",
        a: "Beaucoup moins qu'un remplacement complet — généralement autour de 30 % du coût, soit une économie de 60 à 70 %. Le prix exact dépend de la superficie et de l'état de votre toiture. On vous fournit une soumission gratuite et sans pression après l'inspection.",
      },
      {
        icon: "home",
        q: "Le traitement convient-il à tous les types de toiture ?",
        a: "Nous nous concentrons sur les toitures résidentielles en bardeaux d'asphalte — le matériau le plus courant au Québec. La meilleure façon de savoir si votre toiture est admissible est une inspection gratuite et sans engagement.",
      },
      {
        icon: "shield",
        q: "Est-ce que ça annule la garantie de mes bardeaux ?",
        a: "Non. Le traitement GoNano® n'annule pas les garanties existantes du fabricant de vos bardeaux. Et si jamais un enjeu survenait, GoNano® vous appuie dans le processus de réclamation auprès du fabricant.",
      },
      {
        icon: "file",
        q: "Y a-t-il une garantie ?",
        a: "Oui, une garantie fabricant écrite et transférable, pouvant aller jusqu'à 15 ans selon l'état de votre toiture et le produit appliqué. On vous remet le document complet et on l'explique avant tout engagement.",
      },
      {
        icon: "clipboard",
        q: "Comment savoir si ma toiture est un bon candidat ?",
        a: "La seule façon fiable est une inspection. On évalue l'âge, l'état des granules, la flexibilité et l'absence de dommages majeurs. Si votre toiture est admissible, on vous le confirme ; sinon, on vous le dit honnêtement. L'inspection est gratuite et sans engagement.",
      },
    ],
  },
  {
    id: "application",
    number: "03",
    title: "L'application et le service",
    items: [
      {
        icon: "clock",
        q: "Combien de temps dure l'application ?",
        a: "Une seule journée dans la grande majorité des cas. Le traitement est pulvérisé sans poussière ni odeur, et vous pouvez rester chez vous pendant les travaux.",
      },
      {
        icon: "map",
        q: "Dans quelles régions intervenez-vous ?",
        a: "Nous desservons le Grand Montréal : Montréal, Laval, les Laurentides, la Rive-Nord et la Rive-Sud.",
      },
    ],
  },
];

const allFaqs = categories.flatMap((c) => c.items);

function CredibilityBand() {
  const badges: { Icon: LucideIcon; label: string }[] = [
    { Icon: ShieldCheck, label: "Certifié GoNano®" },
    { Icon: FlaskConical, label: "1 M$+ investi en tests" },
    { Icon: Home, label: "Licencié et assuré" },
  ];
  return (
    <div className="relative isolate overflow-hidden rounded-2xl bg-navy p-8 text-center shadow-card sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-16 -z-10 h-64 w-64 rounded-full bg-brand/15 blur-3xl"
      />
      <p className="font-display text-[2.6rem] leading-none tracking-tightest text-white sm:text-[3rem]">
        50 000<span className="text-brand">+</span>
      </p>
      <p className="mt-2.5 text-[15px] font-medium text-white/80">
        toitures traitées en Amérique du Nord
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 border-t border-white/10 pt-6">
        {badges.map((b) => (
          <span
            key={b.label}
            className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.06em] text-white/65"
          >
            <b.Icon className="h-[16px] w-[16px] text-brand" strokeWidth={2} aria-hidden />
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${site.url}/faq` },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow="Foire aux questions"
        titleLead="Questions fréquentes sur le traitement nano de"
        titleKeyword="toiture."
        subtitle="Durée, coût, garantie, admissibilité — toutes vos questions sur le traitement nano de toiture, avec des réponses honnêtes et claires."
        bgImage="/images/hero.jpg"
        bgAlt="Toiture résidentielle en bardeaux d'asphalte au Grand Montréal"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]}
      />

      <section className="bg-greylight py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
            {/* Colonne gauche — sticky */}
            <div>
              <div className="lg:sticky lg:top-24">
                <Reveal>
                  <p className="eyebrow mb-4">Une approche honnête</p>
                  <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.4rem]">
                    On répond à tout, <span className="kw">honnêtement.</span>
                  </h2>
                  <p className="mt-5 text-[1.02rem] leading-[1.7] text-greytext">
                    Pas de jargon, pas de sur-promesse. Trouvez vos réponses par
                    catégorie — ou parlez directement à un expert.
                  </p>

                  <div className="photo-treat relative mt-7 aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                    <Image
                      src="/images/roofer-spraying-hero.jpg"
                      alt="Technicien Toitures Vitalis appliquant le traitement nano de toiture"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Link href="#soumission" className="btn-primary text-[15px]">
                      Parlez à un expert
                      <ArrowRight className="h-[18px] w-[18px]" />
                    </Link>
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="btn-outline-navy text-[15px]"
                    >
                      <Phone className="h-[18px] w-[18px] text-brand-strong" />
                      {site.phoneDisplay}
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Colonne droite — catégories */}
            <div className="space-y-10">
              {categories.map((cat, ci) => (
                <Fragment key={cat.id}>
                  {ci === 2 && (
                    <Reveal>
                      <CredibilityBand />
                    </Reveal>
                  )}
                  <Reveal delay={ci === 0 ? 0 : 60}>
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-navy font-display text-[0.95rem] tracking-tightest text-white">
                          {cat.number}
                        </span>
                        <h2 className="font-display text-[1.35rem] leading-tight tracking-tightest text-navy sm:text-[1.55rem]">
                          {cat.title}
                        </h2>
                      </div>
                      <FaqAccordion
                        items={cat.items}
                        idPrefix={`faq-${cat.id}`}
                        headingTag="h3"
                        defaultOpen={ci === 0 ? 0 : -1}
                      />
                    </div>
                  </Reveal>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </main>
  );
}
