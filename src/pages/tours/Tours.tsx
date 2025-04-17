
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
import { Clock, MapPin, Users } from "lucide-react";

const tours = [
  {
    title: "Kathmandu Valley Tour",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
    days: 3,
    locations: "Kathmandu, Bhaktapur, Patan",
    groupSize: "2-12 people",
    price: "USD 299",
    description: "Explore the UNESCO World Heritage Sites in the Kathmandu Valley...",
    path: "/tours/kathmandu-valley",
  },
  {
    title: "Pokhara City Tour",
    image: "https://images.unsplash.com/photo-1544015759-9a76377fe12f",
    days: 3,
    locations: "Pokhara, Sarangkot, Phewa Lake",
    groupSize: "2-12 people",
    price: "USD 249",
    description: "Discover the beautiful lake city of Pokhara...",
    path: "/tours/pokhara-city",
  },
  {
    title: "Chitwan Safari",
    image: "https://images.unsplash.com/photo-1542476478-5c0c490a64d4",
    days: 3,
    locations: "Chitwan National Park",
    groupSize: "2-8 people",
    price: "USD 349",
    description: "Venture into the wild at Chitwan National Park...",
    path: "/tours/chitwan-safari",
  },
  {
    title: "Lumbini Pilgrimage",
    image: "https://images.unsplash.com/photo-1605649461790-85c0acc30e05",
    days: 2,
    locations: "Lumbini",
    groupSize: "2-15 people",
    price: "USD 199",
    description: "Visit the birthplace of Lord Buddha...",
    path: "/tours/lumbini-pilgrimage",
  },
];

const Tours = () => {
  return (
    <Layout>
      <div className="relative bg-blue-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605640840605-14ac1855827b"
            alt="Tour Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Discover Nepal's Cultural Treasures</h1>
            <p className="text-lg text-gray-200 mb-8">
              Immerse yourself in Nepal's rich cultural heritage with our carefully designed tours. 
              From ancient cities to wildlife sanctuaries, experience the best of Nepal's diverse attractions.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{tour.title}</CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{tour.days} days</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{tour.locations}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg font-semibold text-blue-600">
                      {tour.price}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={tour.path} className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
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

export default Tours;
