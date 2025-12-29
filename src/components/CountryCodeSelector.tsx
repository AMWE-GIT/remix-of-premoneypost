
import { useState, useEffect } from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Country list with flags and unique values
const unsortedCountryCodes = [
  { code: "+1", country: "United States", flag: "🇺🇸", value: "+1-US" },
  { code: "+1", country: "Canada", flag: "🇨🇦", value: "+1-CA" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧", value: "+44" },
  { code: "+61", country: "Australia", flag: "🇦🇺", value: "+61" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿", value: "+64" },
  { code: "+33", country: "France", flag: "🇫🇷", value: "+33" },
  { code: "+49", country: "Germany", flag: "🇩🇪", value: "+49" },
  { code: "+39", country: "Italy", flag: "🇮🇹", value: "+39" },
  { code: "+34", country: "Spain", flag: "🇪🇸", value: "+34" },
  { code: "+351", country: "Portugal", flag: "🇵🇹", value: "+351" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱", value: "+31" },
  { code: "+32", country: "Belgium", flag: "🇧🇪", value: "+32" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭", value: "+41" },
  { code: "+46", country: "Sweden", flag: "🇸🇪", value: "+46" },
  { code: "+47", country: "Norway", flag: "🇳🇴", value: "+47" },
  { code: "+45", country: "Denmark", flag: "🇩🇰", value: "+45" },
  { code: "+358", country: "Finland", flag: "🇫🇮", value: "+358" },
  { code: "+353", country: "Ireland", flag: "🇮🇪", value: "+353" },
  { code: "+43", country: "Austria", flag: "🇦🇹", value: "+43" },
  { code: "+30", country: "Greece", flag: "🇬🇷", value: "+30" },
  { code: "+48", country: "Poland", flag: "🇵🇱", value: "+48" },
  { code: "+420", country: "Czech Republic", flag: "🇨🇿", value: "+420" },
  { code: "+36", country: "Hungary", flag: "🇭🇺", value: "+36" },
  { code: "+7", country: "Russia", flag: "🇷🇺", value: "+7" },
  { code: "+81", country: "Japan", flag: "🇯🇵", value: "+81" },
  { code: "+86", country: "China", flag: "🇨🇳", value: "+86" },
  { code: "+82", country: "South Korea", flag: "🇰🇷", value: "+82" },
  { code: "+91", country: "India", flag: "🇮🇳", value: "+91" },
  { code: "+65", country: "Singapore", flag: "🇸🇬", value: "+65" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾", value: "+60" },
  { code: "+66", country: "Thailand", flag: "🇹🇭", value: "+66" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳", value: "+84" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩", value: "+62" },
  { code: "+63", country: "Philippines", flag: "🇵🇭", value: "+63" },
  { code: "+964", country: "Iraq", flag: "🇮🇶", value: "+964" },
  { code: "+971", country: "UAE", flag: "🇦🇪", value: "+971" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦", value: "+966" },
  { code: "+972", country: "Israel", flag: "🇮🇱", value: "+972" },
  { code: "+20", country: "Egypt", flag: "🇪🇬", value: "+20" },
  { code: "+27", country: "South Africa", flag: "🇿🇦", value: "+27" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬", value: "+234" },
  { code: "+254", country: "Kenya", flag: "🇰🇪", value: "+254" },
  { code: "+55", country: "Brazil", flag: "🇧🇷", value: "+55" },
  { code: "+52", country: "Mexico", flag: "🇲🇽", value: "+52" },
  { code: "+54", country: "Argentina", flag: "🇦🇷", value: "+54" },
  { code: "+56", country: "Chile", flag: "🇨🇱", value: "+56" },
  { code: "+57", country: "Colombia", flag: "🇨🇴", value: "+57" },
  { code: "+58", country: "Venezuela", flag: "🇻🇪", value: "+58" },
];

// Sort country codes numerically (lowest to highest)
const countryCodes = [...unsortedCountryCodes].sort((a, b) => {
  // Extract numeric part from code (removing the '+' sign)
  const numA = parseInt(a.code.replace('+', ''), 10);
  const numB = parseInt(b.code.replace('+', ''), 10);
  
  // Sort by numeric value
  return numA - numB;
});

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
