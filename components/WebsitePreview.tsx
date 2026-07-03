"use client";

import { ExternalLink, Globe, RefreshCw } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { getWebsiteDomain } from "@/data/realisations";

interface WebsitePreviewProps {
  url: string;
  title: string;
  fallbackImage?: string;
  comingSoon?: boolean;
  compact?: boolean;
}

export default function WebsitePreview({
  url,
  title,
  fallbackImage,
  comingSoon = false,
  compact = false,
}: WebsitePreviewProps) {
  const domain = getWebsiteDomain(url);
  const [iframeFailed, setIframeFailed] = useState(comingSoon);
  const [isLoading, setIsLoading] = useState(!comingSoon);

  const handleIframeError = useCallback(() => {
    setIframeFailed(true);
    setIsLoading(false);
  }, []);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (comingSoon) {
      setIframeFailed(true);
      setIsLoading(false);
      return;
    }

    setIframeFailed(false);
    setIsLoading(true);

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => window.clearTimeout(timer);
  }, [comingSoon, url]);

  const frameHeight = compact ? "h-36" : "h-64 sm:h-80";

  return (
    <div className="overflow-hidden rounded-card border border-navy/10 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-navy/10 bg-cream px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-navy/10 bg-white px-3 py-1.5 text-xs text-navy/60">
          <Globe size={12} className="shrink-0 text-navy/40" aria-hidden="true" />
          <span className="truncate">{domain}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 rounded-pill bg-gold px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-gold-dark"
        >
          Visiter
          <ExternalLink size={12} aria-hidden="true" />
        </a>
      </div>

      <div className={`relative ${frameHeight} overflow-hidden bg-cream`}>
        {!iframeFailed && !comingSoon ? (
          <>
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-cream">
                <RefreshCw size={24} className="animate-spin text-navy/30" aria-hidden="true" />
                <span className="sr-only">Chargement de l&apos;aperçu…</span>
              </div>
            )}
            <iframe
              src={url}
              title={`Aperçu du site ${title}`}
              className="pointer-events-none h-[200%] w-[200%] origin-top-left scale-50 border-0"
              onError={handleIframeError}
              onLoad={handleIframeLoad}
              sandbox="allow-scripts allow-same-origin allow-forms"
              loading="lazy"
            />
          </>
        ) : (
          <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
            {fallbackImage && (
              <Image
                src={fallbackImage}
                alt={`${title} — aperçu du site web`}
                fill
                className="object-cover opacity-25"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            )}
            <div className="relative z-10 max-w-sm">
              <Globe size={32} className="mx-auto text-navy/30" aria-hidden="true" />
              <p className="mt-3 text-sm font-medium text-navy">
                {comingSoon
                  ? "Site en cours de réactivation"
                  : "Aperçu intégré indisponible"}
              </p>
              <p className="mt-1 text-xs text-navy/60">
                {comingSoon
                  ? "Le site sera bientôt de nouveau en ligne. En attendant, consultez le lien ci-dessus."
                  : "Le site est en ligne. Ouvrez-le dans un nouvel onglet pour le consulter."}
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline"
              >
                Ouvrir {domain}
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
