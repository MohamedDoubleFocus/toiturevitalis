import type { Metadata } from "next";
import Image from "next/image";
import {
  Feather,
  Droplets,
  Sun,
  ShieldCheck,
  Wind,
  Snowflake,
  type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Comment Fonctionne le Traitement Nano de Toiture | Vitalis",
  },
  description:
    "Découvrez comment la nanotechnologie protège vos bardeaux contre les UV, l'eau, le gel et la grêle. Explication simple et honnête du traitement.",
  alternates: { canonical: "/comment-ca-fonctionne" },
  openGraph: {
    type: "article",
    locale: "fr_CA",
    url: `${site.url}/comment-ca-fonctionne`,
    siteName: site.name,
    title: "Comment fonctionne le traitement nano de toiture | Toitures Vitalis",
    description:
      "La nanotechnologie qui pénètre vos bardeaux pour les renforcer de l'intérieur. Explication simple et honnête, étape par étape.",
    images: [
      {
        url: "/images/roofer-spraying-roof.jpg",
        width: 1200,
        height: 630,
        alt: "Technicien Toitures Vitalis appliquant le traitement nano sur une toiture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment fonctionne le traitement nano de toiture | Toitures Vitalis",
    description:
      "La nanotechnologie qui pénètre vos bardeaux pour les renforcer de l'intérieur. Explication simple et honnête.",
    images: ["/images/roofer-spraying-roof.jpg"],
  },
};

const nanosilice: { label: string; text: string }[] = [
  {
    label: "Matériel",
    text: "Un nanomatériau inorganique à très haute densité de silice (99 %), des milliers de fois plus petit qu'un grain de poussière.",
  },
  {
    label: "Fabrication",
    text: "Créé synthétiquement par précipitation, voie hydrothermale ou solvothermale, ou réduction thermique (1700 – 2300 °C).",
  },
  {
    label: "Action",
    text: "La modification se produit par réactivité pouzzolanique — les nanoparticules remplissent les pores et renforcent le bardeau.",
  },
];

const produits = [
  {
    img: "/images/Nuroof-fortify.png",
    alt: "Produit GoNano® NuRoof Fortify pour traitement de toitures récentes",
    title: "NuRoof Fortify",
    subtitle: "Toitures récentes (moins de 5 ans)",
    desc: "Un bouclier préventif pour protéger un toit encore neuf. Nanotechnologie haute concentration + bio-huile. Prolongation jusqu'à 15 ans.",
  },
  {
    img: "/images/Nuroof-revive.png",
    alt: "Produit GoNano® NuRoof Revive pour toitures de 5 à 20 ans",
    title: "NuRoof Revive",
    subtitle: "Toitures de 5 à 20 ans",
    desc: "Restaure et protège un toit qui commence à vieillir. Nanotechnologie avancée qui redonne flexibilité et résistance. Prolongation jusqu'à 10 ans.",
  },
  {
    img: "/images/Nuroof-bioboost.png",
    alt: "Produit GoNano® NuRoof Bio-Boost pour toitures de 10 ans et plus",
    title: "Bio-Boost",
    subtitle: "Toitures de 10 ans et plus",
    desc: "Solution économique pour les toitures vieillissantes. Nanotechnologie + bio-huiles renouvelables. Prolongation de 3 à 5 ans.",
  },
];

const effets: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: Feather,
    title: "Flexibilité restaurée",
    text: "Les bardeaux redeviennent souples, moins susceptibles de craquer sous le gel-dégel et le vent.",
  },
  {
    Icon: Droplets,
    title: "Barrière hydrophobe",
    text: "L'eau, la neige et la glace glissent plutôt que de s'infiltrer et de stagner.",
  },
  {
    Icon: Sun,
    title: "Résistance au vieillissement",
    text: "La protection UV ralentit le séchage et la décoloration, prolongeant la vie utile du toit.",
  },
];

const climat: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: Sun,
    title: "UV et chaleur d'été",
    text: "Réfléchit une partie des rayons, limite l'absorption de chaleur et ralentit le vieillissement.",
  },
  {
    Icon: ShieldCheck,
    title: "Grêle et impacts",
    text: "Le traitement renforce la résistance aux impacts des bardeaux.",
  },
  {
    Icon: Wind,
    title: "Vents forts",
    text: "Des bardeaux plus flexibles et mieux liés résistent mieux au soulèvement.",
  },
  {
    Icon: Snowflake,
    title: "Eau, neige et verglas",
    text: "L'effet hydrophobe améliore l'écoulement et réduit l'infiltration.",
  },
];

const etapes = [
  {
    n: "01",
    title: "Inspection gratuite et honnête",
    text: "Un expert certifié évalue l'état réel de votre toiture et vérifie son admissibilité. Si elle n'est pas un bon candidat, on vous le dit franchement.",
  },
  {
    n: "02",
    title: "Préparation",
    text: "Petites réparations et nettoyage au besoin pour assurer une application optimale.",
  },
  {
    n: "03",
    title: "Application",
    text: "Le produit est pulvérisé uniformément sur toute la surface, en une seule journée, sans poussière ni odeur. Séchage rapide.",
  },
];

export default function CommentCaFonctionnePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Comment ça fonctionne",
        item: `${site.url}/comment-ca-fonctionne`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Traitement nanotechnologique de toiture",
    name: "Traitement nano de toiture — Toitures Vitalis",
    description:
      "Traitement nano qui pénètre les bardeaux d'asphalte pour restaurer leur flexibilité et créer une barrière hydrophobe et anti-UV, prolongeant la vie utile de la toiture.",
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
    category: "Roof protection",
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
        eyebrow="Le procédé, expliqué simplement"
        titleLead="Comment fonctionne le traitement nano de"
        titleKeyword="toiture."
        subtitle="Le traitement nano n'est pas une peinture ni un simple scellant de surface. C'est une technologie qui pénètre au cœur de vos bardeaux pour les renforcer de l'intérieur — voici comment."
        bgImage="/images/roofer-spraying-roof.jpg"
        bgAlt="Technicien Toitures Vitalis appliquant le traitement nano sur une toiture"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Comment ça fonctionne" },
        ]}
      />

      {/* Section 1 — Pourquoi une toiture vieillit */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4">Le vrai problème</p>
              <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
                Vos bardeaux <span className="kw">sèchent.</span>
              </h2>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-greytext">
                Un bardeau d&apos;asphalte est flexible et résistant quand il est neuf,
                grâce aux huiles qu&apos;il contient. Avec les années, les rayons UV, la
                chaleur et les cycles de gel-dégel font évaporer ces huiles.
              </p>
              <p className="mt-4 text-[1.05rem] leading-[1.75] text-greytext">
                Le bardeau devient sec, cassant, perd ses granules protectrices et
                commence à se fissurer. C&apos;est le vieillissement naturel — et
                c&apos;est exactement ce que le traitement nano vient ralentir.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="photo-treat relative aspect-[5/4] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="/images/old-shingles.jpg"
                  alt="Bardeaux d'asphalte vieillissants et desséchés avant traitement nano"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 2 — La différence du nano */}
      <section className="bg-greylight py-20 md:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="lg:order-2">
              <p className="eyebrow mb-4">La différence du nano</p>
              <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
                Pénétrer, pas juste <span className="kw">couvrir.</span>
              </h2>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-greytext">
                Les scellants traditionnels déposent une couche d&apos;huile en surface
                qui comble temporairement les fissures — mais ça s&apos;use en 1 à 2 ans.
              </p>
              <p className="mt-4 text-[1.05rem] leading-[1.75] text-greytext">
                Le traitement nano de GoNano® fonctionne autrement : ses nanoparticules de
                silice, des milliers de fois plus petites qu&apos;un grain de poussière,
                pénètrent dans le bardeau et créent de nouvelles liaisons au niveau
                moléculaire. Résultat : le bardeau retrouve de la flexibilité et gagne une
                barrière protectrice durable, de l&apos;intérieur vers l&apos;extérieur.
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:order-1">
              <div className="relative aspect-[1986/792] overflow-hidden rounded-2xl border border-greyborder bg-white shadow-card">
                <Image
                  src="/images/how-it-works.png"
                  alt="Diagramme du traitement nano : bardeau avant, pendant et après l'application"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section — La nanosilice, expliquée (éducation, fond navy) */}
      <section className="relative overflow-hidden bg-navy py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">La science, simplement</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-white sm:text-[2.5rem]">
              La nanosilice, <span className="kw-bright">expliquée.</span>
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-white/75">
              Sans jargon : ce qu&apos;elle est, comment elle est fabriquée et comment
              elle agit sur vos bardeaux.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {nanosilice.map((c, i) => (
              <Reveal key={c.label} delay={i * 90}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                    <ShieldCheck className="h-6 w-6" strokeWidth={1.9} />
                  </span>
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand">
                    {c.label}
                  </h3>
                  <p className="mt-2.5 text-[1rem] leading-[1.7] text-white/80">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mx-auto mt-6 max-w-4xl">
            <div className="flex items-start gap-4 rounded-2xl border border-brand/30 bg-brand/[0.07] p-6 sm:p-7">
              <ShieldCheck
                className="mt-0.5 h-7 w-7 flex-shrink-0 text-brand"
                strokeWidth={1.9}
                aria-hidden
              />
              <p className="text-[1rem] leading-[1.75] text-white/90">
                La nanosilice pénètre le bardeau et crée de nouvelles liaisons chimiques
                (les «&nbsp;particules S1&nbsp;») qui lient les granules entre elles et
                connectent les bardeaux, améliorant flexibilité, hydrophobie et résistance
                au vieillissement — de l&apos;intérieur vers l&apos;extérieur.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3 — Trois effets concrets */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Concrètement</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Trois effets sur vos <span className="kw">bardeaux.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {effets.map((e, i) => (
              <Reveal key={e.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-greyborder bg-greylight p-7 shadow-card">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand-strong">
                    <e.Icon className="h-6 w-6" strokeWidth={1.9} />
                  </span>
                  <h3 className="text-[1.2rem] font-bold text-navy">{e.title}</h3>
                  <p className="mt-2 text-[1rem] leading-[1.7] text-greytext">
                    {e.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section — Les 3 produits NuRoof */}
      <section className="bg-greylight py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Les produits NuRoof</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Un produit pour chaque <span className="kw">toiture.</span>
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-greytext">
              Trois formulations, une même science nano — adaptées à l&apos;âge et à
              l&apos;état de votre toit.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
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
                    <p className="mt-1.5 text-[12.5px] font-semibold uppercase tracking-[0.06em] text-brand-strong">
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
              qu&apos;on détermine lors de l&apos;inspection.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section — Climat québécois (sombre) */}
      <section className="relative overflow-hidden bg-navy-deep py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="container-x relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-4">Conçu pour le Québec</p>
              <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-white sm:text-[2.5rem]">
                Conçu pour nos <span className="kw-bright">hivers.</span>
              </h2>
              <p className="mt-6 text-[1.05rem] leading-[1.7] text-white/80">
                Le climat québécois est exigeant pour une toiture. Le traitement nano agit
                sur chacune de ces contraintes.
              </p>
              <div className="photo-treat relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl shadow-float">
                <Image
                  src="/images/water-pearling-hydrophobic-roof.jpg"
                  alt="Effet hydrophobe : gouttes d'eau perlant sur un bardeau traité"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {climat.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-6">
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 text-brand">
                      <c.Icon className="h-6 w-6" strokeWidth={1.9} />
                    </span>
                    <h3 className="text-[1.1rem] font-bold text-white">{c.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/70">
                      {c.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section — Le procédé en 3 étapes */}
      <section className="bg-greylight py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Le procédé</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Du premier appel à la <span className="kw">protection.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="photo-treat relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="/images/worker-and-van.jpg"
                  alt="Technicien et véhicule brandé Toitures Vitalis arrivant pour une inspection de toiture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="flex flex-col">
              {etapes.map((s, i) => (
                <Reveal key={s.n} delay={i * 90}>
                  <div className="flex gap-5 py-5">
                    <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white font-display text-[1.4rem] tracking-tightest text-brand-strong shadow-card">
                      {s.n}
                    </span>
                    <div className="pt-1">
                      <h3 className="text-[1.3rem] font-bold text-navy">{s.title}</h3>
                      <p className="mt-1.5 text-[1rem] leading-[1.7] text-greytext">
                        {s.text}
                      </p>
                    </div>
                  </div>
                  {i < etapes.length - 1 && (
                    <div className="ml-7 h-6 w-px bg-greyborder" aria-hidden />
                  )}
                </Reveal>
              ))}

              {/* Note honnêteté — discrète */}
              <Reveal delay={120}>
                <p className="mt-6 border-t border-greyborder pt-6 text-[14px] leading-relaxed text-greytext">
                  <span className="font-semibold text-navy">À noter :</span> le
                  traitement nano est une solution de préservation pour une toiture encore
                  en bon état. Il ne répare pas les fuites ni ne remplace un toit en fin de
                  vie. Lors de l&apos;inspection, on évalue honnêtement si votre toiture
                  est un bon candidat.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </main>
  );
}
