'use client'

import { useRef, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export function CollectivesSection() {
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

  const collectives = [
    {
      name: t('collectives.ilegales'),
      handle: '@ilegales.col',
      url: 'https://www.instagram.com/ilegales.col/',
      website: 'https://www.ilegales.co',
      color: 'bg-accent-pink',
    },
    {
      name: t('collectives.saborLatino'),
      handle: '@saborlatinocrewoficial',
      url: 'https://www.instagram.com/saborlatinocrewoficial/',
      website: null,
      color: 'bg-accent-cyan',
    },
    {
      name: t('collectives.saborCallejero'),
      handle: '@saborlatinocallejero',
      url: 'https://www.instagram.com/saborlatinocallejero/',
      website: null,
      color: 'bg-accent-purple',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900 py-20"
    >
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent-pink/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {t('collectives.title')}
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-accent-pink to-accent-cyan" />
        </div>

        {/* Collectives Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {collectives.map((collective, index) => (
            <a
              key={collective.name}
              href={collective.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all duration-500 hover:border-gray-700 hover:shadow-xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Accent Bar */}
              <div className={`absolute left-0 top-0 h-1 w-full ${collective.color} opacity-80`} />

              {/* Content */}
              <div className="mb-4">
                <h3 className="mb-1 font-heading text-xl font-bold text-white group-hover:text-accent-pink transition-colors">
                  {collective.name}
                </h3>
                <p className="text-sm text-gray-500">{collective.handle}</p>
              </div>

              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors group-hover:bg-gray-700">
                  <svg
                    className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>

                {collective.website && (
                  <Link
                    href={collective.website}
                    className="flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{collective.website.replace('https://', '')}</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}
              </div>

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${collective.color}/5`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
