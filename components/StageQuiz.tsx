
import React, { useState } from 'react';
import { QUESTIONS } from '../constants';

interface Props {
  onComplete: () => void;
}

export const StageQuiz: React.FC<Props> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelected(option);
    setShowFeedback(true);
    
    setTimeout(() => {
      if (currentStep < QUESTIONS.length - 1) {
        setCurrentStep(prev => prev + 1);
        setSelected(null);
        setShowFeedback(false);
      } else {
        onComplete();
      }
    }, 1200);
  };

  const q = QUESTIONS[currentStep];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-pink-100">
        <div className="mb-8 flex justify-between items-center">
          <span className="text-pink-400 font-bold uppercase tracking-widest text-sm">Our Story • {currentStep + 1}/{QUESTIONS.length}</span>
          <div className="w-32 h-2 bg-pink-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-pink-500 transition-all duration-500"
              style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-snug">
          {q.question}
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {q.options.map((option) => {
            const isCorrect = option === q.correctAnswer;
            const isSelected = option === selected;
            
            let btnClass = "p-5 rounded-2xl text-left border-2 transition-all duration-300 text-lg font-medium ";
            if (showFeedback) {
              if (isCorrect) btnClass += "bg-green-50 border-green-500 text-green-700 ";
              else if (isSelected) btnClass += "bg-red-50 border-red-500 text-red-700 ";
              else btnClass += "bg-white border-gray-100 text-gray-400 ";
            } else {
              btnClass += "bg-white border-pink-50 hover:border-pink-300 hover:bg-pink-50 text-gray-700 hover:text-pink-600";
            }

            return (
              <button
                key={option}
                onClick={() => !showFeedback && handleOptionClick(option)}
                disabled={showFeedback}
                className={btnClass}
              >
                <div className="flex justify-between items-center">
                  <span>{option}</span>
                  {showFeedback && isCorrect && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      
      <p className="mt-8 text-pink-400 italic">"Remembering every little thing about us..."</p>
    </div>
  );
};
