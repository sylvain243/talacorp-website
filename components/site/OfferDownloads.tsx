import { FileDown } from "lucide-react";
import type { PoleOffer } from "@/data/poles";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";

export default function OfferDownloads({ offers }: { offers: PoleOffer[] }) {
  if (!offers.length) return null;
  return (
    <section aria-labelledby="telecharger" className="bg-white">
      <div className="container-main flex flex-col gap-4 px-4 py-16 sm:px-6">
        <Reveal>
          <h2 id="telecharger" className="mb-1.5 font-display text-[32px] font-extrabold">
            Téléchargez notre offre
          </h2>
        </Reveal>
        <Stagger className="flex flex-col gap-4">
        {offers.map((o) => (
          <StaggerItem key={o.file}>
          <div className="group flex flex-wrap items-center justify-between gap-4 rounded-xl bg-cream px-6 py-[22px]">
            <div className="flex min-w-0 flex-[1_1_320px] items-center gap-4">
              <FileDown size={40} strokeWidth={1.6} className="flex-none text-navy transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold">{o.title}</span>
                <span className="text-sm text-[#5A6677]">PDF · {o.size}</span>
              </div>
            </div>
            <a href={`/offres/${o.file}`} download className="btn-navy">
              Télécharger
              <span className="sr-only"> {o.title}</span>
            </a>
          </div>
          </StaggerItem>
        ))}
        </Stagger>
      </div>
    </section>
  );
}
