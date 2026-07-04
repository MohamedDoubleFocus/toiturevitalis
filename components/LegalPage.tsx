import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * Gabarit réutilisable pour les pages légales (mentions légales, confidentialité).
 * En-tête navy sobre + colonne de prose lisible (.legal-prose).
 */
export default function LegalPage({
  title,
  updated,
  breadcrumbLabel,
  children,
}: {
  title: string;
  updated: string;
  breadcrumbLabel: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className="bg-navy-deep py-16 sm:py-20">
        <div className="container-x">
          <nav aria-label="Fil d'Ariane">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/60">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-200 hover:text-brand"
                >
                  Accueil
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
                <span className="text-white/85" aria-current="page">
                  {breadcrumbLabel}
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="mt-5 font-display text-[2.1rem] leading-[1.1] tracking-tightest text-white sm:text-[2.7rem]">
            {title}
          </h1>
          <p className="mt-3 text-[14px] text-white/55">
            Dernière mise à jour : {updated}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-x">
          <div className="legal-prose mx-auto max-w-3xl">{children}</div>
        </div>
      </section>
    </main>
  );
}
