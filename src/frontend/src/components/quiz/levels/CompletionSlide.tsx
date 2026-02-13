import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Heart, Sparkles } from 'lucide-react';

export function CompletionSlide() {
  return (
    <Card className="bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 backdrop-blur-sm shadow-2xl border-4 border-rose-300">
      <CardHeader className="text-center space-y-6 pt-12">
        <div className="flex justify-center gap-4">
          <Heart className="w-16 h-16 text-rose-600 fill-rose-600 animate-pulse" />
          <Sparkles className="w-16 h-16 text-pink-600 fill-pink-600 animate-pulse" />
          <Heart className="w-16 h-16 text-rose-600 fill-rose-600 animate-pulse" />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-900">
            Congratulations! 🥰
          </h2>
        </div>
      </CardHeader>
      <CardContent className="space-y-8 pb-12">
        <div className="text-center space-y-4">
          <p className="text-xl md:text-2xl text-rose-800 leading-relaxed font-medium px-4">
            Well I knew you find your favourite girl well that's me I know. You have done a good job so in the reward You get me for your lifetime🥰.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-full font-bold text-lg shadow-lg">
            <Heart className="w-6 h-6 fill-current" />
            <span>The over</span>
            <Heart className="w-6 h-6 fill-current" />
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <img 
            src="/assets/generated/heart-icon.dim_256x256.png" 
            alt="Heart" 
            className="w-32 h-32 animate-pulse"
          />
        </div>
      </CardContent>
    </Card>
  );
}
