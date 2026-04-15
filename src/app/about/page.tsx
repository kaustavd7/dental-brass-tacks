import type { Metadata } from "next";
import Link from "next/link";
import { doctors } from "@/data/doctors";
import { UserCircle, Award, Heart, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the specialist team at Dental Brass Tacks — four expert dentists with over 70 years of combined experience in Gurgaon.",
};

const values = [
  {
    icon: Heart,
    title: "Patient-First",
    desc: "Every decision we make centres on your comfort, safety, and long-term dental health.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    desc: "We pursue the highest clinical standards, continuously updating our skills and technology.",
  },
  {
    icon: Target,
    title: "Honest Advice",
    desc: "We recommend only what you need. No unnecessary upselling, ever.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-950 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-teal-500/20 border border-teal-500/30 text-teal-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            About Us
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Caring for Smiles Since <span className="text-teal-400">Day One</span>
          </h1>
          <p className="text-teal-100 text-xl max-w-3xl mx-auto leading-relaxed">
            Dental Brass Tacks is a premium multi-speciality dental clinic in Sector 48,
            Gurgaon — built on a foundation of clinical excellence, honest care, and a
            genuine passion for transforming smiles.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                Our Story
              </span>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
                Built on Trust, Driven by{" "}
                <span className="text-teal-600">Results</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Dental Brass Tacks was founded with a simple but powerful belief: every
                  patient deserves world-class dental care in a comfortable, transparent
                  environment — without the intimidation often associated with clinical
                  settings.
                </p>
                <p>
                  Located in Sector 48, Gurgaon, our clinic brings together four highly
                  qualified specialists under one roof. Whether you need routine
                  preventive care, complex implant work, orthodontic treatment, or
                  dedicated paediatric care for your child, our team has the expertise to
                  deliver exceptional results.
                </p>
                <p>
                  We invest in the latest dental technology — including digital X-rays,
                  3D cone beam CT scanning, and advanced sterilisation systems — because
                  we believe modern patients deserve modern care.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-5">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <v.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Our Specialists
            </span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">
              Meet the Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 flex gap-6"
              >
                <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <UserCircle className="w-12 h-12 text-teal-400" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {doc.roles.map((role) => (
                      <span
                        key={role}
                        className="bg-teal-50 text-teal-700 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                    {doc.name}
                  </h3>
                  <p className="text-teal-600 text-sm font-medium mb-1">
                    {doc.qualifications}
                  </p>
                  <p className="text-gray-400 text-xs mb-3">
                    {doc.experience} years experience
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold mb-5">
            Ready to Meet the Team?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Book your consultation today and experience the Dental Brass Tacks difference.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
