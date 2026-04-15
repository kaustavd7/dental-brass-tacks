"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Award, Star, ArrowRight } from "lucide-react";

const WHATSAPP = "919871256897";
const WA_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello! I'd like to book an appointment at Dental Brass-Tacks.")}`;

const stats = [
  { value: "21+", label: "Years\nof Excellence" },
  { value: "4", label: "Specialist\nDoctors" },
  { value: "5000+", label: "Happy\nPatients" },
  { value: "4.9", label: "Average\nRating" },
];

const trustBadges = [
  { icon: ShieldCheck, label: "ISO Sterilisation Protocols" },
  { icon: Award, label: "Gold Medallist Doctors" },
  { icon: Star, label: "4.9 / 5 Patient Rating" },
];

const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#04111f]">

      {/* ── Animated gradient blobs ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Sky blue large blob */}
        <div className="blob-1 absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-sky-600/20 blur-[100px]" />
        {/* Violet accent blob */}
        <div className="blob-2 absolute top-1/2 -right-40 w-[480px] h-[480px] rounded-full bg-violet-600/15 blur-[100px]" />
        {/* Mid-tone blob */}
        <div className="blob-3 absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full bg-sky-400/10 blur-[80px]" />

        {/* Subtle dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center min-h-[calc(100vh-128px)]">

          {/* ── Left — Copy ─────────────────────────────────────────────────── */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0} variants={itemVariants} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
            >
              <Star className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
              <span className="text-sky-200 text-xs font-medium tracking-wide">
                Sector 48, Gurgaon &bull; Est. 18 Nov 2016
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1} variants={itemVariants} initial="hidden" animate="visible"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-4"
            >
              Dental<br />
              <span className="gradient-text">Brass-Tacks</span>
            </motion.h1>

            <motion.p
              custom={2} variants={itemVariants} initial="hidden" animate="visible"
              className="font-serif text-xl text-sky-300 italic mb-6 tracking-wide"
            >
              — creating p<span className="not-italic font-bold">H</span>abulous Smiles
            </motion.p>

            <motion.p
              custom={3} variants={itemVariants} initial="hidden" animate="visible"
              className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Gurgaon&apos;s premier multi-speciality dental clinic. Four specialist doctors.
              State-of-the-art technology. A promise of ethical, compassionate care — from
              your very first visit.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={4} variants={itemVariants} initial="hidden" animate="visible"
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="group flex items-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 active:scale-95"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 glass text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all hover:bg-white/15 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+919871256897"
                className="flex items-center gap-2 text-sky-300 hover:text-white font-medium text-sm transition-colors py-4"
              >
                <Phone className="w-4 h-4" />
                +91 98712 56897
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={5} variants={itemVariants} initial="hidden" animate="visible"
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-slate-400 text-xs">
                  <b.icon className="w-3.5 h-3.5 text-sky-400" />
                  {b.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Liquid glass card ────────────────────────────────────── */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-3xl bg-sky-500/10 blur-2xl scale-105" />

              {/* Glass card */}
              <div className="relative glass rounded-3xl p-8">

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                      className="glass-dark rounded-2xl p-5 text-center"
                    >
                      <div className="text-4xl font-serif font-bold gradient-text mb-1">{s.value}</div>
                      <div className="text-slate-300 text-xs whitespace-pre-line leading-snug">{s.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact strip */}
                <div className="glass-dark rounded-2xl p-5 mb-4">
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold mb-3">
                    Book a Consultation
                  </p>
                  <div className="flex items-center gap-3 text-white text-sm font-medium mb-2">
                    <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <a href="tel:+919871256897" className="hover:text-sky-300 transition-colors">
                      +91 98712 56897
                    </a>
                  </div>
                  <p className="text-slate-400 text-xs ml-7">Mon – Sat &nbsp;|&nbsp; 10 AM – 8 PM</p>
                </div>

                {/* Rating strip */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-white text-sm font-semibold">4.9</span>
                  <span className="text-slate-400 text-xs">from 450+ patient reviews</span>
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-[10px] text-slate-300 uppercase tracking-wider">Since</p>
                <p className="text-white font-bold font-serif text-lg leading-none">2016</p>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-[10px] text-sky-300 uppercase tracking-wider">Vipul World</p>
                <p className="text-white font-semibold text-xs">Sector 48, Gurgaon</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-sky-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
