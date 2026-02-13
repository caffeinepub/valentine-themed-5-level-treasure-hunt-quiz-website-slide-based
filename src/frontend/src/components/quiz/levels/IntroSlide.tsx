import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';

interface IntroSlideProps {
  onStart: () => void;
}

export function IntroSlide({ onStart }: IntroSlideProps) {
  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-2 border-rose-200 overflow-hidden">
      <CardHeader className="space-y-6 pb-6 relative">
        {/* Floating hearts animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Heart className="absolute w-8 h-8 text-rose-400 fill-rose-400 animate-float-heart-1" style={{ top: '10%', left: '10%' }} />
          <Heart className="absolute w-6 h-6 text-pink-400 fill-pink-400 animate-float-heart-2" style={{ top: '20%', right: '15%' }} />
          <Heart className="absolute w-10 h-10 text-red-400 fill-red-400 animate-float-heart-3" style={{ bottom: '15%', left: '20%' }} />
          <Heart className="absolute w-7 h-7 text-rose-500 fill-rose-500 animate-float-heart-4" style={{ bottom: '25%', right: '10%' }} />
          <Sparkles className="absolute w-6 h-6 text-pink-500 animate-sparkle-1" style={{ top: '30%', left: '50%' }} />
          <Sparkles className="absolute w-5 h-5 text-rose-500 animate-sparkle-2" style={{ top: '60%', right: '30%' }} />
        </div>

        <div className="relative z-10 flex justify-center pt-8">
          <div className="relative">
            <Heart className="w-24 h-24 text-rose-600 fill-rose-600 animate-heart-beat" />
            <div className="absolute inset-0 animate-heart-glow">
              <Heart className="w-24 h-24 text-rose-400 fill-rose-400 opacity-50" />
            </div>
          </div>
        </div>

        <CardTitle className="text-3xl md:text-4xl text-center text-rose-900 font-bold animate-fade-in-up">
          Welcome to Your Love Journey
        </CardTitle>
        
        <p className="text-center text-rose-700 text-lg md:text-xl animate-fade-in-up animation-delay-200">
          Answer these questions to discover how well you know your favourite girl
        </p>
      </CardHeader>

      <CardContent className="space-y-6 pb-8">
        <div className="flex justify-center animate-fade-in-up animation-delay-400">
          <Button
            size="lg"
            onClick={onStart}
            className="bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 hover:from-rose-700 hover:via-pink-700 hover:to-red-700 text-white font-bold text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Start the Quiz
            <Heart className="ml-2 w-6 h-6 fill-white" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
