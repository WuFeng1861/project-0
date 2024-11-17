import React from 'react';
import { Wallet, Code, Building2, Boxes, Users, Lightbulb, Activity, Music, Hexagon } from 'lucide-react';

interface SearchSuggestionsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
  onLiveClick: (suggestion: string) => void;
}

const SUGGESTION_ICONS: Record<string, React.ReactNode> = {
  'DeFi': <Wallet className="w-6 h-6" />,
  'NFT': <Code className="w-6 h-6" />,
  'Web3': <Building2 className="w-6 h-6" />,
  '智能合约': <Boxes className="w-6 h-6" />,
  'MERC 交易所': <Users className="w-6 h-6" />,
  'DAO': <Lightbulb className="w-6 h-6" />,
  'Ai 音乐': <Music className="w-6 h-6" />,
  'MERC NOTE 节点': <Hexagon className="w-6 h-6" />,
};

const SUGGESTION_IMAGES: Record<string, string> = {
  'DeFi': 'https://wufeng98.cn/imgweb/uploads/1731834093611-Defi.png',
  'NFT': 'https://wufeng98.cn/imgweb/uploads/1731834093627-NFT.png',
  'Web3': 'https://wufeng98.cn/imgweb/uploads/1731834093632-Web3.png',
  '智能合约': 'https://wufeng98.cn/imgweb/uploads/1731834093599-contract.png',
  'MERC 交易所': 'https://wufeng98.cn/imgweb/uploads/1731834093616-Mexchange.png',
  'DAO': 'https://wufeng98.cn/imgweb/uploads/1731834093604-dao.png',
  'Ai 音乐': 'https://wufeng98.cn/imgweb/uploads/1731834093594-ai-music.png',
  'MERC NOTE 节点': 'https://wufeng98.cn/imgweb/uploads/1731834093623-mNode.png',
};

export function SearchSuggestions({ suggestions, onSelect, onLiveClick }: SearchSuggestionsProps) {
  if (suggestions.length === 0) return null;

  return (
    <div className="mt-6 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 group"
          >
            {/* Card Container */}
            <div
              onClick={() => onSelect(suggestion)}
              className="w-full aspect-square relative
                        bg-black/30 backdrop-blur-md rounded-xl
                        border border-green-500/30 cursor-pointer
                        hover:bg-black/40 hover:border-green-500/50
                        transition-all duration-300
                        shadow-[0_0_15px_rgba(74,222,128,0.15)]
                        overflow-hidden">
              
              {/* Decorative corner elements */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-green-500/50" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-green-500/50" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-green-500/50" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-green-500/50" />
              <img src={SUGGESTION_IMAGES[suggestion]} alt=''/>
            </div>

            {/* Content Below Card */}
            <div className="flex flex-col items-center gap-2">
              {/* Icon and Text */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-green-400 transform group-hover:scale-110 
                              transition-transform duration-300">
                  {SUGGESTION_ICONS[suggestion]}
                </div>
                <span className="text-white/90 text-sm font-medium">
                  {suggestion}
                </span>
              </div>

              {/* Live Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onLiveClick(suggestion);
                }}
                className="flex items-center gap-1.5
                          px-3 py-1.5 rounded-full
                          bg-green-500/20 border border-green-500/30
                          hover:bg-green-500/30
                          transition-colors duration-300">
                <Activity className="w-3 h-3 text-green-400" />
                <span className="text-green-400 text-xs">实况</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}