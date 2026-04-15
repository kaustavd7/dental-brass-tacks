export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  benefits: string[];
  process: { step: string; detail: string }[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDesc: "Permanent tooth replacement that looks, feels, and functions like natural teeth.",
    icon: "🦷",
    description:
      "Dental implants are the gold standard for replacing missing teeth. We use titanium implants surgically placed into the jawbone, topped with a custom-crafted crown that is virtually indistinguishable from your natural teeth.",
    benefits: [
      "Permanent, lifetime solution",
      "Preserves jawbone density",
      "No impact on adjacent teeth",
      "Natural look and feel",
      "Restores full chewing ability",
    ],
    process: [
      { step: "Consultation & X-Ray", detail: "3D scan to assess bone density and plan placement." },
      { step: "Implant Placement", detail: "Titanium post surgically placed under local anaesthesia." },
      { step: "Healing Period", detail: "Osseointegration over 3–6 months for a secure foundation." },
      { step: "Crown Fitting", detail: "Custom ceramic crown fixed for a natural finish." },
    ],
    faq: [
      { q: "Is the procedure painful?", a: "The procedure is performed under local anaesthesia. Most patients experience minimal discomfort." },
      { q: "How long do implants last?", a: "With proper care, dental implants can last a lifetime." },
      { q: "Am I a candidate for implants?", a: "Most adults with good general health qualify. A consultation helps us assess your suitability." },
    ],
  },
  {
    slug: "orthodontics-braces",
    title: "Orthodontics & Braces",
    shortDesc: "Straighten your smile with modern braces and clear aligners.",
    icon: "😁",
    description:
      "Our Orthodontist Dr. Aneesh Katyal offers a full range of teeth-straightening solutions — from traditional metal braces to virtually invisible clear aligners — tailored to every age and lifestyle.",
    benefits: [
      "Corrects crowding, gaps, and bite issues",
      "Boosts confidence with a straighter smile",
      "Clear aligner options available",
      "Suitable for children, teens, and adults",
      "Long-lasting results",
    ],
    process: [
      { step: "Smile Assessment", detail: "Digital photos and X-rays to map your current alignment." },
      { step: "Treatment Planning", detail: "Custom plan created — braces or aligners recommended." },
      { step: "Fitting", detail: "Braces bonded or aligners provided at start of treatment." },
      { step: "Regular Adjustments", detail: "Monthly check-ins to track progress." },
      { step: "Retention", detail: "Retainers provided to maintain your new smile." },
    ],
    faq: [
      { q: "How long does orthodontic treatment take?", a: "Typically 12–24 months depending on the complexity." },
      { q: "Are clear aligners as effective as braces?", a: "For mild to moderate cases, aligners are equally effective and more discreet." },
      { q: "What age is best to start?", a: "Early teen years are ideal, but adults can also achieve excellent results." },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDesc: "Professional whitening for a brighter, more confident smile.",
    icon: "✨",
    description:
      "Our in-clinic professional teeth whitening treatment removes deep stains caused by coffee, tea, wine, and ageing — delivering results up to 8 shades lighter in a single session.",
    benefits: [
      "Up to 8 shades brighter",
      "Safe, clinically supervised",
      "Long-lasting results",
      "Immediate visible change",
      "Take-home maintenance kit included",
    ],
    process: [
      { step: "Shade Assessment", detail: "Baseline shade recorded to track your results." },
      { step: "Gum Protection", detail: "Protective gel applied to shield gums." },
      { step: "Whitening Gel Application", detail: "Professional-grade gel applied to teeth." },
      { step: "Light Activation", detail: "LED light activates the whitening agent." },
      { step: "Final Shade Check", detail: "Results compared to baseline — typically 6–8 shades lighter." },
    ],
    faq: [
      { q: "Is teeth whitening safe?", a: "Yes, when performed by a qualified dentist using approved products." },
      { q: "How long do results last?", a: "Results last 12–18 months with good oral hygiene and periodic touch-ups." },
      { q: "Does it work on crowns or veneers?", a: "Whitening only affects natural teeth; crowns and veneers won't change colour." },
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    shortDesc: "Pain-free root canal therapy to save your natural tooth.",
    icon: "🩺",
    description:
      "Modern root canal treatment at Dental Brass Tacks is virtually painless. We remove infected pulp, clean the canal, and seal it — saving your natural tooth and eliminating pain permanently.",
    benefits: [
      "Eliminates toothache completely",
      "Saves your natural tooth",
      "Prevents spread of infection",
      "Single or two-visit procedure",
      "Covered by most dental insurance",
    ],
    process: [
      { step: "Diagnosis", detail: "X-ray to assess the extent of infection." },
      { step: "Anaesthesia", detail: "Local anaesthesia for a completely pain-free experience." },
      { step: "Pulp Removal", detail: "Infected pulp carefully removed from the canal." },
      { step: "Canal Cleaning", detail: "Canals shaped, cleaned, and disinfected." },
      { step: "Sealing & Crown", detail: "Canal sealed with gutta-percha and tooth crowned for protection." },
    ],
    faq: [
      { q: "Is root canal painful?", a: "With modern anaesthesia, the procedure is no more uncomfortable than a filling." },
      { q: "How many visits does it take?", a: "Most cases are completed in 1–2 visits." },
      { q: "What happens if I don't get a root canal?", a: "The infection can spread, causing abscess, bone loss, and ultimately tooth loss." },
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDesc: "Gentle, specialised dental care designed just for children.",
    icon: "👶",
    description:
      "Dr. Gauri Kalra Yadav creates a warm, fun environment that makes children look forward to dental visits. From first tooth eruption through teenage years, we provide comprehensive preventive and restorative care.",
    benefits: [
      "Child-friendly environment",
      "Gentle, fear-free approach",
      "Preventive treatments (fluoride, sealants)",
      "Early orthodontic assessment",
      "Parent education and guidance",
    ],
    process: [
      { step: "First Visit Introduction", detail: "Fun tour of the clinic to build trust and comfort." },
      { step: "Examination", detail: "Gentle check of teeth, gums, and jaw development." },
      { step: "Cleaning", detail: "Professional cleaning with child-safe products." },
      { step: "Preventive Treatment", detail: "Fluoride application and sealants if required." },
      { step: "Guidance", detail: "Dietary and brushing advice for parents." },
    ],
    faq: [
      { q: "When should my child have their first dental visit?", a: "We recommend the first visit when the first tooth appears, or by their first birthday." },
      { q: "How often should children visit the dentist?", a: "Every 6 months for routine check-ups and cleaning." },
      { q: "My child is anxious about the dentist. What can you do?", a: "Our clinic is designed to be friendly and non-threatening. Dr. Gauri uses tell-show-do techniques to ease anxiety." },
    ],
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    shortDesc: "Transform your smile with a customised combination of cosmetic treatments.",
    icon: "💫",
    description:
      "A Smile Makeover combines veneers, whitening, contouring, and more — all designed around your face, personality, and goals. Our team creates a bespoke treatment plan to give you the smile you have always dreamed of.",
    benefits: [
      "Fully customised to you",
      "Combines multiple treatments",
      "Digital smile preview before treatment",
      "Boosts confidence and self-esteem",
      "Long-lasting aesthetic results",
    ],
    process: [
      { step: "Dream Smile Consultation", detail: "We discuss your goals and photograph your current smile." },
      { step: "Digital Design", detail: "A digital preview of your new smile is created." },
      { step: "Treatment Plan", detail: "Combination of treatments selected (veneers, whitening, contouring)." },
      { step: "Treatment", detail: "Phased treatment with regular progress checks." },
      { step: "Final Reveal", detail: "Your new smile — and the confidence that comes with it." },
    ],
    faq: [
      { q: "How much does a smile makeover cost?", a: "Cost varies based on the treatments involved. We provide a detailed quote after your consultation." },
      { q: "How long does a smile makeover take?", a: "Typically 2–6 weeks depending on the number of procedures." },
      { q: "Are the results permanent?", a: "With proper care, most smile makeover results last 10–15 years or more." },
    ],
  },
  {
    slug: "dental-crowns-bridges",
    title: "Crowns & Bridges",
    shortDesc: "Restore damaged or missing teeth with durable, natural-looking prosthetics.",
    icon: "👑",
    description:
      "Dental crowns cap damaged teeth to restore their shape, strength, and appearance. Bridges fill gaps left by missing teeth, anchored to adjacent teeth for a seamless, functional smile.",
    benefits: [
      "Restores full chewing function",
      "Natural tooth-coloured finish",
      "Protects weakened teeth",
      "Fills gaps from missing teeth",
      "Durable — lasts 10–15 years",
    ],
    process: [
      { step: "Assessment", detail: "Examination and X-rays to determine the best restoration." },
      { step: "Tooth Preparation", detail: "Tooth shaped to accommodate the crown or bridge." },
      { step: "Impression", detail: "Digital or physical impression sent to the lab." },
      { step: "Temporary Crown", detail: "Temporary placed while your permanent one is crafted." },
      { step: "Permanent Fitting", detail: "Crown or bridge fitted, adjusted, and cemented." },
    ],
    faq: [
      { q: "How long do crowns last?", a: "With good oral hygiene, 10–15 years on average." },
      { q: "Is the procedure painful?", a: "Performed under local anaesthesia — you will feel no pain." },
      { q: "What material are crowns made of?", a: "We use tooth-coloured ceramic or zirconia for a natural look." },
    ],
  },
  {
    slug: "dental-cleaning-scaling",
    title: "Dental Cleaning & Scaling",
    shortDesc: "Professional cleaning to keep gums healthy and teeth sparkling.",
    icon: "🪥",
    description:
      "Professional scaling and polishing removes hardened tartar (calculus) that regular brushing cannot reach — preventing gum disease, bad breath, and tooth decay. Recommended every 6 months.",
    benefits: [
      "Removes plaque and tartar build-up",
      "Prevents gum disease",
      "Freshens breath",
      "Polishes enamel surface",
      "Early cavity detection",
    ],
    process: [
      { step: "Oral Examination", detail: "Full check-up before cleaning." },
      { step: "Scaling", detail: "Ultrasonic scaler removes tartar above and below gumline." },
      { step: "Polishing", detail: "Teeth polished to remove surface stains." },
      { step: "Flossing", detail: "Professional flossing between all teeth." },
      { step: "Advice", detail: "Personalised brushing and flossing guidance." },
    ],
    faq: [
      { q: "Does scaling hurt?", a: "It may cause mild sensitivity but is generally well-tolerated. We use numbing gel if needed." },
      { q: "How often should I get a cleaning?", a: "Every 6 months for most patients; every 3–4 months for those with gum disease." },
      { q: "Will cleaning make my teeth whiter?", a: "Cleaning removes surface stains and tartar, but for whitening, a professional bleaching treatment is recommended." },
    ],
  },
];
