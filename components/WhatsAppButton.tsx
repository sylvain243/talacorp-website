"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/content";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label="Contacter Talacorp sur WhatsApp"
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}
