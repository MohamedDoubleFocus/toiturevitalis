import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";
import { site, sectors, PDF_GARANTIE } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

const pages = [
  { label: "Comment ça fonctionne", href: "/comment-ca-fonctionne" },
  { label: "Services", href: "/services" },
  { label: "Garantie", href: "/garantie" },
  { label: "Prix", href: "/prix" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
  { label: "Blogue", href: "/blogue" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy pb-24 text-white/80 md:pb-0">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Marque */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative block h-11 w-12 shrink-0 overflow-hidden">
                <Image
                  src="/brand/logo-blanc.png"
                  alt="Logo Toitures Vitalis"
                  width={59}
                  height={59}
                  className="absolute left-1/2 top-0 max-w-none -translate-x-1/2"
                />
              </span>
              <span className="font-display text-[1.05rem] tracking-tightest text-white">
                TOITURES VITALIS
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-white/65">
              Traitement nanotechnologique qui protège et prolonge vos bardeaux
              d&apos;asphalte. Une approche honnête de la protection de toiture au{" "}
              {site.region}.
            </p>
            <div className="mt-6 space-y-2 text-[14.5px]">
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-2.5 font-semibold text-white transition-colors duration-200 hover:text-brand"
              >
                <PhoneIcon className="h-[18px] w-[18px] text-brand" />
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block text-white/70 transition-colors duration-200 hover:text-brand"
              >
                {site.email}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation du pied de page">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-[14.5px] text-white/70 transition-colors duration-200 hover:text-brand"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Secteurs */}
          <nav aria-label="Secteurs desservis">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">
              Secteurs desservis
            </h3>
            <ul className="mt-4 space-y-2.5">
              {sectors.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[14.5px] text-white/70 transition-colors duration-200 hover:text-brand"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Crédibilité */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">
              Licence &amp; crédibilité
            </h3>
            <ul className="mt-4 space-y-3 text-[14.5px] text-white/70">
              <li className="flex flex-col">
                <span className="font-semibold text-white">Certification</span>
                <span>Entrepreneur certifié GoNano</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">Assurance</span>
                <span>Licencié et assuré</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">Territoire</span>
                <span>{site.region}</span>
              </li>
            </ul>
            <a
              href={PDF_GARANTIE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[14.5px] text-white/70 transition-colors duration-200 hover:text-brand"
            >
              <FileText className="h-4 w-4 text-brand" aria-hidden />
              Garantie officielle (PDF)
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Tous droits réservés. · Certifié GoNano · Licencié
            et assuré
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/mentions-legales"
              className="transition-colors duration-200 hover:text-brand"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="transition-colors duration-200 hover:text-brand"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
