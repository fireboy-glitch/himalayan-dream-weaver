
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/lovable-uploads/c36154b9-c3ed-4108-bdd7-a8909a774c9d.png"
        alt="Excess To Himalayas"
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;
