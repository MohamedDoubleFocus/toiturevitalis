# brand-guidelines.md — Toitures Vitalis

> **Instruction au générateur :** Reproduire fidèlement le style visuel décrit ci-dessous (inspiré d'un site de toiture premium « Summit »). Match layout, typographie, tailles, couleurs et espacements EXACTEMENT. Utiliser les valeurs HEX et px précises fournies. Ne pas inventer de couleurs ni de polices.

---

## 1. COULEURS (valeurs exactes — extraites du logo)

```css
:root {
  /* Principales */
  --navy:        #1B3A5C;  /* dominante : fonds sombres, texte titres foncés */
  --blue:        #4A90E0;  /* accent : boutons, mots-clés surlignés, liens */
  --white:       #FFFFFF;

  /* Support */
  --navy-deep:   #0F1B2A;  /* overlays photos, fonds très sombres */
  --blue-hover:  #3A78C2;  /* état hover des boutons bleus */
  --grey-text:   #5A6B7B;  /* texte secondaire */
  --grey-light:  #F4F6F8;  /* fonds de sections claires alternées */
  --grey-border: #E2E8F0;  /* bordures fines, séparateurs */
}
```

**Règle 60-30-10 :** 60% navy/sombre · 30% blanc · 10% bleu accent.

**Usage clé :**
- Barre de navigation : fond blanc/très clair, texte navy, bouton CTA bleu.
- Section héros : photo de toiture avec **overlay navy sombre** (`--navy-deep` à 55% d'opacité) → texte blanc lisible par-dessus.
- Bandeau de confiance sous le héros : fond gris très clair (`--grey-light`).

---

## 2. TYPOGRAPHIE (polices + tailles EXACTES)

### Polices (Google Fonts — gratuites)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Archivo+Black&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

- **Titres (H1, H2 gros) :** `'Archivo Black', sans-serif` — grotesque robuste, large, carrée et structurelle. Look solide « construction premium », cohérent avec le logo géométrique navy/bleu. (Fallback si besoin : Archivo 700, Arial Black.)
- **Corps de texte, sous-titres, boutons, nav :** `'Inter', sans-serif`.

### Échelle typographique (desktop)

| Élément | Police | Taille | Poids | Line-height | Letter-spacing | Couleur |
|---|---|---|---|---|---|---|
| H1 héros | Archivo Black | **60–76px** | 400 (Archivo Black est déjà très gras) | 1.0 | -0.02em | Blanc, **mot-clé en `--blue`** |
| H2 section | Archivo Black | 38–48px | 400 | 1.1 | -0.02em | `--navy` |
| H3 sous-titre | Inter | 22–26px | 700 | 1.2 | normal | `--navy` |
| Sous-titre héros | Inter | 18–20px | 400 | 1.6 | normal | Blanc 90% opacité |
| Corps | Inter | 16–18px | 400 | 1.7 | normal | `--grey-text` |
| Nav / liens | Inter | 15–16px | 500 | 1 | normal | `--navy` |
| Bouton | Inter | 15–16px | 600 | 1 | normal | Blanc (sur bleu) |
| Petit label (ex. TRUSTED & CERTIFIED) | Inter | 13px | 600 | 1 | 0.08em (uppercase) | `--grey-text` |

### Échelle mobile
- H1 héros : **40–48px**, line-height 1.0
- H2 : 30–36px
- Corps : 16px
- Garder les mêmes polices et couleurs.

---

## 3. STRUCTURE DE LA PAGE (reproduire ce layout)

### A. Barre de navigation (sticky, en haut)
- Fond : blanc / `--grey-light`, légèrement flottante (léger arrondi + ombre douce), marge autour.
- Gauche : **logo** (`brand_assets/logo.svg`).
- Centre : liens de menu (Accueil, À propos, Zones desservies ▾, Services ▾, Galerie, Contact) — texte `--navy`, poids 500. Le lien actif a un fond gris clair arrondi.
- Droite : numéro de téléphone (icône + texte navy) **+ bouton CTA bleu** « Inspection gratuite » (arrondi ~8px).

### B. Section héros (pleine largeur, sombre)
- Fond : **photo de toiture** en angle dramatique + **overlay navy** (`--navy-deep` ~55% opacité, ou dégradé `from-navy-deep/70 to-navy-deep/40`).
- Contenu **centré**, largeur max ~900px :
  1. **H1 Archivo Black géant** (60–76px), blanc, avec **le mot-clé important en `--blue`** et un **point final** (ex. « Protégez votre toiture avant le **prochain hiver.** »).
  2. **Sous-titre** Inter 18–20px, blanc 90%, 2–3 lignes max, largeur limitée pour la lisibilité.
  3. **Deux boutons côte à côte :**
     - Principal : fond `--blue`, texte blanc, « Obtenez une inspection gratuite ».
     - Secondaire : contour blanc (fond transparent), icône téléphone + numéro.
- Hauteur : ~85–90vh.

### C. Bandeau de confiance (juste sous le héros)
- Fond clair (`--grey-light`), fine bande horizontale.
- Label « APPROUVÉ & CERTIFIÉ » à gauche + logos de crédibilité (BBB, Google avis, RBQ, « Licencié et assuré ») alignés horizontalement, en gris désaturé.

### D. Sections suivantes (fond blanc, alternance gris clair)
- Services, À propos, Galerie, Témoignages, CTA final.
- Titres H2 en Archivo Black navy, corps en Inter gris.
- Cartes avec coins arrondis (~12px) et ombre douce teintée navy à faible opacité.

---

## 4. BOUTONS

### Bouton principal (CTA)
```css
background: var(--blue);
color: var(--white);
font: 600 16px 'Inter';
padding: 14px 28px;
border-radius: 8px;
transition: background 0.2s ease, transform 0.2s ease;
/* hover */ background: var(--blue-hover); transform: translateY(-1px);
box-shadow: 0 8px 20px rgba(74,144,224,0.25); /* ombre teintée bleu, faible opacité */
```

### Bouton secondaire (téléphone, sur fond sombre)
```css
background: transparent;
color: var(--white);
border: 1.5px solid rgba(255,255,255,0.5);
border-radius: 8px;
padding: 14px 28px;
/* hover */ border-color: var(--white); background: rgba(255,255,255,0.08);
```

---

## 5. STYLE VISUEL & RÈGLES DE CRAFT

- **Photos :** toitures réelles, angle dramatique, ciel bleu-gris de fin de journée. Toujours un **overlay navy** + traitement `mix-blend-multiply` léger pour l'unité chromatique. Jamais de stock souriant générique.
- **Ombres :** jamais `shadow-md` plat. Utiliser des ombres **teintées navy/bleu**, faible opacité, multi-couches.
- **Coins :** arrondis modérés (boutons 8px, cartes 12px) — moderne mais pas mou.
- **Espacement :** sections généreuses (padding vertical ~80–120px desktop), respiration.
- **Animations :** uniquement `transform` et `opacity`, easing type ressort. Jamais `transition-all`.
- **États interactifs :** chaque élément cliquable a hover + focus-visible + active.
- **Profondeur :** système de couches (base → surélevé → flottant), pas tout au même plan.

---

## 6. LOGO

- Fichier : `brand_assets/logo.svg` (toit + pic bleu accent + mot-symbole).
- Sur fond clair (nav) : logo tel quel.
- Sur fond sombre (footer, héros) : version blanche/inversée.
- **Favicon :** icône seule (toit + pic), sans texte.
- Zone de dégagement minimale autour du logo = hauteur de la lettre « V ».

---

## 7. TON & CONTENU (voix de marque)

- Confiant, honnête, québécois, professionnel. Jamais de sur-promesse.
- **Structure de titre signature** : phrase blanche + **mot-clé en bleu** + point final.
  - Ex. « Prolongez la vie de votre toiture de **plusieurs années.** »
  - Ex. « La protection nano, à **une fraction du prix.** »
- CTA récurrents : « Inspection gratuite », « Obtenez votre soumission », « Parlez à un expert ».
- **Règle d'or (honnêteté) :** parler de « protéger et prolonger », jamais promettre un nombre d'années garanti ni la réparation de fuites. La crédibilité est l'atout principal.

---

## 8. CHEAT SHEET (résumé machine)

```
FONTS       Titres = Archivo Black | Corps = Inter (Google Fonts)
H1 HÉRO     Archivo Black 60-76px, blanc, mot-clé en #4A90E0, point final
COULEURS    #1B3A5C navy | #4A90E0 bleu | #FFFFFF | #0F1B2A overlay | #5A6B7B texte | #F4F6F8 fond clair
HÉRO        Photo toiture + overlay navy 55% + H1 géant + sous-titre + 2 boutons (bleu plein / contour tél)
NAV         Barre blanche flottante + logo gauche + menu centre + CTA bleu droite
CTA         Fond #4A90E0, blanc, radius 8px, ombre bleue faible opacité, hover #3A78C2
STYLE       Sombre premium, overlay navy sur photos, arrondis modérés, ombres teintées
```