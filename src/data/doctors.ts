export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  specialization: string;
  experience: number;
  description: string;
  image: string;
  roles: string[];
}

export const doctors: Doctor[] = [
  {
    id: "dr-nisha-bali",
    name: "Dr. Nisha Bali",
    qualifications: "BDS",
    specialization: "Dentist",
    experience: 21,
    roles: ["Dentist"],
    description:
      "Dr. Nisha Bali brings over 21 years of clinical excellence in general and restorative dentistry. Her patient-first approach, combined with a gentle touch, has made her a trusted name in Gurgaon. She specialises in preventive care, crowns, bridges, and smile makeovers.",
    image: "/images/doctors/dr-nisha-bali.jpg",
  },
  {
    id: "dr-aneesh-katyal",
    name: "Dr. Aneesh Katyal",
    qualifications:
      "BDS, MDS – Orthodontics & Dentofacial Orthopaedics, Certificate of Oral Implantology",
    specialization: "Orthodontist & Implantologist",
    experience: 16,
    roles: ["Orthodontist", "Implantologist"],
    description:
      "Dr. Aneesh Katyal is a highly skilled Orthodontist and Implantologist with 16 years of expertise. Holding a postgraduate degree in Orthodontics and a Certificate in Oral Implantology, he delivers precision-crafted smiles through braces, clear aligners, and implant-supported restorations.",
    image: "/images/doctors/dr-aneesh-katyal.jpg",
  },
  {
    id: "dr-gauri-kalra-yadav",
    name: "Dr. Gauri Kalra Yadav",
    qualifications: "MDS – Paedodontics & Preventive Dentistry, BDS",
    specialization: "Pediatric Dentist",
    experience: 18,
    roles: ["Pediatric Dentist"],
    description:
      "Dr. Gauri Kalra Yadav is a dedicated Pediatric Dentist with 18 years of experience making dental visits fun and fear-free for children. Her specialisation in Paedodontics and Preventive Dentistry ensures that your child's smile is healthy from the very first tooth.",
    image: "/images/doctors/dr-gauri-kalra-yadav.jpg",
  },
  {
    id: "dr-shiva-sharma",
    name: "Dr. Shiva Sharma",
    qualifications: "BDS",
    specialization: "Dentist & Dental Surgeon",
    experience: 15,
    roles: ["Dentist", "Dental Surgeon"],
    description:
      "Dr. Shiva Sharma is an accomplished Dental Surgeon with 15 years of practice in oral surgery and general dentistry. He is known for his precision in extractions, surgical procedures, and restoring patients' dental health with compassionate care.",
    image: "/images/doctors/dr-shiva-sharma.jpg",
  },
];
