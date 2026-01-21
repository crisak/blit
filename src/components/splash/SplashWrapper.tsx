'use client'

import { useState } from 'react'
import { SplashScreen } from './SplashScreen'

type SplashWrapperProps = {
  children: React.ReactNode
}

export function SplashWrapper({ children }: SplashWrapperProps) {
  const [showSplash, setShowSplash] = useState(true)
  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} duration={2500} />}

      <section
        className={`relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden transition-opacity duration-300 ${showSplash ? 'opacity-0' : 'opacity-100'}`}
      >
        {children}
      </section>
    </>
  )
}
