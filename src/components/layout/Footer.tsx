import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Orthodontics & Invisalign", href: "/services/orthodontics-invisalign" },
  { label: "Cosmetic Makeover", href: "/services/cosmetic-makeover" },
  { label: "Crowns & Bridges", href: "/services/crowns-bridges" },
  { label: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
  { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#04111f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-sky-800/50 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Dental Brass-Tacks"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="block text-white font-bold text-base leading-tight">
                  Dental Brass-Tacks
                </span>
                <span className="block text-sky-400 text-[10px] italic tracking-wide">
                  creating p<b className="not-italic">H</b>abulous Smiles
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              A premium multi-speciality dental clinic at Vipul World, Sector 48, Gurgaon
              — committed to delivering world-class care with honesty and compassion.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/dentalbrasstacks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-sky-900/60 hover:bg-sky-700 rounded-lg flex items-center justify-center transition-colors border border-sky-800/40"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white stroke-[1.5px]" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/dentalbrasstacks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-sky-900/60 hover:bg-sky-700 rounded-lg flex items-center justify-center transition-colors border border-sky-800/40"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sky-500 hover:text-sky-400 text-sm font-medium transition-colors">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Find Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  A-136, Vipul World, Sohna Road,<br />
                  Sector 48, Gurgaon – 122018<br />
                  <span className="text-slate-500 text-xs">Landmark: Central Park 2 / Vipul Greens</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:+919871256897" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                  +91 98712 56897
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:info@dentalbrasstacks.com" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                  info@dentalbrasstacks.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-400 text-sm">
                  <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Dental Brass-Tacks. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            A-136, Vipul World, Sector 48, Gurgaon &bull; Established 2016
          </p>
        </div>
      </div>
    </footer>
  );
}
