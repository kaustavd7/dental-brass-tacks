import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Orthodontics & Braces", href: "/services/orthodontics-braces" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
  { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
  { label: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
  { label: "Smile Makeover", href: "/services/smile-makeover" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-bold">D</span>
              </div>
              <div>
                <span className="block text-white font-bold text-lg leading-tight">
                  Dental Brass Tacks
                </span>
                <span className="block text-teal-300 text-xs">Sector 48, Gurgaon</span>
              </div>
            </div>
            <p className="text-teal-200 text-sm leading-relaxed mb-5">
              A premium multi-speciality dental clinic in Gurgaon, committed to
              delivering world-class care with a gentle, patient-first approach.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 bg-teal-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors"
              >
                {/* Instagram SVG */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white stroke-2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-teal-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors"
              >
                {/* Facebook SVG */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-teal-200 hover:text-teal-400 text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-teal-200 hover:text-teal-400 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-teal-200 text-sm">
                  Sector 48, Gurgaon, Haryana – 122018
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-teal-200 hover:text-teal-400 text-sm transition-colors"
                >
                  +91-XXXX-XXXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:info@dentalbrassttacks.com"
                  className="text-teal-200 hover:text-teal-400 text-sm transition-colors"
                >
                  info@dentalbrassttacks.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="text-teal-200 text-sm">
                  <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-teal-400 text-sm">
            © {new Date().getFullYear()} Dental Brass Tacks. All rights reserved.
          </p>
          <p className="text-teal-500 text-xs">
            Sector 48, Gurgaon | Premier Multi-Speciality Dental Clinic
          </p>
        </div>
      </div>
    </footer>
  );
}
