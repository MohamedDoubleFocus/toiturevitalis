# brand-guidelines.md — Toitures Vitalis

> **Instruction au générateur :** Reproduire fidèlement le style visuel décrit ci-dessous (inspiré d'un site de toiture premium « Summit »). Match layout, typographie, tailles, couleurs et espacements EXACTEMENT. Utiliser les valeurs HEX et px précises fournies. Ne pas inventer de couleurs ni de polices.

---

## 1. COULEURS (valeurs exactes — palette NOIR + MIAMI BLUE)

> **Pivot de marque (2026) :** la marque est désormais **noir + Miami blue `#54C3EA`** (au lieu du navy/bleu d'origine). Les noms de tokens `navy`/`brand` sont conservés dans le code, mais leurs valeurs pointent maintenant vers le noir et le cyan Miami.

```css
:root {
  /* Principales */
  --navy:         #111418;  /* « noir » de marque : titres, fonds sombres, surfaces */
  --brand:        #54C3EA;  /* Miami blue — accent VIF : CTA, mots-clés sur fond NOIR, glows */
  --white:        #FFFFFF;

  /* Support */
  --navy-deep:    #000000;  /* noir pur : overlays photos, footer, badges */
  --brand-strong: #0E7BA6;  /* cyan FONCÉ accessible — pour le TEXTE bleu sur fond CLAIR (WCAG AA) */
  --brand-hover:  #2AA8D6;  /* survol des fonds cyan */
  --grey-text:    #5A6B7B;  /* texte secondaire */
  --grey-light:   #F4F6F8;  /* fonds de sections claires alternées */
  --grey-border:  #E2E8F0;  /* bordures fines, séparateurs */
}
```

**Règle 60-30-10 :** 60% noir/sombre · 30% blanc · 10% Miami blue accent.

**Règle de lisibilité (CRUCIALE — le Miami blue est un cyan clair) :**
- `--brand` (`#54C3EA`) vif → uniquement sur **fond noir/sombre** (héros, sections navy), en **fond de bouton**, en glow, en bordure/fill à faible opacité, et pour les **icônes dans une pastille teintée**.
- `--brand-strong` (`#0E7BA6`) → dès qu'un **texte, lien, chiffre ou petite icône bleue** se pose sur **fond blanc/clair** (nav, stats, cartes, liens « en savoir plus »). Ne jamais mettre `#54C3EA` en texte sur blanc (illisible).
- **Texte sur un fond Miami blue plein** (boutons, badges `bg-brand`) = **NOIR** (`--navy-deep`), jamais blanc.
- Mot-clé de titre : classe `.kw` = `brand-strong` par défaut (titres sur fond clair) ; `.kw-bright` = `#54C3EA` sur les héros/sections sombres.

**Usage clé :**
- Barre de navigation : fond blanc flottant, texte noir, bouton CTA Miami blue (texte noir).
- Section héros : photo de toiture avec **overlay noir** (`--navy-deep` ~55–85%) → texte blanc + mot-clé `#54C3EA` par-dessus.
- Bandeau de confiance sous le héros : fond gris très clair (`--grey-light`), chiffres avec suffixe en `brand-strong`.

---

## 2. TYPOGRAPHIE (polices + tailles EXACTES)

### Polices (Google Fonts — gratuites)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

> **Pivot typo (2026) :** police unique **Figtree** (Google Fonts, variable) pour TOUT — titres et corps. Figtree n'a pas de graisse « black » : les titres se font en **800 (ExtraBold)**, tracking serré.

- **Titres (H1, H2 gros) :** `'Figtree', sans-serif`, **poids 800**, tracking `-0.03em`. Géométrique, moderne, propre.
- **Corps de texte, sous-titres, boutons, nav :** `'Figtree', sans-serif`, poids 400–600.

### Échelle typographique (desktop)

| Élément | Police | Taille | Poids | Line-height | Letter-spacing | Couleur |
|---|---|---|---|---|---|---|
| H1 héros | Archivo Black | **60–76px** | 400 (Archivo Black est déjà très gras) | 1.0 | -0.02em | Blanc, **mot-clé en `--brand` (#54C3EA)** |
| H2 section | Archivo Black | 38–48px | 400 | 1.1 | -0.02em | `--navy` |
| H3 sous-titre | Inter | 22–26px | 700 | 1.2 | normal | `--navy` |
| Sous-titre héros | Inter | 18–20px | 400 | 1.6 | normal | Blanc 90% opacité |
| Corps | Inter | 16–18px | 400 | 1.7 | normal | `--grey-text` |
| Nav / liens | Inter | 15–16px | 500 | 1 | normal | `--navy` |
| Bouton | Inter | 15–16px | 700 | 1 | normal | **Noir** (sur Miami blue) |
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
background: var(--brand);      /* Miami blue #54C3EA */
color: #08131A;               /* NOIR — texte blanc serait illisible sur ce cyan clair */
font: 700 16px 'Inter';
padding: 14px 28px;
border-radius: 8px;
transition: background 0.2s ease, transform 0.2s ease;
/* hover */ background: var(--brand-hover); transform: translateY(-1px);
box-shadow: 0 8px 20px rgba(84,195,234,0.32); /* lueur cyan, faible opacité */
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

- **Photos :** toitures réelles, angle dramatique, ciel de fin de journée. Toujours un **overlay noir** + traitement `mix-blend-multiply` léger pour l'unité chromatique. Jamais de stock souriant générique.
- **Ombres :** jamais `shadow-md` plat. Utiliser des ombres **teintées noir** (cartes) ou **lueur cyan** (CTA), faible opacité, multi-couches.
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
- **Structure de titre signature** : phrase blanche/noire + **mot-clé en Miami blue** + point final.
  - Ex. « Prolongez la vie de votre toiture de **plusieurs années.** »
  - Ex. « La protection nano, à **une fraction du prix.** »
- CTA récurrents : « Inspection gratuite », « Obtenez votre soumission », « Parlez à un expert ».
- **Règle d'or (honnêteté) :** parler de « protéger et prolonger », jamais promettre un nombre d'années garanti ni la réparation de fuites. La crédibilité est l'atout principal.

---

## 8. CHEAT SHEET (résumé machine)

```
FONTS       Figtree partout (Google Fonts, variable) | Titres = Figtree 800 | Corps = Figtree 400-600
H1 HÉRO     Archivo Black 60-76px, blanc, mot-clé en #54C3EA, point final
COULEURS    #111418 noir | #54C3EA Miami blue | #0E7BA6 cyan-texte-sur-clair | #FFFFFF | #000000 overlay | #5A6B7B texte | #F4F6F8 fond clair
LISIBILITÉ  #54C3EA = seulement sur NOIR / en fond de bouton | texte bleu sur BLANC = #0E7BA6 | texte SUR bouton cyan = NOIR
HÉRO        Photo toiture + overlay noir 55-85% + H1 géant + mot-clé #54C3EA + 2 boutons (cyan plein texte noir / contour tél)
NAV         Barre blanche flottante + logo gauche + menu centre + CTA Miami blue (texte noir) droite
CTA         Fond #54C3EA, texte NOIR, radius 8px, lueur cyan faible opacité, hover #2AA8D6
STYLE       Noir premium + accents Miami blue, overlay noir sur photos, arrondis modérés, ombres teintées
```