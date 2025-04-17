
import React from "react";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ExcessNowCta = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 43, 89, 0.8), rgba(0, 43, 89, 0.8)), url('https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=2000&q=80')" 
        }}
      ></div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Find Your Perfect Himalayan Adventure</h2>
          <p className="text-xl mb-8 text-gray-200">
            Use our Excess Now feature to find the perfect trek or tour based on your preferences, 
            budget, and desired experience. We'll match you with your ideal adventure.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Trip Finder</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Trip Type</label>
                <select className="w-full p-2 border border-gray-300 rounded-md text-gray-800">
                  <option value="">Select Trip Type</option>
                  <option value="trek">Trekking</option>
                  <option value="tour">Cultural Tour</option>
                  <option value="climb">Peak Climbing</option>
                  <option value="expedition">Expedition</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Difficulty Level</label>
                <select className="w-full p-2 border border-gray-300 rounded-md text-gray-800">
                  <option value="">Select Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="challenging">Challenging</option>
                  <option value="difficult">Difficult</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Duration</label>
                <select className="w-full p-2 border border-gray-300 rounded-md text-gray-800">
                  <option value="">Select Duration</option>
                  <option value="1-5">1-5 Days</option>
                  <option value="6-10">6-10 Days</option>
                  <option value="11-15">11-15 Days</option>
                  <option value="16+">16+ Days</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Budget (USD)</label>
                <select className="w-full p-2 border border-gray-300 rounded-md text-gray-800">
                  <option value="">Select Budget Range</option>
                  <option value="500-1000">$500-$1000</option>
                  <option value="1001-1500">$1001-$1500</option>
                  <option value="1501-2000">$1501-$2000</option>
                  <option value="2000+">$2000+</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <Link to="/excess-now">
                <Button className="text-blue-600 hover:text-blue-800 hover:underline p-0 bg-transparent hover:bg-transparent font-medium">
                  Advanced Search
                </Button>
              </Link>
              
              <Link to="/excess-now">
                <Button className="bg-mountain-500 hover:bg-mountain-600 text-white">
                  Find Trips <Search size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/excess-now">
              <Button className="bg-transparent hover:bg-white/10 text-white border-2 border-white">
                Learn More About Excess Now <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcessNowCta;
