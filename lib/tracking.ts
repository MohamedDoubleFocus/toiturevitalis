/**
 * Champs d'attribution bruts du lead (UTM / gclid / landing_page / referrer) + push GTM.
 * Aucune classification de source : on transmet les valeurs telles quelles.
 * La PREMIÈRE visite est mémorisée en sessionStorage → elle survit à la navigation
 * interne, pour que le formulaire garde l'origine réelle même si le visiteur change
 * de page avant de convertir.
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export interface TrackingData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  gclid: string;
  landing_page: string;
  referrer: string;
}

const FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "gclid",
  "landing_page",
  "referrer",
] as const;

const EMPTY: TrackingData = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  gclid: "",
  landing_page: "",
  referrer: "",
};

function ssGet(key: string): string {
  try {
    return sessionStorage.getItem(key) || "";
  } catch {
    return "";
  }
}

export function getTrackingData(): TrackingData {
  if (typeof window === "undefined") return EMPTY;

  // Déjà capturé cette session → on renvoie la 1re visite mémorisée.
  if (ssGet("lead_captured") === "1") {
    return {
      utm_source: ssGet("lead_utm_source"),
      utm_medium: ssGet("lead_utm_medium"),
      utm_campaign: ssGet("lead_utm_campaign"),
      gclid: ssGet("lead_gclid"),
      landing_page: ssGet("lead_landing_page"),
      referrer: ssGet("lead_referrer"),
    };
  }

  const params = new URLSearchParams(window.location.search);
  const data: TrackingData = {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    gclid: params.get("gclid") || "",
    landing_page: window.location.href || "",
    referrer: document.referrer || "",
  };

  try {
    FIELDS.forEach((k) => sessionStorage.setItem(`lead_${k}`, data[k]));
    sessionStorage.setItem("lead_captured", "1");
  } catch {
    /* sessionStorage indisponible (navigation privée stricte) — on continue sans persister */
  }

  return data;
}

/** Envoie un événement à GTM (dataLayer) — ex. conversion de formulaire. */
export function pushDataLayer(event: string, extra?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...extra });
}
