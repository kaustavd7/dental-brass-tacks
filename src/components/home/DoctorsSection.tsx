import Link from "next/link";
import { doctors } from "@/data/doctors";
import { UserCircle } from "lucide-react";

export default function DoctorsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Meet Our Experts
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Doctors Who <span className="text-teal-600">Care</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our team of four specialist dentists brings over 70 years of combined clinical
            experience — each a leader in their field.
          </p>
        </div>

        {/* Doctor cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-teal-100 transition-colors">
                <UserCircle className="w-14 h-14 text-teal-400" strokeWidth={1.5} />
              </div>

              {/* Specialisation badge */}
              <div className="flex flex-wrap justify-center gap-1 mb-3">
                {doc.roles.map((role) => (
                  <span
                    key={role}
                    className="bg-teal-50 text-teal-700 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full"
                  >
                    {role}
                  </span>
                ))}
              </div>

              {/* Name */}
              <h3 className="font-serif text-lg font-bold text-gray-900 text-center mb-1">
                {doc.name}
              </h3>

              {/* Qualifications */}
              <p className="text-teal-600 text-xs text-center font-medium mb-2 leading-snug">
                {doc.qualifications}
              </p>

              {/* Experience */}
              <p className="text-gray-400 text-xs text-center mb-4">
                {doc.experience} years experience
              </p>

              {/* Description */}
              <p className="text-gray-500 text-sm text-center leading-relaxed line-clamp-3">
                {doc.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-block border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-all"
          >
            Learn More About Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
