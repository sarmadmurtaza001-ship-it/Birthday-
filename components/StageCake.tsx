
import React, { useState, useEffect } from 'react';

interface Props {
  onComplete: () => void;
}

export const StageCake: React.FC<Props> = ({ onComplete }) => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [cakeCut, setCakeCut] = useState(false);
  const [isWished, setIsWished] = useState(false);

  const handleBlow = () => {
    setCandlesBlown(true);
    setTimeout(() => setIsWished(true), 1000);
  };

  const handleCut = () => {
    setCakeCut(true);
    setTimeout(() => onComplete(), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 space-y-12">
      <h2 className="text-4xl font-bold text-gray-800 font-romantic text-center">
        {!candlesBlown ? "Make a Wish & Blow the Candles" : !cakeCut ? "Now, Let's Cut the Cake!" : "Perfect!"}
      </h2>

      <div className="relative group cursor-pointer" onClick={!candlesBlown ? handleBlow : !cakeCut ? handleCut : undefined}>
        {/* Cake Base */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-500 group-hover:scale-105">
          <div className="absolute bottom-0 w-full h-3/4 bg-pink-100 rounded-b-full border-b-8 border-pink-200"></div>
          <div className="absolute bottom-1/4 w-full h-1/2 bg-white rounded-t-3xl shadow-md"></div>
          
          {/* Frosting / Topping */}
          <div className="absolute top-1/4 w-full h-12 bg-pink-300 rounded-full flex justify-around px-4">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="w-8 h-8 bg-pink-400 rounded-full -mt-2"></div>
             ))}
          </div>

          {/* Slice Effect */}
          {cakeCut && (
            <div className="absolute top-0 left-1/2 w-4 h-full bg-pink-500/20 -translate-x-1/2 blur-sm rotate-12"></div>
          )}

          {/* Candles */}
          {!cakeCut && (
            <div className="absolute -top-12 left-0 w-full flex justify-center space-x-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative w-4 h-16 bg-gradient-to-t from-pink-400 to-yellow-100 rounded-full border-b-2 border-pink-500">
                  {!candlesBlown && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-8 bg-orange-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(251,146,60,0.8)]">
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-yellow-200 rounded-full"></div>
                    </div>
                  )}
                  {candlesBlown && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-gray-400/50 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Interaction Tooltip */}
        {!candlesBlown && (
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border border-pink-100 animate-bounce">
            Click to Blow
          </div>
        )}
        {candlesBlown && !cakeCut && (
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border border-pink-100 animate-bounce">
            Click to Cut
          </div>
        )}
      </div>

      {isWished && !cakeCut && (
        <div className="text-center animate-fade-in">
          <p className="text-2xl font-handwritten text-pink-600">Your wish is my command...</p>
        </div>
      )}
    </div>
  );
};
