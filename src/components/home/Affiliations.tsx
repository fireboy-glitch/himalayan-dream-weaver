
import React from "react";

const Affiliations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="heading-md mb-4">Our Trusted Affiliations</h2>
          <p className="text-gray-600">
            We're proud to be affiliated with these respected organizations
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="/src/assets/images/nepal-tourism-board.png" alt="Nepal Tourism Board" className="h-16 md:h-20" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="/src/assets/images/nma-logo.png" alt="Nepal Mountaineering Association" className="h-16 md:h-20" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="/src/assets/images/tripadvisor-logo.png" alt="TripAdvisor" className="h-16 md:h-20" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300">
            <img src="/src/assets/images/booking-logo.png" alt="Booking.com" className="h-16 md:h-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
