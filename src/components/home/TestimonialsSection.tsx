import { testimonials } from "@/data/testimonials";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-14">
          <span className="inline-block bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-sky-100">
            Patient Stories
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            What Our Patients <span className="text-sky-600">Say</span>
          </h2>

          {/* Rating summary */}
          <div className="inline-flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl px-7 py-4 mt-2">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-sky-600">4.9</div>
              <div className="text-slate-400 text-xs mt-0.5">Average Rating</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-slate-500 text-xs">450+ verified reviews</div>
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col h-full hover:shadow-md hover:shadow-sky-100/50 transition-shadow">
                <Quote className="w-7 h-7 text-sky-200 mb-3 flex-shrink-0" />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5 line-clamp-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                      <p className="text-sky-600 text-xs font-medium mt-0.5">{t.treatment}</p>
                    </div>
                    {t.verified && (
                      <BadgeCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-slate-400 text-xs mt-1">{t.date}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
