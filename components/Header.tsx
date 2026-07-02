"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ConsultationButton from "./ConsultationButton";
import { navLinks } from "@/data/content";

export default function Header({ pinned = false }: { pinned?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={pinned ? "" : "px-4 pb-3 sm:px-6"}>
      <div className="container-main">
        <div
          className={`flex items-center justify-between rounded-pill border bg-white px-4 py-2.5 sm:px-6 ${
            pinned
              ? "border-navy/10 shadow-xl"
              : "border-white/10 shadow-lg"
          }`}
        >
          <Logo variant="color" />

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-navy/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ConsultationButton className="!px-5 !py-2.5 text-sm" />
          </nav>

          <button
            type="button"
            className="rounded-lg p-2 text-navy lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav
            className="mt-2 rounded-card border border-white/10 bg-white px-4 py-4 shadow-lg lg:hidden"
            aria-label="Navigation mobile"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-3 py-2.5 font-medium ${
                      pathname === link.href ? "bg-cream text-gold" : "text-navy"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <ConsultationButton className="w-full" />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
