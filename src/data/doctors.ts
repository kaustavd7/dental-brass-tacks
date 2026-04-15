export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  specialization: string;
  experience: number;
  experienceDetail?: string;
  description: string;
  highlights: string[];
  image: string;
  roles: string[];
  fee: string;
  rating?: string;
  patients?: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-nisha-bali",
    name: "Dr. Nisha Bali",
    qualifications: "BDS",
    specialization: "Dentist",
    experience: 21,
    roles: ["Dentist", "Clinic Director"],
    fee: "₹1,200 per consultation",
    rating: "97%",
    patients: "314+",
    image: "/images/doctors/dr-nisha-bali.webp",
    description:
      "Dr. Nisha Bali is the founder and director of Dental Brass-Tacks. A gold medalist alumna of Yenepoya Dental College, Mangalore (affiliated to Rajiv Gandhi University of Health Sciences, Bangalore, 2004), she has over 21 years of comprehensive clinical experience spanning general, restorative, implant, and aesthetic dentistry.",
    highlights: [
      "University Gold Medalist — BDS",
      "Best Outgoing Student — IDA Dakshin Kannada Branch",
      "13+ years as Associate Dentist at Dr. Sunil Khosla's Clinics, Delhi & Gurgaon",
      "Dental Officer — ECHS Pathankot & Lucknow",
      "Clinic Head — Clove Dental (2015–16)",
      "Active member — Academy of Oral Implantology & DGOI, Germany",
      "Advanced training in Esthetic Dentistry, Prosthodontics, Endodontics, Orthodontics & Implantology",
      "Annual School Dental Inspections — GD Goenka Public School (2013–16), Kunskapsskolan (2015)",
    ],
  },
  {
    id: "dr-aneesh-katyal",
    name: "Dr. Aneesh Katyal",
    qualifications: "BDS, MDS — Orthodontics & Dentofacial Orthopaedics, Certificate of Oral Implantology",
    specialization: "Orthodontist & Implantologist",
    experience: 16,
    experienceDetail: "15 years as specialist",
    roles: ["Orthodontist", "Implantologist"],
    fee: "₹1,000 per consultation",
    rating: "99%",
    patients: "134+",
    image: "/images/doctors/dr-aneesh-katyal.webp",
    description:
      "Dr. Aneesh Katyal is a Gold Medalist Orthodontist and the Top 1% Diamond Invisalign Provider in India. First-rank holder at University level in post-graduation, he is one of only 7 orthodontists in India conferred the distinction of Global Faculty for Align Technology.",
    highlights: [
      "Gold Medalist — MDS Orthodontics (First Rank, University Level)",
      "Dr. JC Paul Memorial Award — Best Outgoing Orthodontic PG (ICD Section VI)",
      "Top 1% Diamond Invisalign Provider in India",
      "Among the first 10 Invisalign-trained orthodontists in India",
      "First in India to install the iTero 3D Element Scanner",
      "Global Faculty — Align Technology (1 of only 7 in India)",
      "Largest providers of Insignia Customised Braces in the region",
      "Published in multiple national & international dental journals",
    ],
  },
  {
    id: "dr-gauri-kalra-yadav",
    name: "Dr. Gauri Kalra Yadav",
    qualifications: "MDS — Paedodontics & Preventive Dentistry, BDS",
    specialization: "Pediatric Dentist",
    experience: 18,
    roles: ["Pediatric Dentist"],
    fee: "Free Consultation",
    image: "/images/doctors/dr-gauri-kalra-yadav.webp",
    description:
      "Dr. Gauri Kalra Yadav is a dedicated Pediatric Dental Specialist with 18 years of experience making dental visits fun and fear-free for children of all ages. Her postgraduate specialisation in Paedodontics and Preventive Dentistry ensures your child's smile is protected from the very first tooth.",
    highlights: [
      "MDS — Paedodontics & Preventive Dentistry",
      "18 years of dedicated paediatric dental practice",
      "Gentle, fear-free approach tailored for all ages",
      "Specialised in early orthodontic assessment",
      "Preventive treatments: fluoride, fissure sealants",
      "Parent education and dietary guidance",
    ],
  },
  {
    id: "dr-shiva-sharma",
    name: "Dr. Shiva Sharma",
    qualifications: "BDS",
    specialization: "Dental Surgeon & Oral & Maxillofacial Surgeon",
    experience: 15,
    roles: ["Dental Surgeon", "Oral & Maxillofacial Surgeon"],
    fee: "Free Consultation",
    image: "/images/doctors/dr-shiva-sharma.webp",
    description:
      "Dr. Shiva Sharma is a skilled Dental Surgeon and Oral & Maxillofacial Surgeon with over 15 years of practice. She has worked with some of India's most prestigious hospitals and brings rigorous surgical precision to every procedure.",
    highlights: [
      "Oral & Maxillofacial Surgeon (Verified)",
      "Pt. Madan Mohan Malaviya Hospital, Delhi",
      "Paramount Dental Clinic, Delhi",
      "Alchemist Hospital, Gurugram",
      "Park Hospital, Gurugram",
      "Max Smart Super Speciality Hospital, Saket",
      "Paras Hospital, Gurugram",
    ],
  },
];
