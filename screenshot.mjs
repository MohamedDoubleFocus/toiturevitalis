// screenshot.mjs — capture une page du serveur de dev Next.js.
// Usage :
//   node screenshot.mjs http://localhost:3000/            (desktop, pleine page)
//   node screenshot.mjs http://localhost:3000/ accueil    (label optionnel)
//   node screenshot.mjs http://localhost:3000/ accueil mobile   (viewport mobile)
//
// Enregistre dans ./temporary screenshots/screenshot-N.png (auto-incrémenté).

import puppeteer from "puppeteer";
import { existsSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const flags = process.argv.slice(2).filter((a) => a.startsWith("--"));
const url = args[0] || "http://localhost:3000/";
const label = args[1] || "";
const device = (args[2] || "desktop").toLowerCase();
const viewportOnly = flags.includes("--viewport"); // capture le haut de page seulement

const outDir = join(process.cwd(), "temporary screenshots");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

// Numéro auto-incrémenté
let maxN = 0;
for (const f of readdirSync(outDir)) {
  const m = f.match(/screenshot-(\d+)/);
  if (m) maxN = Math.max(maxN, parseInt(m[1], 10));
}
const n = maxN + 1;
const suffix = label ? `-${label}` : "";
const outPath = join(outDir, `screenshot-${n}${suffix}.png`);

const viewport =
  device === "mobile"
    ? // DSF 1 : évite de dépasser la limite de hauteur de capture de Chromium (~16384px)
      { width: 390, height: 844, deviceScaleFactor: 1, isMobile: true }
    : { width: 1440, height: 900, deviceScaleFactor: 1 };

async function autoScroll(page) {
  // Fait défiler toute la page pour déclencher les révélations (IntersectionObserver)
  // et le lazy-load des vidéos, puis remonte en haut.
  // On désactive le scroll fluide (sinon les scrollBy successifs ne se cumulent pas).
  await page.evaluate(async () => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    await new Promise((resolve) => {
      let y = 0;
      const step = Math.round(window.innerHeight * 0.75);
      const tick = () => {
        window.scrollTo(0, y);
        y += step;
        if (y < document.body.scrollHeight) {
          setTimeout(tick, 140);
        } else {
          window.scrollTo(0, document.body.scrollHeight);
          setTimeout(resolve, 250);
        }
      };
      tick();
    });
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  });
  await new Promise((r) => setTimeout(r, 500));
}

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  console.log(`→ Ouverture de ${url} (${device})`);
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

  // Attendre les polices (évite un flash de police de secours dans la capture)
  try {
    await page.evaluate(() => document.fonts && document.fonts.ready);
  } catch {}

  if (!viewportOnly) {
    await autoScroll(page);
    // Laisser les animations d'entrée se terminer
    await new Promise((r) => setTimeout(r, 700));
  } else {
    await new Promise((r) => setTimeout(r, 500));
  }

  // Filet de sécurité CAPTURE UNIQUEMENT : garantit qu'aucune section révélée au
  // scroll ne reste masquée si l'IntersectionObserver a coalescé pendant le
  // défilement programmatique. N'affecte pas le site pour les vrais visiteurs.
  await page.evaluate(() => {
    document
      .querySelectorAll(".reveal:not(.is-visible)")
      .forEach((el) => el.classList.add("is-visible"));
  });
  await new Promise((r) => setTimeout(r, 800));

  await page.screenshot({ path: outPath, fullPage: !viewportOnly });
  console.log(`✓ Capture enregistrée : ${outPath}`);
} catch (err) {
  console.error("✗ Échec de la capture :", err.message);
  process.exitCode = 1;
} finally {
  await browser.close();
}
