'use client';

import { useState, type ReactNode } from 'react';
import { SplashScreen } from '@/components/splash';

interface AppWrapperProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} duration={2500} />}
      <div className={showSplash ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        {children}
      </div>
    </>
  );
}
