import { ReactNode } from 'react';

interface SlideTransitionProps {
  show: boolean;
  children: ReactNode;
}

export function SlideTransition({ show, children }: SlideTransitionProps) {
  return (
    <div
      className={`transition-opacity duration-500 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
