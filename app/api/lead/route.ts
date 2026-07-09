import { NextResponse } from "next/server";

/**
 * Réception des demandes du formulaire → transfert vers le webhook GHL (LeadConnector),
 * qui s'occupe du reste (contact, courriel, automatisation).
 *
 * L'URL du webhook vient de la variable d'environnement GHL_WEBHOOK_URL (voir .env.local
 * en dev, et les variables d'environnement Vercel en production). Un repli est prévu.
 */
const GHL_WEBHOOK_URL =
  process.env.GHL_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/geHFJaLiQI4QJtQs4phb/webhook-trigger/vedYfv7OGdLnW5gPZsIl";

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => null);
    if (!data) {
      return NextResponse.json(
        { ok: false, error: "Requête invalide." },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      phone,
      address,
      message,
      company,
      language,
      source,
      utm_source,
      utm_medium,
      utm_campaign,
      gclid,
      landing_page,
      referrer,
    } = data as Record<string, string>;

    // Honeypot anti-pourriel : un bot remplit ce champ caché → on ignore silencieusement.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Veuillez remplir le nom, le courriel et le téléphone." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Courriel invalide." },
        { status: 400 }
      );
    }

    // Payload transmis au webhook GHL — format attendu (mêmes clés) + attribution de source.
    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      address: (address || "").trim(),
      message: (message || "").trim(),
      language: language || "fr",
      source: source || "Recherche Directe",
      utm_source: utm_source || "",
      utm_medium: utm_medium || "",
      utm_campaign: utm_campaign || "",
      gclid: gclid || "",
      landing_page: landing_page || "",
      referrer: referrer || "",
    };

    // Transfert vers GHL (avec délai maximal pour ne pas bloquer).
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    let ghlOk = false;
    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      ghlOk = res.ok;
      if (!res.ok) {
        console.error("[lead] Le webhook GHL a répondu", res.status);
      }
    } catch (e) {
      console.error("[lead] Erreur d'envoi au webhook GHL :", (e as Error).message);
    } finally {
      clearTimeout(timeout);
    }

    if (!ghlOk) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Une erreur est survenue lors de l'envoi. Réessayez, ou appelez-nous directement.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Une erreur est survenue. Réessayez." },
      { status: 500 }
    );
  }
}
