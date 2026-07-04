import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Cela semble avoir fait une grande différence. L'eau repousse énormément et nous sommes très heureux avec le produit.",
    author: "Rich & Denise",
  },
  {
    quote:
      "Il est devenu évident que cela prolongerait la vie de notre toit, peut-être cinq, dix ans même.",
    author: "David Flower",
  },
  {
    quote:
      "J'étais au point où je devais envisager des remplacements, et GoNano a redonné une seconde vie à mes bardeaux.",
    author: "Micheal Kelly",
  },
];

function GoNanoBadge() {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-greytext">
      <span className="hidden sm:inline">Client</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo-go-nano.svg"
        alt="GoNano"
        width={66}
        height={20}
        className="h-5 w-auto"
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-greylight py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">Témoignages</p>
          <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.6rem]">
            Ce que disent <span className="kw">nos clients.</span>
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-greytext">
            Des utilisateurs du traitement nano GoNano partagent leur expérience.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-greyborder bg-white p-7 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span
                  aria-hidden
                  className="font-display text-[2.75rem] leading-[0.6] text-brand/25"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-3 flex-1 text-[15.5px] leading-[1.7] text-navy/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-greyborder pt-4">
                  <span className="text-[15px] font-bold text-navy">{t.author}</span>
                  <GoNanoBadge />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="mt-8 text-center text-[13px] italic text-greytext">
            Témoignages de clients ayant utilisé le traitement nano GoNano.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
