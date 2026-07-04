import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";

/** Les 5 questions les plus fréquentes (extraites de content/07-faq.md). */
const faqs: FaqItem[] = [
  {
    q: "Est-ce que le traitement nano fonctionne vraiment ?",
    a: "Oui, sur une toiture admissible. Le traitement redonne de la flexibilité aux bardeaux et crée une barrière hydrophobe et anti-UV qui ralentit leur vieillissement. Il est appuyé par plus d'un million de dollars en tests (impact, rétention des granules, résistance au vent). Ce n'est pas une solution miracle : il fonctionne sur une toiture encore en bon état, pas sur un toit en fin de vie. C'est pourquoi on commence toujours par une inspection honnête.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Beaucoup moins qu'un remplacement complet — généralement autour de 30 % du coût, soit une économie de 60 à 70 %. Le prix exact dépend de la superficie et de l'état de votre toiture. On vous fournit une soumission gratuite et sans pression après l'inspection.",
  },
  {
    q: "Combien de temps dure l'application ?",
    a: "Une seule journée dans la grande majorité des cas. Le traitement est pulvérisé sans poussière ni odeur, et vous pouvez rester chez vous pendant les travaux.",
  },
  {
    q: "Y a-t-il une garantie ?",
    a: "Oui, une garantie fabricant écrite et transférable, pouvant aller jusqu'à 15 ans selon l'état de votre toiture et le produit appliqué. On vous remet le document complet et on l'explique avant tout engagement.",
  },
  {
    q: "Est-ce que ça répare les fuites ?",
    a: "Non, et c'est important d'être clair là-dessus. Le traitement nano est une solution de préservation : il protège et prolonge une toiture en bon état. Il ne répare pas les fuites, les solins ou les problèmes de structure. Si votre toiture a ces problèmes, on vous orientera vers la bonne solution.",
  },
];

export default function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-greylight py-20 md:py-28">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Questions fréquentes</p>
            <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.6rem]">
              Vous vous posez des <span className="kw">questions ?</span>
            </h2>
            <p className="mt-5 text-[1.05rem] leading-[1.75] text-greytext">
              On répond honnêtement, sans jargon. Voici les questions qu&apos;on nous
              pose le plus souvent sur le traitement nano de toiture.
            </p>
            <Link
              href="/faq"
              className="group mt-7 inline-flex items-center gap-2 text-[1rem] font-semibold text-brand transition-colors duration-200 hover:text-brand-hover"
            >
              Voir toutes les questions
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <FaqAccordion items={faqs} idPrefix="home-faq" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
