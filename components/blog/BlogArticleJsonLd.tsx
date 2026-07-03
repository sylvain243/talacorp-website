import { siteConfig } from "@/data/content";
import type { BlogPost } from "@/data/blog";

interface BlogArticleJsonLdProps {
  post: BlogPost;
}

export default function BlogArticleJsonLd({ post }: BlogArticleJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.website,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.website}/logo-color.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.website}/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
