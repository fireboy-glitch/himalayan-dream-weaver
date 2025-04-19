
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh]">
      <ImageCarousel />
      
      <div className="absolute inset-0 z-20">
        <div className="container-custom relative h-full flex items-center">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="heading-xl mb-6 text-white">
              Discover the Majesty of the Himalayas
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Experience unforgettable adventures with Nepal's premier trekking company. 
              Expert guides, breathtaking routes, and memories that last a lifetime.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button className="bg-mountain-500 hover:bg-mountain-600 text-white py-6 px-8 text-lg">
                  Book Now <ArrowRight className="ml-2" />
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
      </div>
    </section>
  );
};

export default Hero;
