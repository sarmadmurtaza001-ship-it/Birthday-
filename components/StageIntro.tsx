
import React from 'react';

interface Props {
  onStart: () => void;
}

export const StageIntro: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 space-y-8">
      <div className="relative">
        <div className="absolute -inset-4 bg-pink-200 blur-2xl opacity-50 rounded-full animate-pulse"></div>
        <h1 className="text-6xl md:text-8xl font-bold gradient-text relative z-10 leading-tight">
          Happy Birthday <br /> Jugni!
        </h1>
      </div>
      
      <p className="text-xl md:text-2xl text-pink-600 font-handwritten max-w-lg leading-relaxed">
        To the most special person in the world. I've prepared a little journey just for you.
      </p>

      <button 
        onClick={onStart}
        className="px-10 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 group"
      >
        <span>Begin the Magic</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

      <div className="flex gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="w-3 h-3 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
        ))}
      </div>
    </div>
  );
};
