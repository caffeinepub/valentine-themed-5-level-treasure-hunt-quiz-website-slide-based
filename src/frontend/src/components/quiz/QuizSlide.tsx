import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProgressIndicator } from './ProgressIndicator';

interface QuizSlideProps {
  title: string;
  currentLevel: number;
  children: ReactNode;
}

export function QuizSlide({ title, currentLevel, children }: QuizSlideProps) {
  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-2 border-rose-200">
      <CardHeader className="space-y-4 pb-4">
        <ProgressIndicator currentLevel={currentLevel} totalLevels={5} />
        <CardTitle className="text-xl sm:text-2xl md:text-3xl text-center text-rose-900 font-bold whitespace-normal break-words leading-relaxed px-2">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 md:space-y-6 pt-2 pb-6">
        {children}
      </CardContent>
    </Card>
  );
}
