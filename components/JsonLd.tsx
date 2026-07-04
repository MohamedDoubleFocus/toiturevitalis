import { site } from "@/lib/site";

/**
 * Données structurées LocalBusiness (sous-type RoofingContractor) — sur toutes les pages.
 * NOTE : téléphone, adresse, horaires et coordonnées géo sont des valeurs à confirmer
 * avec l'entreprise avant la mise en ligne (voir lib/site.ts).
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    image: `${site.url}/images/hero.jpg`,
    logo: `${site.url}/brand/logo.png`,
    telephone: site.phoneHref,
    email: site.email,
    priceRange: "$$",
    description:
      "Traitement nanotechnologique de protection pour bardeaux d'asphalte. Prolonge la vie utile de votre toiture à une fraction du coût d'un remplacement. Certifié GoNano, licencié et assuré.",
    slogan: "Protéger et prolonger votre toiture, honnêtement.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montréal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.5019,
      longitude: -73.5674,
    },
    areaServed: site.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Certification",
        value: "Entrepreneur certifié GoNano",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
