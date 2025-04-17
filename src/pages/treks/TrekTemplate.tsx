
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Mountain, Thermometer, DollarSign } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface TrekTemplateProps {
  title: string;
  heroImage: string;
  duration: number;
  difficulty: string;
  maxAltitude: string;
  bestSeason: string;
  price: string;
  overview: string;
  itinerary: { day: number; title: string; description: string }[];
  included: string[];
  excluded: string[];
}

const TrekTemplate = ({
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
  excluded,
}: TrekTemplateProps) => {
  return (
    <Layout>
      <div className="relative h-[50vh] bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="container-custom relative z-10 h-full flex flex-col justify-end pb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <div className="flex flex-wrap gap-6 mt-2">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{duration} days</span>
            </div>
            <div className="flex items-center">
              <Mountain className="w-5 h-5 mr-2" />
              <span>{difficulty}</span>
            </div>
            <div className="flex items-center">
              <Thermometer className="w-5 h-5 mr-2" />
              <span>Max altitude: {maxAltitude}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Best season: {bestSeason}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              <span>{price}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700">{overview}</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
              <div className="space-y-6">
                {itinerary.map((day) => (
                  <div key={day.day} className="border-l-2 border-mountain-500 pl-4 pb-6">
                    <h3 className="text-lg font-bold mb-2">
                      Day {day.day}: {day.title}
                    </h3>
                    <p className="text-gray-700">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-28">
              <h3 className="text-xl font-bold mb-4">Book This Trek</h3>
              <p className="mb-4 text-gray-700">
                Ready to embark on this adventure? Contact us to reserve your spot.
              </p>
              <Button className="w-full mb-4 bg-mountain-600 hover:bg-mountain-700">Book Now</Button>
              <Button variant="outline" className="w-full mb-6">Inquire</Button>
              
              <Separator className="my-6" />
              
              <h4 className="font-bold mb-3">What's Included</h4>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                {included.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h4 className="font-bold mb-3">What's Not Included</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {excluded.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrekTemplate;
