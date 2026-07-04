"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { sectors } from "@/lib/site";
import {
  PhoneIcon,
  ChevronDown,
  MenuIcon,
  CloseIcon,
} from "@/components/icons";

const links = [
  { label: "Comment ça fonctionne", href: "/comment-ca-fonctionne" },
  { label: "Services", href: "/services" },
  { label: "Prix", href: "/prix" },
  { label: "Garantie", href: "/garantie" },
  { label: "FAQ", href: "/faq" },
];

function LogoLockup({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Toitures Vitalis — accueil"
      className="group flex items-center gap-2.5"
    >
      {/* Icône de marque (hexagone + chevron Miami blue) */}
      <span className="relative block h-11 w-12 shrink-0">
        <Image
          src="/brand/logo.png"
          alt=""
          fill
          priority
          sizes="48px"
          className="object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] tracking-tightest text-navy">
          TOITURES VITALIS
        </span>
        {!compact && (
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-strong">
            Protection nano · Bardeaux
          </span>
        )}
      </span>
    </Link>
  );
}

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 pt-3 sm:pt-4">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/95 px-4 py-2.5 backdrop-blur-md transition-shadow duration-300 sm:px-5 ${
            scrolled ? "shadow-float" : "shadow-card"
          }`}
        >
          <LogoLockup />

          {/* Menu centre (desktop) */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[14.5px] font-medium text-navy/85 transition-colors duration-200 hover:bg-greylight hover:text-navy"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* Dropdown Secteurs */}
            <li className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-[14.5px] font-medium text-navy/85 transition-colors duration-200 hover:bg-greylight hover:text-navy"
                aria-haspopup="true"
              >
                Secteurs
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-[opacity,transform] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <ul className="overflow-hidden rounded-xl border border-greyborder bg-white p-1.5 shadow-float">
                  {sectors.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block rounded-lg px-3 py-2 text-[14px] font-medium text-navy/85 transition-colors duration-200 hover:bg-greylight hover:text-brand-strong"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          {/* Droite : téléphone + CTA */}
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${site.phoneHref}`}
              className="hidden items-center gap-2 whitespace-nowrap rounded-lg px-2 py-2 text-[15px] font-semibold text-navy transition-colors duration-200 hover:text-brand-strong xl:flex"
            >
              <PhoneIcon className="h-[18px] w-[18px] text-brand-strong" />
              {site.phoneDisplay}
            </a>
            <Link
              href="#soumission"
              className="btn-primary hidden whitespace-nowrap !px-5 !py-2.5 text-[15px] sm:inline-flex"
            >
              Inspection gratuite
            </Link>

            {/* Burger (mobile) */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy transition-colors duration-200 hover:bg-greylight lg:hidden"
            >
              {open ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Panneau mobile */}
      {open && (
        <div className="container-x lg:hidden">
          <div className="mt-2 animate-fade-in rounded-2xl border border-greyborder bg-white p-4 shadow-float">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-[16px] font-medium text-navy transition-colors duration-200 hover:bg-greylight"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-1 border-t border-greyborder pt-2">
                <p className="px-3 pb-1 pt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-greytext">
                  Secteurs desservis
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {sectors.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2 text-[15px] font-medium text-navy/85 transition-colors duration-200 hover:bg-greylight hover:text-brand-strong"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="#soumission"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Obtenez une inspection gratuite
              </Link>
              <a
                href={`tel:${site.phoneHref}`}
                className="btn-outline-navy w-full"
              >
                <PhoneIcon className="h-[18px] w-[18px] text-brand-strong" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
