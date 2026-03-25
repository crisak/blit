'use client'

import { useRef, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export function CollaborationsSection() {
  const t = useTranslations('home')
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const brands = [
    { name: 'Nike', logo: 'NIKE' },
    { name: 'Adidas', logo: 'ADIDAS' },
    { name: 'Coca-Cola', logo: 'COCA-COLA' },
    { name: 'Red Bull', logo: 'RED BULL' },
    { name: 'Puma', logo: 'PUMA' },
    { name: 'Rockstar', logo: 'ROCKSTAR' },
  ]

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gray-950 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gray-500">
            {t('collaborations.subtitle')}
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{t('collaborations.title')}</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-950 to-transparent" />

          <div
            className={`flex gap-12 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            <div className="flex shrink-0 gap-12">
              {brands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex h-24 w-36 items-center justify-center rounded-xl bg-gray-900/50 p-4 grayscale transition-all duration-300 hover:grayscale-0"
                >
                  <span className="text-2xl font-black uppercase tracking-wider text-gray-600 hover:text-white">
                    {brand.logo}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex shrink-0 gap-12">
              {brands.map((brand, index) => (
                <div
                  key={`${brand.name}-dup-${index}`}
                  className="flex h-24 w-36 items-center justify-center rounded-xl bg-gray-900/50 p-4 grayscale transition-all duration-300 hover:grayscale-0"
                >
                  <span className="text-2xl font-black uppercase tracking-wider text-gray-600 hover:text-white">
                    {brand.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-600">
          Estos son logos placeholder. Reemplazar con logos reales de marcas que han trabajado con
          Blito.
        </p>
      </div>
    </section>
  )
}
