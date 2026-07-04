"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vidéo hors-hero : ne charge la source que lorsqu'elle approche du viewport.
 * Respecte les règles de perf du media-plan (preload=none + lazy-load via IO).
 * Le poster s'affiche immédiatement → aucun blocage du LCP.
 */
export default function LazyVideo({
  src,
  poster,
  className = "",
  ariaLabel,
}: {
  src: string;
  poster: string;
  className?: string;
  ariaLabel: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoad(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (load && videoRef.current) {
      videoRef.current.load();
      const p = videoRef.current.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [load]);

  return (
    <div ref={wrapRef} className={className}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={ariaLabel}
      >
        {load ? <source src={src} type="video/mp4" /> : null}
      </video>
    </div>
  );
}
