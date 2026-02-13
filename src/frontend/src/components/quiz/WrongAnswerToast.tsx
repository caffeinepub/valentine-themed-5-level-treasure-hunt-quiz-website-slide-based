import { useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WrongAnswerToastProps {
  onClose: () => void;
}

export function WrongAnswerToast({ onClose }: WrongAnswerToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 animate-in slide-in-from-top">
      <Alert className="bg-rose-100 border-2 border-rose-400 shadow-lg">
        <div className="flex items-start justify-between gap-2">
          <AlertDescription className="text-rose-900 font-medium text-lg flex-1">
            do you really think this? Think more
          </AlertDescription>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-rose-700 hover:text-rose-900 hover:bg-rose-200"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Alert>
    </div>
  );
}
