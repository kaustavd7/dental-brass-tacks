"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "A-136, Vipul World, Sohna Road\nSector 48, Gurgaon – 122018",
    sub: "Landmark: Central Park 2, The Rooms & Vipul Greens",
    href: "https://maps.google.com/?q=A+136+Vipul+World+Sohna+Road+Sector+48+Gurgaon",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 98712 56897",
    sub: null,
    href: "tel:+919871256897",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@dentalbrasstacks.com",
    sub: null,
    href: "mailto:info@dentalbrasstacks.com",
  },
  {
    icon: Clock,
    label: "Clinic Hours",
    value: "Mon – Sat: 10:00 AM – 8:00 PM\nSunday: By Appointment Only",
    sub: null,
    href: null,
  },
];

const WHATSAPP = "919871256897";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const waMessage = formData.name
    ? `Hello! I'm ${formData.name} and I'd like to book an appointment at Dental Brass-Tacks${formData.service ? ` for ${formData.service}` : ""}.`
    : "Hello! I'd like to book an appointment at Dental Brass-Tacks.";
  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMessage)}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#04111f] via-sky-950 to-sky-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-sky-500/15 border border-sky-500/25 text-sky-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Contact Us
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Book Your <span className="gradient-text">Appointment</span>
          </h1>
          <p className="text-sky-100 text-xl max-w-2xl mx-auto leading-relaxed">
            Reach us by phone, WhatsApp, email, or via the form below. We confirm all
            appointments within a few hours.
          </p>
        </div>
      </section>

      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Contact sidebar */}
            <AnimatedSection direction="left" className="space-y-5">
              {contactDetails.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start gap-4">
                  <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-sky-100">
                    <c.icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mb-1">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-slate-800 font-medium hover:text-sky-600 transition-colors whitespace-pre-line text-sm"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-slate-800 font-medium whitespace-pre-line text-sm">{c.value}</p>
                    )}
                    {c.sub && <p className="text-slate-400 text-xs mt-1">{c.sub}</p>}
                  </div>
                </div>
              ))}

              {/* WhatsApp quick action */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold transition-all shadow-md shadow-green-200 hover:shadow-green-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>

              {/* Social links */}
              <div className="flex gap-3">
                <a href="https://www.instagram.com/dentalbrasstacks/" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-600 hover:border-sky-300 hover:text-sky-600 text-xs font-medium transition-colors bg-white">
                  Instagram <ExternalLink className="w-3 h-3" />
                </a>
                <a href="https://www.facebook.com/dentalbrasstacks/" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-600 hover:border-sky-300 hover:text-sky-600 text-xs font-medium transition-colors bg-white">
                  Facebook <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Send className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">Message Received!</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will contact you within a few hours
                    to confirm your appointment.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-3xl font-bold text-slate-900 mb-1">Send Us a Message</h2>
                  <p className="text-slate-400 text-sm mb-8">We typically respond within 2–4 hours during clinic hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text" required placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder:text-slate-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel" required placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder:text-slate-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                      <input
                        type="email" placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder:text-slate-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Treatment Required</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select a treatment (optional)</option>
                        <option>Dental Implants</option>
                        <option>Orthodontics / Invisalign</option>
                        <option>Cosmetic Makeover / Veneers</option>
                        <option>Crowns & Bridges</option>
                        <option>Root Canal Treatment</option>
                        <option>Pediatric Dentistry</option>
                        <option>Dentures & Prosthetics</option>
                        <option>Dental Cleaning</option>
                        <option>Tooth Extraction</option>
                        <option>General Consultation</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your dental concern or your preferred appointment date and time..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none placeholder:text-slate-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-200 hover:shadow-sky-300 active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </AnimatedSection>
          </div>

          {/* Google Map placeholder */}
          <AnimatedSection delay={0.2} className="mt-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-80 bg-slate-100 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <MapPin className="w-10 h-10 mx-auto mb-3 text-sky-400" />
              <p className="font-semibold text-slate-700">Dental Brass-Tacks</p>
              <p className="text-sm mt-1">A-136, Vipul World, Sohna Road, Sector 48, Gurgaon</p>
              <a
                href="https://maps.google.com/?q=A+136+Vipul+World+Sohna+Road+Sector+48+Gurgaon"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-sky-600 font-medium hover:text-sky-700 text-sm transition-colors"
              >
                Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-slate-400 text-xs mt-3">Replace this block with a Google Maps embed iframe in contact/page.tsx</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
