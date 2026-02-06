
import React, { useState } from 'react';
import { AppStage } from './types';
import { StageIntro } from './components/StageIntro';
import { StageQuiz } from './components/StageQuiz';
import { StageCake } from './components/StageCake';
import { StageGallery } from './components/StageGallery';
import { StageQuotes } from './components/StageQuotes';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.INTRO);

  const renderStage = () => {
    switch (stage) {
      case AppStage.INTRO:
        return <StageIntro onStart={() => setStage(AppStage.QUIZ)} />;
      case AppStage.QUIZ:
        return <StageQuiz onComplete={() => setStage(AppStage.CAKE)} />;
      case AppStage.CAKE:
        return <StageCake onComplete={() => setStage(AppStage.GALLERY)} />;
      case AppStage.GALLERY:
        return <StageGallery onNext={() => setStage(AppStage.QUOTES)} />;
      case AppStage.QUOTES:
        return <StageQuotes />;
      default:
        return <StageIntro onStart={() => setStage(AppStage.QUIZ)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fff5f7] text-gray-900 selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-100/50 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/40 blur-3xl rounded-full"></div>
        
        {/* Floating Hearts */}
        <div className="absolute top-20 left-10 text-pink-200/40 text-6xl floating" style={{ animationDelay: '0s' }}>♥</div>
        <div className="absolute top-1/2 right-20 text-pink-200/30 text-8xl floating" style={{ animationDelay: '1.5s' }}>♥</div>
        <div className="absolute bottom-40 left-1/4 text-pink-200/20 text-4xl floating" style={{ animationDelay: '3s' }}>♥</div>
      </div>

      <main className="relative z-10">
        {renderStage()}
      </main>

      <footer className="relative z-10 py-8 text-center text-pink-300 text-sm font-medium tracking-widest uppercase">
        Made with Love & Magic
      </footer>
    </div>
  );
};

export default App;
