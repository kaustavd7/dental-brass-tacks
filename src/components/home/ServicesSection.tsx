import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight, Stethoscope, Smile, Crown, Activity, Baby, Layers, Sparkles, HeartPulse } from "lucide-react";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const serviceIcons: Record<string, React.ElementType> = {
  "dental-implants":          Activity,
  "orthodontics-invisalign":  Smile,
  "cosmetic-makeover":        Sparkles,
  "crowns-bridges":           Crown,
  "root-canal-treatment":     HeartPulse,
  "pediatric-dentistry":      Baby,
  "dentures-prosthetics":     Layers,
  "dental-cleaning-hygiene":  Stethoscope,
};

const categoryAccent: Record<string, string> = {
  "Implantology":       "bg-sky-50 border-sky-200",
  "Cosmetic Dentistry": "bg-violet-50 border-violet-200",
  "Restorative":        "bg-amber-50 border-amber-200",
  "Prosthetics":        "bg-emerald-50 border-emerald-200",
  "General":            "bg-slate-50 border-slate-200",
};

const iconAccent: Record<string, string> = {
  "Implantology":       "bg-sky-100 text-sky-600",
  "Cosmetic Dentistry": "bg-violet-100 text-violet-600",
  "Restorative":        "bg-amber-100 text-amber-700",
  "Prosthetics":        "bg-emerald-100 text-emerald-700",
  "General":            "bg-slate-100 text-slate-600",
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-16">
          <span className="inline-block bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-sky-100">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Comprehensive <span className="text-sky-600">Dental Care</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From your first check-up to full-mouth rehabilitation — everything your
            family needs, all under one roof.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug] ?? Stethoscope;
            const cardBg = categoryAccent[service.category] ?? "bg-white border-slate-100";
            const iconBg = iconAccent[service.category] ?? "bg-sky-100 text-sky-600";
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group flex flex-col h-full border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 ${cardBg}`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${iconBg}`}>
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {service.category}
                  </span>
                  <h3 className="font-semibold text-slate-900 text-base mb-2 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                    {service.shortDesc}
                  </p>
                  <div className="flex items-center gap-1.5 text-sky-600 text-sm font-semibold">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection delay={0.2} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-md shadow-sky-200 hover:shadow-sky-300"
          >
            View All 24 Services
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
