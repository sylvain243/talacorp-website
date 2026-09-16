"use client";

import { useState } from "react";
import { Calendar, Clock, ExternalLink, Mail, MessageCircle } from "lucide-react";
import {
  bookingSection,
  getBookingEventUrl,
  getBookingUrl,
  getWhatsAppUrl,
  siteConfig,
} from "@/data/content";

interface BookingCalendarProps {
  className?: string;
}

function buildEmbedUrl(baseUrl: string) {
  const clean = baseUrl.replace(/\/$/, "");
  if (clean.includes("calendly.com")) return `${clean}?hide_gdpr_banner=1`;
  if (clean.includes("cal.com") || clean.includes("cal.eu")) return `${clean}?embed=true&layout=month_view`;
  return clean;
}

export default function BookingCalendar({ className = "" }: BookingCalendarProps) {
  const defaultEvent = bookingSection.meetingTypes[0]?.slug ?? "";
  const [activeEvent, setActiveEvent] = useState(defaultEvent);

  const baseUrl = getBookingUrl();
  const isPlaceholder =
    !baseUrl ||
    baseUrl.includes("cal.com/talacorp/consultation") ||
    baseUrl.includes("your-") ||
    baseUrl.includes("example.com");

  if (isPlaceholder) {
    return (
      <div className={`rounded-card bg-white p-8 text-center shadow-sm sm:p-12 ${className}`}>
        <Calendar className="mx-auto text-gold" size={48} aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-navy">
          Réservez votre consultation gratuite
        </h3>
        <p className="mx-auto mt-3 max-w-md text-navy/70">
          Le calendrier en ligne sera bientôt disponible. En attendant, contactez-nous
          directement. Nous vous répondons sous 24 h.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={getWhatsAppUrl("Bonjour, je souhaite réserver une consultation gratuite.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp
          </a>
          <a href={`mailto:${siteConfig.email}`} className="btn-navy inline-flex">
            <Mail size={18} aria-hidden="true" />
            {siteConfig.email}
          </a>
        </div>
      </div>
    );
  }

  const activeMeeting =
    bookingSection.meetingTypes.find((m) => m.slug === activeEvent) ??
    bookingSection.meetingTypes[0];
  const eventUrl = getBookingEventUrl(activeEvent);
  const embedUrl = buildEmbedUrl(eventUrl);

  return (
    <div
      className={`overflow-hidden rounded-card border border-white/10 bg-white shadow-xl ${className}`}
    >
      <div className="grid lg:grid-cols-[minmax(280px,340px)_1fr]">
        <div className="border-b border-navy/10 bg-cream p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
            Consultation gratuite
          </p>
          <h3 className="mt-2 text-xl font-semibold text-navy">Choisissez votre créneau</h3>
          <p className="mt-3 text-sm leading-relaxed text-navy/70">
            Sans engagement. Nous analysons votre situation et vous proposons des pistes concrètes
            adaptées au marché congolais.
          </p>

          <div className="mt-6 space-y-3">
            {bookingSection.meetingTypes.map((meeting) => {
              const selected = meeting.slug === activeEvent;
              return (
                <button
                  key={meeting.slug}
                  type="button"
                  onClick={() => setActiveEvent(meeting.slug)}
                  className={`w-full rounded-xl border p-4 text-left transition-all ${
                    selected
                      ? "border-gold bg-white shadow-sm"
                      : "border-navy/10 bg-white/60 hover:border-gold/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-navy">{meeting.label}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-navy/5 px-2.5 py-1 text-xs font-medium text-navy/70">
                      <Clock size={12} aria-hidden="true" />
                      {meeting.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-navy/60">{meeting.description}</p>
                </button>
              );
            })}
          </div>

          <a
            href={eventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
          >
            Ouvrir le calendrier dans un nouvel onglet
            <ExternalLink size={14} aria-hidden="true" />
          </a>

          {activeMeeting && (
            <p className="mt-4 text-xs text-navy/45">
              Sélection : {activeMeeting.label} · {activeMeeting.duration}
            </p>
          )}
        </div>

        <div className="min-h-[520px] bg-white lg:min-h-[640px]">
          <iframe
            key={embedUrl}
            src={embedUrl}
            title={`Réserver : ${activeMeeting?.label ?? "consultation"}`}
            className="h-[520px] w-full border-0 lg:h-[640px]"
            loading="lazy"
            allow="payment"
          />
        </div>
      </div>
    </div>
  );
}
