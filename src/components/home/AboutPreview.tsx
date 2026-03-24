'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui'

export function AboutPreview() {
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900 py-24"
    >
      {/* Artistic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-gray-700"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-accent-pink/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent-cyan/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Image Section */}
          <div
            className={`relative transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=1000&fit=crop"
                alt="Blito pintando un mural"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Mini Gallery */}
            <div className="absolute -bottom-6 -right-6 flex gap-3">
              <div className="h-24 w-20 overflow-hidden rounded-lg border-2 border-gray-800 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=200&h=200&fit=crop"
                  alt="Obra 1"
                  width={80}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-24 w-20 overflow-hidden rounded-lg border-2 border-gray-800 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1578926288207-a90a103fe657?w=200&h=200&fit=crop"
                  alt="Obra 2"
                  width={80}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-24 w-20 overflow-hidden rounded-lg border-2 border-gray-800 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1561069934-eee2259528a6?w=200&h=200&fit=crop"
                  alt="Obra 3"
                  width={80}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-accent-pink" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-accent-cyan" />
          </div>

          {/* Content Section */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
          >
            <h2 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl">
              {t('about.title')}
            </h2>

            <div className="mb-8 h-1 w-20 bg-gradient-to-r from-accent-pink to-accent-cyan" />

            <p className="mb-6 text-lg leading-relaxed text-gray-300">{t('about.bio')}</p>

            <div className="mb-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-accent-pink/20 px-4 py-2 text-sm font-medium text-accent-pink">
                +10 años experiencia
              </span>
              <span className="rounded-full bg-accent-cyan/20 px-4 py-2 text-sm font-medium text-accent-cyan">
                Sabor Latino Crew
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                Ilegales Project
              </span>
            </div>

            <Link href="/about">
              <Button
                size="lg"
                className="group bg-white font-semibold text-gray-900 transition-all hover:scale-105"
              >
                {t('about.cta')}
                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
