/**
 * Configuration centrale du site Toitures Vitalis.
 * Les valeurs marquées PLACEHOLDER doivent être remplacées par les vraies
 * coordonnées de l'entreprise avant la mise en ligne.
 */

export const site = {
  name: "Toitures Vitalis",
  legalName: "Toitures Vitalis",
  // URL canonique (à confirmer). Sert de metadataBase + JSON-LD.
  url: "https://www.toituresvitalis.ca",
  email: "info@toituresvitalis.ca",
  // PLACEHOLDER — remplacer par le vrai numéro de téléphone de l'entreprise.
  phoneDisplay: "514 000-0000",
  phoneHref: "+15140000000",
  region: "Grand Montréal",
  areaServed: [
    "Montréal",
    "Laval",
    "Laurentides",
    "Rive-Nord",
    "Rive-Sud",
  ],
} as const;

/** Document de garantie officiel GoNano (dans /public/documents/). */
export const PDF_GARANTIE = "/documents/garantie-go-nano.pdf";

export const sectors = [
  { name: "Montréal", href: "/secteurs/montreal", image: "/images/montreal-house.jpg", alt: "Traitement de toiture résidentielle à Montréal" },
  { name: "Laval", href: "/secteurs/laval", image: "/images/maison-laval.jpg", alt: "Traitement de toiture à Laval" },
  { name: "Laurentides", href: "/secteurs/laurentides", image: "/images/maison-laurentides.jpg", alt: "Traitement de toiture dans les Laurentides" },
  { name: "Rive-Nord", href: "/secteurs/rive-nord", image: "/images/maison-rive-nord.jpg", alt: "Traitement de toiture Rive-Nord de Montréal" },
  { name: "Rive-Sud", href: "/secteurs/rive-sud", image: "/images/rivesud-maison.jpg", alt: "Traitement de toiture Rive-Sud de Montréal" },
] as const;

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Comment ça fonctionne", href: "/comment-ca-fonctionne" },
  { label: "Services", href: "/services" },
  { label: "Garantie", href: "/garantie" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
