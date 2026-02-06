
import React from 'react';
import { MEMORIES } from '../constants';

interface Props {
  onNext: () => void;
}

export const StageGallery: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-5xl font-bold gradient-text">Our Beautiful Memories</h2>
        <p className="text-gray-500 font-medium">Every picture tells a thousand stories of us.</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {MEMORIES.map((memory, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 hover:-translate-y-2"
          >
            <img 
              src={memory.url} 
              alt={memory.caption}
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <p className="text-white text-xl font-handwritten">{memory.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button 
          onClick={onNext}
          className="px-12 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          See My Heart's Message
        </button>
      </div>
    </div>
  );
};
