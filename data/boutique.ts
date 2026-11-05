export type BoutiqueCategory = "textile" | "bureau" | "objets" | "event";

export interface Goodie {
  id: string;
  cat: BoutiqueCategory;
  name: string;
  desc: string;
  /** Photo produit : déposer le fichier dans public/images/boutique/ et renseigner le chemin */
  image?: string;
}

export const boutiqueCategories: { id: BoutiqueCategory | "tous"; label: string }[] = [
  { id: "tous", label: "Tous" },
  { id: "textile", label: "Textile" },
  { id: "bureau", label: "Bureau" },
  { id: "objets", label: "Objets" },
  { id: "event", label: "Événementiel" },
];

export const categoryLabel: Record<BoutiqueCategory, string> = {
  textile: "Textile",
  bureau: "Bureau",
  objets: "Objets",
  event: "Événementiel",
};

export const goodies: Goodie[] = [
  { id: "tshirt", cat: "textile", name: "T-shirt personnalisé", desc: "Coton, toutes tailles, impression ou sérigraphie." },
  { id: "polo", cat: "textile", name: "Polo brodé", desc: "Pour vos équipes commerciales et techniques." },
  { id: "casquette", cat: "textile", name: "Casquette", desc: "Brodée ou imprimée, plusieurs coloris." },
  { id: "chasuble", cat: "textile", name: "Gilet et chasuble", desc: "Pour le terrain et les activations." },
  { id: "agenda", cat: "bureau", name: "Agenda", desc: "Couverture marquée, pages personnalisables." },
  { id: "carnet", cat: "bureau", name: "Carnet de notes", desc: "Format A5 ou A6, avec élastique." },
  { id: "stylo", cat: "bureau", name: "Stylo", desc: "Plastique ou métal, gravé ou imprimé." },
  { id: "usb", cat: "bureau", name: "Clé USB", desc: "Capacité au choix, logo gravé." },
  { id: "mug", cat: "objets", name: "Mug", desc: "Céramique, impression couleur." },
  { id: "gourde", cat: "objets", name: "Gourde", desc: "Inox ou plastique, gravure laser." },
  { id: "tote", cat: "objets", name: "Tote bag", desc: "Toile coton, impression une ou deux faces." },
  { id: "porte-cles", cat: "objets", name: "Porte-clés", desc: "Métal, cuir ou acrylique." },
  { id: "rollup", cat: "event", name: "Roll-up", desc: "Structure et visuel, livré avec sa housse." },
  { id: "badge", cat: "event", name: "Badge et cordon", desc: "Pour vos séminaires et conférences." },
  { id: "stand", cat: "event", name: "Stand parapluie", desc: "Montage rapide pour salons et foires." },
  { id: "parapluie", cat: "event", name: "Parapluie", desc: "Grand format, toile imprimée." },
];
