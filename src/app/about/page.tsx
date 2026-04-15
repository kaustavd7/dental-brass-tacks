import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/data/doctors";
import { BadgeCheck, Star, Award, Heart, Target, Leaf } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dental Brass-Tacks — founded in 2016 by Dr. Nisha Bali in Sector 48, Gurgaon. Four specialist doctors, state-of-the-art technology, and a commitment to ethical, patient-first dental care.",
};

const values = [
  {
    icon: Heart,
    title: "Patient-First Philosophy",
    desc: "Every recommendation we make is driven by your long-term dental health — not commercial targets. We offer honest advice, always.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    desc: "Our doctors hold gold medals, international awards, and global faculty positions. We continuously invest in advanced training and technology.",
  },
  {
    icon: Target,
    title: "Ethical & Transparent",
    desc: "Transparent pricing. No upselling. Dr. Bali's personal tagline — 'Let's Get Started' — is a 100% assurance of quality care from day one.",
  },
  {
    icon: Leaf,
    title: "Healing Environment",
    desc: "A nature trail with a waterfall and landscaped greenery surrounds the clinic, easing the stress of dentistry in particular and life in general.",
  },
];

const facilities = [
  "State-of-the-art, spacious, well-lit dental operatories",
  "Individual climate control in each operatory",
  "CAD-CAM CEREC in-house crown fabrication",
  "iTero 3D digital intraoral scanner",
  "Cone Beam CT / 3D X-ray for implant planning",
  "Rotary endodontic system",
  "Autoclave sterilisation",
  "UV instrument cabinet",
  "Digital X-ray facility",
  "Well-trained dental assistants",
  "Soothing waiting lounge with free Wi-Fi",
  "Convenient washrooms, drinking water, and pantry",
  "Nature trail with waterfall and landscaped greenery",
  "Ample road access and parking facility",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#04111f] via-sky-950 to-sky-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-sky-500/15 border border-sky-500/25 text-sky-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            About Us
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Caring for Smiles Since <span className="gradient-text">2016</span>
          </h1>
          <p className="text-sky-100 text-xl max-w-3xl mx-auto leading-relaxed">
            Dental Brass-Tacks is a premium multi-speciality dental clinic at Vipul World,
            Sector 48, Gurgaon — founded on a mission to deliver world-class dental care
            in the finest possible environment.
          </p>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="inline-block bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-sky-100">
                Our Story
              </span>
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6 leading-snug">
                Founded with Purpose.<br />
                <span className="text-sky-600">Built on Trust.</span>
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-base">
                <p>
                  On <strong>18 November 2016</strong>, Dr. Nisha Bali launched her flagship clinic
                  &ldquo;Dental Brass-Tacks&rdquo; — a multi-speciality dental clinic at A-136, Vipul World,
                  Sohna Road, Gurugram. The mission: to provide the highest quality basic and advanced
                  dental care in the best possible ambiance.
                </p>
                <p>
                  The tagline <em>&ldquo;Let&apos;s Get Started&rdquo;</em> embodies an energetic, bold, and
                  100% assured commitment by the treating dentist to deliver ethical, quality dental
                  treatment from the very first appointment.
                </p>
                <p>
                  The clinic is conveniently located in the quiet, friendly neighbourhood of Vipul World
                  on Sohna Road — close to Central Park 2, The Rooms, and Vipul Greens — with excellent
                  road access and ample parking. A nature trail with a waterfall and landscaped greenery
                  surrounds the clinic, designed to ease the stress of dentistry and create a genuinely
                  calming experience for every patient.
                </p>
              </div>
            </AnimatedSection>

            {/* Values */}
            <AnimatedSection direction="right">
              <StaggerContainer className="space-y-4">
                {values.map((v, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-100 hover:bg-sky-50/50 transition-colors">
                      <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <v.icon className="w-6 h-6 text-sky-600" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">{v.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Clinic Facilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-sky-100">
              Our Clinic
            </span>
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">
              World-Class <span className="text-sky-600">Facilities</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Every corner of Dental Brass-Tacks has been designed for your comfort,
              safety, and clinical excellence.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.map((f, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                  <BadgeCheck className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{f}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-sky-100">
              Our Specialists
            </span>
            <h2 className="font-serif text-4xl font-bold text-slate-900">
              Meet the Team
            </h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-8">
            {doctors.map((doc) => (
              <StaggerItem key={doc.id}>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row gap-7">
                    {/* Photo */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-sky-50 border border-sky-100 shadow-sm">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover object-top"
                        sizes="128px"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {doc.roles.map((role) => (
                          <span key={role} className="bg-sky-100 text-sky-700 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full">
                            {role}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-serif text-2xl font-bold text-slate-900">{doc.name}</h3>
                        <BadgeCheck className="w-5 h-5 text-sky-500" />
                      </div>
                      <p className="text-sky-600 text-sm font-medium mb-1">{doc.qualifications}</p>
                      <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                        <span>{doc.experience} years experience{doc.experienceDetail ? ` (${doc.experienceDetail})` : ""}</span>
                        {doc.rating && (
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            {doc.rating} ({doc.patients} patients)
                          </span>
                        )}
                        <span className="font-medium text-sky-600">{doc.fee}</span>
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed mb-5">{doc.description}</p>

                      {/* Highlights */}
                      <div className="grid sm:grid-cols-2 gap-2">
                        {doc.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2">
                            <BadgeCheck className="w-3.5 h-3.5 text-sky-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-500 text-xs leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sky-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/clinic-front.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold mb-5">Ready to Meet the Team?</h2>
          <p className="text-sky-100 text-lg mb-8">
            Book your consultation at Dental Brass-Tacks — and experience the pHabulous difference.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-sky-700 hover:bg-sky-50 px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
