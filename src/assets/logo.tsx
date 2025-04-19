
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/lovable-uploads/03702d19-bbf2-4a92-9f20-8456185aa69e.png"
        alt="Excess To Himalayas"
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;
