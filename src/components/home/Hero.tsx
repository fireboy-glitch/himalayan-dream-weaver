
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80')" 
        }}
      ></div>
      
      <div className="container-custom relative z-10 text-white my-12">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="heading-xl mb-6">Discover the Majesty of the Himalayas</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Experience unforgettable adventures with Nepal's premier trekking company. 
            Expert guides, breathtaking routes, and memories that last a lifetime.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/excess-now">
              <Button className="bg-mountain-500 hover:bg-mountain-600 text-white py-6 px-8 text-lg">
                Find Your Perfect Trek <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-800 py-6 px-8 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
