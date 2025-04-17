import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Excess To Himalayas</h3>
            <p className="text-gray-300 mb-4">Summiting dreams since 2006</p>
            <div className="flex items-start space-x-2 mb-2">
              <MapPin size={18} className="mt-1 text-mountain-400" />
              <p className="text-gray-300">Thamel, Kathmandu, Nepal</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Phone size={18} className="text-mountain-400" />
              <p className="text-gray-300">+977 9864535410, +977 9849260607</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-mountain-400" />
              <p className="text-gray-300">excesstohimalayas@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/treks" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  Treks
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/excess-now" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  Excess Now
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Treks</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/treks/everest-base-camp" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  Everest Base Camp
                </Link>
              </li>
              <li>
                <Link to="/treks/annapurna-circuit" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  Annapurna Circuit
                </Link>
              </li>
              <li>
                <Link to="/treks/langtang-valley" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  Langtang Valley
                </Link>
              </li>
              <li>
                <Link to="/treks/manaslu-circuit" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  Manaslu Circuit
                </Link>
              </li>
              <li>
                <Link to="/treks/upper-mustang" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  Upper Mustang
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for exclusive deals and updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-mountain-400"
              />
              <button
                type="submit"
                className="w-full bg-mountain-500 hover:bg-mountain-600 text-white py-2 px-4 rounded transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  <Facebook />
                </a>
                <a href="#" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  <Instagram />
                </a>
                <a href="#" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  <Twitter />
                </a>
                <a href="#" className="text-gray-300 hover:text-mountain-300 transition-colors duration-200">
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliations */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <h3 className="text-center text-xl font-bold mb-6">Our Affiliations</h3>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white p-3 rounded">
              <img src="/src/assets/images/nepal-tourism-board.png" alt="Nepal Tourism Board" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-3 rounded">
              <img src="/src/assets/images/nma-logo.png" alt="Nepal Mountaineering Association" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-3 rounded">
              <img src="/src/assets/images/tripadvisor-logo.png" alt="TripAdvisor" className="h-12 w-auto" />
            </div>
            <div className="bg-white p-3 rounded">
              <img src="/src/assets/images/booking-logo.png" alt="Booking.com" className="h-12 w-auto" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Excess To Himalayas. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Made by Rizan Subedi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
