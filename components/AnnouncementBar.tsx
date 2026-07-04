const items = [
  "Application en 1 seule journée",
  "Prolongez votre toiture de 10 à 15 ans",
  "Inspection GRATUITE",
  "Certifié GoNano",
  "Licencié et assuré",
];

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-0">
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 text-[13px] font-medium tracking-wide text-white/90">
            {t}
          </span>
          <span aria-hidden className="text-brand">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-navy-deep">
      <div className="flex w-max animate-marquee will-change-transform">
        {/* Deux pistes identiques → défilement continu (-50%) */}
        <Track />
        <Track />
      </div>
      {/* Estompes latérales */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy-deep to-transparent" />
    </div>
  );
}
