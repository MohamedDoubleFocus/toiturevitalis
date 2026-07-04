import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CalendarDays, Clock3, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { articles } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: { absolute: a.metaTitle },
    description: a.metaDescription,
    alternates: { canonical: `/blogue/${a.slug}` },
    openGraph: {
      type: "article",
      locale: "fr_CA",
      url: `${site.url}/blogue/${a.slug}`,
      siteName: site.name,
      title: a.title,
      description: a.metaDescription,
      publishedTime: a.dateISO,
      images: [{ url: a.image, width: 1200, height: 630, alt: a.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: a.title,
      description: a.metaDescription,
      images: [a.image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();

  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.metaDescription,
    datePublished: a.dateISO,
    dateModified: a.dateISO,
    image: `${site.url}${a.image}`,
    articleSection: a.category,
    inLanguage: "fr-CA",
    mainEntityOfPage: `${site.url}/blogue/${a.slug}`,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/brand/logo.png` },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blogue", item: `${site.url}/blogue` },
      {
        "@type": "ListItem",
        position: 3,
        name: a.title,
        item: `${site.url}/blogue/${a.slug}`,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* En-tête */}
      <section className="bg-navy-deep pb-28 pt-16 sm:pb-32 sm:pt-20">
        <div className="container-x">
          <nav aria-label="Fil d'Ariane">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/60">
              <li>
                <Link href="/" className="transition-colors duration-200 hover:text-brand">
                  Accueil
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
                <Link
                  href="/blogue"
                  className="transition-colors duration-200 hover:text-brand"
                >
                  Blogue
                </Link>
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <span className="inline-block rounded-full bg-brand/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand">
              {a.category}
            </span>
            <h1 className="mt-4 font-display text-[2.1rem] leading-[1.08] tracking-tightest text-white sm:text-[2.9rem]">
              {a.title}
            </h1>
            <div className="mt-5 flex items-center gap-5 text-[13.5px] text-white/70">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden />
                {a.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" aria-hidden />
                {a.readingMin} min de lecture
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Image à la une (remontée sur l'en-tête) */}
      <div className="container-x">
        <div className="relative -mt-20 aspect-[16/8] overflow-hidden rounded-2xl shadow-float sm:-mt-24">
          <Image
            src={a.image}
            alt={a.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Corps de l'article */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <p className="text-[1.2rem] font-medium leading-[1.7] text-navy">
              {a.intro}
            </p>
            <div className="legal-prose mt-8">
              {a.sections.map((s, i) => (
                <div key={i}>
                  {s.heading && <h2>{s.heading}</h2>}
                  {s.paragraphs?.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {s.list && (
                    <ul>
                      {s.list.map((li, k) => (
                        <li key={k}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* CTA en fin d'article */}
            <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-brand/25 bg-brand/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="font-display text-[1.35rem] tracking-tightest text-navy">
                  Une question sur votre toiture ?
                </h2>
                <p className="mt-1.5 text-[15px] leading-relaxed text-greytext">
                  Obtenez une évaluation honnête et sans pression.
                </p>
              </div>
              <Link href="#soumission" className="btn-primary shrink-0 text-[15px]">
                Inspection gratuite
                <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* À lire aussi */}
      <section className="bg-greylight py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-[1.6rem] tracking-tightest text-navy sm:text-[2rem]">
              À lire aussi
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 80}>
                <Link
                  href={`/blogue/${r.slug}`}
                  className="group flex h-full gap-4 rounded-2xl border border-greyborder bg-white p-4 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative aspect-square w-24 flex-shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-strong">
                      {r.category}
                    </span>
                    <h3 className="mt-1 text-[1rem] font-bold leading-snug text-navy transition-colors duration-200 group-hover:text-brand-strong">
                      {r.title}
                    </h3>
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
