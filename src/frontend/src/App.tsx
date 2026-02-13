import { useState } from 'react';
import { IntroSlide } from './components/quiz/levels/IntroSlide';
import { Level1 } from './components/quiz/levels/Level1';
import { Level2 } from './components/quiz/levels/Level2';
import { Level3 } from './components/quiz/levels/Level3';
import { Level4 } from './components/quiz/levels/Level4';
import { Level5 } from './components/quiz/levels/Level5';
import { CompletionSlide } from './components/quiz/levels/CompletionSlide';
import { WrongAnswerToast } from './components/quiz/WrongAnswerToast';
import { SlideTransition } from './components/quiz/SlideTransition';
import { useBuzzFeedback } from './hooks/useBuzzFeedback';
import { Heart } from 'lucide-react';

function App() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { showWrongAnswer, triggerWrongAnswer, hideWrongAnswer } = useBuzzFeedback();

  const handleStart = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentLevel(1);
      setIsTransitioning(false);
    }, 500);
  };

  const handleCorrectAnswer = () => {
    hideWrongAnswer();
    setCurrentLevel((prev) => prev + 1);
  };

  const handleWrongAnswer = () => {
    triggerWrongAnswer();
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/20 via-pink-500/10 to-red-500/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-4 md:py-6 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-600 fill-rose-600 animate-pulse flex-shrink-0" />
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent leading-tight">
                The hunt to find your favourite girl
              </h1>
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-600 fill-rose-600 animate-pulse flex-shrink-0" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-4 md:py-8">
          <div className="w-full max-w-3xl">
            <SlideTransition show={!isTransitioning}>
              {currentLevel === 0 && <IntroSlide onStart={handleStart} />}
              {currentLevel === 1 && (
                <Level1 
                  onCorrect={handleCorrectAnswer} 
                  onWrong={handleWrongAnswer}
                  currentLevel={1}
                />
              )}
              {currentLevel === 2 && (
                <Level2 
                  onCorrect={handleCorrectAnswer} 
                  onWrong={handleWrongAnswer}
                  currentLevel={2}
                />
              )}
              {currentLevel === 3 && (
                <Level3 
                  onCorrect={handleCorrectAnswer}
                  currentLevel={3}
                />
              )}
              {currentLevel === 4 && (
                <Level4 
                  onCorrect={handleCorrectAnswer} 
                  onWrong={handleWrongAnswer}
                  currentLevel={4}
                />
              )}
              {currentLevel === 5 && (
                <Level5 
                  onComplete={handleCorrectAnswer}
                  currentLevel={5}
                />
              )}
              {currentLevel === 6 && <CompletionSlide />}
            </SlideTransition>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-4 md:py-6 px-4 text-center text-xs md:text-sm text-rose-900/70">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            <span>© {new Date().getFullYear()} • Built with</span>
            <Heart className="inline w-3 h-3 md:w-4 md:h-4 text-rose-600 fill-rose-600" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-700 hover:text-rose-900 font-medium underline"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>

      {/* Wrong Answer Toast */}
      {showWrongAnswer && <WrongAnswerToast onClose={hideWrongAnswer} />}
    </div>
  );
}

export default App;
