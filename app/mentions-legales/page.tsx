import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Mentions légales | Toitures Vitalis" },
  description:
    "Mentions légales du site de Toitures Vitalis : éditeur, hébergement, propriété intellectuelle et conditions d'utilisation.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      breadcrumbLabel="Mentions légales"
      updated="3 juillet 2026"
    >
      <p>
        Les présentes mentions légales encadrent l&apos;utilisation du site{" "}
        <strong>toituresvitalis.ca</strong> (le «&nbsp;Site&nbsp;»). En consultant le
        Site, vous acceptez les conditions décrites ci-dessous.
      </p>

      <h2>Éditeur du Site</h2>
      <p>
        <strong>{site.legalName}</strong>
        <br />
        Courriel : <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Téléphone : {site.phoneDisplay}
        <br />
        Adresse : {site.address.full}
        <br />
        Territoire desservi : {site.region}
      </p>

      <h2>Hébergement</h2>
      <p>
        Le Site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133,
        Walnut, CA 91789, États-Unis —{" "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          vercel.com
        </a>
        .
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble du contenu du Site (textes, visuels, logo Toitures Vitalis,
        mise en page) est la propriété de {site.legalName} ou de ses partenaires, et est
        protégé par les lois applicables en matière de propriété intellectuelle. Toute
        reproduction, distribution ou utilisation sans autorisation écrite préalable est
        interdite.
      </p>

      <h2>Marques et contenus de tiers</h2>
      <p>
        Les marques et produits mentionnés sur le Site — notamment{" "}
        <strong>GoNano</strong> et <strong>NuRoof</strong> (Fortify, Revive, Bio-Boost),
        ainsi que l&apos;émission <em>Dans l&apos;œil du dragon</em> — appartiennent à
        leurs propriétaires respectifs. Leur mention n&apos;implique aucun lien
        commercial autre que celui d&apos;applicateur certifié de la technologie GoNano.
      </p>

      <h2>Limitation de responsabilité</h2>
      <p>
        Les informations présentées sur le Site le sont à titre indicatif. Toitures
        Vitalis s&apos;efforce d&apos;en assurer l&apos;exactitude, mais ne peut garantir
        qu&apos;elles soient exemptes d&apos;erreurs ou à jour en tout temps.
        L&apos;admissibilité d&apos;une toiture, la durée de vie prolongée et le prix
        exact sont établis uniquement lors d&apos;une inspection sur place. Aucune
        information du Site ne constitue une garantie contractuelle.
      </p>

      <h2>Liens externes</h2>
      <p>
        Le Site peut contenir des liens vers des ressources externes (par exemple le
        document de garantie GoNano). Toitures Vitalis n&apos;exerce aucun contrôle sur
        le contenu de ces sites tiers et décline toute responsabilité à leur égard.
      </p>

      <h2>Protection des renseignements personnels</h2>
      <p>
        Le traitement de vos renseignements personnels est décrit dans notre{" "}
        <a href="/politique-de-confidentialite">politique de confidentialité</a>.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par les lois en vigueur au Québec et
        au Canada. Tout litige relatif au Site relève de la compétence des tribunaux du
        Québec.
      </p>
    </LegalPage>
  );
}
