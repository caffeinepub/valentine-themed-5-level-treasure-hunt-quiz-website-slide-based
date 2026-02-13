import { useState } from 'react';
import { QuizSlide } from '../QuizSlide';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface Level5Props {
  onComplete: () => void;
  currentLevel: number;
}

export function Level5({ onComplete, currentLevel }: Level5Props) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (answer.trim()) {
      onComplete();
    }
  };

  return (
    <QuizSlide title="When did you find that I am the one for you?" currentLevel={currentLevel}>
      <div className="space-y-4 md:space-y-6">
        <div className="space-y-3">
          <Label htmlFor="answer" className="text-base md:text-lg text-rose-900 font-medium">
            Share your thoughts...
          </Label>
          <Textarea
            id="answer"
            placeholder="Type your answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="min-h-[150px] md:min-h-[200px] text-base md:text-lg border-2 border-rose-300 focus:border-rose-500 focus:ring-rose-500 resize-none"
          />
        </div>
        <Button
          size="lg"
          className="w-full bg-rose-600 hover:bg-rose-700 text-white text-base md:text-lg py-4 md:py-6 font-bold"
          onClick={handleSubmit}
          disabled={!answer.trim()}
        >
          Continue
        </Button>
      </div>
    </QuizSlide>
  );
}
