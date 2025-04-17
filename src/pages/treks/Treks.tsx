
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Mountain,
  Thermometer
} from "lucide-react";

const treks = [
  {
    title: "Everest Base Camp Trek",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    days: 14,
    difficulty: "Challenging",
    altitude: "5,364m",
    season: "Mar-May, Sep-Nov",
    price: "USD 1,499",
    description: "The classic trek to the base of the world's highest mountain...",
    path: "/treks/everest-base-camp",
  },
  {
    title: "Annapurna Circuit Trek",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    days: 12,
    difficulty: "Moderate",
    altitude: "5,416m",
    season: "Mar-May, Sep-Nov",
    price: "USD 1,299",
    description: "A complete circuit of the Annapurna massif...",
    path: "/treks/annapurna-circuit",
  },
  {
    title: "Langtang Valley Trek",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    days: 7,
    difficulty: "Moderate",
    altitude: "3,870m",
    season: "Mar-May, Sep-Dec",
    price: "USD 899",
    description: "Explore the beautiful Langtang Valley...",
    path: "/treks/langtang-valley",
  },
  {
    title: "Manaslu Circuit Trek",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    days: 15,
    difficulty: "Challenging",
    altitude: "5,106m",
    season: "Mar-May, Sep-Nov",
    price: "USD 1,699",
    description: "A remote trek around Mount Manaslu...",
    path: "/treks/manaslu-circuit",
  },
  {
    title: "Upper Mustang Trek",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    days: 14,
    difficulty: "Moderate",
    altitude: "3,810m",
    season: "Mar-Oct",
    price: "USD 2,199",
    description: "Journey through the ancient kingdom of Lo...",
    path: "/treks/upper-mustang",
  },
];

const Treks = () => {
  return (
    <Layout>
      <div className="relative bg-mountain-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Trek Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Nepal Trekking Adventures</h1>
            <p className="text-lg text-gray-200 mb-8">
              Discover the majestic Himalayas through our carefully curated
              trekking experiences. From the iconic Everest Base Camp to the
              mystical Upper Mustang, we offer treks for every adventure seeker.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treks.map((trek, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={trek.image}
                    alt={trek.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{trek.title}</CardTitle>
                  <CardDescription>{trek.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-mountain-600" />
                      <span>{trek.days} days</span>
                    </div>
                    <div className="flex items-center">
                      <Mountain className="w-4 h-4 mr-2 text-mountain-600" />
                      <span>{trek.difficulty}</span>
                    </div>
                    <div className="flex items-center">
                      <Thermometer className="w-4 h-4 mr-2 text-mountain-600" />
                      <span>Max altitude: {trek.altitude}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-mountain-600" />
                      <span>Best season: {trek.season}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg font-semibold text-mountain-600">
                      {trek.price}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={trek.path} className="w-full">
                    <Button className="w-full bg-mountain-600 hover:bg-mountain-700">
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Treks;
