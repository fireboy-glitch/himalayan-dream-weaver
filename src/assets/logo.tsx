
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative w-10 h-10 mr-2">
        <div className="absolute inset-0 bg-mountain-600 rounded-full opacity-90"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3L12 7L16 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 7V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 21L8 17L12 21L16 17L20 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div>
        <div className="text-lg font-bold leading-tight text-mountain-800">Excess To</div>
        <div className="text-lg font-bold leading-tight text-mountain-600">Himalayas</div>
      </div>
    </div>
  );
};

export default Logo;
