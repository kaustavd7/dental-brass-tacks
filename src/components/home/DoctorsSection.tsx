import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/data/doctors";
import { BadgeCheck, Star } from "lucide-react";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";

export default function DoctorsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-16">
          <span className="inline-block bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-sky-100">
            Meet Our Experts
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Doctors Who <span className="text-sky-600">Care</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Four specialist doctors. Over 70 years of combined clinical excellence.
            Each a leader in their respective field.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <StaggerItem key={doc.id}>
              <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky-100/60 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

                {/* Photo */}
                <div className="relative h-52 bg-gradient-to-br from-sky-50 to-slate-100 overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />

                  {/* Roles */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                    {doc.roles.slice(0, 2).map((role) => (
                      <span key={role} className="bg-white/90 backdrop-blur-sm text-sky-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">
                      {doc.name}
                    </h3>
                    <BadgeCheck className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  </div>

                  <p className="text-sky-600 text-xs font-medium leading-snug mb-2">
                    {doc.qualifications}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 text-xs">{doc.experience} yrs experience</span>
                    {doc.rating && (
                      <span className="flex items-center gap-1 text-amber-500 text-xs font-medium">
                        <Star className="w-3 h-3 fill-amber-400" />
                        {doc.rating}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-500 text-xs leading-relaxed flex-1 line-clamp-3 mb-4">
                    {doc.description}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-block bg-sky-50 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-sky-100">
                      {doc.fee}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.2} className="text-center mt-12">
          <Link
            href="/about"
            className="inline-block border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-all"
          >
            Meet the Full Team
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
