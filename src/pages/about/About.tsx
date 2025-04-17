
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Award,
  Map,
  Heart,
  ShieldCheck,
  Globe,
} from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
            alt="Mountains"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Excess To Himalayas</h1>
            <p className="text-lg text-gray-200 mb-2">Submitting Dreams Since 2006</p>
            <p className="text-lg text-gray-200 mb-8">
              Your trusted partner for authentic Himalayan experiences
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Excess To Himalayas was founded in 2006 by a team of passionate mountaineers and travel enthusiasts with a shared dream: to introduce travelers to the authentic beauty of Nepal while supporting local communities.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a small trekking company has grown into one of Nepal's most respected adventure travel providers, offering exceptional experiences across the Himalayas while maintaining our core values of sustainability, authenticity, and quality service.
              </p>
              <p className="text-gray-700 mb-4">
                For nearly two decades, we've been helping adventurers from around the world realize their dreams of experiencing the majesty of the Himalayas, creating memories that last a lifetime while ensuring our operations benefit local communities and protect the natural environment.
              </p>
              
              <div className="mt-8">
                <Link to="/about/team">
                  <Button className="mr-4 bg-blue-600 hover:bg-blue-700">Meet Our Team</Button>
                </Link>
                <Link to="/about/legal-documents">
                  <Button variant="outline">Legal Documents</Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1544015759-9a76377fe12f"
                alt="Nepal Landscape"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Experience</h3>
              <p className="text-gray-600">
                With over 15 years in the industry, we've perfected the art of creating unforgettable Himalayan adventures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Our team consists of local experts who know every trail and hidden gem in the Himalayas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Service</h3>
              <p className="text-gray-600">
                We pride ourselves on attention to detail and personalized service that exceeds expectations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Map className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Itineraries</h3>
              <p className="text-gray-600">
                We tailor each journey to your preferences, ensuring your Himalayan adventure is uniquely yours.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Responsible Tourism</h3>
              <p className="text-gray-600">
                We're committed to sustainable practices that benefit local communities and protect the environment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safety First</h3>
              <p className="text-gray-600">
                Your safety is our priority, with rigorous protocols and well-trained staff for every adventure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Our Affiliations</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center">
              <img 
                src="/src/assets/images/nepal-tourism-board.png" 
                alt="Nepal Tourism Board" 
                className="h-20 mx-auto mb-4"
              />
              <p className="text-sm font-medium">Nepal Tourism Board</p>
            </div>
            <div className="text-center">
              <img 
                src="/src/assets/images/nma-logo.png" 
                alt="Nepal Mountaineering Association" 
                className="h-20 mx-auto mb-4"
              />
              <p className="text-sm font-medium">Nepal Mountaineering<br />Association</p>
            </div>
            <div className="text-center">
              <img 
                src="/src/assets/images/tripadvisor-logo.png" 
                alt="TripAdvisor" 
                className="h-20 mx-auto mb-4"
              />
              <p className="text-sm font-medium">TripAdvisor</p>
            </div>
            <div className="text-center">
              <img 
                src="/src/assets/images/booking-logo.png" 
                alt="Booking.com" 
                className="h-20 mx-auto mb-4"
              />
              <p className="text-sm font-medium">Booking.com</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/about/affiliations">
              <Button variant="outline">Learn More About Our Affiliations</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-800 text-white py-16">
        <div className="container-custom">
          <div className="flex flex-col items-center">
            <Globe className="w-16 h-16 mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-center">Ready to Start Your Himalayan Adventure?</h2>
            <p className="text-lg mb-8 max-w-2xl text-center">
              Let us help you plan the perfect trek or tour tailored to your preferences and budget.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-blue-800 hover:bg-gray-100">Contact Us</Button>
              </Link>
              <Link to="/excess-now">
                <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                  Try Excess Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
