"use client";

import Link from "next/link";
import { Phone, Star, Shield, Award } from "lucide-react";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to book an appointment at Dental Brass Tacks.")}`;

const stats = [
  { value: "70+", label: "Years Combined\nExperience" },
  { value: "4", label: "Specialist\nDoctors" },
  { value: "5000+", label: "Happy\nPatients" },
  { value: "4.9★", label: "Average\nRating" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen lg:py-32">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-1.5 mb-8">
              <Star className="w-3.5 h-3.5 text-teal-300 fill-teal-300" />
              <span className="text-teal-200 text-xs font-medium">
                Gurgaon&apos;s Premier Multi-Speciality Dental Clinic
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Your Perfect
              <br />
              <span className="text-teal-400">Smile</span> Starts
              <br />
              Here.
            </h1>

            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-xl">
              World-class dental care in the heart of Sector 48, Gurgaon. Four specialist
              doctors, cutting-edge technology, and a patient-first philosophy that makes
              every visit comfortable.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/contact"
                className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all shadow-lg hover:shadow-teal-500/30 hover:shadow-2xl active:scale-95"
              >
                Book Appointment
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all active:scale-95"
              >
                {/* WhatsApp icon */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-5">
              <div className="flex items-center gap-2 text-teal-200 text-sm">
                <Shield className="w-4 h-4 text-teal-400" />
                ISO Certified Clinic
              </div>
              <div className="flex items-center gap-2 text-teal-200 text-sm">
                <Award className="w-4 h-4 text-teal-400" />
                4 Specialist Doctors
              </div>
              <div className="flex items-center gap-2 text-teal-200 text-sm">
                <Star className="w-4 h-4 text-teal-400 fill-teal-400" />
                4.9 / 5 Patient Rating
              </div>
            </div>
          </div>

          {/* Right — Stats Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((s, i) => (
                    <div
                      key={i}
                      className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
                    >
                      <div className="text-4xl font-bold text-teal-400 font-serif mb-2">
                        {s.value}
                      </div>
                      <div className="text-teal-200 text-sm whitespace-pre-line leading-snug">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact card */}
                <div className="mt-8 p-5 bg-teal-500/20 border border-teal-500/30 rounded-2xl">
                  <p className="text-teal-200 text-xs uppercase tracking-wider font-medium mb-3">
                    Contact Us
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="flex items-center gap-3 text-white hover:text-teal-300 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-teal-400" />
                      <span className="text-sm font-medium">+91-XXXX-XXXXXX</span>
                    </a>
                    <p className="text-teal-300 text-xs ml-7">Mon–Sat: 10 AM – 8 PM</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 bg-teal-500 text-white rounded-2xl px-5 py-3 shadow-xl">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>
                <p className="text-xs font-medium mt-1">200+ 5-star reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-teal-400 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-teal-400/50" />
      </div>
    </section>
  );
}
