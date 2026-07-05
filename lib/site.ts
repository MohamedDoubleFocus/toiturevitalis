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
  phoneDisplay: "514 500-7367",
  phoneHref: "+15145007367",
  region: "Grand Montréal",
  areaServed: [
    "Montréal",
    "Laval",
    "Laurentides",
    "Rive-Nord",
    "Rive-Sud",
  ],
  address: {
    streetAddress: "2-7405 rue Vérité",
    locality: "Montréal",
    region: "QC",
    postalCode: "H4S 1C6",
    country: "CA",
    full: "2-7405 rue Vérité, Montréal, QC H4S 1C6",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2-7405+rue+V%C3%A9rit%C3%A9%2C+Montr%C3%A9al%2C+QC+H4S+1C6",
  },
  hours: {
    // Lundi au samedi 8 h–18 h, dimanche fermé.
    label: "Lun. au sam. : 8 h à 18 h · Dimanche fermé",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
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
