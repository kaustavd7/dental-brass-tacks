import { Shield, Clock, Award, Users, ScanLine, HeartHandshake } from "lucide-react";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const reasons = [
  {
    icon: Award,
    title: "Gold Medallist Doctors",
    desc: "Dr. Nisha Bali is a University Gold Medallist. Dr. Aneesh Katyal is a Gold Medallist Orthodontist and India's Top 1% Diamond Invisalign Provider.",
  },
  {
    icon: ScanLine,
    title: "State-of-the-Art Technology",
    desc: "CAD-CAM CEREC crowns, iTero 3D digital scanner, cone beam CT, rotary endodontics, and digital X-ray — all under one roof.",
  },
  {
    icon: Shield,
    title: "Rigorous Sterilisation",
    desc: "Autoclave, UV instrument cabinet, and international sterilisation protocols at every step — your safety is never compromised.",
  },
  {
    icon: Users,
    title: "Care for Every Age",
    desc: "Dedicated paediatric dental specialist, orthodontic care for teens, implants and restorations for adults — the whole family is welcome.",
  },
  {
    icon: Clock,
    title: "Convenient & Accessible",
    desc: "Located in the quiet, green neighbourhood of Vipul World with ample parking. Open Monday to Saturday, 10 AM to 8 PM.",
  },
  {
    icon: HeartHandshake,
    title: "Honest, Ethical Care",
    desc: "No unnecessary treatment. Transparent pricing. Dr. Nisha Bali's personal commitment: ethical care delivered to the highest standard.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#04111f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-16">
          <span className="inline-block bg-sky-500/10 text-sky-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-sky-500/20">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
            The Dental Brass-Tacks <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We have built our reputation on results, honesty, and an experience that
            makes patients return — and refer their families.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <StaggerItem key={i}>
              <div className="group glass-dark rounded-2xl p-7 hover:bg-sky-500/10 transition-all duration-300">
                <div className="w-12 h-12 bg-sky-500/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-sky-500/25 transition-colors">
                  <r.icon className="w-6 h-6 text-sky-400" strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-white text-base mb-3 leading-snug">{r.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
