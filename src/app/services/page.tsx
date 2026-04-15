import type { Metadata } from "next";
import Link from "next/link";
import { services, allServices, categoryColors } from "@/data/services";
import { ArrowRight, Stethoscope, Smile, Crown, Activity, Baby, Layers, Sparkles, HeartPulse } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore all 24 dental services at Dental Brass-Tacks, Sector 48 Gurgaon — implants, Invisalign, cosmetic makeovers, crowns, paediatric dentistry, and more.",
};

const serviceIcons: Record<string, React.ElementType> = {
  "dental-implants":         Activity,
  "orthodontics-invisalign": Smile,
  "cosmetic-makeover":       Sparkles,
  "crowns-bridges":          Crown,
  "root-canal-treatment":    HeartPulse,
  "pediatric-dentistry":     Baby,
  "dentures-prosthetics":    Layers,
  "dental-cleaning-hygiene": Stethoscope,
};

const iconAccent: Record<string, string> = {
  "Implantology":       "bg-sky-100 text-sky-600",
  "Cosmetic Dentistry": "bg-violet-100 text-violet-600",
  "Restorative":        "bg-amber-100 text-amber-700",
  "Prosthetics":        "bg-emerald-100 text-emerald-700",
  "General":            "bg-slate-100 text-slate-600",
};

const categories = ["Implantology", "Cosmetic Dentistry", "Restorative", "Prosthetics", "General"] as const;

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#04111f] via-sky-950 to-sky-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-sky-500/15 border border-sky-500/25 text-sky-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Our Services
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Comprehensive <span className="gradient-text">Dental Care</span>
          </h1>
          <p className="text-sky-100 text-xl max-w-3xl mx-auto leading-relaxed">
            24 specialist dental services — from routine prevention to full-mouth
            rehabilitation — all under one roof at Vipul World, Sector 48, Gurgaon.
          </p>
        </div>
      </section>

      {/* Featured services (8 with detail pages) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-2">Featured Services</h2>
            <p className="text-slate-500">Click any service to learn more — procedures, benefits, FAQs, and more.</p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] ?? Stethoscope;
              const iconBg = iconAccent[service.category] ?? "bg-sky-100 text-sky-600";
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex flex-col h-full bg-white border border-slate-100 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${iconBg}`}>
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {service.category}
                    </span>
                    <h2 className="font-semibold text-slate-900 text-base mb-2 group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                      {service.shortDesc}
                    </p>
                    <ul className="space-y-1 mb-4">
                      {service.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 bg-sky-400 rounded-full flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-sky-600 text-sm font-semibold mt-auto">
                      Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* All 24 services by category */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-2">Complete Service List</h2>
            <p className="text-slate-500">All 24 treatments available at Dental Brass-Tacks.</p>
          </AnimatedSection>

          <div className="space-y-10">
            {categories.map((cat) => {
              const catServices = allServices.filter((s) => s.category === cat);
              if (!catServices.length) return null;
              const colorClass = categoryColors[cat];
              return (
                <AnimatedSection key={cat}>
                  <h3 className="font-serif text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${colorClass}`}>
                      {cat}
                    </span>
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {catServices.map((s) => (
                      <div
                        key={s.title}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${colorClass} bg-opacity-30`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                        <span className="text-sm font-medium">{s.title}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sky-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-4">Not sure which treatment you need?</h2>
          <p className="text-sky-100 mb-8">
            Book a free consultation and our specialists will guide you to the right solution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-sky-700 hover:bg-sky-50 px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
