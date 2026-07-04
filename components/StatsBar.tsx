"use client";

import { useEffect, useRef, useState } from "react";
import {
  Home,
  ShieldCheck,
  Zap,
  BadgeCheck,
  Sparkles,
  Handshake,
  type LucideIcon,
} from "lucide-react";

function groupThousands(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function CountUp({
  target,
  duration = 1400,
}: {
  target: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVal(target);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
              setVal(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{groupThousands(val)}</span>;
}

const stats: { Icon: LucideIcon; node: React.ReactNode; label: string }[] = [
  {
    Icon: Home,
    node: (
      <>
        <CountUp target={50000} />
        <span className="text-brand">+</span>
      </>
    ),
    label: "toitures traitées en Amérique du Nord",
  },
  {
    Icon: ShieldCheck,
    node: (
      <>
        <span className="mr-2 align-middle text-[0.42em] font-semibold uppercase tracking-wide text-greytext">
          Jusqu&apos;à
        </span>
        <CountUp target={15} />
        <span className="text-brand"> ans</span>
      </>
    ),
    label: "de garantie fabricant écrite",
  },
  {
    Icon: Zap,
    node: (
      <>
        <CountUp target={1} />
        <span className="text-brand"> seule journée</span>
      </>
    ),
    label: "d'application, sans arrachage",
  },
];

const badges: { Icon: LucideIcon; text: string }[] = [
  { Icon: BadgeCheck, text: "Certifié GoNano" },
  { Icon: ShieldCheck, text: "Licencié et assuré" },
  { Icon: Sparkles, text: "Sans arrachage" },
  { Icon: Handshake, text: "Évaluation sans pression" },
];

export default function StatsBar() {
  return (
    <section className="border-b border-greyborder bg-greylight" aria-label="Chiffres clés">
      <div className="container-x py-12 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center sm:text-left ${
                i > 0 ? "sm:border-l sm:border-greyborder sm:pl-8" : ""
              }`}
            >
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <s.Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
              </span>
              <div className="font-display text-[2.5rem] leading-none tracking-tightest text-navy sm:text-[3rem]">
                {s.node}
              </div>
              <p className="mt-2.5 text-[15px] leading-snug text-greytext">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-greyborder pt-7 sm:flex-row sm:justify-between">
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-greytext">
            Approuvé &amp; certifié
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {badges.map((b) => (
              <li
                key={b.text}
                className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-navy/75"
              >
                <b.Icon className="h-[18px] w-[18px] text-brand" strokeWidth={2} />
                {b.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
