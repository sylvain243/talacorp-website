import Link from "next/link";
import { getConsultationHref } from "@/data/content";
import { generalOffer } from "@/data/poles";

export default function CtaBand({ withOffer = false }: { withOffer?: boolean }) {
  return (
    <section aria-labelledby="cta-titre" className="bg-white">
      <div className="container-main px-4 py-[72px] sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-2xl border-l-8 border-gold bg-navy p-8 sm:p-12">
          <div className="flex flex-[1_1_420px] flex-col gap-2.5">
            <h2 id="cta-titre" className="font-display text-3xl font-extrabold leading-tight text-white sm:text-[38px]">
              Parlons de votre projet
            </h2>
            <p className="text-[17px] leading-relaxed text-[#D5DDE7]">
              Une consultation gratuite de 15 ou 30 minutes, en visio ou dans nos bureaux.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={getConsultationHref()} className="btn-primary">
              Réserver un créneau
            </Link>
            {withOffer && (
              <a href={`/offres/${generalOffer.file}`} download className="btn-outline-light">
                Télécharger notre offre (PDF)
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
