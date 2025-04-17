
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Mountain, Star, Banknote, Info, CheckCircle, X } from "lucide-react";
import { useParams } from "react-router-dom";

interface ItineraryItem {
  day: number;
  title: string;
  description: string;
}

interface TrekTemplateProps {
  title: string;
  heroImage: string;
  duration: number | string;
  difficulty: string;
  maxAltitude: string;
  bestSeason: string;
  price: string;
  overview: string;
  itinerary: ItineraryItem[];
  included: string[];
  excluded: string[];
}

const TrekTemplate: React.FC<TrekTemplateProps> = ({
  title,
  heroImage,
  duration,
  difficulty,
  maxAltitude,
  bestSeason,
  price,
  overview,
  itinerary,
  included,
  excluded
}) => {
  const { trekId } = useParams();
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'includes'>('overview');

  const handleTabChange = (tab: 'overview' | 'itinerary' | 'includes') => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <div className="relative h-[40vh] lg:h-[60vh] overflow-hidden">
        <img 
          src={heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 flex items-center">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{title}</h1>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="flex items-center bg-black/30 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Clock className="h-4 w-4 mr-2" />
                <span>{duration} days</span>
              </div>
              <div className="flex items-center bg-black/30 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Mountain className="h-4 w-4 mr-2" />
                <span>{difficulty}</span>
              </div>
              <div className="flex items-center bg-black/30 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Info className="h-4 w-4 mr-2" />
                <span>{maxAltitude}</span>
              </div>
              <div className="flex items-center bg-black/30 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{bestSeason}</span>
              </div>
              <div className="flex items-center bg-black/30 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Banknote className="h-4 w-4 mr-2" />
                <span>From {price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              <button
                onClick={() => handleTabChange('overview')}
                className={`pb-2 font-medium ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => handleTabChange('itinerary')}
                className={`pb-2 font-medium ${
                  activeTab === 'itinerary'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500'
                }`}
              >
                Itinerary
              </button>
              <button
                onClick={() => handleTabChange('includes')}
                className={`pb-2 font-medium ${
                  activeTab === 'includes'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500'
                }`}
              >
                Includes/Excludes
              </button>
            </div>
            <Link to={`/treks/${trekId}/book`}>
              <Button className="bg-mountain-600 hover:bg-mountain-700">
                Book Now
              </Button>
            </Link>
          </div>

          <Separator className="my-6" />

          {activeTab === 'overview' && (
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Trek Overview</h2>
              <p className="text-gray-700">{overview}</p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Trek Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Experience the breathtaking beauty of the Himalayan landscape</span>
                    </li>
                    <li className="flex">
                      <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Immerse yourself in local cultures and traditions</span>
                    </li>
                    <li className="flex">
                      <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Trek through diverse ecosystems and terrain</span>
                    </li>
                    <li className="flex">
                      <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Experience the famous Nepali hospitality</span>
                    </li>
                    <li className="flex">
                      <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Create memories that will last a lifetime</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Trek Facts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Duration:</span>
                      <span>{duration} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Difficulty:</span>
                      <span>{difficulty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Max. Altitude:</span>
                      <span>{maxAltitude}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Best Season:</span>
                      <span>{bestSeason}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Accommodation:</span>
                      <span>Teahouses/Lodges</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Start/End Point:</span>
                      <span>Kathmandu</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to={`/treks/${trekId}/book`}>
                  <Button className="bg-mountain-600 hover:bg-mountain-700">
                    Book This Trek
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'itinerary' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
              <div className="space-y-8">
                {itinerary.map((item) => (
                  <div key={item.day} className="relative pl-8 pb-8 border-l-2 border-gray-200">
                    <div className="absolute left-[-9px] top-0 bg-blue-600 rounded-full w-4 h-4"></div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        Day {item.day}: {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-0 bg-green-600 rounded-full w-4 h-4"></div>
                  <h3 className="text-lg font-bold mb-2">Trip Ends</h3>
                  <p className="text-gray-600">
                    Our service ends after breakfast on the final day. If you require transportation to the airport or other services, we can arrange them for an additional fee.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'includes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-green-700">What's Included</h2>
                <ul className="space-y-4">
                  {included.map((item, index) => (
                    <li key={index} className="flex">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6 text-red-700">What's Excluded</h2>
                <ul className="space-y-4">
                  {excluded.map((item, index) => (
                    <li key={index} className="flex">
                      <X className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TrekTemplate;
