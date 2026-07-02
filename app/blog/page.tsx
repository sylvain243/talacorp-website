import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero, { PageCTA } from "@/components/PageHero";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "Actualités, conseils et insights sur la croissance digitale en RDC.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog & actualités"
        subtitle="Conseils, tendances et insights pour faire grandir votre entreprise."
      />

      <section className="section-padding bg-white">
        <div className="container-main grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <FadeUp key={post.slug} delay={index * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-card border border-navy/10 bg-white transition-all hover:shadow-md">
                <div
                  className="flex h-40 items-end p-4"
                  style={{ backgroundColor: post.coverColor }}
                >
                  <span className="rounded-pill bg-white/20 px-3 py-1 text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-navy/50">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-navy group-hover:text-gold">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-navy/70">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold"
                  >
                    Lire l&apos;article
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <PageCTA />
    </>
  );
}
