import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { CheckCircle2, ChevronRight, Phone } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const WHATSAPP_NUMBER = "91XXXXXXXXXX";
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'd like to know more about ${service.title} at Dental Brass Tacks.`)}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-950 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-teal-300 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-teal-100 text-xl leading-relaxed">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 p-4 bg-teal-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Our Process
              </h2>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-teal-100" />
                <div className="space-y-6">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-5 relative">
                      <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm z-10">
                        {i + 1}
                      </div>
                      <div className="flex-1 pb-2">
                        <h3 className="font-semibold text-gray-900 mb-1">{step.step}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {service.faq.map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Book CTA */}
            <div className="bg-teal-600 rounded-2xl p-7 text-white sticky top-24">
              <h3 className="font-serif text-2xl font-bold mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-teal-100 text-sm mb-6">
                Book a consultation and let our specialists create a personalised
                treatment plan for you.
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block text-center bg-white text-teal-700 hover:bg-teal-50 py-3.5 rounded-xl font-semibold transition-all"
                >
                  Book Appointment
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl font-semibold transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white py-3.5 rounded-xl font-semibold transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Other Services */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Other Services</h3>
              <div className="space-y-2">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .slice(0, 5)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-teal-600 text-sm py-1.5 transition-colors"
                    >
                      <span>{s.icon}</span>
                      {s.title}
                    </Link>
                  ))}
                <Link
                  href="/services"
                  className="block text-teal-600 font-medium text-sm mt-3 hover:text-teal-700 transition-colors"
                >
                  View all services →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
