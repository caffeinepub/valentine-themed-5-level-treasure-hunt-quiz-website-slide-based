import { useState } from 'react';
import { QuizSlide } from '../QuizSlide';
import { Button } from '@/components/ui/button';

interface Level3Props {
  onCorrect: () => void;
  currentLevel: number;
}

export function Level3({ onCorrect, currentLevel }: Level3Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    "I knew it",
    "You are crazy",
    "How can you do this",
    "Oh men you should told me we would done it together"
  ];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    
    setTimeout(() => {
      onCorrect();
    }, 300);
  };

  return (
    <QuizSlide 
      title="What will be your reaction when you find out that I will be going to jail just because I did something stupid?" 
      currentLevel={currentLevel}
    >
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
  );
}
