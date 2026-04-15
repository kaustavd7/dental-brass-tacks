import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Comprehensive <span className="text-teal-600">Dental Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From routine check-ups to complex restorations — everything your family
            needs under one roof.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-gray-900 text-base mb-2 group-hover:text-teal-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                {service.shortDesc}
              </p>
              <div className="flex items-center gap-1.5 text-teal-600 text-sm font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
