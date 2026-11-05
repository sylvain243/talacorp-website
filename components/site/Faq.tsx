import { Reveal } from "@/components/motion/Motion";

export default function Faq({ items, tinted = false }: { items: { question: string; answer: string }[]; tinted?: boolean }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="faq" className={tinted ? "bg-cream" : "bg-white"}>
      <div className="mx-auto flex max-w-[860px] flex-col gap-4 px-4 py-20 sm:px-6">
        <Reveal>
          <h2 id="faq" className="mb-2 font-display text-4xl font-extrabold">
            Questions fréquentes
          </h2>
        </Reveal>
        {items.map((f, i) => (
          <Reveal key={f.question} delay={i * 0.06}>
          <details className="rounded-[10px] border border-line bg-white px-[22px] py-[18px]">
            <summary className="cursor-pointer text-[17px] font-bold">{f.question}</summary>
            <p className="mt-3 text-base leading-relaxed text-ink">{f.answer}</p>
          </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
