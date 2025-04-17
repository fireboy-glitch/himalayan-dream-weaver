
import React from "react";
import Layout from "@/components/layout/Layout";
import TripFinder from "@/components/excess-now/TripFinder";
import HowItWorks from "@/components/excess-now/HowItWorks";

const ExcessNow = () => {
  return (
    <Layout>
      <section className="py-12 bg-mountain-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="heading-lg mb-4">Excess Now</h1>
            <p className="text-lg text-gray-600">
              Find your ideal Himalayan adventure based on your preferences, budget, and desired experience. 
              Our intelligent trip matching system helps you discover the perfect trek or tour in Nepal.
            </p>
          </div>
          
          <TripFinder />
        </div>
      </section>
      
      <HowItWorks />
      
      <section className="py-16 bg-earth-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div 
                className="h-80 lg:h-auto bg-cover bg-center" 
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1585058268246-2e8669362b32?auto=format&fit=crop&w=1000&q=80')" 
                }}
              ></div>
              <div className="p-8 lg:p-12">
                <h2 className="heading-md mb-4">Need Personalized Recommendations?</h2>
                <p className="text-gray-600 mb-6">
                  Our travel experts are here to help you plan your perfect adventure. 
                  Tell us about your dream Himalayan journey, and we'll create a customized 
                  itinerary tailored specifically to your interests, fitness level, and budget.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Contact Our Experts</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:excesstohimalayas@gmail.com" className="text-mountain-600 hover:underline">
                        excesstohimalayas@gmail.com
                      </a>
                    </p>
                    <p>
                      <strong>WhatsApp/Phone:</strong>{" "}
                      <a href="tel:+9779864535410" className="text-mountain-600 hover:underline">
                        +977 9864535410
                      </a>
                      ,{" "}
                      <a href="tel:+9779849260607" className="text-mountain-600 hover:underline">
                        +977 9849260607
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExcessNow;
