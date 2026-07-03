import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import WebsitePreview from "@/components/WebsitePreview";
import {
  getRealisationCoverImage,
  getWebsiteDomain,
  type Realisation,
} from "@/data/realisations";

interface CaseStudyCardProps {
  project: Realisation;
  index?: number;
  showWebsitePreview?: boolean;
}

export default function CaseStudyCard({ project, showWebsitePreview = false }: CaseStudyCardProps) {
  const coverImage = getRealisationCoverImage(project);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-navy/10 bg-white transition-all hover:shadow-lg">
      <Link href={`/realisations/${project.slug}`} className="group block flex-1">
        <div
          className="relative flex h-48 items-end overflow-hidden p-6 transition-transform group-hover:scale-[1.02]"
          style={{ backgroundColor: project.coverColor }}
        >
          <Image
            src={coverImage}
            alt={`${project.title} — ${project.client}`}
            fill
            className="object-cover object-center opacity-90 transition-opacity group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
          <span className="relative rounded-pill bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.resultHighlight}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-navy transition-colors group-hover:text-gold">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-navy/60">{project.client}</p>
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

      {showWebsitePreview && project.website && (
        <div className="border-t border-navy/10 px-4 pb-4 pt-3">
          <WebsitePreview
            url={project.website}
            title={project.client}
            fallbackImage={coverImage}
            comingSoon={project.websiteComingSoon ?? false}
            compact
          />
        </div>
      )}

      {!showWebsitePreview && project.website && (
        <div className="border-t border-navy/10 px-6 py-3">
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-navy/60 hover:text-gold"
          >
            {getWebsiteDomain(project.website)}
            <ExternalLink size={11} aria-hidden="true" />
          </a>
        </div>
      )}
    </article>
  );
}
