import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { articles } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Blogue | Conseils sur le Traitement de Toiture | Vitalis",
  },
  description:
    "Conseils honnêtes sur le traitement, la protection et l'entretien de votre toiture au Québec : coût, traiter ou remplacer, signes d'usure et plus.",
  alternates: { canonical: "/blogue" },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: `${site.url}/blogue`,
    siteName: site.name,
    title: "Blogue Toitures Vitalis | Conseils honnêtes sur la toiture",
    description:
      "Coût, traiter ou remplacer, signes d'usure : nos conseils honnêtes sur la protection de toiture au Québec.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Toiture résidentielle au Grand Montréal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogue Toitures Vitalis | Conseils honnêtes sur la toiture",
    description:
      "Nos conseils honnêtes sur la protection et l'entretien de votre toiture au Québec.",
    images: ["/images/hero.jpg"],
  },
};

export default function BloguePage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blogue Toitures Vitalis",
    description:
      "Conseils honnêtes sur le traitement et la protection de toiture au Québec.",
    url: `${site.url}/blogue`,
    publisher: { "@id": `${site.url}/#business` },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      description: a.metaDescription,
      datePublished: a.dateISO,
      url: `${site.url}/blogue/${a.slug}`,
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <PageHero
        eyebrow="Le blogue"
        titleLead="Des conseils honnêtes sur votre"
        titleKeyword="toiture."
        subtitle="Coût, entretien, traiter ou remplacer : on répond franchement aux questions que se posent les propriétaires du Grand Montréal — sans jargon, sans survente."
        bgImage="/images/hero.jpg"
        bgAlt="Toiture résidentielle en bardeaux d'asphalte au Grand Montréal"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Blogue" }]}
        ctaLabel="Obtenez une inspection gratuite"
      />

      <section className="bg-greylight py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <Link
                  href={`/blogue/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-greyborder bg-white shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-navy-deep/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                      {a.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-4 text-[12.5px] text-greytext">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                        {a.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5" aria-hidden />
                        {a.readingMin} min
                      </span>
                    </div>
                    <h2 className="mt-3 text-[1.2rem] font-bold leading-snug text-navy transition-colors duration-200 group-hover:text-brand-strong">
                      {a.title}
                    </h2>
                    <p className="mt-2.5 flex-1 text-[15px] leading-[1.65] text-greytext">
                      {a.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-semibold text-brand-strong">
                      Lire l&apos;article
                      <ArrowRight className="h-[16px] w-[16px] transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadForm />
    </main>
  );
}
