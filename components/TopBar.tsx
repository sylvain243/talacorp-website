import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function TopBar() {
  return (
    <div className="bg-navy py-2.5 text-sm text-white/80">
      <div className="container-main flex flex-wrap items-center justify-center gap-4 px-4 sm:justify-start sm:px-6 lg:px-8">
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 transition-colors hover:text-gold"
        >
          <Phone size={14} aria-hidden="true" />
          {siteConfig.phone}
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 transition-colors hover:text-gold"
        >
          <Mail size={14} aria-hidden="true" />
          {siteConfig.email}
        </a>
      </div>
    </div>
  );
}
