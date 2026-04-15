import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore all dental services at Dental Brass Tacks, Gurgaon — implants, orthodontics, whitening, root canal, paediatric dentistry, smile makeovers, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-950 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-teal-500/20 border border-teal-500/30 text-teal-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Our Services
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Comprehensive <span className="text-teal-400">Dental Care</span>
          </h1>
          <p className="text-teal-100 text-xl max-w-3xl mx-auto leading-relaxed">
            From your first appointment to your dream smile — we offer every dental
            service your family could ever need under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="text-5xl mb-5">{service.icon}</div>
                <h2 className="font-semibold text-gray-900 text-lg mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  {service.shortDesc}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {service.benefits.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1.5 text-teal-600 text-sm font-semibold">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Not sure which treatment you need?
          </h2>
          <p className="text-teal-100 mb-8">
            Book a free consultation and our specialists will guide you to the right solution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
