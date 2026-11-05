import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function TopBar() {
  return (
    <div className="bg-navy-dark text-sm text-[#D5DDE7]">
      <div className="container-main flex flex-wrap items-center justify-between gap-x-7 gap-y-1.5 px-4 py-2.5 sm:px-6">
        <span className="hidden items-center gap-2 md:inline-flex">
          <MapPin size={14} aria-hidden="true" />
          {siteConfig.streetAddress}, {siteConfig.addressLocality}
        </span>
        <span className="flex flex-wrap gap-x-6 gap-y-1.5">
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
        </span>
      </div>
    </div>
  );
}
