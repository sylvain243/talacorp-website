import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/data/content";

export default function ServicesPreview() {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-main">
        <FadeUp className="mb-12 text-center">
          <p className="section-eyebrow">NOS SERVICES</p>
          <h2 className="section-title mt-3">
            Des expertises complémentaires pour votre croissance
          </h2>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeUp key={service.slug} delay={index * 0.1}>
              <article className="group flex h-full flex-col rounded-card bg-navy p-6 transition-all hover:shadow-lg sm:p-7">
                <ServiceIcon icon={service.icon} variant="gold" />
                <p className="mt-4 text-sm font-semibold text-gold">{service.tagline}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{service.shortTitle}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
                  {service.cardDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-all group-hover:gap-2"
                >
                  En savoir plus
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
