import { Heart, Sparkles } from 'lucide-react';

export function SuccessFeedbackOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Center burst effect */}
      <div className="relative">
        <Heart className="w-32 h-32 text-rose-600 fill-rose-600 animate-heart-burst" />
        <div className="absolute inset-0 animate-heart-burst-glow">
          <Heart className="w-32 h-32 text-rose-400 fill-rose-400 opacity-70" />
        </div>
      </div>

      {/* Floating hearts burst */}
      <Heart className="absolute w-12 h-12 text-rose-500 fill-rose-500 animate-burst-up-1" style={{ top: '50%', left: '50%' }} />
      <Heart className="absolute w-10 h-10 text-pink-500 fill-pink-500 animate-burst-up-2" style={{ top: '50%', left: '50%' }} />
      <Heart className="absolute w-14 h-14 text-red-500 fill-red-500 animate-burst-up-3" style={{ top: '50%', left: '50%' }} />
      <Heart className="absolute w-8 h-8 text-rose-400 fill-rose-400 animate-burst-up-4" style={{ top: '50%', left: '50%' }} />
      <Heart className="absolute w-11 h-11 text-pink-400 fill-pink-400 animate-burst-up-5" style={{ top: '50%', left: '50%' }} />
      <Heart className="absolute w-9 h-9 text-red-400 fill-red-400 animate-burst-up-6" style={{ top: '50%', left: '50%' }} />

      {/* Sparkles */}
      <Sparkles className="absolute w-8 h-8 text-yellow-400 animate-sparkle-burst-1" style={{ top: '40%', left: '40%' }} />
      <Sparkles className="absolute w-6 h-6 text-yellow-300 animate-sparkle-burst-2" style={{ top: '40%', right: '40%' }} />
      <Sparkles className="absolute w-7 h-7 text-yellow-500 animate-sparkle-burst-3" style={{ bottom: '40%', left: '45%' }} />
      <Sparkles className="absolute w-5 h-5 text-yellow-400 animate-sparkle-burst-4" style={{ bottom: '40%', right: '45%' }} />
    </div>
  );
}
