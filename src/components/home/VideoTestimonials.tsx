import { ExternalLink, Play, MapPin, Phone } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const videos = [
  {
    href: "https://share.google/2QRPiHPs6JmYijRxG",
    title: "\"I was delaying it for years...\"",
    subtitle: "Wisdom Tooth Extraction",
    quote:
      "What they expected to be a nightmare turned into a comfortable and magical experience. Many patients live with wisdom tooth pain because they are terrified of extraction — but at Dental Brass-Tacks, dentistry is effortless and gentle.",
    tag: "#WisdomTooth",
    accent: "from-sky-600 to-sky-800",
  },
  {
    href: "https://share.google/ueLXAq0ri5JwXA8bM",
    title: "Best Dental Implants in Gurugram",
    subtitle: "CAD-CAM CEREC Crown — 80-Year-Old Patient",
    quote:
      "Watch as our advanced CAD-CAM CEREC technology creates a precision-fit crown. Dr. Nisha Bali brings 25 years of expertise to ensure every procedure is painless and perfect — for patients of every age.",
    tag: "#DentalImplants",
    accent: "from-violet-600 to-sky-700",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-14">
          <span className="inline-block bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-sky-100">
            Video Stories
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            See It for <span className="text-sky-600">Yourself</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Real patients. Real results. Watch their stories and see why hundreds
            choose Dental Brass-Tacks for their smile.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-7">
          {videos.map((v, i) => (
            <StaggerItem key={i}>
              <a
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-400 hover:-translate-y-1"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${v.accent} opacity-95`} />

                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

                <div className="relative p-8 flex flex-col min-h-[280px]">
                  {/* Tag + play button */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                      {v.tag}
                    </span>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-sky-700 ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">
                      {v.subtitle}
                    </p>
                    <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-snug">
                      {v.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                      {v.quote}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/15">
                    <div className="flex items-center gap-2 text-white/60 text-xs">
                      <MapPin className="w-3.5 h-3.5" />
                      Dental Brass-Tacks, Sector 48 Gurgaon
                    </div>
                    <span className="flex items-center gap-1.5 text-white text-xs font-semibold group-hover:gap-2.5 transition-all">
                      Watch Story
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA strip */}
        <AnimatedSection delay={0.2} className="mt-10 text-center">
          <p className="text-slate-400 text-sm">
            Follow us for more patient stories —
            <a
              href="https://www.instagram.com/dentalbrasstacks/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 font-semibold hover:text-sky-700 ml-1 transition-colors"
            >
              @dentalbrasstacks
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
