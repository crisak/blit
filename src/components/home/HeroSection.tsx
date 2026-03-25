'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils/cn'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BG_SPEED = 0.91
const FG_SPEED = 0.95

export function HeroSection() {
  const t = useTranslations('home')
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const fgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    if (typeof window === 'undefined' || !sectionRef.current) return

    const ctx = gsap.context(() => {
      // Background parallax — slower speed = more movement = feels farther
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: (1 - BG_SPEED) * 50,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // Foreground parallax — faster speed = less movement = feels closer
      if (fgRef.current) {
        gsap.to(fgRef.current, {
          yPercent: (1 - FG_SPEED) * 50,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // Content fades out on scroll
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          yPercent: 50,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'center top',
            scrub: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Layer 0: Background */}
        <div ref={bgRef} className="absolute inset-0 z-0 scale-[1.025] will-change-transform">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            quality={90}
            fetchPriority="high"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-[0] bg-gradient-to-b from-gray-950/60 via-gray-950/30 to-gray-950/70" />

        {/* Content — between BG and FG for depth effect */}
        <div
          ref={contentRef}
          className="relative z-[1] flex h-full flex-col items-center justify-center px-4 text-center"
        >
          {/* Logo stack */}
          <div className="relative mb-8">
            <Image
              src="/images/hero/logo-glow.png"
              alt=""
              width={600}
              height={471}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 opacity-60 blur-sm"
              priority
            />
            <Image
              src="/images/hero/logo.png"
              alt="Blito"
              width={500}
              height={335}
              className="relative"
              priority
            />
          </div>

          <p
            className={cn(
              'mb-6 text-xs uppercase tracking-[0.4em] text-gray-400 md:text-sm',
              'transition-all duration-700',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {t('tagline')}
          </p>

          <h1
            className={cn(
              'mb-10 font-heading text-6xl font-black tracking-tight text-white',
              'sm:text-7xl md:text-8xl lg:text-9xl',
              'transition-all duration-700 delay-150',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.1)' }}
          >
            {t('title')}
          </h1>

          <p
            className={cn(
              'mx-auto mb-16 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl',
              'transition-all duration-700 delay-300',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {t('subtitle')}
          </p>

          <div
            className={cn(
              'flex flex-col justify-center gap-6 sm:flex-row',
              'transition-all duration-700 delay-500',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
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

        {/* Layer 1: Foreground transparent overlay */}
        <div
          ref={fgRef}
          className="pointer-events-none absolute inset-0 z-[2] scale-[1.025] will-change-transform"
        >
          <Image
            src="/images/hero/hero-fg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Noise texture */}
        <div className="pointer-events-none absolute inset-0 z-[3] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-[0.03] mix-blend-overlay" />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-[10] flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-px animate-pulse bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </div>
    </section>
  )
}
