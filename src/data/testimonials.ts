export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  treatment: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Mehta",
    rating: 5,
    treatment: "Dental Implants",
    date: "February 2025",
    text: "I had two implants done by Dr. Aneesh and the results are just phenomenal. You honestly cannot tell the difference from natural teeth. The procedure was pain-free and the team was so reassuring throughout. Highly recommend Dental Brass Tacks!",
  },
  {
    id: 2,
    name: "Rohit Verma",
    rating: 5,
    treatment: "Root Canal Treatment",
    date: "January 2025",
    text: "I was terrified of root canal treatment but Dr. Nisha made the entire experience completely comfortable. I barely felt anything. The clinic is spotless and modern. Would not go anywhere else in Gurgaon.",
  },
  {
    id: 3,
    name: "Sunita Agarwal",
    rating: 5,
    treatment: "Pediatric Dentistry",
    date: "March 2025",
    text: "Dr. Gauri is an absolute gem with children. My 6-year-old was so scared of dentists, but after his first visit here he actually asked when he could come back! The clinic has a very child-friendly atmosphere.",
  },
  {
    id: 4,
    name: "Karan Bhatia",
    rating: 5,
    treatment: "Smile Makeover",
    date: "December 2024",
    text: "I got veneers and whitening as part of my smile makeover and I am blown away. My confidence has skyrocketed. The team spent so much time planning to make sure the result matched my goals perfectly. Worth every rupee.",
  },
  {
    id: 5,
    name: "Deepika Rajput",
    rating: 5,
    treatment: "Orthodontics",
    date: "November 2024",
    text: "Dr. Aneesh is incredibly knowledgeable about orthodontics. My clear aligner treatment has been smooth from day one and my teeth are transforming beautifully. The whole team is warm and professional.",
  },
  {
    id: 6,
    name: "Anuj Sharma",
    rating: 5,
    treatment: "Dental Cleaning",
    date: "April 2025",
    text: "Quick, thorough, and painless. The clinic is very hygienic and the staff are friendly. I have been coming here for my six-monthly cleanings for two years and every experience has been great.",
  },
];
