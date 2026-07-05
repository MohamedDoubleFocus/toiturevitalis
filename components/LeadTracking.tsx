"use client";

import { useEffect } from "react";
import { getTrackingData } from "@/lib/tracking";

/**
 * Capture la source du lead (UTM / gclid / referrer) dès le premier chargement,
 * sur TOUTES les pages, et la mémorise en sessionStorage. Rendu global (layout).
 * Ne rend rien à l'écran.
 */
export default function LeadTracking() {
  useEffect(() => {
    getTrackingData();
  }, []);
  return null;
}
