export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string; // affiché
  dateISO: string; // schema
  readingMin: number;
  image: string;
  imageAlt: string;
  intro: string;
  sections: BlogSection[];
};

export const articles: Article[] = [
  {
    slug: "combien-coute-traitement-toiture-quebec",
    title: "Combien coûte un traitement de toiture au Québec ?",
    metaTitle: "Combien Coûte un Traitement de Toiture au Québec ? | Vitalis",
    metaDescription:
      "Combien coûte un traitement de toiture au Québec ? Environ 30 % d'un remplacement (60 à 70 % d'économie). Les vrais facteurs de prix, expliqués honnêtement.",
    excerpt:
      "Environ 30 % du coût d'un remplacement — mais le montant exact dépend de votre toiture. Voici une réponse honnête, sans prix magique.",
    category: "Prix",
    date: "2 juillet 2026",
    dateISO: "2026-07-02",
    readingMin: 5,
    image: "/images/hero-page-prix.jpg",
    imageAlt:
      "Belle maison résidentielle québécoise avec toiture en bardeaux d'asphalte bien entretenue",
    intro:
      "« Ça coûte combien ? » C'est la première question qu'on nous pose. Voici une réponse honnête — sans prix magique, mais avec les vrais facteurs qui déterminent le montant.",
    sections: [
      {
        heading: "Une fraction du coût d'un remplacement",
        paragraphs: [
          "Le traitement nano coûte généralement autour de 30 % du prix d'un remplacement complet (souvent de 9 000 à 15 000 $ au Québec) — soit une économie de 60 à 70 %.",
          "Pourquoi si peu ? Parce qu'on ne remplace rien. On protège et on prolonge les bardeaux déjà en place, en une seule journée, sans arrachage ni déchets envoyés à l'enfouissement.",
        ],
      },
      {
        heading: "Pourquoi on ne peut pas afficher un prix fixe",
        paragraphs: [
          "Chaque toiture est différente. Afficher un prix « universel » serait malhonnête, parce que le montant dépend de facteurs qu'on ne peut évaluer qu'en personne.",
        ],
        list: [
          "La superficie de la toiture (en pi²) : plus la surface est grande, plus le prix évolue.",
          "L'état des bardeaux : il détermine le produit requis (Bio-Boost, Revive ou Fortify).",
          "L'accès et la complexité du toit : sa forme, sa pente et son accessibilité influencent le temps de travail.",
        ],
      },
      {
        heading: "Ce que vous obtenez pour ce prix",
        paragraphs: [
          "Le traitement redonne de la flexibilité à vos bardeaux et crée une barrière hydrophobe et anti-UV qui ralentit leur vieillissement — pour une prolongation de 10 à 15 ans selon l'état du toit et le produit appliqué, le tout couvert par une garantie fabricant écrite et transférable.",
        ],
      },
      {
        heading: "Comment obtenir votre prix exact",
        paragraphs: [
          "La seule façon d'avoir un prix juste, c'est une inspection gratuite et sans pression. On évalue votre toiture, on vous remet une soumission claire, et si elle n'est pas un bon candidat, on vous le dit franchement.",
        ],
      },
    ],
  },
  {
    slug: "traiter-ou-remplacer-toiture",
    title: "Traiter ou remplacer sa toiture : comment décider ?",
    metaTitle: "Traiter ou Remplacer sa Toiture : Comment Décider ? | Vitalis",
    metaDescription:
      "Traiter ou remplacer votre toiture ? La bonne décision dépend de l'état réel de vos bardeaux. Un guide honnête pour trancher, sans survente.",
    excerpt:
      "Le traitement prolonge une toiture en bon état — il ne ressuscite pas un toit en fin de vie. Voici comment savoir dans quel cas vous êtes.",
    category: "Conseils",
    date: "25 juin 2026",
    dateISO: "2026-06-25",
    readingMin: 6,
    image: "/images/clean-shingles-after-treatement.jpg",
    imageAlt:
      "Bardeaux d'asphalte propres et ravivés après un traitement de protection nano",
    intro:
      "Votre toiture vieillit et vous hésitez entre la traiter ou la remplacer ? La bonne décision dépend d'une seule chose : l'état réel de vos bardeaux.",
    sections: [
      {
        heading: "Le traitement prolonge — il ne ressuscite pas",
        paragraphs: [
          "Soyons clairs dès le départ : le traitement nano est une solution de préservation. Il redonne flexibilité et protection à des bardeaux encore en bon état. Il ne répare pas les fuites, les solins ou les problèmes de structure, et il ne sauve pas un toit en fin de vie réelle.",
        ],
      },
      {
        heading: "Quand traiter est le bon choix",
        paragraphs: [
          "Le traitement est idéal si votre toiture montre des signes de vieillissement, mais reste structurellement saine :",
        ],
        list: [
          "Les bardeaux sèchent, se décolorent ou perdent des granules.",
          "La surface est intacte : pas de bardeaux gondolés ni fissurés en profondeur.",
          "Aucune fuite ni dommage structurel.",
          "La toiture a encore de la vie devant elle qu'on veut préserver.",
        ],
      },
      {
        heading: "Quand remplacer reste la bonne option",
        paragraphs: [
          "Si votre toiture est en fin de vie réelle, le remplacement demeure la bonne solution — et on vous le dira honnêtement. Les signes : bardeaux gondolés ou fissurés en profondeur, granules presque toutes disparues, fuites actives ou dommages à la structure.",
        ],
      },
      {
        heading: "Le calcul quand le traitement est possible",
        paragraphs: [
          "Lorsque votre toiture est admissible, le traitement représente environ 30 % du coût d'un remplacement, s'applique en une seule journée sans arrachage, et prolonge la vie du toit de 10 à 15 ans. C'est souvent la décision la plus sensée, autant pour le portefeuille que pour l'environnement.",
        ],
      },
      {
        heading: "La seule façon de trancher",
        paragraphs: [
          "Aucun article ne remplace une évaluation sur place. Une inspection gratuite permet de vérifier l'âge, l'état des granules, la flexibilité des bardeaux et l'absence de dommages majeurs — et de vous dire honnêtement dans quel cas vous êtes.",
        ],
      },
    ],
  },
  {
    slug: "signes-toiture-besoin-attention",
    title: "7 signes que votre toiture a besoin d'attention",
    metaTitle: "7 Signes que Votre Toiture a Besoin d'Attention | Vitalis",
    metaDescription:
      "Une toiture envoie des signaux avant de se dégrader. Voici 7 signes à surveiller sur vos bardeaux d'asphalte — et quoi faire ensuite.",
    excerpt:
      "Granules dans les gouttières, bardeaux secs ou qui gondolent… 7 signaux à surveiller avant que les dommages ne s'installent.",
    category: "Entretien",
    date: "18 juin 2026",
    dateISO: "2026-06-18",
    readingMin: 5,
    image: "/images/old-shingles.jpg",
    imageAlt: "Bardeaux d'asphalte vieillissants montrant des signes d'usure",
    intro:
      "Une toiture ne se dégrade pas du jour au lendemain — elle envoie des signaux. Voici 7 signes à surveiller sur vos bardeaux d'asphalte avant que les dommages ne s'installent.",
    sections: [
      {
        heading: "1. Des granules dans les gouttières",
        paragraphs: [
          "Si vous trouvez de petits grains (comme du sable noir) dans vos gouttières, vos bardeaux perdent leur couche protectrice de granules. C'est l'un des premiers signes de vieillissement.",
        ],
      },
      {
        heading: "2. Des bardeaux secs et cassants",
        paragraphs: [
          "Avec le temps, les huiles qui gardent les bardeaux souples s'évaporent sous l'effet des UV et du gel-dégel. Des bardeaux secs et rigides sont plus susceptibles de craquer.",
        ],
      },
      {
        heading: "3. Des bardeaux qui gondolent ou se recourbent",
        paragraphs: [
          "Des coins qui se soulèvent ou se recourbent indiquent un vieillissement avancé — et une porte d'entrée pour l'eau et le vent.",
        ],
      },
      {
        heading: "4. Une décoloration marquée",
        paragraphs: [
          "Une toiture qui a beaucoup pâli ou dont la couleur devient inégale subit les effets du soleil. La décoloration accompagne souvent la fragilisation des bardeaux.",
        ],
      },
      {
        heading: "5. De la mousse ou de l'humidité persistante",
        paragraphs: [
          "La mousse et les zones qui restent humides retiennent l'eau contre les bardeaux et accélèrent leur détérioration, surtout du côté nord et à l'ombre.",
        ],
      },
      {
        heading: "6. Une toiture qui approche 10 à 15 ans",
        paragraphs: [
          "C'est souvent la fenêtre idéale pour agir : les bardeaux ont commencé à vieillir, mais restent en assez bon état pour qu'un traitement prolonge leur vie utile de plusieurs années.",
        ],
      },
      {
        heading: "7. Un écoulement d'eau lent ou des traces d'infiltration",
        paragraphs: [
          "Des signes d'eau qui s'attarde ou de traces au plafond méritent une inspection rapide. Attention : le traitement nano protège et prolonge, mais ne répare pas une fuite existante.",
        ],
      },
      {
        heading: "Que faire si vous voyez ces signes ?",
        paragraphs: [
          "Un ou plusieurs de ces signes ne veulent pas dire qu'il faut tout remplacer. Souvent, une toiture encore saine peut être protégée et prolongée par un traitement nano. La seule façon de le savoir, c'est une inspection gratuite et honnête : on vous dira si votre toit est un bon candidat, ou s'il vaut mieux envisager autre chose.",
        ],
      },
    ],
  },
];
