# 00 — Stratégie SEO & Sitemap — Toitures Vitalis

> **Instruction au générateur :** Ce fichier définit l'architecture du site, les règles SEO techniques et les mots-clés cibles. Appliquer ces règles sur CHAQUE page.

---

## Territoire desservi
Montréal · Laval · Laurentides · Rive-Nord · Rive-Sud (Grand Montréal)

## Licence & crédibilité
- Licence RBQ : **5879-4868-01** — afficher dans le footer + page À propos + page Garantie
- Entrepreneur certifié GoNano
- Assuré et licencié

---

## SITEMAP (architecture des URLs)

```
/                                → Accueil
/comment-ca-fonctionne           → Comment fonctionne le traitement nano
/services                        → Vue d'ensemble des services
/garantie                        → Détails de la garantie
/prix                            → Prix & soumission
/a-propos                        → À propos / crédibilité
/galerie                         → Avant/après
/faq                             → Questions fréquentes
/contact                         → Contact / soumission
/blogue                          → Index blogue (SEO long terme)

SECTEURS (pages locales SEO) :
/secteurs/montreal
/secteurs/laval
/secteurs/laurentides
/secteurs/rive-nord
/secteurs/rive-sud
```

---

## RÈGLES SEO TECHNIQUES (appliquer partout)

### Balises meta (uniques par page)
- `<title>` : 50-60 caractères, inclut mot-clé + localisation + marque
- `<meta name="description">` : 150-160 caractères, accrocheur, avec CTA
- Un seul `<h1>` par page (contient le mot-clé principal)
- Hiérarchie Hn correcte (h1 → h2 → h3, jamais sauter)

### Schema markup (JSON-LD) — CRITIQUE pour les rich snippets
- **Toutes les pages** : `LocalBusiness` (nom, adresse, tél, zone desservie, horaires, RBQ)
- **Page FAQ** : `FAQPage` (fait apparaître les questions directement dans Google)
- **Pages services** : `Service`
- **Avis/témoignages** : `Review` / `AggregateRating`

### Performance (Core Web Vitals)
- Images en WebP, compressées, avec `width`/`height` explicites
- Lazy loading sur images sous la ligne de flottaison
- CSS/JS minimal, pas de librairies lourdes inutiles
- Mobile-first (la majorité du trafic toiture est mobile)

### Technique
- `sitemap.xml` généré + `robots.txt`
- URLs propres, en français, avec tirets (comme ci-dessus)
- `alt` descriptif sur TOUTES les images (avec mots-clés naturels)
- Liens internes entre pages (ex. accueil → secteurs → contact)
- Balise canonical sur chaque page
- HTTPS (déjà via Vercel)
- Open Graph + Twitter Card (partage réseaux sociaux)

---

## MOTS-CLÉS CIBLES

### Primaires (pages principales)
- traitement nano toiture
- protection toiture bardeaux
- prolonger durée de vie toiture
- scellant nano toiture Québec
- rajeunissement toiture bardeaux d'asphalte
- alternative au remplacement de toiture

### Locaux (une page par ville × ce modèle)
- traitement toiture [ville]
- protection toiture nano [ville]
- entretien toiture bardeaux [ville]
- prolonger toiture [ville]

### Longue traîne (articles de blogue)
- combien coûte un traitement de toiture au Québec
- est-ce que le traitement nano de toiture fonctionne vraiment
- quand traiter vs remplacer sa toiture
- comment prolonger la durée de vie de sa toiture
- traitement de toiture vs remplacement : comparaison des prix
- signes que votre toiture a besoin d'attention

---

## MÉTA PAR PAGE (title + description)

| Page | Title (50-60c) | Meta description (150-160c) |
|---|---|---|
| Accueil | Traitement Nano Toiture \| Protection Bardeaux \| Toitures Vitalis | Prolongez la vie de votre toiture de 10 à 15 ans à une fraction du coût d'un remplacement. Application en 1 jour. Inspection gratuite. Grand Montréal. |
| Comment ça fonctionne | Comment Fonctionne le Traitement Nano de Toiture \| Vitalis | Découvrez comment la nanotechnologie protège vos bardeaux contre les UV, l'eau, le gel et la grêle. Explication simple et honnête du traitement. |
| Services | Nos Services de Protection de Toiture \| Toitures Vitalis | Traitement nano pour bardeaux d'asphalte, toitures résidentielles et commerciales. Prolongez votre toiture sans remplacement coûteux. |
| Garantie | Garantie de Traitement de Toiture jusqu'à 15 ans \| Vitalis | Garantie fabricant écrite et transférable jusqu'à 15 ans. Comprenez exactement ce qui est couvert, en toute transparence. |
| Prix | Prix du Traitement de Toiture \| Soumission Gratuite \| Vitalis | Économisez 60 à 70 % vs un remplacement complet. Obtenez une soumission gratuite et sans pression pour votre toiture. |
| À propos | À Propos \| Experts en Protection de Toiture \| Toitures Vitalis | Entrepreneur certifié GoNano, licencié RBQ et assuré. Une approche honnête de la protection de toiture au Grand Montréal. |
| FAQ | Questions Fréquentes sur le Traitement de Toiture \| Vitalis | Toutes vos questions sur le traitement nano de toiture : durée, coût, garantie, admissibilité. Réponses honnêtes et claires. |
| Secteurs (modèle) | Traitement de Toiture à [Ville] \| Toitures Vitalis | Protection et prolongation de toiture à [Ville]. Traitement nano en 1 jour, inspection gratuite. Entrepreneur certifié, RBQ. |