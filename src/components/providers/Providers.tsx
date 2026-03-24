'use client'

import { LenisProvider } from './LenisProvider'
import { PageTransitionProvider } from './PageTransitionProvider'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <LenisProvider>
      <PageTransitionProvider>
        {children}
      </PageTransitionProvider>
    </LenisProvider>
  )
}

export { LenisProvider, PageTransitionProvider }
