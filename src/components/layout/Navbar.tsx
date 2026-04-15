"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Dental Implants", href: "/services/dental-implants" },
      { label: "Orthodontics & Braces", href: "/services/orthodontics-braces" },
      { label: "Teeth Whitening", href: "/services/teeth-whitening" },
      { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
      { label: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
      { label: "Smile Makeover", href: "/services/smile-makeover" },
      { label: "Crowns & Bridges", href: "/services/dental-crowns-bridges" },
      { label: "Dental Cleaning", href: "/services/dental-cleaning-scaling" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:bg-teal-700 transition-colors">
              <span className="text-white text-lg font-bold">D</span>
            </div>
            <div>
              <span className="block text-teal-700 font-bold text-lg leading-tight tracking-tight">
                Dental Brass Tacks
              </span>
              <span className="block text-gray-400 text-xs">Sector 48, Gurgaon</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-teal-600 font-medium text-sm transition-colors rounded-lg hover:bg-teal-50">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-gray-600 hover:text-teal-600 font-medium text-sm transition-colors rounded-lg hover:bg-teal-50"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-2 text-teal-700 font-medium text-sm hover:text-teal-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-gray-700 font-medium text-sm hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2.5 text-gray-700 font-medium text-sm hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center justify-center gap-2 text-teal-700 font-medium py-2.5 border border-teal-200 rounded-xl hover:bg-teal-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link
                href="/contact"
                className="bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-xl font-semibold text-sm text-center transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
