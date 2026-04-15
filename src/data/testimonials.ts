export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  treatment: string;
  date: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Shivam",
    rating: 5,
    verified: true,
    treatment: "Dental Implant",
    date: "2 years ago",
    text: "I had a front tooth broken and one with a crown which came off. Nisha ma'am extracted the crown tooth as it had decayed and gave me an implant along with a temporary tooth for 3 months, followed by a permanent strong tooth. She is an absolute professional and moreover an artist at her work. No one can say I have an artificial tooth when I smile. The whole procedure was completely painless and took way less time than I thought.",
  },
  {
    id: 2,
    name: "Puneet Baghla",
    rating: 5,
    verified: true,
    treatment: "Dental Fillings",
    date: "3 years ago",
    text: "Highly recommended practitioner! The cleanliness, hygiene, advanced procedures, and definitely the extra care makes Dr. Nisha Bali stand apart from other dentists I have visited. The fear factor of pain and uneasiness that generally is there while seeing any dentist is the last thing to experience at her clinic.",
  },
  {
    id: 3,
    name: "Megha Chauhan",
    rating: 5,
    verified: true,
    treatment: "Tooth Extraction",
    date: "2 years ago",
    text: "She has been treating my whole family for dental issues. She makes the whole experience very comfortable and has a healing touch. My 7-year-old is now fearless going to the dentist, thanks to her calm demeanour and professionalism. Would highly recommend her for all dental issues.",
  },
  {
    id: 4,
    name: "Jyotsna",
    rating: 5,
    verified: true,
    treatment: "Gap Closing",
    date: "4 years ago",
    text: "I have a long history since childhood visiting dental clinics. But recently when I visited Dental Brass-Tacks and met Dr. Nisha Bali, I was extremely satisfied with the way she treats her patients. The care, passion and knowledge about her field is all reflected in her way of treating the patients. The ambience of the clinic is very calming and comforting. I totally recommend Dental Brass-Tacks.",
  },
  {
    id: 5,
    name: "Mr. L.D. Grover",
    rating: 5,
    verified: true,
    treatment: "Root Canal Treatment",
    date: "3 years ago",
    text: "She is a very noble and nice doctor. She has done a very commendable job by doing the RCT of my wisdom teeth without removing the crown already in place. She is a very soft spoken lady. I appreciate her very much. Stay blessed always.",
  },
  {
    id: 6,
    name: "Anu",
    rating: 5,
    verified: true,
    treatment: "Gum Treatment",
    date: "3 years ago",
    text: "I have been consulting Dr. Bali since 3 years. She is very knowledgeable and updated with the current trends in dental science. Our whole family gets dental consultations from her. She comes across as a very warm and caring doctor. Dr. Nisha Bali tries to fix the problem from its roots rather than providing quick-fix solutions.",
  },
  {
    id: 7,
    name: "Chetan Agrawal",
    rating: 5,
    verified: true,
    treatment: "Scaling & Polishing",
    date: "2 years ago",
    text: "Dr. Nisha is an amazing human being. Have been visiting her since last 2 years and always got the right diagnosis and treatment. Highly recommended.",
  },
  {
    id: 8,
    name: "Roopali Grover",
    rating: 5,
    verified: true,
    treatment: "Periodontitis Treatment",
    date: "4 years ago",
    text: "Would recommend Dr. Nisha Bali for her friendliness and knowledge about her subject. She explains the entire issue with help of examples and makes you feel at ease.",
  },
];
