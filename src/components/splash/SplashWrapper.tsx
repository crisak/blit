'use client'

import { useEffect, useState } from 'react'
import { SplashScreen } from './SplashScreen'
import { cn } from '@/lib/utils/cn'

type SplashWrapperProps = {
  children: React.ReactNode
}

export function SplashWrapper({ children }: SplashWrapperProps) {
  const [showSplash, setShowSplash] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const isVisible = showSplash && isClient

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} duration={2500} />}

      <section
        className={cn(
          'relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden transition-opacity duration-300',
          {
            'opacity-0': isVisible,
            'opacity-100': !isVisible,
          }
        )}
      >
        {children}
      </section>
    </>
  )
}
