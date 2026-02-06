
import React, { useState, useEffect } from 'react';
import { generatePersonalizedWish } from '../services/geminiService';

export const StageQuotes: React.FC = () => {
  const [wishes, setWishes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const results = await generatePersonalizedWish("A deep romantic long-distance relationship where the couple hasn't met in person yet but is deeply in love and counting down the days to their first meeting.");
      setWishes(results);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-[#fff5f7] to-white">
      <div className="max-w-3xl w-full text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 font-romantic">To You, My Love</h2>
          <div className="h-1 w-24 bg-pink-500 mx-auto rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
            <p className="text-pink-400 font-medium">Gathering my thoughts...</p>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {wishes.map((wish, i) => (
              <div 
                key={i} 
                className="p-8 bg-white rounded-3xl shadow-lg border border-pink-50 hover:shadow-2xl transition-shadow duration-500 transform hover:scale-[1.02]"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <p className="text-2xl md:text-3xl font-handwritten text-pink-700 leading-relaxed italic">
                  "{wish}"
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="pt-12">
          <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Soon to be in your arms</p>
          <p className="text-4xl font-romantic text-gray-800 mt-2">Always & Beyond</p>
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="text-pink-400 hover:text-pink-600 font-medium transition-colors flex items-center gap-2 mx-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Relive the Magic
        </button>
      </div>
    </div>
  );
};
