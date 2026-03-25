'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const t = useTranslations('home')
  const heroRef = useRef<HTMLElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [videoError, setVideoError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    if (typeof window === 'undefined' || !heroRef.current) return

    const ctx = gsap.context(() => {
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          yPercent: 50,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'center top',
            scrub: true,
          },
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleVideoError = () => {
    setVideoError(true)
  }

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden"
    >
      <div ref={backgroundRef} className="absolute inset-0 scale-110">
        {!videoError ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onError={handleVideoError}
            poster="/images/gallery/banner/bg-form-contact.webp"
          >
            <source src="/videos/hero-mural.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/gallery/banner/bg-form-contact.webp"
            alt="Fondo de mural de arte callejero"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950/90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div ref={contentRef} className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center">
        <p
          className={`hero-tagline mb-6 text-xs uppercase tracking-[0.4em] text-gray-400 md:text-sm transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {t('tagline')}
        </p>

        <h1
          className={`hero-title mb-10 font-heading text-6xl font-black tracking-tight text-white transition-all duration-700 delay-150 sm:text-7xl md:text-8xl lg:text-9xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ textShadow: '0 0 80px rgba(255,255,255,0.1)' }}
        >
          {t('title')}
        </h1>

        <p
          className={`hero-subtitle mx-auto mb-16 max-w-2xl text-lg leading-relaxed text-gray-300 transition-all duration-700 delay-300 md:text-xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {t('subtitle')}
        </p>

        <div
          className={`hero-cta flex flex-col justify-center gap-6 transition-all duration-700 delay-500 opacity-0 sm:flex-row ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Link href="/projects">
            <Button
              size="lg"
              variant="default"
              className="group relative overflow-hidden bg-white font-semibold text-gray-900 transition-all hover:scale-105"
            >
              <span className="relative z-10">{t('cta.portfolio')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-transparent font-semibold text-white transition-all hover:scale-105 hover:border-white/60 hover:bg-white/10"
            >
              {t('cta.quote')}
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-12 w-px animate-pulse bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  )
}
