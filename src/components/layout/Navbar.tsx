
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    {
      label: "Home",
      path: "/",
      dropdown: false,
    },
    {
      label: "Treks",
      path: "/treks",
      dropdown: true,
      dropdownItems: [
        { label: "Everest Base Camp Trek", path: "/treks/everest-base-camp" },
        { label: "Annapurna Circuit Trek", path: "/treks/annapurna-circuit" },
        { label: "Langtang Valley Trek", path: "/treks/langtang-valley" },
        { label: "Manaslu Circuit Trek", path: "/treks/manaslu-circuit" },
        { label: "Upper Mustang Trek", path: "/treks/upper-mustang" },
        { label: "View All Treks", path: "/treks" },
      ],
    },
    {
      label: "Tours",
      path: "/tours",
      dropdown: true,
      dropdownItems: [
        { label: "Kathmandu Valley Tour", path: "/tours/kathmandu-valley" },
        { label: "Pokhara City Tour", path: "/tours/pokhara-city" },
        { label: "Chitwan Safari Tour", path: "/tours/chitwan-safari" },
        { label: "Lumbini Pilgrimage Tour", path: "/tours/lumbini-pilgrimage" },
        { label: "View All Tours", path: "/tours" },
      ],
    },
    {
      label: "Excess Now",
      path: "/excess-now",
      dropdown: false,
    },
    {
      label: "About Us",
      path: "/about",
      dropdown: true,
      dropdownItems: [
        { label: "Our Story", path: "/about" },
        { label: "Meet Our Team", path: "/about/team" },
        { label: "Legal Documents", path: "/about/legal-documents" },
        { label: "Affiliations", path: "/about/affiliations" },
      ],
    },
    {
      label: "Blog",
      path: "/blog",
      dropdown: false,
    },
    {
      label: "Contact",
      path: "/contact",
      dropdown: false,
    },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/src/assets/images/logo-placeholder.png"
              alt="Excess To Himalayas"
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-mountain-800">Excess To Himalayas</h1>
              <p className="text-xs text-gray-600">Summiting dreams since 2006</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer nav-link"
                    onClick={() => handleDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} />
                  </div>
                ) : (
                  <Link to={item.path} className="nav-link">
                    {item.label}
                  </Link>
                )}

                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.path}
                        className="block px-4 py-2 hover:bg-mountain-50 text-gray-800 hover:text-mountain-600"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button className="bg-mountain-500 hover:bg-mountain-600">Book Now</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 hover:text-mountain-600"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden py-4 bg-white border-t">
          <div className="container-custom">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <div
                        className="flex justify-between items-center py-2"
                        onClick={() => handleDropdown(item.label)}
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {activeDropdown === item.label && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-mountain-200">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.path}
                              className="block py-1.5 text-gray-700 hover:text-mountain-600"
                              onClick={toggleMenu}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-2 font-medium text-gray-700 hover:text-mountain-600"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button className="bg-mountain-500 hover:bg-mountain-600 w-full mt-4">Book Now</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
