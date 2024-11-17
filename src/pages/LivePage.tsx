import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Activity } from 'lucide-react';
import { GalaxyBackground } from '../components/GalaxyBackground';

export function LivePage() {
  const navigate = useNavigate();
  const { suggestion } = useParams();

  const handleBack = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      <GalaxyBackground />

      {/* Enhanced Back Button */}
      <div className="absolute top-0 left-0 w-full z-20 bg-black/30 backdrop-blur-md
                    border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 sm:py-4">
          <button
            onClick={handleBack}
            className="group flex items-center gap-2 px-4 py-2 
                     bg-green-500/20 rounded-full
                     border border-green-500/30 text-white/90
                     hover:bg-green-500/30 hover:border-green-500/50
                     transition-all duration-300
                     shadow-[0_0_15px_rgba(74,222,128,0.15)]"
          >
            <ArrowLeft className="w-5 h-5 text-green-400 
                                group-hover:transform group-hover:-translate-x-1 
                                transition-transform duration-300" />
            <span className="text-base font-medium">返回主页</span>
          </button>
        </div>
      </div>

      {/* Live Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen pt-24">
        <div className="flex items-center gap-3 mb-8">
          <Activity className="w-6 h-6 text-green-400 animate-pulse" />
          <h2 className="text-3xl font-bold text-white">
            {decodeURIComponent(suggestion || '')} 实况
          </h2>
        </div>
        
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="aspect-video bg-black/30 backdrop-blur-md
                        rounded-xl border border-green-500/30
                        shadow-[0_0_15px_rgba(74,222,128,0.15)]
                        flex items-center justify-center
                        overflow-hidden">
            <div className="flex flex-col items-center gap-4">
              <Activity className="w-8 h-8 text-green-400 animate-pulse" />
              <p className="text-green-400/70 text-lg">实况内容加载中...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}