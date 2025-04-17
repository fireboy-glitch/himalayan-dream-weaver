
import React from "react";
import { Award, Users, ThumbsUp, Clock, ShieldCheck, Mountain } from "lucide-react";

const features = [
  {
    icon: <Award size={40} className="text-mountain-500" />,
    title: "Experienced Guides",
    description: "Our certified guides have years of experience in the Himalayas and prioritize your safety and enjoyment."
  },
  {
    icon: <Mountain size={40} className="text-mountain-500" />,
    title: "Exclusive Routes",
    description: "Access hidden gems and unique paths known only to local experts for a truly authentic experience."
  },
  {
    icon: <Users size={40} className="text-mountain-500" />,
    title: "Small Groups",
    description: "We keep our groups small to ensure personalized attention and a more intimate connection with nature."
  },
  {
    icon: <ThumbsUp size={40} className="text-mountain-500" />,
    title: "Best Price Guarantee",
    description: "We offer competitive pricing without compromising on quality, equipment, or safety standards."
  },
  {
    icon: <ShieldCheck size={40} className="text-mountain-500" />,
    title: "Safety First",
    description: "Your safety is our top priority, with comprehensive safety protocols and emergency procedures in place."
  },
  {
    icon: <Clock size={40} className="text-mountain-500" />,
    title: "Flexible Itineraries",
    description: "We can customize any trek to match your preferences, schedule, and fitness level."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Why Choose Excess To Himalayas</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience leading treks in Nepal, 
            we're committed to providing unforgettable adventures with the highest standards of safety and service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
