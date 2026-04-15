import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Clock, Tag, ChevronRight, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // Convert basic markdown-like content to HTML paragraphs
  const renderContent = (content: string) => {
    return content
      .trim()
      .split("\n\n")
      .map((block, i) => {
        if (block.startsWith("**") && block.endsWith("**") && !block.includes("\n")) {
          return (
            <h3 key={i} className="font-serif text-xl font-bold text-gray-900 mt-8 mb-3">
              {block.replace(/\*\*/g, "")}
            </h3>
          );
        }
        if (block.startsWith("- ") || block.startsWith("* ")) {
          const items = block.split("\n").filter((l) => l.trim());
          return (
            <ul key={i} className="list-disc list-inside space-y-2 text-gray-600 text-base leading-relaxed my-4">
              {items.map((item, j) => (
                <li key={j}>{item.replace(/^[-*]\s/, "").replace(/\*\*/g, "")}</li>
              ))}
            </ul>
          );
        }
        // Bold inline
        const parts = block.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
          part.startsWith("**") ? (
            <strong key={j} className="font-semibold text-gray-900">
              {part.replace(/\*\*/g, "")}
            </strong>
          ) : (
            part
          )
        );
        return (
          <p key={i} className="text-gray-600 text-base leading-relaxed my-4">
            {parts}
          </p>
        );
      });
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Dental Brass Tacks",
      url: "https://dentalbrassttacks.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-950 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-teal-300 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="flex items-center gap-1.5 bg-teal-500/20 border border-teal-500/30 text-teal-200 text-xs px-3 py-1.5 rounded-full font-medium">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-teal-300 text-xs">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="text-teal-300 text-xs">{post.date}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Content */}
            <article className="lg:col-span-2">
              <p className="text-gray-500 text-lg leading-relaxed italic mb-8 border-l-4 border-teal-500 pl-5">
                {post.excerpt}
              </p>
              <div className="prose-custom">{renderContent(post.content)}</div>

              {/* Back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 mt-12 text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA */}
              <div className="bg-teal-600 rounded-2xl p-6 text-white">
                <h3 className="font-serif text-xl font-bold mb-3">
                  Got a dental question?
                </h3>
                <p className="text-teal-100 text-sm mb-5">
                  Our specialists are here to help. Book a consultation today.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-white text-teal-700 hover:bg-teal-50 py-3 rounded-xl font-semibold text-sm transition-all"
                >
                  Book Appointment
                </Link>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="block group"
                      >
                        <span className="text-xs text-teal-600 font-medium">{r.category}</span>
                        <p className="text-sm font-medium text-gray-800 group-hover:text-teal-600 transition-colors mt-0.5 leading-snug">
                          {r.title}
                        </p>
                        <span className="text-xs text-gray-400">{r.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
