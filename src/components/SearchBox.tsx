import React from 'react';
import { Search } from 'lucide-react';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export function SearchBox({ value, onChange, onFocus, onBlur }: SearchBoxProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="探索 Web3 世界..."
        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/30 backdrop-blur-md 
                   rounded-full border border-green-500/30 text-white 
                   placeholder-white/50 text-sm sm:text-base
                   focus:outline-none focus:ring-2 focus:ring-green-500/50
                   shadow-[0_0_15px_rgba(74,222,128,0.15)] transition-all duration-300"
      />
      <Search className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 
                        text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
    </div>
  );
}