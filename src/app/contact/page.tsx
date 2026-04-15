"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "Sector 48, Gurgaon, Haryana – 122018",
    href: "https://maps.google.com/?q=Sector+48+Gurgaon",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-XXXX-XXXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@dentalbrassttacks.com",
    href: "mailto:info@dentalbrassttacks.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 10 AM – 8 PM\nSunday: By Appointment",
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic goes here (e.g. email service / WhatsApp redirect)
    setSubmitted(true);
  };

  const WHATSAPP_NUMBER = "91XXXXXXXXXX";
  const waMessage = formData.name
    ? `Hi! I'm ${formData.name} and I'd like to book an appointment at Dental Brass Tacks${formData.service ? ` for ${formData.service}` : ""}.`
    : "Hi! I'd like to book an appointment at Dental Brass Tacks.";
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-950 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-teal-500/20 border border-teal-500/30 text-teal-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Contact Us
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Book Your <span className="text-teal-400">Appointment</span>
          </h1>
          <p className="text-teal-100 text-xl max-w-2xl mx-auto leading-relaxed">
            Reach out to us by phone, WhatsApp, email, or fill in the form below.
            Our team will confirm your slot within a few hours.
          </p>
        </div>
      </section>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactDetails.map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex items-start gap-4"
                >
                  <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-gray-800 font-medium hover:text-teal-600 transition-colors whitespace-pre-line text-sm"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium whitespace-pre-line text-sm">
                        {c.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp quick button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold transition-all shadow-md hover:shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Send className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                    Message Received!
                  </h3>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will contact you within a few
                    hours to confirm your appointment.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-500 text-sm mb-8">
                    Fill in the form and we will get back to you promptly.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select a service (optional)</option>
                        <option>Dental Implants</option>
                        <option>Orthodontics & Braces</option>
                        <option>Teeth Whitening</option>
                        <option>Root Canal Treatment</option>
                        <option>Pediatric Dentistry</option>
                        <option>Smile Makeover</option>
                        <option>Crowns & Bridges</option>
                        <option>Dental Cleaning</option>
                        <option>General Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your dental concern or preferred appointment time..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none placeholder:text-gray-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Google Map embed placeholder */}
          <div className="mt-10 rounded-2xl overflow-hidden shadow-card border border-gray-100 h-80 bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-10 h-10 mx-auto mb-3 text-teal-400" />
              <p className="font-medium">Dental Brass Tacks — Sector 48, Gurgaon</p>
              <p className="text-sm mt-1">Replace this block with a Google Maps embed iframe</p>
              <a
                href="https://maps.google.com/?q=Sector+48+Gurgaon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-teal-600 font-medium hover:text-teal-700 text-sm"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
