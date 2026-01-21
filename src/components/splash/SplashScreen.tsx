'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export function SplashScreen({ onComplete, duration = 2500 }: SplashScreenProps) {
  const t = useTranslations('splash');
  const [phase, setPhase] = useState<'enter' | 'visible' | 'exit' | 'done'>('enter');

  useEffect(() => {
    const enterDuration = 600;
    const exitDuration = 400;
    const visibleDuration = Math.max(0, duration - enterDuration - exitDuration);

    const enterTimer = setTimeout(() => {
      setPhase('visible');
    }, enterDuration);

    const exitTimer = setTimeout(() => {
      setPhase('exit');
    }, enterDuration + visibleDuration);

    const doneTimer = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [duration, onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950
        transition-opacity duration-400 ease-out
        ${phase === 'exit' ? 'opacity-0' : 'opacity-100'}
      `}
      role="status"
      aria-label={t('loading')}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(30,30,30,1)_0%,rgba(5,5,5,1)_100%)]" />
      </div>

      {/* Logo */}
      <div
        className={`
          relative text-5xl md:text-7xl font-extrabold font-heading text-white
          transition-all duration-600 ease-out
          ${phase === 'enter' ? 'opacity-0 scale-90 tracking-[0.5em]' : 'opacity-100 scale-100 tracking-[0.2em]'}
        `}
        style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.15)' }}
      >
        BLITO
      </div>

      {/* Elegant loading line */}
      <div className="mt-12 w-32 h-px bg-gray-800 overflow-hidden">
        <div
          className="h-full bg-white/50"
          style={{
            animation: 'shimmer 1.5s ease-in-out infinite',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
            width: 100%;
          }
          100% {
            transform: translateX(200%);
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
