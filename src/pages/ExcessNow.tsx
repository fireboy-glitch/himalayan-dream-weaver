
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import TripFinder from "@/components/excess-now/TripFinder";
import HowItWorks from "@/components/excess-now/HowItWorks";
import TrekResults from "@/components/excess-now/TrekResults";
import { allTreks } from "@/data/treksData";
import { useToast } from "@/hooks/use-toast";

const ExcessNow = () => {
  const [searchResults, setSearchResults] = useState(allTreks);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  const handleSearch = (filters) => {
    setHasSearched(true);

    let filteredTreks = [...allTreks];

    // Filter by type
    if (filters.type) {
      filteredTreks = filteredTreks.filter(trek => {
        const trekType = trek.type.toLowerCase();
        return trekType.includes(filters.type.toLowerCase());
      });
    }

    // Filter by difficulty
    if (filters.difficulty) {
      filteredTreks = filteredTreks.filter(trek => {
        const trekDifficulty = trek.difficulty.toLowerCase();
        return trekDifficulty.includes(filters.difficulty.toLowerCase());
      });
    }

    // Filter by duration
    if (filters.duration) {
      filteredTreks = filteredTreks.filter(trek => {
        const days = trek.duration.match(/\d+/g);
        if (!days) return false;
        
        const minDays = parseInt(days[0]);
        const maxDays = days.length > 1 ? parseInt(days[1]) : minDays;
        
        switch (filters.duration) {
          case "1-3":
            return minDays >= 1 && maxDays <= 3;
          case "4-7":
            return (minDays >= 4 && minDays <= 7) || (maxDays >= 4 && maxDays <= 7);
          case "8-14":
            return (minDays >= 8 && minDays <= 14) || (maxDays >= 8 && maxDays <= 14);
          case "15-21":
            return (minDays >= 15 && minDays <= 21) || (maxDays >= 15 && maxDays <= 21);
          case "22+":
            return minDays >= 22 || maxDays >= 22;
          default:
            return true;
        }
      });
    }

    // Filter by budget
    if (filters.budget) {
      filteredTreks = filteredTreks.filter(trek => {
        switch (filters.budget) {
          case "economy":
            return trek.price >= 500 && trek.price <= 1000;
          case "standard":
            return trek.price > 1000 && trek.price <= 1500;
          case "comfort":
            return trek.price > 1500 && trek.price <= 2000;
          case "luxury":
            return trek.price > 2000 && trek.price <= 3000;
          case "premium":
            return trek.price > 3000;
          default:
            return true;
        }
      });
    }

    // Filter by region
    if (filters.region) {
      filteredTreks = filteredTreks.filter(trek => {
        return trek.region.toLowerCase().includes(filters.region.toLowerCase());
      });
    }

    // Filter by special features
    if (filters.special && filters.special.length > 0) {
      filteredTreks = filteredTreks.filter(trek => {
        return filters.special.some(feature => trek.special.includes(feature));
      });
    }

    setSearchResults(filteredTreks);
    
    toast({
      title: `Found ${filteredTreks.length} trips matching your criteria`,
      description: "Scroll down to see the results",
    });
  };

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
          
          <TripFinder onSearch={handleSearch} />

          {hasSearched && <TrekResults treks={searchResults} />}
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
