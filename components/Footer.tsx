import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { BOUTIQUE_HREF, getWhatsAppUrl, siteConfig } from "@/data/content";
import { poles } from "@/data/poles";

const companyLinks = [
  { label: "Boutique goodies", href: BOUTIQUE_HREF },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-[#D5DDE7]">
      <div className="container-main px-4 pb-7 pt-14 sm:px-6">
        <div className="flex flex-wrap justify-between gap-9">
          <div className="flex min-w-[240px] flex-[1_1_260px] flex-col gap-3.5">
            <Logo variant="light" />
            <p className="text-[15px] leading-relaxed">{siteConfig.tagline}.</p>
            <div className="flex gap-2.5">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold hover:bg-navy-light">
                <MessageCircle size={20} />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold hover:bg-navy-light">
                <Facebook size={20} />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold hover:bg-navy-light">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-[1_1_200px] flex-col gap-2 text-[15px]">
            <p className="mb-1 font-bold text-gold">Nos pôles</p>
            {poles.map((p) => (
              <Link key={p.slug} href={`/services/${p.slug}`} className="py-0.5 hover:text-gold">
                {p.num} · {p.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-[1_1_160px] flex-col gap-2 text-[15px]">
            <p className="mb-1 font-bold text-gold">TALACORP</p>
            {companyLinks.map((l) => (
              <Link key={l.href} href={l.href} className="py-0.5 hover:text-gold">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-[1_1_260px] flex-col gap-2 text-[15px]">
            <p className="mb-1 font-bold text-gold">Nous joindre</p>
            <span>{siteConfig.streetAddress}, {siteConfig.addressLocality}</span>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-gold">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-[#2B3F57] pt-5 text-[13px] text-[#A9B6C6]">
          <span>{siteConfig.legalName} · RCCM CD/KNG/RCCM/24-B-01851 · ID NAT 01-F4200-N52261K</span>
          <span className="flex flex-wrap gap-x-2">
            © 2026 TALACORP ·
            <Link href="/mentions-legales" className="hover:text-gold">Mentions légales</Link>·
            <Link href="/politique-de-confidentialite" className="hover:text-gold">Politique de confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
