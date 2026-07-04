import type { MetadataRoute } from "next";
import { site, sectors } from "@/lib/site";
import { articles } from "@/lib/blog";

/**
 * On n'inclut que les pages réellement construites (évite les 404 dans le sitemap).
 * Ajouter les routes ici au fur et à mesure : /a-propos, /contact, /blogue.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const secteurs: MetadataRoute.Sitemap = sectors.map((s) => ({
    url: `${site.url}${s.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogue: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${site.url}/blogue/${a.slug}`,
    lastModified: new Date(a.dateISO),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/comment-ca-fonctionne`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/garantie`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/prix`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/blogue`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...secteurs,
    ...blogue,
    {
      url: `${site.url}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${site.url}/politique-de-confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
