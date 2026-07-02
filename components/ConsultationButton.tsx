import Link from "next/link";
import { getConsultationHref, siteConfig } from "@/data/content";

interface ConsultationButtonProps {
  className?: string;
  variant?: "primary" | "outline-light";
  label?: string;
}

/** Bouton CTA unique — mène vers le calendrier de consultation */
export default function ConsultationButton({
  className = "",
  variant = "primary",
  label,
}: ConsultationButtonProps) {
  const baseClass = variant === "outline-light" ? "btn-outline-light" : "btn-primary";

  return (
    <Link href={getConsultationHref()} className={`${baseClass} ${className}`}>
      {label ?? siteConfig.ctaLabel}
    </Link>
  );
}
