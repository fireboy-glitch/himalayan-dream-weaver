
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";
import Logo from "@/assets/logo";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-400 mb-4">
              Experience the majesty of the Himalayas with Nepal's premier trekking company. Expert guides, 
              breathtaking routes, and unforgettable adventures await.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/treks" className="text-gray-400 hover:text-white">Treks</Link></li>
              <li><Link to="/tours" className="text-gray-400 hover:text-white">Tours</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Treks</h3>
            <ul className="space-y-2">
              <li><Link to="/treks/everest-base-camp" className="text-gray-400 hover:text-white">Everest Base Camp</Link></li>
              <li><Link to="/treks/annapurna-circuit" className="text-gray-400 hover:text-white">Annapurna Circuit</Link></li>
              <li><Link to="/treks/langtang-valley" className="text-gray-400 hover:text-white">Langtang Valley</Link></li>
              <li><Link to="/treks/manaslu-circuit" className="text-gray-400 hover:text-white">Manaslu Circuit</Link></li>
              <li><Link to="/treks/upper-mustang" className="text-gray-400 hover:text-white">Upper Mustang</Link></li>
              <li><Link to="/treks/ghorepani-poon-hill" className="text-gray-400 hover:text-white">Ghorepani Poon Hill</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@excesstohimalayas.com</span>
              </p>
              <p className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+977 9851-123456</span>
              </p>
              <p className="text-gray-400">
                Thamel, Kathmandu<br />
                Nepal
              </p>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-800" />
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {year} Excess To Himalayas. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made by Rizan Subedi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
