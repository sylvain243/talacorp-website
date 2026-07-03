import type { Metadata } from "next";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  openGraphType?: "website" | "article";
  publishedTime?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  openGraphType = "website",
  publishedTime,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: openGraphType,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
