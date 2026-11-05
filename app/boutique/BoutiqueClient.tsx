"use client";

import { Reveal } from "@/components/motion/Motion";

import Image from "next/image";
import { useMemo, useState } from "react";
import { BookOpen, Coffee, Mail, MessageCircle, Presentation, Shirt, X } from "lucide-react";
import { boutiqueCategories, categoryLabel, goodies, type BoutiqueCategory } from "@/data/boutique";
import { getWhatsAppUrl, siteConfig } from "@/data/content";

const icons: Record<BoutiqueCategory, typeof Shirt> = {
  textile: Shirt,
  bureau: BookOpen,
  objets: Coffee,
  event: Presentation,
};

const fieldClass =
  "w-full rounded-lg border-[1.5px] border-[#C9D2DC] bg-white px-3.5 py-3 text-base font-normal text-navy focus:border-navy";

export default function BoutiqueClient() {
  const [cat, setCat] = useState<BoutiqueCategory | "tous">("tous");
  const [picked, setPicked] = useState<string[]>([]);
  const [form, setForm] = useState({ nom: "", entreprise: "", tel: "", message: "" });

  const shown = useMemo(() => goodies.filter((g) => cat === "tous" || g.cat === cat), [cat]);
  const cart = goodies.filter((g) => picked.includes(g.id));

  const toggle = (id: string) =>
    setPicked((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  const requestText = [
    "Bonjour TALACORP, je souhaite un devis pour des goodies personnalisés.",
    cart.length ? `Articles : ${cart.map((g) => g.name).join(", ")}.` : "",
    form.message ? `Précisions : ${form.message}` : "",
    form.nom ? `Nom : ${form.nom}` : "",
    form.entreprise ? `Entreprise : ${form.entreprise}` : "",
    form.tel ? `Téléphone : ${form.tel}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const mailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Demande de devis goodies")}&body=${encodeURIComponent(requestText)}`;

  return (
    <section aria-labelledby="catalogue" className="bg-white">
      <Reveal className="container-main flex flex-wrap items-start gap-8 px-4 py-16 sm:px-6">
        <div className="flex min-w-0 flex-[999_1_640px] flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 id="catalogue" className="font-display text-[34px] font-extrabold">
              Catalogue
            </h2>
            <span className="text-[15px] text-[#5A6677]" aria-live="polite">
              {shown.length} {shown.length > 1 ? "articles" : "article"}
            </span>
          </div>

          <div role="group" aria-label="Filtrer par catégorie" className="flex flex-wrap gap-2.5">
            {boutiqueCategories.map((c) => {
              const on = c.id === cat;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setCat(c.id)}
                  className={`min-h-[44px] rounded-full border-[1.5px] px-[18px] py-2.5 text-[15px] font-semibold transition-colors ${
                    on ? "border-navy bg-navy text-white" : "border-[#C9D2DC] bg-white text-navy hover:border-navy"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shown.map((g) => {
              const Icon = icons[g.cat];
              const inCart = picked.includes(g.id);
              return (
                <article key={g.id} className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
                  {g.image ? (
                    <span className="relative block h-40">
                      <Image src={g.image} alt={g.name} fill sizes="300px" className="object-cover" />
                    </span>
                  ) : (
                    <span className="flex h-40 items-center justify-center bg-cream text-navy">
                      <Icon size={56} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                  )}
                  <div className="flex flex-1 flex-col gap-1.5 p-4">
                    <span className="text-xs font-bold uppercase tracking-[0.06em] text-gold-dark">{categoryLabel[g.cat]}</span>
                    <h3 className="font-sans text-[17px] font-bold">{g.name}</h3>
                    <p className="text-sm leading-relaxed text-ink">{g.desc}</p>
                    <span className="pt-1 text-sm font-semibold">Prix sur devis</span>
                    <button
                      type="button"
                      onClick={() => toggle(g.id)}
                      aria-pressed={inCart}
                      className={`mt-auto min-h-[44px] rounded-lg border-[1.5px] px-3.5 py-3 text-[15px] font-bold transition-colors ${
                        inCart ? "border-gold bg-gold text-navy" : "border-navy bg-white text-navy hover:bg-cream"
                      }`}
                    >
                      {inCart ? "Dans ma demande · retirer" : "Ajouter à ma demande"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <aside aria-labelledby="demande" className="flex min-w-0 flex-[1_1_320px] flex-col gap-[18px] rounded-2xl bg-cream p-6 lg:sticky lg:top-24">
          <div className="flex items-center justify-between gap-3">
            <h2 id="demande" className="font-display text-2xl font-extrabold">
              Ma demande
            </h2>
            <span className="flex h-8 min-w-[32px] items-center justify-center rounded-full bg-navy px-2.5 font-bold text-white" aria-label={`${cart.length} article(s) sélectionné(s)`}>
              {cart.length}
            </span>
          </div>

          {cart.length === 0 ? (
            <p className="text-[15px] leading-relaxed text-ink">
              Ajoutez des articles du catalogue pour composer votre demande de devis.
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {cart.map((g) => (
                <li key={g.id} className="flex items-center justify-between gap-2.5 rounded-lg bg-white py-1.5 pl-3 pr-1.5 text-[15px]">
                  <span>{g.name}</span>
                  <button type="button" onClick={() => toggle(g.id)} aria-label={`Retirer ${g.name}`} className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-cream">
                    <X size={16} aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col gap-3">
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              Nom et prénom
              <input className={fieldClass} type="text" autoComplete="name" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              Entreprise
              <input className={fieldClass} type="text" autoComplete="organization" value={form.entreprise} onChange={(e) => setForm({ ...form, entreprise: e.target.value })} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              Téléphone ou WhatsApp
              <input className={fieldClass} type="tel" autoComplete="tel" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              Quantités, délai, précisions
              <textarea className={fieldClass} rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </label>
            <a href={getWhatsAppUrl(requestText)} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={18} aria-hidden="true" />
              Envoyer ma demande sur WhatsApp
            </a>
            <a href={mailHref} className="inline-flex min-h-[44px] items-center justify-center gap-2 text-[15px] font-bold underline-offset-4 hover:underline">
              <Mail size={16} aria-hidden="true" />
              ou par e-mail
            </a>
            <span className="text-[13px] text-[#5A6677]">Réponse avec devis détaillé, sans engagement.</span>
          </div>
        </aside>
      </Reveal>
    </section>
  );
}
