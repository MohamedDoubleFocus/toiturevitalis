"use client";

import { useEffect, useRef } from "react";

/**
 * Vidéo de fond du hero. L'autoplay muet prime (attributs + relance explicite).
 * Si l'autoplay est bloqué (ex. iOS mode économie d'énergie), le poster hero.jpg
 * s'affiche seul — sans bouton play natif (masqué en CSS, voir globals.css).
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const tryPlay = () => {
      const p = v.play();
      // Si l'autoplay est refusé, on ignore : le poster reste affiché.
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    tryPlay();

    // Réessaie quand l'onglet redevient visible (l'autoplay est parfois suspendu).
    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 -z-10 h-full w-full object-cover"
      poster="/images/hero.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      controls={false}
      disablePictureInPicture
    >
      <source src="/videos/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
