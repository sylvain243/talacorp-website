import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Realisation } from "@/data/realisations";

interface CaseStudyCardProps {
  project: Realisation;
  index?: number;
}

export default function CaseStudyCard({ project }: CaseStudyCardProps) {
  return (
    <article className="group overflow-hidden rounded-card border border-navy/10 bg-white transition-all hover:shadow-lg">
      <Link href={`/realisations/${project.slug}`} className="block">
        <div
          className="flex h-48 items-end p-6 transition-transform group-hover:scale-[1.02]"
          style={{ backgroundColor: project.coverColor }}
        >
          <span className="rounded-pill bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.resultHighlight}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-navy transition-colors group-hover:text-gold">
            {project.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-pill bg-cream px-3 py-1 text-xs text-navy/70"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
            Voir le cas
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
