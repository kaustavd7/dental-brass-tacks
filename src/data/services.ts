export type ServiceCategory = "Implantology" | "Cosmetic Dentistry" | "Restorative" | "Prosthetics" | "General";

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  description: string;
  benefits: string[];
  process: { step: string; detail: string }[];
  faq: { q: string; a: string }[];
}

export interface SimpleService {
  title: string;
  category: ServiceCategory;
}

// ── Full detail service pages (featured 8) ──────────────────────────────────
export const services: Service[] = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    category: "Implantology",
    shortDesc: "Permanent, osseointegrated tooth replacement that looks and feels completely natural.",
    description:
      "At Dental Brass-Tacks we offer the full spectrum of implantology — from single osseointegrated implants to full-arch implant rehabilitation — using internationally certified titanium implants and CAD-CAM precision crowns. Dr. Aneesh Katyal and Dr. Nisha Bali collaborate to deliver implants that last a lifetime.",
    benefits: [
      "Permanent, lifetime solution",
      "Preserves jawbone density",
      "No impact on adjacent teeth",
      "Natural look, feel, and function",
      "CAD-CAM precision ceramic crowns",
      "Full implant rehabilitation available",
    ],
    process: [
      { step: "3D Cone Beam CT Scan", detail: "Precise bone assessment and digital implant planning." },
      { step: "Implant Placement", detail: "Titanium post placed under local anaesthesia — pain-free." },
      { step: "Healing & Osseointegration", detail: "3–6 months for the implant to fuse with your bone." },
      { step: "CAD-CAM Crown Fitting", detail: "Custom-milled ceramic crown placed for a perfect finish." },
    ],
    faq: [
      { q: "Is the procedure painful?", a: "No. We perform all implant placements under local anaesthesia. Most patients report minimal discomfort post-procedure." },
      { q: "How long do implants last?", a: "With proper care and regular check-ups, dental implants can last a lifetime." },
      { q: "Am I a suitable candidate?", a: "Most healthy adults qualify. A 3D scan at our clinic gives us the full picture to assess your candidacy." },
    ],
  },
  {
    slug: "orthodontics-invisalign",
    title: "Orthodontics & Invisalign",
    category: "Cosmetic Dentistry",
    shortDesc: "Straighten your smile with precision braces or virtually invisible clear aligners from India's Top 1% Diamond Invisalign Provider.",
    description:
      "Dr. Aneesh Katyal — Gold Medalist Orthodontist, Diamond Invisalign Provider, and Global Faculty for Align Technology — brings the most advanced orthodontic care available in India. From traditional braces to fully digital Insignia customised braces and Invisalign clear aligners, every treatment plan is tailored precisely to you.",
    benefits: [
      "Invisalign — Top 1% Diamond Provider in India",
      "Insignia fully customised braces",
      "Incognito lingual (hidden) braces",
      "iTero 3D digital scanning — no impressions",
      "Suitable for teens and adults",
      "Digital smile preview before treatment begins",
    ],
    process: [
      { step: "Digital Smile Assessment", detail: "iTero 3D scan captures every detail of your dentition." },
      { step: "Treatment Planning", detail: "Fully customised plan — braces or aligners recommended." },
      { step: "Fitting", detail: "Braces bonded or Invisalign aligners provided." },
      { step: "Progress Monitoring", detail: "Regular check-ins every 4–6 weeks." },
      { step: "Retention", detail: "Custom retainers provided to preserve your new smile." },
    ],
    faq: [
      { q: "Is Invisalign as effective as braces?", a: "For mild to complex cases, Invisalign delivers equivalent results — with the advantage of being virtually invisible." },
      { q: "How long does treatment take?", a: "Typically 12–24 months depending on complexity. Some cases complete in under a year." },
      { q: "What makes Dr. Katyal different?", a: "He is one of only 7 orthodontists in India recognised as Global Faculty for Align Technology, and was among the first to use the iTero scanner in India." },
    ],
  },
  {
    slug: "cosmetic-makeover",
    title: "Cosmetic Makeover",
    category: "Cosmetic Dentistry",
    shortDesc: "A bespoke combination of veneers, whitening, bonding, and contouring — designed around your face and your goals.",
    description:
      "A Dental Brass-Tacks Cosmetic Makeover is fully personalised. We combine ceramic veneers, teeth whitening, cosmetic bonding, and gum contouring to create the smile you have always envisioned — with a digital preview before any treatment begins.",
    benefits: [
      "Digital smile preview before treatment",
      "Ceramic and porcelain veneers",
      "Cosmetic bonding for chips and gaps",
      "In-clinic professional whitening",
      "Gum contouring where required",
      "Long-lasting results — 10 to 15 years",
    ],
    process: [
      { step: "Dream Smile Consultation", detail: "We discuss your goals, photograph your smile, and assess your facial proportions." },
      { step: "Digital Design", detail: "A digital mock-up of your new smile is created for your approval." },
      { step: "Treatment Plan", detail: "Selected combination of veneers, whitening, bonding agreed upon." },
      { step: "Phased Treatment", detail: "Each procedure completed in sequence with regular reviews." },
      { step: "Final Reveal", detail: "Your finished smile — and the confidence that comes with it." },
    ],
    faq: [
      { q: "Can I see my result before treatment?", a: "Yes. We create a digital smile design for your review before any irreversible treatment begins." },
      { q: "How long do veneers last?", a: "Porcelain veneers typically last 12–15 years with good care." },
      { q: "Does getting veneers hurt?", a: "The process involves minimal tooth preparation under local anaesthesia. It is comfortable for most patients." },
    ],
  },
  {
    slug: "crowns-bridges",
    title: "Crowns & Bridges",
    category: "Restorative",
    shortDesc: "Durable ceramic and zirconia crowns and bridges that restore full function and a natural appearance.",
    description:
      "We fabricate ceramic and zirconia crowns and bridges to the highest precision — restoring damaged teeth and filling gaps left by missing teeth. Our CAD-CAM technology enables same-day crowns for many cases.",
    benefits: [
      "Ceramic and zirconia options",
      "CAD-CAM milled for precision fit",
      "Matches your natural tooth colour",
      "Restores full chewing strength",
      "Protects root-canal-treated teeth",
      "Bridges that blend seamlessly",
    ],
    process: [
      { step: "Examination & X-ray", detail: "Full assessment to determine the right restoration." },
      { step: "Tooth Preparation", detail: "Tooth shaped under local anaesthesia." },
      { step: "Digital Impression", detail: "CAD-CAM scan for a precise fit." },
      { step: "Temporary Crown", detail: "Placed while your permanent crown is fabricated." },
      { step: "Permanent Fitting", detail: "Crown cemented and bite adjusted." },
    ],
    faq: [
      { q: "How long do crowns last?", a: "Zirconia and ceramic crowns last 12–15 years with good oral hygiene." },
      { q: "Is a crown necessary after a root canal?", a: "In most cases, yes — a crown protects the tooth from fracture and restores function." },
      { q: "Is the procedure painful?", a: "All preparation is done under local anaesthesia. You will feel pressure but no pain." },
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    category: "Restorative",
    shortDesc: "Pain-free rotary endodontics to save your natural tooth — completed in as little as one visit.",
    description:
      "Using rotary endodontic technology, our root canal treatments are precise, efficient, and essentially pain-free under local anaesthesia. We preserve your natural tooth and eliminate infection at its source.",
    benefits: [
      "Virtually pain-free with modern anaesthesia",
      "Rotary endodontic instruments for precision",
      "Saves your natural tooth",
      "Eliminates infection permanently",
      "Often completed in a single visit",
      "Digital X-ray for accurate diagnosis",
    ],
    process: [
      { step: "Digital X-ray Diagnosis", detail: "Precise assessment of infection extent and canal anatomy." },
      { step: "Local Anaesthesia", detail: "Thorough numbing for a completely comfortable procedure." },
      { step: "Rotary Cleaning", detail: "Infected pulp removed using motorised rotary instruments." },
      { step: "Canal Disinfection", detail: "Canals shaped, cleaned, and sterilised." },
      { step: "Sealing & Crown", detail: "Gutta-percha seal followed by a protective ceramic crown." },
    ],
    faq: [
      { q: "Does it hurt?", a: "With modern anaesthesia and rotary techniques, a root canal is no more uncomfortable than a filling." },
      { q: "How many visits?", a: "Most cases are completed in 1–2 visits." },
      { q: "What if I delay?", a: "Untreated infection can spread to the bone, causing an abscess and eventual tooth loss." },
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    category: "General",
    shortDesc: "Gentle, specialised dental care for children — from the first tooth through the teenage years.",
    description:
      "Dr. Gauri Kalra Yadav creates a warm, playful environment where children feel safe and even excited about dental visits. Our child-first approach covers preventive care, early decay management, and orthodontic assessment.",
    benefits: [
      "Child-friendly, fear-free environment",
      "Preventive fluoride and fissure sealants",
      "Early orthodontic assessment",
      "Space maintainers where needed",
      "Gentle restorations for milk teeth",
      "Parent education at every visit",
    ],
    process: [
      { step: "Welcome Tour", detail: "Fun introduction to the clinic to build trust and comfort." },
      { step: "Gentle Examination", detail: "Thorough check of teeth, gums, and jaw development." },
      { step: "Professional Cleaning", detail: "Cleaning with child-safe products and techniques." },
      { step: "Preventive Treatment", detail: "Fluoride application and sealants if required." },
      { step: "Parent Guidance", detail: "Diet, brushing, and flossing advice tailored to your child's age." },
    ],
    faq: [
      { q: "When should my child's first dental visit be?", a: "Within 6 months of the first tooth appearing, or by their first birthday — whichever comes first." },
      { q: "How often should children visit?", a: "Every 6 months for routine check-ups and cleaning." },
      { q: "My child is terrified of dentists. Can you help?", a: "Absolutely. Dr. Gauri specialises in anxious children and uses gentle tell-show-do techniques to build trust." },
    ],
  },
  {
    slug: "dentures-prosthetics",
    title: "Dentures & Prosthetics",
    category: "Prosthetics",
    shortDesc: "Complete, partial, and implant-retained dentures — crafted for comfort, stability, and a natural look.",
    description:
      "From full acrylic dentures to implant-retained prostheses, we offer the full range of denture solutions. Our prosthetic work is focused on stability, aesthetics, and restoring the confidence that comes with a complete smile.",
    benefits: [
      "Full and partial dentures",
      "Implant-retained dentures for stability",
      "Metal-based partial dentures",
      "Precision-fit for maximum comfort",
      "Natural-looking acrylic teeth",
      "Oral rehabilitation planning included",
    ],
    process: [
      { step: "Assessment & Planning", detail: "Full examination and discussion of the best prosthetic solution." },
      { step: "Impressions", detail: "Precise impressions taken for accurate lab fabrication." },
      { step: "Try-in", detail: "Wax try-in to check fit, aesthetics, and bite." },
      { step: "Final Fitting", detail: "Finished denture fitted and adjusted." },
      { step: "Review", detail: "Follow-up visit to fine-tune comfort and fit." },
    ],
    faq: [
      { q: "What is the difference between full and partial dentures?", a: "Full dentures replace all teeth in an arch; partial dentures replace some teeth while retaining natural ones." },
      { q: "What are implant-retained dentures?", a: "Dentures anchored to implants — they click in securely and don't move during eating or speaking." },
      { q: "How long does it take to get used to dentures?", a: "Most patients adapt within 4–6 weeks with practice and follow-up adjustments." },
    ],
  },
  {
    slug: "dental-cleaning-hygiene",
    title: "Dental Cleaning & Hygiene",
    category: "General",
    shortDesc: "Professional scaling, polishing, and hygiene care to keep your gums healthy and your smile bright.",
    description:
      "Our digital ultrasonic scaling and professional polishing removes hardened tartar and stains that brushing alone cannot address — preventing gum disease, bad breath, and early decay. We recommend a visit every six months.",
    benefits: [
      "Removes plaque, tartar, and calculus",
      "Prevents gum disease and periodontitis",
      "Freshens breath immediately",
      "Polishes away surface stains",
      "Early cavity detection at each visit",
      "Personalised home-care advice",
    ],
    process: [
      { step: "Oral Examination", detail: "Full assessment of gums, teeth, and any areas of concern." },
      { step: "Ultrasonic Scaling", detail: "Removes tartar above and below the gum line." },
      { step: "Hand Scaling", detail: "Precision cleaning in between teeth." },
      { step: "Polishing", detail: "Paste polishing to remove surface stains." },
      { step: "Hygiene Advice", detail: "Personalised brushing and flossing instructions." },
    ],
    faq: [
      { q: "Does scaling hurt?", a: "Mild sensitivity is possible but it is generally well-tolerated. Numbing gel is available." },
      { q: "How often should I get it done?", a: "Every 6 months for most patients; every 3–4 months for those with active gum disease." },
      { q: "Will it make my teeth whiter?", a: "Cleaning removes stains and tartar. For deeper whitening, we offer a professional whitening treatment." },
    ],
  },
];

// ── Complete clinic service list (all 24) ────────────────────────────────────
export const allServices: SimpleService[] = [
  { title: "Osseointegrated Implants", category: "Implantology" },
  { title: "Advanced Surgery in Implantology", category: "Implantology" },
  { title: "Implant Prosthesis", category: "Implantology" },
  { title: "Implant Rehabilitation", category: "Implantology" },
  { title: "Implant Retained Dentures", category: "Implantology" },
  { title: "Retention Implant Dentures", category: "Implantology" },
  { title: "Cosmetic / Aesthetic Dentistry", category: "Cosmetic Dentistry" },
  { title: "Cosmetic Veneers / Bonding", category: "Cosmetic Dentistry" },
  { title: "Ceramic Veneers / Crowns", category: "Cosmetic Dentistry" },
  { title: "Cosmetic Makeovers", category: "Cosmetic Dentistry" },
  { title: "Gap Closing", category: "Cosmetic Dentistry" },
  { title: "Teeth Jewellery", category: "Cosmetic Dentistry" },
  { title: "Dental Restoration", category: "Restorative" },
  { title: "Restoration Aesthetics", category: "Restorative" },
  { title: "Crowns and Bridges Fixing", category: "Restorative" },
  { title: "Ceramic Crowns and Bridges Fixing", category: "Restorative" },
  { title: "Porcelain Inlays and Onlays", category: "Restorative" },
  { title: "Inlays and Onlays", category: "Restorative" },
  { title: "Full Denture (Acrylic)", category: "Prosthetics" },
  { title: "Partial Denture (Metal Based)", category: "Prosthetics" },
  { title: "Preparation for Dentures", category: "Prosthetics" },
  { title: "Oral Rehabilitation", category: "Prosthetics" },
  { title: "Tooth Extraction", category: "General" },
  { title: "Mouth Guard", category: "General" },
  { title: "Space Maintainers", category: "General" },
];

export const categoryColors: Record<ServiceCategory, string> = {
  "Implantology":      "bg-sky-50 border-sky-200 text-sky-700",
  "Cosmetic Dentistry":"bg-violet-50 border-violet-200 text-violet-700",
  "Restorative":       "bg-amber-50 border-amber-200 text-amber-700",
  "Prosthetics":       "bg-emerald-50 border-emerald-200 text-emerald-700",
  "General":           "bg-slate-50 border-slate-200 text-slate-700",
};
