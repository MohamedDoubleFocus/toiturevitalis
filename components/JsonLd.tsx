import { site } from "@/lib/site";

/**
 * Données structurées LocalBusiness (sous-type RoofingContractor) — sur toutes les pages.
 * NOTE : coordonnées géo approximatives (Montréal) — le Google Business Profile fait foi
 * pour la géolocalisation exacte.
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
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
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
        dayOfWeek: [...site.hours.days],
        opens: site.hours.opens,
        closes: site.hours.closes,
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
