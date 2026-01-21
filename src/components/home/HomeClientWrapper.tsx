'use client'

import { useState, type ReactNode } from 'react'
import { SplashScreen } from '@/components/splash'
import { cn } from '@/lib/utils/cn'

interface HomeClientWrapperProps {
  children: ReactNode
}

export function HomeClientWrapper({ children }: HomeClientWrapperProps) {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} duration={2500} />}
      <div
        className={cn('transition-opacity duration-300', {
          'opacity-0': showSplash,
          'opacity-100': !showSplash,
        })}
      >
        {children}
      </div>
    </>
  )
}
