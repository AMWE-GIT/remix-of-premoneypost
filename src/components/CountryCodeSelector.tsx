
import { useState, useEffect } from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Curated country list: UAE (default), USA, UK, Switzerland, top European, GCC, India, Pakistan, Brazil, Argentina
const countryCodes = [
  // UAE first (default)
  { code: "+971", country: "UAE", flag: "🇦🇪", value: "+971" },
  // USA & UK
  { code: "+1", country: "United States", flag: "🇺🇸", value: "+1-US" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧", value: "+44" },
  // Top European
  { code: "+41", country: "Switzerland", flag: "🇨🇭", value: "+41" },
  { code: "+33", country: "France", flag: "🇫🇷", value: "+33" },
  { code: "+49", country: "Germany", flag: "🇩🇪", value: "+49" },
  { code: "+39", country: "Italy", flag: "🇮🇹", value: "+39" },
  { code: "+34", country: "Spain", flag: "🇪🇸", value: "+34" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱", value: "+31" },
  // GCC countries
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦", value: "+966" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭", value: "+973" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼", value: "+965" },
  { code: "+968", country: "Oman", flag: "🇴🇲", value: "+968" },
  { code: "+974", country: "Qatar", flag: "🇶🇦", value: "+974" },
  // South Asia
  { code: "+91", country: "India", flag: "🇮🇳", value: "+91" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰", value: "+92" },
  // South America
  { code: "+55", country: "Brazil", flag: "🇧🇷", value: "+55" },
  { code: "+54", country: "Argentina", flag: "🇦🇷", value: "+54" },
];

interface CountryCodeSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export function CountryCodeSelector({ value, onValueChange, className }: CountryCodeSelectorProps) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch with flags
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get the actual code from the value for display
  const getCodeFromValue = (val: string) => {
    // Extract just the code part for display
    return val.split('-')[0] || val;
  };

  if (!mounted) return (
    <Select disabled value={value} onValueChange={onValueChange}>
      <SelectTrigger className={`border-none focus:ring-0 ${className}`}>
        <SelectValue placeholder="Code" />
      </SelectTrigger>
    </Select>
  );
  
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={`border-none focus:ring-0 focus:outline-none shadow-none ${className}`}>
        <SelectValue placeholder="Code">
          {getCodeFromValue(value)}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="max-h-[200px] overflow-y-auto">
        {countryCodes.map((country) => (
          <SelectItem 
            key={`${country.value}`} 
            value={country.value}
            className="flex items-center gap-2"
          >
            <span className="mr-1">{country.flag}</span>
            <span>{country.code}</span>
            <span className="text-xs text-gray-500 ml-1">({country.country})</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
