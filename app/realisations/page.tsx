import RealisationsPageClient from "./RealisationsPageClient";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Réalisations",
  description: "Portfolio et études de cas Talacorp — projets concrets, résultats mesurables.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return <RealisationsPageClient />;
}
