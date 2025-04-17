
import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    text: "Our Everest Base Camp trek with Excess To Himalayas was absolutely incredible! Our guide Tashi was knowledgeable, patient, and made sure we were safe throughout the journey. The views were breathtaking and the experience was life-changing."
  },
  {
    id: 2,
    name: "Michael Chen",
    country: "Australia",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    rating: 5,
    text: "This was my second trek with Excess To Himalayas, and they've exceeded my expectations again. The Annapurna Circuit was challenging but rewarding, and our guide's local knowledge made the cultural experience so much richer."
  },
  {
    id: 3,
    name: "Emma Clarke",
    country: "United Kingdom",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    rating: 5,
    text: "From the moment we landed in Kathmandu to the end of our Langtang trek, everything was perfectly organized. The accommodations were comfortable, the food was excellent, and the team went above and beyond to make our trip special."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md relative">
      <div className="absolute top-4 right-6 text-gray-200">
        <Quote size={40} />
      </div>
      <div className="flex items-center mb-4">
        <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.country}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} className="text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 relative z-10">{testimonial.text}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-mountain-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">What Our Trekkers Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from adventurers who have experienced 
            the magic of the Himalayas with Excess To Himalayas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
