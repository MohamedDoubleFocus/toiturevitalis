import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4.5 5.5c0-.8.7-1.5 1.5-1.5h2.2c.6 0 1.2.4 1.4 1l.9 2.6c.2.5 0 1.1-.4 1.5l-1.3 1.1a12 12 0 0 0 5 5l1.1-1.3c.4-.4 1-.6 1.5-.4l2.6.9c.6.2 1 .8 1 1.4V18c0 .8-.7 1.5-1.5 1.5A15 15 0 0 1 4.5 5.5Z" />
    </svg>
  );
}

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/* --- Icônes bénéfices --- */

export function DropletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 3.5c3 3.6 6 6.9 6 10.2A6 6 0 0 1 6 13.7C6 10.4 9 7.1 12 3.5Z" />
      <path d="M9.5 14.2a2.6 2.6 0 0 0 2.4 2.3" />
    </svg>
  );
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="3.6" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
    </svg>
  );
}

export function SnowflakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5 4.2 16.5" />
      <path d="M9.5 4.5 12 6.8l2.5-2.3M9.5 19.5 12 17.2l2.5 2.3" />
      <path d="m4.6 10.6.3 3 2.8 1M19.4 10.6l-.3 3-2.8 1M4.6 13.4l.3-3 2.8-1M19.4 13.4l-.3-3-2.8-1" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 3.5 5.5 6v5.2c0 4 2.7 7 6.5 8.3 3.8-1.3 6.5-4.3 6.5-8.3V6L12 3.5Z" />
      <path d="m9.3 11.8 1.9 1.9 3.5-3.6" />
    </svg>
  );
}

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M19 5c0 7-4.5 11-11 11a6 6 0 0 1-3-1c1-6 5-10 14-10Z" />
      <path d="M5 19c2-4 5-7 9-8.5" />
    </svg>
  );
}

export function RecycleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M9 6.5 11 3l2 3.5M13.5 5.8l2 3.4M6.2 10.5 4.3 14l4 .2M4.7 12.8l2 3.5h4M17.6 10.6l2 3.4-3.4 2M19.4 13.9l-2 3.5-4 .1" />
    </svg>
  );
}
