
import React from "react";
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Award, Star, CheckCircle } from "lucide-react";

const Affiliations = () => {
  return (
    <Layout>
      <div className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc"
            alt="Partnership Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Affiliations & Partnerships</h1>
            <p className="text-lg text-gray-200 mb-8">
              We're proud to be affiliated with leading organizations in tourism and travel, ensuring quality service and credibility.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Official Affiliations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These affiliations represent our commitment to industry standards and best practices in adventure tourism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 flex flex-col">
              <div className="flex items-center mb-6">
                <img 
                  src="/src/assets/images/nepal-tourism-board.png" 
                  alt="Nepal Tourism Board" 
                  className="h-16 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">Nepal Tourism Board</h3>
                  <p className="text-gray-600">Official Partner Since 2006</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 flex-grow">
                The Nepal Tourism Board (NTB) is the official organization for tourism promotion in Nepal. Our partnership with NTB ensures that we operate according to national tourism guidelines and participate in initiatives to promote sustainable tourism in Nepal.
              </p>
              <div className="mt-auto">
                <Separator className="mb-6" />
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Verified and Approved Operator</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 flex flex-col">
              <div className="flex items-center mb-6">
                <img 
                  src="/src/assets/images/nma-logo.png" 
                  alt="Nepal Mountaineering Association" 
                  className="h-16 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">Nepal Mountaineering Association</h3>
                  <p className="text-gray-600">Member Since 2007</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 flex-grow">
                The Nepal Mountaineering Association (NMA) is the governing body for mountaineering activities in Nepal. Our membership with NMA allows us to organize climbing expeditions to NMA-classified peaks and ensures that our mountaineering operations follow safety and environmental guidelines.
              </p>
              <div className="mt-auto">
                <Separator className="mb-6" />
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Certified Climbing Organizer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Online Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading online platforms to offer you convenient booking options and transparent reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 flex flex-col">
              <div className="flex items-center mb-6">
                <img 
                  src="/src/assets/images/tripadvisor-logo.png" 
                  alt="TripAdvisor" 
                  className="h-16 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">TripAdvisor</h3>
                  <p className="text-gray-600">Featured Partner</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 flex-grow">
                We're proud to maintain a high rating on TripAdvisor, the world's largest travel platform. Our TripAdvisor presence allows travelers to read authentic reviews from past clients and make informed decisions about our services.
              </p>
              <div className="mb-6 flex items-center">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="ml-2 text-gray-600">4.8/5 from 350+ reviews</span>
              </div>
              <div className="mt-auto">
                <Separator className="mb-6" />
                <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                  <span>View our TripAdvisor Page</span> 
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 flex flex-col">
              <div className="flex items-center mb-6">
                <img 
                  src="/src/assets/images/booking-logo.png" 
                  alt="Booking.com" 
                  className="h-16 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">Booking.com</h3>
                  <p className="text-gray-600">Preferred Partner</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 flex-grow">
                Our partnership with Booking.com allows travelers to easily book our services through their trusted platform. This collaboration ensures secure payments and transparent booking conditions for our clients.
              </p>
              <div className="mb-6 flex items-center">
                <Award className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-600">Travel Sustainable Level 2 Certified</span>
              </div>
              <div className="mt-auto">
                <Separator className="mb-6" />
                <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                  <span>Book through Booking.com</span> 
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Community Partnerships</h2>
            <p className="text-gray-700 mb-8">
              Beyond our industry affiliations, we actively partner with local communities and organizations to ensure that tourism benefits the regions we visit. These partnerships are central to our responsible tourism approach:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-md shadow-sm">
                <h3 className="text-lg font-bold mb-2">Local Education Initiatives</h3>
                <p className="text-gray-600">
                  We contribute a portion of our profits to support schools in remote trekking regions, helping to improve educational opportunities for children in these communities.
                </p>
              </div>
              <div className="bg-white p-5 rounded-md shadow-sm">
                <h3 className="text-lg font-bold mb-2">Environmental Conservation</h3>
                <p className="text-gray-600">
                  We work with local conservation groups to promote sustainable practices and participate in regular clean-up efforts along popular trekking routes.
                </p>
              </div>
              <div className="bg-white p-5 rounded-md shadow-sm">
                <h3 className="text-lg font-bold mb-2">Women's Empowerment</h3>
                <p className="text-gray-600">
                  Our partnership with women's cooperatives helps promote gender equality by providing employment opportunities for women in the tourism industry.
                </p>
              </div>
              <div className="bg-white p-5 rounded-md shadow-sm">
                <h3 className="text-lg font-bold mb-2">Porter Welfare</h3>
                <p className="text-gray-600">
                  We adhere to and support the guidelines of the International Porter Protection Group, ensuring fair treatment and safe working conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Affiliations;
