import { useState } from 'react';
import { QuizSlide } from '../QuizSlide';
import { Button } from '@/components/ui/button';
import { SuccessFeedbackOverlay } from '../SuccessFeedbackOverlay';

interface Level1Props {
  onCorrect: () => void;
  onWrong: () => void;
  currentLevel: number;
}

export function Level1({ onCorrect, onWrong, currentLevel }: Level1Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const options = [
    "In Ibrahim's my wedding",
    "In Shabbir's bhai wedding",
    "In your mama's wedding",
    "in the school"
  ];

  const correctAnswer = "In your mama's wedding";

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    
    setTimeout(() => {
      if (option === correctAnswer) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          onCorrect();
        }, 1800);
      } else {
        onWrong();
        setSelectedOption(null);
      }
    }, 300);
  };

  return (
    <>
      <QuizSlide title="Where was the first time you saw me?" currentLevel={currentLevel}>
        <div className="grid gap-3 md:gap-4">
          {options.map((option, index) => (
            <Button
              key={index}
              variant={selectedOption === option ? "default" : "outline"}
              size="lg"
              className={`h-auto py-3 md:py-4 px-4 md:px-6 text-base md:text-lg font-medium transition-all whitespace-normal text-left ${
                selectedOption === option
                  ? 'bg-rose-600 hover:bg-rose-700 text-white border-rose-600'
                  : 'bg-white hover:bg-rose-50 text-rose-900 border-2 border-rose-300 hover:border-rose-500'
              }`}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null}
            >
              {option}
            </Button>
          ))}
        </div>
      </QuizSlide>
      {showSuccess && <SuccessFeedbackOverlay />}
    </>
  );
}
