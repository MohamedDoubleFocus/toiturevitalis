"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative aspect-[16/10] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl shadow-card"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) setFromClientX(e.clientX);
      }}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* Après (couche du dessous, pleine largeur) */}
      <Image
        src="/images/shingles-after-treatment.jpg"
        alt="Bardeaux d'asphalte ravivés après traitement de protection nano"
        fill
        sizes="(max-width: 1024px) 100vw, 900px"
        className="object-cover"
        priority={false}
      />
      <span className="pointer-events-none absolute right-4 top-4 z-20 rounded-full bg-brand px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-navy-deep shadow-cta">
        Après
      </span>

      {/* Avant (couche du dessus, recadrée par clip-path) */}
      <div
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src="/images/old-shingles.jpg"
          alt="Bardeaux d'asphalte vieillissants avant traitement nano"
          fill
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover"
        />
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-navy-deep/85 px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-white">
          Avant
        </span>
      </div>

      {/* Poignée */}
      <div
        className="absolute inset-y-0 z-20 flex items-center justify-center"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-0.5 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.5)]" />
        <button
          type="button"
          role="slider"
          tabIndex={0}
          aria-label="Comparer avant et après le traitement"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
          }}
          className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-greyborder bg-white text-navy shadow-float transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m10 8-4 4 4 4M14 8l4 4-4 4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
