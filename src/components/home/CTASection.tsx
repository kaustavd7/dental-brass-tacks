import Link from "next/link";
import { Phone, Calendar, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const WHATSAPP = "919871256897";
const WA_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello! I'd like to book an appointment at Dental Brass-Tacks.")}`;

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-700 to-sky-900 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="inline-block bg-white/10 border border-white/20 text-sky-100 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Let&apos;s Get Started
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Your p<span className="italic">H</span>abulous Smile
            <br />Awaits You
          </h2>
          <p className="text-sky-100 text-lg mb-5 max-w-xl mx-auto leading-relaxed">
            Book your consultation at Dental Brass-Tacks, Vipul World, Sector 48, Gurgaon.
            Our team will confirm your appointment within hours.
          </p>
          <div className="flex items-center justify-center gap-2 text-sky-200 text-sm mb-10">
            <MapPin className="w-4 h-4" />
            A-136, Vipul World, Sohna Road, Sector 48, Gurgaon
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-sky-700 hover:bg-sky-50 px-8 py-4 rounded-2xl font-semibold text-base transition-all shadow-xl hover:shadow-2xl active:scale-95"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all shadow-xl active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+919871256897"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all active:scale-95"
            >
              <Phone className="w-5 h-5" />
              +91 98712 56897
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
