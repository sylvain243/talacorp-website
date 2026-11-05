"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "./Logo";
import { BOUTIQUE_HREF, getConsultationHref, navLinks } from "@/data/content";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-main flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Logo variant="color" />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex items-center gap-1.5 border-b-2 py-1.5 text-base font-semibold text-navy transition-colors hover:border-gold ${
                  active ? "border-gold" : "border-transparent"
                }`}
              >
                {link.href === BOUTIQUE_HREF && <ShoppingBag size={17} aria-hidden="true" />}
                {link.label}
              </Link>
            );
          })}
          <Link href={getConsultationHref()} className="btn-primary !min-h-[44px] !px-5 !py-3">
            Consultation gratuite
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" className="border-t border-line bg-white px-4 pb-5 pt-2 lg:hidden" aria-label="Navigation mobile">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-3 text-base font-semibold ${
                    isActive(pathname, link.href) ? "bg-cream text-navy" : "text-navy"
                  }`}
                >
                  {link.href === BOUTIQUE_HREF && <ShoppingBag size={18} aria-hidden="true" />}
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link href={getConsultationHref()} className="btn-primary w-full">
                Consultation gratuite
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
