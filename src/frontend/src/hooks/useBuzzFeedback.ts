import { useState, useCallback, useRef, useEffect } from 'react';

export function useBuzzFeedback() {
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Try to initialize audio, but handle gracefully if it fails
    try {
      audioRef.current = new Audio('/assets/buzz.mp3');
      audioRef.current.preload = 'auto';
      
      // Handle audio loading errors silently
      audioRef.current.addEventListener('error', () => {
        console.warn('Audio file not available');
        audioRef.current = null;
      });
    } catch (error) {
      console.warn('Could not initialize audio:', error);
      audioRef.current = null;
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const triggerWrongAnswer = useCallback(() => {
    setShowWrongAnswer(true);
    
    // Only try to play if audio is available
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silently handle autoplay restrictions or missing audio
      });
    }
  }, []);

  const hideWrongAnswer = useCallback(() => {
    setShowWrongAnswer(false);
  }, []);

  return {
    showWrongAnswer,
    triggerWrongAnswer,
    hideWrongAnswer,
  };
}
