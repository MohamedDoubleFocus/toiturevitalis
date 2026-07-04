"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Fond du hero optimisé pour la performance SANS perte de qualité :
 *
 * 1. Une image next/image (AVIF/WebP, dimensionnée à l'écran) sert de fond et de LCP
 *    → paint quasi instantané, même sur 4G lente.
 * 2. La vidéo (lourde) n'est chargée qu'APRÈS le rendu initial, et uniquement si la
 *    connexion le permet (pas de mode économie de données ni de réseau 2G). Elle
 *    apparaît en fondu quand elle est prête → elle ne bloque jamais le LCP.
 * 3. Si la vidéo ne peut pas jouer (iOS mode éco, connexion lente), l'image nette
 *    reste affichée — proprement, sans bouton play (contrôles masqués en CSS).
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Respecte le mode économie de données et les connexions lentes.
    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    if (conn?.saveData || (conn?.effectiveType && /(^|-)2g/.test(conn.effectiveType))) {
      return; // on garde l'image (pleine qualité), pas de vidéo lourde
    }

    let idleId = 0;

    const loadVideo = () => {
      if (!videoRef.current) return;
      const vid = videoRef.current;
      const source = document.createElement("source");
      source.src = "/videos/hero-video.mp4";
      source.type = "video/mp4";
      vid.appendChild(source);
      vid.load();
      const onCanPlay = () => {
        const p = vid.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
        setVideoReady(true);
      };
      vid.addEventListener("canplay", onCanPlay, { once: true });
    };

    // Attend la fin du chargement initial + un temps d'inactivité (n'impacte pas le LCP).
    const schedule = () => {
      const ric = window.requestIdleCallback;
      idleId = ric
        ? ric(loadVideo, { timeout: 3000 })
        : (setTimeout(loadVideo, 400) as unknown as number);
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
    };
  }, []);

  return (
    <>
      {/* Image de fond optimisée = LCP rapide, haute qualité */}
      <Image
        src="/images/hero.jpg"
        alt="Toiture résidentielle en bardeaux d'asphalte au Grand Montréal"
        fill
        priority
        sizes="100vw"
        quality={80}
        className="-z-10 object-cover"
      />
      {/* Vidéo par-dessus, chargée après le LCP, fondu à l'apparition */}
      <video
        ref={videoRef}
        className={`absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-700 ease-out ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        controls={false}
        disablePictureInPicture
      />
    </>
  );
}
