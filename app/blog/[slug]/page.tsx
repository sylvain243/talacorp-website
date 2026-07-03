import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BlogArticleBody from "@/components/blog/BlogArticleBody";
import BlogArticleJsonLd from "@/components/blog/BlogArticleJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FadeUp from "@/components/FadeUp";
import { PageCTA } from "@/components/PageHero";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { buildPageMetadata } from "@/lib/seo";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Article introuvable" };
  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    openGraphType: "article",
    publishedTime: post.dateISO,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <BlogArticleJsonLd post={post} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

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
            <BlogArticleBody post={post} />
          </FadeUp>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
