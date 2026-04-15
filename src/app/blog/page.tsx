import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Blog",
  description:
    "Expert dental advice from the specialists at Dental Brass Tacks, Gurgaon. Tips on oral hygiene, treatments, and more.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-950 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-teal-500/20 border border-teal-500/30 text-teal-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Our Blog
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Dental <span className="text-teal-400">Insights</span>
          </h1>
          <p className="text-teal-100 text-xl max-w-2xl mx-auto leading-relaxed">
            Expert-written guides and advice to help you make informed decisions
            about your oral health.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Colour header */}
                <div className="h-3 bg-teal-600 w-full" />
                <div className="p-7 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1.5 text-teal-600 text-xs font-semibold">
                      <Tag className="w-3.5 h-3.5" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span className="text-gray-400 text-xs ml-auto">{post.date}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-teal-600 font-semibold text-sm">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
