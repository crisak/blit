'use client'

import { useRef, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

interface StatItem {
  value: number
  suffix: string
  labelKey: string
}

export function StatisticsSection() {
  const t = useTranslations('home')
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ years: 0, murals: 0, cities: 0, sqm: 0 })

  const stats: StatItem[] = [
    { value: 10, suffix: '+', labelKey: 'statistics.yearsLabel' },
    { value: 50, suffix: '+', labelKey: 'statistics.muralsLabel' },
    { value: 8, suffix: '', labelKey: 'statistics.citiesLabel' },
    { value: 1200, suffix: '+', labelKey: 'statistics.sqmLabel' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
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
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setCounters({
        years: Math.round(10 * easeOut),
        murals: Math.round(50 * easeOut),
        cities: Math.round(8 * easeOut),
        sqm: Math.round(1200 * easeOut),
      })

      if (step >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gray-950 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient( 90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px )`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent-pink/10 blur-3xl" />
      <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent-cyan/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {t('statistics.title')}
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-accent-pink to-accent-cyan" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {/* Years */}
          <div
            className={`text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="mb-2 font-heading text-5xl font-black text-white md:text-6xl lg:text-7xl">
              <span className="text-accent-pink">{counters.years}</span>
              <span className="text-accent-pink">+</span>
            </div>
            <div className="text-sm font-medium uppercase tracking-wider text-gray-400 md:text-base">
              {t('statistics.years')}
            </div>
          </div>

          {/* Murals */}
          <div
            className={`text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="mb-2 font-heading text-5xl font-black text-white md:text-6xl lg:text-7xl">
              <span className="text-accent-cyan">{counters.murals}</span>
              <span className="text-accent-cyan">+</span>
            </div>
            <div className="text-sm font-medium uppercase tracking-wider text-gray-400 md:text-base">
              {t('statistics.murals')}
            </div>
          </div>

          {/* Cities */}
          <div
            className={`text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="mb-2 font-heading text-5xl font-black text-white md:text-6xl lg:text-7xl">
              <span className="text-white">{counters.cities}</span>
            </div>
            <div className="text-sm font-medium uppercase tracking-wider text-gray-400 md:text-base">
              {t('statistics.cities')}
            </div>
          </div>

          {/* Square Meters */}
          <div
            className={`text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '450ms' }}
          >
            <div className="mb-2 font-heading text-5xl font-black text-white md:text-6xl lg:text-7xl">
              <span className="text-accent-pink">{counters.sqm}</span>
              <span className="text-accent-pink">+</span>
            </div>
            <div className="text-sm font-medium uppercase tracking-wider text-gray-400 md:text-base">
              m²
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-pink/50 to-transparent" />
    </section>
  )
}
