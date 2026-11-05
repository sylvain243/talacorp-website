interface Step {
  title: string;
  text: string;
}

export default function MethodSteps({ title, steps, dark = false }: { title: string; steps: Step[]; dark?: boolean }) {
  return (
    <section aria-labelledby="methode" className={dark ? "bg-navy text-white" : "bg-white"}>
      <div className="container-main flex flex-col gap-10 px-4 py-20 sm:px-6">
        <h2 id="methode" className={`section-title ${dark ? "!text-white" : ""}`}>{title}</h2>
        <ol className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(190px,1fr))]">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-2 border-t-[3px] border-gold pt-[18px]">
              <span className={`font-display text-[34px] font-extrabold ${dark ? "text-gold" : "text-navy"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[19px] font-bold">{s.title}</span>
              <span className={`text-[15px] leading-relaxed ${dark ? "text-[#D5DDE7]" : "text-ink"}`}>{s.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
