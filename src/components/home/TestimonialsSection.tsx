import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Patient Stories
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            What Our Patients <span className="text-teal-600">Say</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Real stories from real patients. We let our results — and their smiles —
            speak for themselves.
          </p>
        </div>

        {/* Stars summary */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-2xl font-bold text-gray-900">4.9</span>
          <span className="text-gray-400">from 200+ reviews</span>
        </div>

        {/* Testimonial Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-teal-200 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Meta */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
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
  );
}
