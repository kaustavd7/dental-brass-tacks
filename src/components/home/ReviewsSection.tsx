import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Star } from "lucide-react";

const platforms = [
  {
    name: "Google Reviews",
    rating: "4.9",
    reviews: "450+",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path
          fill="currentColor"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="currentColor"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="currentColor"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="currentColor"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
  },
  {
    name: "Practo",
    rating: "4.8",
    reviews: "200+",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    rating: "4.7",
    reviews: "180+",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path
          fill="currentColor"
          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        />
      </svg>
    ),
  },
  {
    name: "JustDial",
    rating: "4.6",
    reviews: "120+",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path
          fill="currentColor"
          d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm.5-13h-1v6l5.25 3.15.75-1.23-5-3-0-4.92z"
        />
      </svg>
    ),
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mb-2">Trusted By Thousands</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Verified Reviews Across Platforms
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Our patients consistently rate us 4.6–4.9 stars across every major review platform.
          </p>
        </AnimatedSection>

        {/* Review Platforms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                {/* Logo */}
                <div className="flex justify-center mb-4 opacity-60 hover:opacity-100 transition-opacity">
                  <div className="text-slate-400">{p.icon}</div>
                </div>

                {/* Name */}
                <p className="font-semibold text-slate-900 text-sm mb-3">{p.name}</p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Score */}
                <p className="text-slate-900 font-bold text-lg mb-1">{p.rating}</p>
                <p className="text-slate-500 text-xs">{p.reviews} reviews</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
