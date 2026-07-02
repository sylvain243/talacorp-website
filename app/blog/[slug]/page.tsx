import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { PageCTA } from "@/components/PageHero";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Article introuvable" };
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="section-padding bg-navy text-center">
        <div className="container-main max-w-3xl">
          <FadeUp>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-gold"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Retour au blog
            </Link>
            <span className="section-eyebrow">{post.category}</span>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-white/60">
              {post.date} · {post.readTime} de lecture
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main max-w-3xl">
          <FadeUp>
            <p className="text-lg leading-relaxed text-navy/80">{post.excerpt}</p>
            <div className="mt-8 space-y-4 text-navy/70">
              <p>
                Cet article sera bientôt disponible en intégralité. En attendant,
                contactez notre équipe pour en discuter lors d&apos;une consultation
                gratuite.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
