"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      { label: "Orthodontics & Invisalign", href: "/services/orthodontics-invisalign" },
      { label: "Cosmetic Makeover", href: "/services/cosmetic-makeover" },
      { label: "Crowns & Bridges", href: "/services/crowns-bridges" },
      { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
      { label: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
      { label: "Dentures & Prosthetics", href: "/services/dentures-prosthetics" },
      { label: "Dental Cleaning", href: "/services/dental-cleaning-hygiene" },
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
        isScrolled ? "bg-white shadow-md shadow-sky-100/50 py-2" : "bg-white/95 backdrop-blur-md py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-amber-100 shadow-sm flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Dental Brass-Tacks Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div>
              <span className="block text-sky-800 font-bold text-base leading-tight tracking-tight">
                Dental Brass-Tacks
              </span>
              <span className="block text-sky-500 text-[10px] italic font-medium tracking-wide">
                creating p<b className="not-italic">H</b>abulous Smiles
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ───────────────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-slate-600 hover:text-sky-600 font-medium text-sm transition-colors rounded-lg hover:bg-sky-50">
                    {link.label}
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-60 bg-white rounded-2xl shadow-xl shadow-sky-100/60 border border-sky-50 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
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
                  className="px-3 py-2 text-slate-600 hover:text-sky-600 font-medium text-sm transition-colors rounded-lg hover:bg-sky-50"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919871256897"
              className="flex items-center gap-1.5 text-sky-700 font-medium text-sm hover:text-sky-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              98712 56897
            </a>
            <Link
              href="/contact"
              className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-md shadow-sky-200 hover:shadow-sky-300 active:scale-95"
            >
              Book Appointment
            </Link>
          </div>

          {/* ── Mobile toggle ─────────────────────────────────────────────── */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-sky-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-slate-700 font-medium text-sm hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.label}
                    <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-slate-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
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
                  className="block px-3 py-2.5 text-slate-700 font-medium text-sm hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-sky-50 flex flex-col gap-2">
              <a
                href="tel:+919871256897"
                className="flex items-center justify-center gap-2 text-sky-700 font-medium py-2.5 border border-sky-200 rounded-xl hover:bg-sky-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 98712 56897
              </a>
              <Link
                href="/contact"
                className="bg-sky-600 hover:bg-sky-700 text-white py-2.5 rounded-xl font-semibold text-sm text-center transition-colors"
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
