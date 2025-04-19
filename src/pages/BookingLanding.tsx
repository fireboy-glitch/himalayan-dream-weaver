
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    id: "everest-base-camp",
    name: "Everest Base Camp Trek",
    price: 1499,
    duration: "14 Days",
    difficulty: "Moderate to Hard",
  },
  {
    id: "annapurna-circuit",
    name: "Annapurna Circuit Trek",
    price: 1299,
    duration: "12-16 Days",
    difficulty: "Moderate",
  },
  {
    id: "langtang-valley",
    name: "Langtang Valley Trek",
    price: 899,
    duration: "7 Days",
    difficulty: "Moderate",
  }
];

const BookingLanding = () => {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container-custom">
          <h1 className="heading-lg text-center mb-12">Choose Your Adventure</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p>Duration: {pkg.duration}</p>
                    <p>Difficulty: {pkg.difficulty}</p>
                    <p className="text-2xl font-bold text-mountain-600">
                      ${pkg.price}
                    </p>
                  </div>
                  <Link to={`/treks/${pkg.id}/book`}>
                    <Button className="w-full bg-mountain-500 hover:bg-mountain-600">
                      Book Now <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingLanding;
