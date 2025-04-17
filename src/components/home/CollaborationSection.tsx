
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "@/assets/logo";

const CollaborationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-mountain-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4">Excess To Himalayas X Adventure White Mountain</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the breathtaking Everest region from above with our exclusive helicopter tour partnership
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <Logo className="w-24" />
              <span className="text-2xl font-bold text-mountain-600">X</span>
              <img 
                src="https://www.adventurewhitemountain.com/images/logo.png" 
                alt="Adventure White Mountain" 
                className="w-24"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="inline-block px-3 py-1 bg-sunset-100 text-sunset-800 rounded-full text-sm font-medium">
                  Best Seller
                </span>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Up to $200 Off
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Everest Base Camp Helicopter Tour</h3>
              <p className="text-gray-600">
                Experience the majestic Everest region from a bird's eye view. Book now and use code "Excess2" 
                for an exclusive discount on your helicopter adventure.
              </p>
              <Button 
                className="bg-mountain-500 hover:bg-mountain-600"
                onClick={() => window.open('https://www.adventurewhitemountain.com/everest-base-camp-helicopter-tour?srsltid=AfmBOoo7gwmnOwLAN3_WRKK1KHnUKccVWTG13ILmI1Gpe5JnApNHxall', '_blank')}
              >
                Book Heli Tour <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
              alt="Helicopter Tour" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white text-lg font-medium">
                Nepal's Premium Helicopter Tour Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
