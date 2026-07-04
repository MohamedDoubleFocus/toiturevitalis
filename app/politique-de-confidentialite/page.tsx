import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Politique de confidentialité | Toitures Vitalis" },
  description:
    "Comment Toitures Vitalis recueille, utilise et protège vos renseignements personnels, conformément à la Loi 25 du Québec.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      breadcrumbLabel="Politique de confidentialité"
      updated="3 juillet 2026"
    >
      <p>
        Chez <strong>{site.legalName}</strong>, nous respectons votre vie privée. La
        présente politique explique quels renseignements personnels nous recueillons,
        pourquoi, et comment nous les protégeons — conformément à la{" "}
        <strong>
          Loi sur la protection des renseignements personnels dans le secteur privé du
          Québec (Loi 25)
        </strong>
        .
      </p>

      <h2>Renseignements que nous recueillons</h2>
      <p>
        Nous recueillons uniquement les renseignements que vous nous fournissez
        volontairement via notre formulaire de soumission :
      </p>
      <ul>
        <li>Votre nom;</li>
        <li>Votre adresse courriel;</li>
        <li>Votre numéro de téléphone;</li>
        <li>Votre secteur (ville/région);</li>
        <li>
          Tout renseignement que vous choisissez d&apos;inclure dans le champ message
          (par exemple l&apos;âge ou l&apos;état de votre toiture).
        </li>
      </ul>
      <p>
        Nous ne recueillons aucun renseignement à votre insu et ne demandons jamais de
        renseignements sensibles (numéro d&apos;assurance sociale, informations
        bancaires, etc.).
      </p>

      <h2>Pourquoi nous les recueillons</h2>
      <p>Vos renseignements servent exclusivement à :</p>
      <ul>
        <li>Répondre à votre demande d&apos;inspection ou de soumission;</li>
        <li>Vous contacter pour planifier une inspection;</li>
        <li>Assurer le suivi de votre demande.</li>
      </ul>
      <p>
        Nous n&apos;utilisons pas vos renseignements à des fins publicitaires et ne les
        vendons jamais.
      </p>

      <h2>Consentement</h2>
      <p>
        En soumettant le formulaire, vous consentez à ce que nous utilisions vos
        renseignements aux fins décrites ci-dessus. Vous pouvez retirer votre
        consentement en tout temps en nous écrivant à{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Témoins (cookies) et outils de suivi</h2>
      <p>
        Le Site n&apos;utilise <strong>aucun témoin publicitaire</strong> ni outil de
        suivi ou d&apos;analyse à des fins de marketing. Des témoins strictement
        nécessaires au bon fonctionnement du Site peuvent être utilisés par notre
        hébergeur. Si nous ajoutons un outil d&apos;analyse à l&apos;avenir, cette
        politique sera mise à jour en conséquence.
      </p>

      <h2>Partage et fournisseurs de services</h2>
      <p>
        Nous ne vendons ni ne louons vos renseignements. Ils peuvent être traités par
        des fournisseurs qui nous aident à faire fonctionner le Site et à recevoir vos
        demandes, uniquement pour cette finalité :
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> — hébergement du Site;
        </li>
        <li>
          [Fournisseur d&apos;envoi de courriel à préciser — p. ex. Resend] — pour nous
          transmettre les demandes soumises via le formulaire.
        </li>
      </ul>
      <p>
        Certains de ces fournisseurs peuvent traiter des données à l&apos;extérieur du
        Québec. Nous prenons des mesures raisonnables pour que vos renseignements
        bénéficient d&apos;une protection adéquate.
      </p>

      <h2>Conservation</h2>
      <p>
        Nous conservons vos renseignements uniquement le temps nécessaire pour traiter
        votre demande et en assurer le suivi, après quoi ils sont supprimés ou anonymisés.
      </p>

      <h2>Sécurité</h2>
      <p>
        Le Site utilise une connexion sécurisée (HTTPS) et nous limitons l&apos;accès à
        vos renseignements aux personnes qui en ont besoin. Aucun système n&apos;étant
        infaillible, nous ne pouvons toutefois garantir une sécurité absolue.
      </p>

      <h2>Vos droits</h2>
      <p>Conformément à la Loi 25, vous avez le droit de :</p>
      <ul>
        <li>Accéder aux renseignements que nous détenons à votre sujet;</li>
        <li>Les faire rectifier s&apos;ils sont inexacts;</li>
        <li>Retirer votre consentement ou demander leur suppression;</li>
        <li>
          Obtenir vos renseignements dans un format technologique structuré
          (portabilité).
        </li>
      </ul>
      <p>
        Pour exercer ces droits, écrivez-nous à{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Responsable de la protection des renseignements personnels</h2>
      <p>
        [Nom / titre du responsable à désigner] agit à titre de responsable de la
        protection des renseignements personnels de {site.legalName}. Vous pouvez le
        joindre à <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Plainte</h2>
      <p>
        Si vous estimez que vos droits n&apos;ont pas été respectés, vous pouvez porter
        plainte auprès de la{" "}
        <a
          href="https://www.cai.gouv.qc.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Commission d&apos;accès à l&apos;information du Québec (CAI)
        </a>
        .
      </p>

      <h2>Modifications</h2>
      <p>
        Nous pouvons modifier cette politique de temps à autre. La date de dernière mise
        à jour figure en haut de la page. Nous vous invitons à la consulter régulièrement.
      </p>

      <p className="legal-note">
        Des questions sur cette politique ? Écrivez-nous à{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
