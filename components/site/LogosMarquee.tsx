/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/motion/Motion";
import { clientLogos } from "@/data/poles";

export default function LogosMarquee({ title = "Ils nous font confiance" }: { title?: string }) {
  return (
    <section aria-labelledby="confiance" className="bg-white">
      <div className="container-main flex flex-col gap-7 px-4 py-14 sm:px-6">
        <Reveal>
          <h2 id="confiance" className="text-center font-display text-[28px] font-extrabold">
            {title}
          </h2>
        </Reveal>
        <div className="tc-marquee w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="tc-track flex w-max items-center gap-14">
            {clientLogos.map((logo) => (
              <img key={logo.src} src={logo.src} alt={logo.alt} className="h-16 w-40 flex-none object-contain grayscale-[30%] transition duration-300 hover:scale-110 hover:grayscale-0" loading="lazy" />
            ))}
            {clientLogos.map((logo) => (
              <img key={`${logo.src}-bis`} src={logo.src} alt="" aria-hidden="true" className="h-16 w-40 flex-none object-contain" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
