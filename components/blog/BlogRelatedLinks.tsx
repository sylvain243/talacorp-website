import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blog";

const categoryToService: Record<string, { slug: string; label: string }> = {
  Marketing: { slug: "marketing-acquisition", label: "Marketing & Acquisition" },
  Stratégie: { slug: "strategie-performance", label: "Stratégie & Performance" },
  Branding: { slug: "branding-print", label: "Branding & Print" },
  "Transformation Digitale": {
    slug: "transformation-digitale",
    label: "Transformation Digitale",
  },
};

interface BlogRelatedLinksProps {
  post: BlogPost;
}

export default function BlogRelatedLinks({ post }: BlogRelatedLinksProps) {
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const service = categoryToService[post.category];

  return (
    <nav className="mt-12 space-y-8 border-t border-navy/10 pt-10" aria-label="Liens connexes">
      {service && (
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
            Service associé
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-3 inline-flex items-center gap-1 text-lg font-semibold text-navy hover:text-gold"
          >
            {service.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      )}

      {relatedPosts.length > 0 && (
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
            Articles similaires
          </p>
          <ul className="mt-3 space-y-2">
            {relatedPosts.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/blog/${related.slug}`}
                  className="text-navy/80 hover:text-gold hover:underline"
                >
                  {related.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
