"use client";

import { useState } from "react";
import {
  Phone,
  Check,
  ShieldCheck,
  Clock3,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { site } from "@/lib/site";

const perks = [
  { Icon: Check, text: "Gratuit et sans engagement" },
  { Icon: Clock3, text: "Réponse rapide, sans pression" },
  { Icon: ShieldCheck, text: "Évaluation honnête de votre toiture" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({ ok: false }));
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Une erreur est survenue. Réessayez.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Impossible d'envoyer le formulaire. Vérifiez votre connexion.");
    }
  }

  return (
    <section
      id="soumission"
      className="relative isolate scroll-mt-24 overflow-hidden bg-navy-deep py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-brand/12 blur-3xl"
      />
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Colonne persuasion */}
          <div>
            <p className="eyebrow mb-4">Soumission gratuite</p>
            <h2 className="font-display text-[2.1rem] leading-[1.06] tracking-tightest text-white sm:text-[2.9rem]">
              Obtenez votre inspection <span className="kw-bright">gratuite.</span>
            </h2>
            <p className="mt-5 max-w-md text-[1.05rem] leading-[1.7] text-white/80">
              Protégez votre toiture avant le prochain hiver. On l&apos;évalue
              honnêtement et on vous dit franchement si le traitement nano est la bonne
              solution — sans pression.
            </p>

            <ul className="mt-8 space-y-3">
              {perks.map((p) => (
                <li key={p.text} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand/15">
                    <p.Icon className="h-4 w-4 text-brand" strokeWidth={2.2} />
                  </span>
                  <span className="text-[15px] font-medium text-white/90">
                    {p.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-[13px] uppercase tracking-[0.12em] text-white/50">
                Vous préférez parler à quelqu&apos;un ?
              </p>
              <a
                href={`tel:${site.phoneHref}`}
                className="mt-1.5 inline-flex items-center gap-2.5 font-display text-[1.4rem] tracking-tightest text-white transition-colors duration-200 hover:text-brand"
              >
                <Phone className="h-5 w-5 text-brand" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Carte formulaire */}
          <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-float sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <CheckCircle2 className="h-9 w-9 text-brand" />
                </span>
                <h3 className="mt-5 font-display text-[1.5rem] tracking-tightest text-navy">
                  Demande envoyée !
                </h3>
                <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-greytext">
                  Merci. Un membre de l&apos;équipe Toitures Vitalis vous contactera
                  sous peu pour planifier votre inspection gratuite.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-[14px] font-semibold text-brand-strong transition-colors duration-200 hover:text-navy"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                {/* Honeypot anti-pourriel (caché) */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="company">Ne pas remplir</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nom complet" htmlFor="name" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jean Tremblay"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Téléphone" htmlFor="phone" required>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="514 000-0000"
                      className="form-input"
                    />
                  </Field>
                </div>

                <Field label="Courriel" htmlFor="email" required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="vous@exemple.com"
                    className="form-input"
                  />
                </Field>

                <Field label="Votre secteur" htmlFor="sector">
                  <select
                    id="sector"
                    name="sector"
                    defaultValue=""
                    className="form-input"
                  >
                    <option value="" disabled>
                      Sélectionnez…
                    </option>
                    {site.areaServed.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                    <option value="Autre">Autre</option>
                  </select>
                </Field>

                <Field label="Parlez-nous de votre toiture (optionnel)" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Âge approximatif, superficie, préoccupations…"
                    className="form-input resize-none"
                  />
                </Field>

                {status === "error" && (
                  <p role="alert" className="text-[14px] font-medium text-red-600">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary mt-1 w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-[18px] w-[18px] animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    "Obtenez mon inspection gratuite"
                  )}
                </button>

                <p className="text-center text-[12.5px] leading-relaxed text-greytext">
                  Vos informations restent confidentielles et ne servent qu&apos;à
                  planifier votre inspection.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-[13px] font-semibold text-navy"
      >
        {label}
        {required && <span className="text-brand-strong"> *</span>}
      </label>
      {children}
    </div>
  );
}
