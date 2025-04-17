
import React from "react";
import { Link } from "react-router-dom";
import { Star, Clock, Mountain, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface TrekItem {
  id: string;
  title: string;
  image: string;
  duration: string;
  difficulty: string;
  price: number;
  rating: number;
  reviews: number;
  region: string;
  type: string;
  bestSeason: string;
  path: string;
  special: string[];
}

interface TrekResultsProps {
  treks: TrekItem[];
}

const TrekResults: React.FC<TrekResultsProps> = ({ treks }) => {
  if (treks.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-semibold mb-2">No treks found matching your criteria</h3>
        <p className="text-gray-500">Please try adjusting your filters or contact us for a custom itinerary.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-6">Found {treks.length} Adventures</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treks.map((trek) => (
          <div key={trek.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img src={trek.image} alt={trek.title} className="w-full h-60 object-cover" />
              {trek.special.includes("Best Seller") && (
                <div className="absolute top-4 right-4 bg-sunset-500 text-white text-sm font-bold px-2 py-1 rounded">
                  Best Seller
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-earth-100 text-earth-800 text-xs px-2 py-1 rounded mr-2">{trek.region}</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{trek.type}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{trek.title}</h3>
              <div className="flex items-center mb-4 text-sm text-gray-600">
                <Clock size={16} className="mr-1" />
                <span className="mr-4">{trek.duration}</span>
                <Mountain size={16} className="mr-1" />
                <span className="mr-4">{trek.difficulty}</span>
                <Calendar size={16} className="mr-1" />
                <span>{trek.bestSeason}</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star size={18} className="text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{trek.rating}</span>
                </div>
                <span className="text-sm text-gray-500 ml-1">({trek.reviews} reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">From</p>
                  <p className="text-2xl font-bold text-mountain-600">${trek.price}</p>
                </div>
                <Link to={trek.path}>
                  <Button className="bg-mountain-500 hover:bg-mountain-600 text-white">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekResults;
