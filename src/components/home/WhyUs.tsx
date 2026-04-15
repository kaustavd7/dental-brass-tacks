import { Shield, Clock, Award, Users, Microscope, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "70+ Years Combined Experience",
    desc: "Our four specialist doctors collectively bring over 70 years of clinical expertise across all dental disciplines.",
  },
  {
    icon: Microscope,
    title: "Latest Technology",
    desc: "Digital X-rays, 3D imaging, laser dentistry, and CAD/CAM same-day crowns for precision and speed.",
  },
  {
    icon: Shield,
    title: "Strict Sterilisation",
    desc: "We follow international sterilisation protocols with autoclaved instruments and barrier-protected surfaces.",
  },
  {
    icon: Users,
    title: "All Ages, All Needs",
    desc: "From first baby teeth to senior care — including a dedicated pediatric specialist for your little ones.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    desc: "Open Monday to Saturday, 10 AM to 8 PM. Emergency slots available for urgent dental pain.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Philosophy",
    desc: "Transparent pricing, no pushy upselling, and a team that genuinely listens before recommending treatment.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-teal-500/30">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
            The Dental Brass Tacks{" "}
            <span className="text-teal-400">Difference</span>
          </h2>
          <p className="text-teal-200 text-lg max-w-2xl mx-auto">
            We have built our reputation on one thing: delivering results you can
            see and an experience you will want to return for.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-500/30 transition-colors">
                <r.icon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="font-semibold text-white text-base mb-3">{r.title}</h3>
              <p className="text-teal-200 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
