
import React from "react";
import { SearchCheck, ListFilter, UsersRound, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: <SearchCheck size={36} className="text-mountain-500" />,
    title: "Define Your Preferences",
    description: "Tell us what you're looking for in your ideal Himalayan adventure, including your budget, time frame, and interests."
  },
  {
    icon: <ListFilter size={36} className="text-mountain-500" />,
    title: "Get Personalized Recommendations",
    description: "Our system matches your preferences with our extensive catalog of treks and tours to find your perfect fit."
  },
  {
    icon: <UsersRound size={36} className="text-mountain-500" />,
    title: "Consult with Experts",
    description: "Speak with our experienced team to fine-tune your itinerary and address any questions or special requirements."
  },
  {
    icon: <ThumbsUp size={36} className="text-mountain-500" />,
    title: "Book with Confidence",
    description: "Secure your adventure with our best price guarantee and flexible booking policies for peace of mind."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">How Excess Now Works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our innovative trip recommendation system helps you find the perfect adventure 
            based on your preferences, budget, and desired experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mountain-50 mb-6">
                {step.icon}
              </div>
              <div className="relative mb-6">
                <div className="text-4xl font-bold text-mountain-500/20 absolute -top-10 left-1/2 transform -translate-x-1/2 select-none">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
