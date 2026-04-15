import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description:
    "Read genuine patient reviews for Dental Brass Tacks, Gurgaon. Discover why patients rate us 4.9/5 for dental excellence.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-950 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-teal-500/20 border border-teal-500/30 text-teal-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Testimonials
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Patient <span className="text-teal-400">Stories</span>
          </h1>
          <p className="text-teal-100 text-xl max-w-2xl mx-auto leading-relaxed">
            We let our patients do the talking. Here is what they have to say about
            their experience at Dental Brass Tacks.
          </p>
          {/* Rating summary */}
          <div className="flex items-center justify-center gap-4 mt-10 bg-white/10 border border-white/20 rounded-2xl py-5 px-8 inline-flex mx-auto">
            <div>
              <div className="text-5xl font-bold font-serif text-teal-400">4.9</div>
              <div className="text-teal-200 text-sm">out of 5</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-teal-200 text-sm">200+ verified reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-7 shadow-card border border-gray-100 flex flex-col"
              >
                <Quote className="w-8 h-8 text-teal-200 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-teal-600 text-xs font-medium">{t.treatment}</span>
                    <span className="text-gray-400 text-xs">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Your Success Story Starts Here
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Join hundreds of satisfied patients. Book your appointment today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
