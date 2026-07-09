/**
 * Attribution du lead : source « lisible » (source) + champs bruts (UTM / gclid /
 * landing_page / referrer) + push GTM. La PREMIÈRE visite est mémorisée en
 * sessionStorage → elle survit à la navigation interne, pour que le formulaire garde
 * l'origine réelle même si le visiteur change de page avant de convertir.
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export interface TrackingData {
  source: string; // origine lisible (ex. "Google Ads", "Social - Facebook", "Recherche Directe")
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  gclid: string;
  landing_page: string;
  referrer: string;
}

const EMPTY: TrackingData = {
  source: "",
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

function classifySource(
  utmSource: string,
  utmMedium: string,
  gclid: string,
  referrer: string
): string {
  if (gclid) return "Google Ads";

  if (utmSource) {
    const med = utmMedium.toLowerCase();
    if (med === "cpc" || med === "ppc" || med === "paid") return `Paid - ${utmSource}`;
    if (med === "social" || med === "paid_social") return `Social Paid - ${utmSource}`;
    return utmMedium ? `${utmSource} / ${utmMedium}` : utmSource;
  }

  if (referrer) {
    const ref = referrer.toLowerCase();
    if (ref.includes("toituresvitalis.ca")) return "Recherche Directe - Organic";
    if (ref.includes("google.")) return "Organic Search - Google";
    if (ref.includes("bing.")) return "Organic Search - Bing";
    if (ref.includes("yahoo.")) return "Organic Search - Yahoo";
    if (ref.includes("facebook.") || ref.includes("fb.")) return "Social - Facebook";
    if (ref.includes("instagram.")) return "Social - Instagram";
    if (ref.includes("linkedin.")) return "Social - LinkedIn";
    if (ref.includes("tiktok.")) return "Social - TikTok";
    try {
      return `Referral - ${new URL(referrer).hostname}`;
    } catch {
      return "Referral";
    }
  }

  return "Recherche Directe";
}

export function getTrackingData(): TrackingData {
  if (typeof window === "undefined") return EMPTY;

  // Déjà capturé cette session → on renvoie la 1re visite mémorisée.
  if (ssGet("lead_captured") === "1") {
    return {
      source: ssGet("lead_source"),
      utm_source: ssGet("lead_utm_source"),
      utm_medium: ssGet("lead_utm_medium"),
      utm_campaign: ssGet("lead_utm_campaign"),
      gclid: ssGet("lead_gclid"),
      landing_page: ssGet("lead_landing_page"),
      referrer: ssGet("lead_referrer"),
    };
  }

  const params = new URLSearchParams(window.location.search);
  const utm_source = params.get("utm_source") || "";
  const utm_medium = params.get("utm_medium") || "";
  const utm_campaign = params.get("utm_campaign") || "";
  const gclid = params.get("gclid") || "";
  const landing_page = window.location.href || "";
  const referrer = document.referrer || "";
  const source = classifySource(utm_source, utm_medium, gclid, referrer);

  const data: TrackingData = {
    source,
    utm_source,
    utm_medium,
    utm_campaign,
    gclid,
    landing_page,
    referrer,
  };

  try {
    sessionStorage.setItem("lead_source", source);
    sessionStorage.setItem("lead_utm_source", utm_source);
    sessionStorage.setItem("lead_utm_medium", utm_medium);
    sessionStorage.setItem("lead_utm_campaign", utm_campaign);
    sessionStorage.setItem("lead_gclid", gclid);
    sessionStorage.setItem("lead_landing_page", landing_page);
    sessionStorage.setItem("lead_referrer", referrer);
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
