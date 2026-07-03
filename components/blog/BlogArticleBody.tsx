import ConsultationButton from "@/components/ConsultationButton";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import type { BlogPost } from "@/data/blog";

interface BlogArticleBodyProps {
  post: BlogPost;
}

export default function BlogArticleBody({ post }: BlogArticleBodyProps) {
  return (
    <article className="prose-talacorp space-y-10">
      <p className="text-lg leading-relaxed text-navy/80">{post.intro}</p>

      {post.sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-xl font-semibold text-navy sm:text-2xl">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 leading-relaxed text-navy/75">
              {paragraph}
            </p>
          ))}
          {section.list && section.list.length > 0 && (
            <ul className="mt-4 space-y-2">
              {section.list.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 leading-relaxed text-navy/75 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-gold before:content-['']"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="rounded-card bg-cream p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-navy">Conclusion</h2>
        <p className="mt-4 leading-relaxed text-navy/75">{post.conclusion}</p>
      </section>

      <aside className="rounded-card border border-gold/30 bg-gold/10 p-6 sm:p-8">
        <p className="font-medium leading-relaxed text-navy">{post.cta}</p>
        <div className="mt-6">
          <ConsultationButton />
        </div>
      </aside>

      <BlogRelatedLinks post={post} />
    </article>
  );
}
