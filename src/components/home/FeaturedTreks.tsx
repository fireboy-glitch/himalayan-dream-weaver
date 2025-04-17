
import React from "react";
import { Link } from "react-router-dom";
import { Star, Clock, ArrowRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const trekData = [
  {
    id: 1,
    title: "Everest Base Camp Trek",
    image: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=800&q=80",
    duration: "14 Days",
    difficulty: "Moderate to Difficult",
    price: 1200,
    rating: 4.9,
    reviews: 145,
    path: "/treks/everest-base-camp"
  },
  {
    id: 2,
    title: "Annapurna Circuit Trek",
    image: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=800&q=80",
    duration: "18 Days",
    difficulty: "Moderate",
    price: 1100,
    rating: 4.8,
    reviews: 128,
    path: "/treks/annapurna-circuit"
  },
  {
    id: 3,
    title: "Langtang Valley Trek",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
    duration: "10 Days",
    difficulty: "Easy to Moderate",
    price: 950,
    rating: 4.7,
    reviews: 98,
    path: "/treks/langtang-valley"
  }
];

const TrekCard = ({ trek }: { trek: typeof trekData[0] }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={trek.image} alt={trek.title} className="w-full h-60 object-cover" />
        <div className="absolute top-4 right-4 bg-sunset-500 text-white text-sm font-bold px-2 py-1 rounded">
          Best Seller
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{trek.title}</h3>
        <div className="flex items-center mb-4 text-sm text-gray-600">
          <Clock size={16} className="mr-1" />
          <span className="mr-4">{trek.duration}</span>
          <Mountain size={16} className="mr-1" />
          <span>{trek.difficulty}</span>
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
  );
};

const FeaturedTreks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Featured Treks</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our most popular trekking adventures in the Himalayas. 
            Each trek is carefully designed to provide you with the best experience of Nepal's natural beauty.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trekData.map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/treks">
            <Button className="bg-mountain-500 hover:bg-mountain-600 text-white">
              View All Treks <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreks;
