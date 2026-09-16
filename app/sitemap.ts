import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { realisations } from "@/data/realisations";
import { services } from "@/data/content";
import { siteConfig } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.website.replace(/\/$/, "");
  const siteUpdated = new Date("2026-09-16");

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: siteUpdated, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/a-propos`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/realisations`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/mentions-legales`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.3 },
    {
      url: `${base}/politique-de-confidentialite`,
      lastModified: siteUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: siteUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const realisationPages: MetadataRoute.Sitemap = realisations.map((r) => ({
    url: `${base}/realisations/${r.slug}`,
    lastModified: siteUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.dateISO),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...realisationPages, ...blogPages];
}
