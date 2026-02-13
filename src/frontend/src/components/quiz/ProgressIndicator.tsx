import { Heart } from 'lucide-react';

interface ProgressIndicatorProps {
  currentLevel: number;
  totalLevels: number;
}

export function ProgressIndicator({ currentLevel, totalLevels }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalLevels }, (_, i) => i + 1).map((level) => (
        <div key={level} className="flex items-center">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
              level === currentLevel
                ? 'bg-rose-600 border-rose-600 text-white scale-110'
                : level < currentLevel
                ? 'bg-pink-500 border-pink-500 text-white'
                : 'bg-white border-rose-300 text-rose-400'
            }`}
          >
            {level < currentLevel ? (
              <Heart className="w-5 h-5 fill-current" />
            ) : (
              <span className="font-bold">{level}</span>
            )}
          </div>
          {level < totalLevels && (
            <div
              className={`w-8 h-1 mx-1 rounded ${
                level < currentLevel ? 'bg-pink-500' : 'bg-rose-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
