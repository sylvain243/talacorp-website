import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.website.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
