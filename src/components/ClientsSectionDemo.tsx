"use client";

import { ClientsSection, Stat, Testimonial } from "@/src/components/ui/testimonial-card";

// Define the data for the section
const statsData: Stat[] = [
  { value: "25+", label: "Happy clients" },
  { value: "4.8", label: "Average Rating" },
];

const testimonialsData: Testimonial[] = [
  {
    name: "Krishna",
    title: "Harper Education",
    quote: "Collaborating on this project was seamless. The vision was clearly understood, and the designs genuinely reflect my brand identity.",
    rating: 5.0,
  },
  {
    name: "Manoj",
    title: "PARAL CEO",
    quote: "Working with this process was effortless. The vision was understood perfectly, and the designs truly represent my brand.",
    rating: 4.7,
  },
  {
    name: "Anjali",
    title: "Innovate Tech",
    quote: "A truly transformative partnership. The end result exceeded all of our expectations and has set a new standard in our industry.",
    rating: 4.9,
  },
];

// The demo component that renders the entire section
export function ClientsSectionDemo() {
  return (
    <ClientsSection
      tagLabel="Happy Clients"
      title="Trusted by Our Clients"
      description="Trusted by 25+ happy clients across various industries."
      stats={statsData}
      testimonials={testimonialsData}
      primaryActionLabel="Contact Now"
      secondaryActionLabel="See All Projects"
      className="bg-white"
    />
  );
}
