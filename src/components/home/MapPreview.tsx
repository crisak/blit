'use client'

import { useRef, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui'

export function MapPreview() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const mapPins = [
    { id: 1, city: 'Bogotá', department: 'Cundinamarca', x: 35, y: 30 },
    { id: 2, city: 'Soacha', department: 'Cundinamarca', x: 32, y: 32 },
    { id: 3, city: 'Medellín', department: 'Antioquia', x: 45, y: 55 },
    { id: 4, city: 'Cali', department: 'Valle del Cauca', x: 20, y: 65 },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 py-24"
    >
      {/* Background Map SVG */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M20,30 Q35,20 50,25 T80,35 L85,50 Q75,60 60,55 T30,60 Q15,50 20,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-500"
          />
          <path
            d="M25,35 Q40,30 55,40 T75,45"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-gray-600"
          />
        </svg>
      </div>

      {/* Decorative Glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {t('mapPreview.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">{t('mapPreview.subtitle')}</p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-accent-cyan to-accent-pink" />
        </div>

        {/* Map Preview */}
        <div
          className={`relative mx-auto mb-12 max-w-4xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          {/* Map Container */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 shadow-2xl">
            {/* Simplified Colombia Map Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a1a2e" />
                    <stop offset="100%" stopColor="#16213e" />
                  </linearGradient>
                </defs>
                <rect fill="url(#mapGradient)" width="100" height="100" />
                {/* Simplified Colombia outline */}
                <path
                  d="M30,15 Q50,10 70,20 L85,35 Q80,50 70,55 L55,65 Q40,70 30,60 L20,45 Q25,25 30,15"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="0.5"
                />
              </svg>
            </div>

            {/* Map Pins */}
            {mapPins.map((pin, index) => (
              <div
                key={pin.id}
                className={`absolute transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                style={{
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  {/* Pin Dot */}
                  <div className="h-4 w-4 animate-pulse rounded-full bg-accent-pink shadow-lg shadow-accent-pink/50">
                    <div className="absolute inset-0 animate-ping rounded-full bg-accent-pink/50" />
                  </div>
                  {/* Pin Label */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 whitespace-nowrap rounded-full bg-gray-900/90 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {pin.city}
                  </div>
                </div>
              </div>
            ))}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
          </div>

          {/* Stats Overlay */}
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-4 rounded-full bg-gray-900/90 px-6 py-3 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-xl font-bold text-white">4</div>
              <div className="text-xs text-gray-400">{t('mapPreview.departmentsStat')}</div>
            </div>
            <div className="h-8 w-px bg-gray-700" />
            <div className="text-center">
              <div className="text-xl font-bold text-accent-cyan">50+</div>
              <div className="text-xs text-gray-400">obras</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/map">
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-accent-cyan/50 bg-transparent font-semibold text-white transition-all hover:scale-105 hover:border-accent-cyan hover:bg-accent-cyan/10"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              {t('mapPreview.cta')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
