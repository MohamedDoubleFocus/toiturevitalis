import type { Metadata } from "next";
import { Phone, Mail, MapPin, type LucideIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import SectorsSection from "@/components/SectorsSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact | Inspection Gratuite de Toiture | Toitures Vitalis",
  },
  description:
    "Contactez Toitures Vitalis pour une inspection gratuite et sans pression de votre toiture au Grand Montréal. Téléphone, courriel ou soumission en ligne.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: `${site.url}/contact`,
    siteName: site.name,
    title: "Contactez Toitures Vitalis | Inspection gratuite",
    description:
      "Une question, une inspection, une soumission ? On vous répond rapidement — gratuitement et sans pression, partout au Grand Montréal.",
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
    title: "Contactez Toitures Vitalis | Inspection gratuite",
    description:
      "Inspection gratuite et sans pression de votre toiture au Grand Montréal.",
    images: ["/images/roofer-spraying-hero.jpg"],
  },
};

const moyens: {
  Icon: LucideIcon;
  label: string;
  value: string;
  note: string;
  href: string;
}[] = [
  {
    Icon: Phone,
    label: "Téléphone",
    value: site.phoneDisplay,
    note: "Appelez-nous directement",
    href: `tel:${site.phoneHref}`,
  },
  {
    Icon: Mail,
    label: "Courriel",
    value: site.email,
    note: "On vous répond rapidement",
    href: `mailto:${site.email}`,
  },
  {
    Icon: MapPin,
    label: "Zone desservie",
    value: site.region,
    note: "Montréal, Laval, Laurentides, Rive-Nord, Rive-Sud",
    href: "#secteurs",
  },
];

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${site.url}/contact`,
      },
    ],
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact — Toitures Vitalis",
    description:
      "Coordonnées et formulaire de soumission de Toitures Vitalis pour une inspection gratuite de toiture au Grand Montréal.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <PageHero
        eyebrow="Contact"
        titleLead="Parlons de votre"
        titleKeyword="toiture."
        subtitle="Une question, une inspection, une soumission ? On vous répond rapidement — gratuitement et sans pression, partout au Grand Montréal."
        bgImage="/images/roofer-spraying-hero.jpg"
        bgAlt="Technicien Toitures Vitalis appliquant le traitement nano sur une toiture résidentielle"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />

      {/* Moyens de contact */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 justify-center">Comment nous joindre</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.5rem]">
              Trois façons de nous <span className="kw">rejoindre.</span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
            {moyens.map((m, i) => (
              <Reveal key={m.label} delay={i * 90}>
                <a
                  href={m.href}
                  className="group flex h-full flex-col items-center rounded-2xl border border-greyborder bg-greylight p-8 text-center shadow-card transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-brand/40"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand-strong transition-colors duration-300 group-hover:bg-brand group-hover:text-navy-deep">
                    <m.Icon className="h-7 w-7" strokeWidth={1.8} aria-hidden />
                  </span>
                  <span className="mt-5 text-[12px] font-semibold uppercase tracking-[0.1em] text-greytext">
                    {m.label}
                  </span>
                  <span className="mt-2 text-[1.15rem] font-bold text-navy">
                    {m.value}
                  </span>
                  <span className="mt-1.5 text-[13.5px] leading-snug text-greytext">
                    {m.note}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadForm />

      <div id="secteurs">
        <SectorsSection />
      </div>
    </main>
  );
}
