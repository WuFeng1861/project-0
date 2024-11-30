import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Stars, Sparkles } from 'lucide-react';
import { GalaxyBackground } from '../components/GalaxyBackground';
import { SearchBox } from '../components/SearchBox';
import { SearchSuggestions } from '../components/SearchSuggestions';

const SUGGESTIONS = [ 'MERC 交易所', 'Ai 音乐', 'MERC NOTE 节点', 'DeFi', 'NFT', 'Web3', '智能合约', 'DAO' ];

export function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredSuggestions = SUGGESTIONS.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSuggestionSelect = useCallback((suggestion: string) => {
    setSearchQuery(suggestion);
  }, []);

  const handleLiveClick = useCallback((suggestion: string) => {
    navigate(`/live/${encodeURIComponent(suggestion)}`);
  }, [navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      <GalaxyBackground />

      {/* Floating decorations - hidden on small screens */}
      <div className="hidden sm:block absolute top-10 right-10 animate-float">
        <Rocket className="w-8 h-8 text-green-300/70" />
      </div>
      <div className="hidden sm:block absolute bottom-20 right-20 animate-float-delayed">
        <Sparkles className="w-6 h-6 text-green-300/50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-6">
        {/* Push content down with top padding */}
        <div className="pt-20 sm:pt-24 w-full flex-1 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <Stars className="w-8 h-8 text-green-400" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center
                          text-transparent bg-clip-text bg-gradient-to-r 
                          from-green-400 to-green-300 animate-title tracking-tight">
              Mercury Dapp
            </h1>
            <Stars className="w-8 h-8 text-green-400" />
          </div>

          {/* Search container */}
          <div className={`w-full max-w-5xl transition-all duration-300 px-3 sm:px-0 ${
            isSearchFocused ? 'scale-[1.02] sm:scale-105' : 'scale-100'
          }`}>
            <SearchBox
              value={searchQuery}
              onChange={setSearchQuery}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />

            <SearchSuggestions
              suggestions={filteredSuggestions}
              onSelect={handleSuggestionSelect}
              onLiveClick={handleLiveClick}
            />
          </div>
        </div>

        {/* Footer text - now properly positioned at bottom */}
        <div className="w-full py-6">
          <p className="text-sm sm:text-base text-green-200/60 font-light 
                       tracking-wide text-center px-4">
            探索 Web3 世界，连接无限未来
          </p>
        </div>
      </div>
    </div>
  );
}