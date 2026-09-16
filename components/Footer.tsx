import Link from "next/link";
import { Facebook, Instagram, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { getWhatsAppUrl, navLinks, siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="section-padding container-main">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.tagline}. Stratégie, marketing, transformation digitale et branding à
              Kinshasa.
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-white/70">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              {siteConfig.address}
            </p>
          </div>

          <div>
            <p className="font-semibold text-gold">Entreprise</p>
            <ul className="mt-4 space-y-2">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gold">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; 2026 {siteConfig.legalName} · {siteConfig.location}
          </p>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Link href="/mentions-legales" className="hover:text-gold">
              Mentions légales
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/politique-de-confidentialite" className="hover:text-gold">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
