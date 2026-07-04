# media-plan.md — Toitures Vitalis

> **Instruction au générateur :** Ce fichier mappe chaque asset (dans `/public/images/` et `/public/videos/`) à son emplacement exact sur le site. Utiliser CES fichiers aux emplacements indiqués, via le composant Next.js `<Image>` (images) et la balise `<video>` native (vidéos). Respecter les RÈGLES DE PERFORMANCE VIDÉO en fin de fichier — critiques pour le SEO.

---

## STRUCTURE
```
/public
├── favicon.ico, favicon-512.png, favicon-180.png
├── images/   (toutes les images ci-dessous)
└── videos/   (hero-video, hydrophobic-shingles, man-spraying-over-roof)
```
Logos dans `/brand_assets/` : `logo.svg`, `logo.png` (navy, fond clair), `logo-blanc.png` (fonds sombres).

---

## MAPPING IMAGES → EMPLACEMENTS

| Fichier (images/) | Page / Section | Rôle |
|---|---|---|
| `hero` | Accueil — fond section HÉRO | Image principale plein écran + overlay navy (poster de hero-video) |
| `worker-and-van` | À propos + Contact | Technicien + van brandé = confiance |
| `man-spraying-roof` | Accueil (procédé) / Services | Nacelle élévatrice, angle spectaculaire |
| `roofer-spraying-roof` | Accueil (procédé) + Comment ça fonctionne | Technicien brandé en action (poster de man-spraying-over-roof) |
| `water-pearling-hydrophobic-roof` | Accueil (bénéfices) + preuve | Gouttes qui perlent = preuve hydrophobe (poster de hydrophobic-shingles) |
| `old-shingles` | Section AVANT/APRÈS (slider) | Le "avant" — bardeau vieillissant admissible |
| `shingles-after-treatmet` | Section AVANT/APRÈS (slider) | Le "après" — bardeau ravivé |
| `clean-shingles-after-treatement` | Bénéfices / galerie | Bardeau propre traité, texture |
| `how-it-works` | Comment ça fonctionne (science) | Diagramme avant/pendant/après nano |
| `Nuroof-fortify` | Page Services / Produits | Baril produit — toits neufs (−5 ans), jusqu'à 15 ans |
| `Nuroof-revive` | Page Services / Produits | Baril produit — toits 5-20 ans, jusqu'à 10 ans |
| `Nuroof-bioboost` | Page Services / Produits | Baril produit — toits 10+ ans, économique |
| `montreal-house` | `/secteurs/montreal` | Maison type Montréal (plex) |
| `maison-laval` | `/secteurs/laval` | Bungalow banlieue |
| `maison-laurentides` | `/secteurs/laurentides` | Chalet sous la neige |
| `maison-rive-nord` | `/secteurs/rive-nord` | Maison familiale |
| `rivesud-maison` | `/secteurs/rive-sud` | Maison contemporaine |

*(Extensions : ajuster .jpg/.png selon les vrais fichiers.)*

---

## MAPPING VIDÉOS → EMPLACEMENTS

| Fichier (videos/) | Emplacement | Comportement | Poster |
|---|---|---|---|
| `hero-video` | Fond section HÉRO (accueil) | autoplay, muted, loop, playsinline. L'effet "wow" principal. | `images/hero` |
| `hydrophobic-shingles` | Section bénéfices / preuve hydrophobe | lazy-load (hors hero) | `images/water-pearling-hydrophobic-roof` |
| `man-spraying-over-roof` | Comment ça fonctionne (procédé) | lazy-load (hors hero) | `images/roofer-spraying-roof` |

---

## AVANT/APRÈS = SLIDER (pas de vidéo)
Utiliser `old-shingles` (avant) + `shingles-after-treatmet` (après) dans un **slider comparatif interactif** (glisser pour comparer). Sous le slider, mention honnête :
> « Amélioration réelle sur une toiture admissible — couleur ravivée et surface hydrophobe. Le traitement protège et prolonge, il ne transforme pas un toit en fin de vie. »

---

## ⚠️ RÈGLES DE PERFORMANCE VIDÉO (CRITIQUES POUR LE SEO)

1. **Balise `<video>` native, jamais d'embed YouTube/Vimeo.** Attributs :
   `<video autoplay muted loop playsinline poster="/images/hero.jpg" preload="metadata">`
2. **Toujours un `poster`** (voir tableau) — charge instantanément, sert de LCP, protège le score de vitesse.
3. **hero-video** : convertir en `.webm` (VP9) + fallback `.mp4`. Cible **< 3 MB**, boucle courte. Compresser (HandBrake/Cloudinary) avant intégration.
4. **Vidéos hors-hero** (`hydrophobic-shingles`, `man-spraying-over-roof`) : `preload="none"` + lazy-load via Intersection Observer (charger seulement quand visible).
5. **Toujours un fallback image** (le poster). Jamais de vidéo bloquante au chargement initial.

**Test :** viser PageSpeed **90+** mobile. Si une vidéo fait chuter le score → recompresser ou lazy-load.

---

## FAVICONS (dans /public, branchés dans le `<head>`)
- `favicon.ico` → onglet navigateur
- `favicon-512.png` → PWA / Android / partage
- `favicon-180.png` → apple-touch-icon (iOS)

---

## ALT TEXT (SEO — un unique et descriptif par image)
- hero → « Technicien Toitures Vitalis appliquant le traitement nano sur une toiture »
- water-pearling → « Effet hydrophobe : gouttes d'eau perlant sur un bardeau traité »
- old-shingles → « Bardeaux d'asphalte vieillissants avant traitement nano »
- shingles-after-treatmet → « Bardeaux d'asphalte ravivés après traitement de protection »
- worker-and-van → « Équipe Toitures Vitalis et véhicule de service »
- man-spraying-roof → « Application du traitement de toiture depuis une nacelle élévatrice »
- montreal-house → « Traitement de toiture résidentielle à Montréal »
- maison-laval → « Traitement de toiture à Laval »
- maison-laurentides → « Traitement de toiture dans les Laurentides »
- maison-rive-nord → « Traitement de toiture Rive-Nord de Montréal »
- rivesud-maison → « Traitement de toiture Rive-Sud de Montréal »
- Nuroof-fortify / revive / bioboost → « Produit GoNano NuRoof [nom] pour traitement de toiture »
- (etc. — chaque alt unique, naturel, avec mots-clés)