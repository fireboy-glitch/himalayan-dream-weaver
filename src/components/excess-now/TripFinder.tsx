
import React, { useState } from "react";
import { Search, Filter, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TripFilters {
  type: string;
  difficulty: string;
  duration: string;
  budget: string;
  region: string;
  special: string[];
}

interface TripFinderProps {
  onSearch: (filters: TripFilters) => void;
}

const TripFinder: React.FC<TripFinderProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<TripFilters>({
    type: "",
    difficulty: "",
    duration: "",
    budget: "",
    region: "",
    special: [],
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleFilterChange = (key: keyof TripFilters, value: string | string[]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSpecialToggle = (value: string) => {
    setFilters(prev => {
      const current = prev.special || [];
      const newSpecial = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, special: newSpecial };
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const specialFeatures = [
    "Family Friendly",
    "Off the Beaten Path",
    "Photography Focused",
    "Cultural Experience",
    "Wildlife Viewing",
    "Peak Climbing",
    "Luxury Accommodations",
    "Helicopter Return",
    "Best Seller"
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 text-mountain-800">Find Your Perfect Himalayan Adventure</h3>
      
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Trip Type</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-md" 
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
            >
              <option value="">All Trip Types</option>
              <option value="trek">Trekking</option>
              <option value="tour">Cultural Tour</option>
              <option value="climb">Peak Climbing</option>
              <option value="luxury">Luxury Trek</option>
              <option value="wildlife">Wildlife Tour</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-md"
              value={filters.difficulty}
              onChange={(e) => handleFilterChange("difficulty", e.target.value)}
            >
              <option value="">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="challenging">Challenging</option>
              <option value="difficult">Difficult</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-md"
              value={filters.duration}
              onChange={(e) => handleFilterChange("duration", e.target.value)}
            >
              <option value="">Any Duration</option>
              <option value="1-3">1-3 Days</option>
              <option value="4-7">4-7 Days</option>
              <option value="8-14">8-14 Days</option>
              <option value="15-21">15-21 Days</option>
              <option value="22+">22+ Days</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range (USD)</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-md"
              value={filters.budget}
              onChange={(e) => handleFilterChange("budget", e.target.value)}
            >
              <option value="">Any Budget</option>
              <option value="economy">Economy ($500-$1000)</option>
              <option value="standard">Standard ($1001-$1500)</option>
              <option value="comfort">Comfort ($1501-$2000)</option>
              <option value="luxury">Luxury ($2001-$3000)</option>
              <option value="premium">Premium ($3000+)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-md"
              value={filters.region}
              onChange={(e) => handleFilterChange("region", e.target.value)}
            >
              <option value="">All Regions</option>
              <option value="everest">Everest Region</option>
              <option value="annapurna">Annapurna Region</option>
              <option value="langtang">Langtang Region</option>
              <option value="manaslu">Manaslu Region</option>
              <option value="mustang">Upper Mustang</option>
              <option value="dolpo">Dolpo</option>
              <option value="kanchenjunga">Kanchenjunga</option>
              <option value="kathmandu">Kathmandu</option>
              <option value="chitwan">Chitwan</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <Button 
              type="button" 
              variant="outline" 
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 flex justify-between items-center"
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              <span className="flex items-center">
                <Filter size={16} className="mr-2" />
                Advanced Filters
              </span>
              <ChevronDown size={16} className={`transform transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>
        
        {showAdvanced && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-medium text-gray-800 mb-4">Special Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {specialFeatures.map(feature => (
                <div 
                  key={feature}
                  className={`
                    px-4 py-2 rounded-md border cursor-pointer flex items-center
                    ${filters.special.includes(feature) 
                      ? 'bg-mountain-50 border-mountain-300 text-mountain-800' 
                      : 'border-gray-200 hover:bg-gray-50'}
                  `}
                  onClick={() => handleSpecialToggle(feature)}
                >
                  <div className={`
                    w-4 h-4 rounded border mr-2 flex items-center justify-center
                    ${filters.special.includes(feature) 
                      ? 'bg-mountain-500 border-mountain-500' 
                      : 'border-gray-400'}
                  `}>
                    {filters.special.includes(feature) && (
                      <Check size={12} className="text-white" />
                    )}
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-8">
          <Button 
            type="submit" 
            className="w-full bg-mountain-500 hover:bg-mountain-600 text-white py-3 text-base"
          >
            <Search size={18} className="mr-2" /> Find Your Adventure
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TripFinder;
