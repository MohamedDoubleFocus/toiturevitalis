import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { sectors } from "@/lib/site";
import { ArrowRight } from "@/components/icons";

export default function SectorsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">Zones desservies</p>
          <h2 className="font-display text-[2rem] leading-[1.08] tracking-tightest text-navy sm:text-[2.6rem]">
            Nous desservons le <span className="kw">Grand Montréal.</span>
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-greytext">
            Traitement nano de toiture à Montréal, Laval, dans les Laurentides, sur la
            Rive-Nord et la Rive-Sud.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {sectors.map((s, i) => (
            <Reveal key={s.href} delay={i * 70}>
              <Link
                href={s.href}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-card"
              >
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                  <span className="font-display text-[1.05rem] tracking-tightest text-white">
                    {s.name}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-[background-color,transform] duration-300 group-hover:bg-brand group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
