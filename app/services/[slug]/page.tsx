import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Package } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import ServiceHero from "@/components/ServiceHero";
import ConsultationButton from "@/components/ConsultationButton";
import ServiceEnhancedSections from "@/components/service/ServiceEnhancedSections";
import { PageCTA } from "@/components/PageHero";
import { getServiceBySlug, services } from "@/data/content";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service introuvable" };
  return { title: service.title, description: service.description };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 2);

  return (
    <>
      <ServiceHero
        title={service.title}
        tagline={service.tagline}
        description={service.description}
        icon={service.icon}
        heroImage={service.heroImage}
        subBrand={service.subBrand}
      />

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-navy/80">{service.intro}</p>
          </FadeUp>
        </div>
      </section>

      <ServiceEnhancedSections service={service} />

      <section className="section-padding bg-cream">
        <div className="container-main grid gap-12 lg:grid-cols-2">
          <FadeUp>
            <h2 className="text-2xl font-semibold text-navy">Ce que nous faisons</h2>
            <ul className="mt-6 space-y-4">
              {service.whatWeDo.map((item) => (
                <li key={item} className="flex gap-3 text-navy/80">
                  <CheckCircle className="mt-0.5 shrink-0 text-gold" size={20} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-2xl font-semibold text-navy">Bénéfices clés</h2>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((item) => (
                <li key={item} className="flex gap-3 text-navy/80">
                  <CheckCircle className="mt-0.5 shrink-0 text-gold" size={20} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-main">
          <FadeUp className="text-center">
            <p className="section-eyebrow">
              {service.methodName ? service.methodName : "Notre méthode"}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              {service.methodTagline ?? "Un process clair, de A à Z"}
            </h2>
          </FadeUp>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <FadeUp key={step.step} delay={index * 0.08}>
                <div className="rounded-card border border-white/10 bg-white/5 p-6">
                  <span className="text-2xl font-semibold text-gold">{step.step}</span>
                  <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeUp className="text-center">
            <Package className="mx-auto text-gold" size={32} aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-semibold text-navy">Livrables concrets</h2>
            <p className="mx-auto mt-3 max-w-xl text-navy/70">
              À la fin de notre collaboration, vous repartez avec des assets utilisables immédiatement.
            </p>
          </FadeUp>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.deliverables.map((item, index) => (
              <FadeUp key={item} delay={index * 0.06}>
                <div className="rounded-card border border-navy/10 bg-cream p-5 text-sm font-medium text-navy/80">
                  {item}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-main">
          <FadeUp className="mx-auto max-w-2xl rounded-card bg-white p-8 text-center shadow-sm sm:p-10">
            <h2 className="text-2xl font-semibold text-navy">Pour qui ?</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/70">{service.forWho}</p>
            {service.consultationCta && (
              <div className="mt-8">
                <ConsultationButton label={service.consultationCta} />
              </div>
            )}
          </FadeUp>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-main">
            <FadeUp className="mb-10 text-center">
              <p className="section-eyebrow">Autres expertises</p>
              <h2 className="section-title mt-3">Découvrez aussi</h2>
            </FadeUp>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((item, index) => (
                <FadeUp key={item.slug} delay={index * 0.1}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group flex overflow-hidden rounded-card border border-navy/10 bg-cream transition-all hover:shadow-md"
                  >
                    <div className="relative hidden w-36 shrink-0 sm:block">
                      <Image
                        src={item.heroImage}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="144px"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-sm font-semibold text-gold">{item.tagline}</p>
                      <h3 className="mt-1 text-lg font-semibold text-navy">{item.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-navy/70">{item.cardDescription}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:gap-2">
                        En savoir plus
                        <ArrowRight size={16} aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCTA />
    </>
  );
}
