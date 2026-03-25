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

export function HeroSection() {
  const t = useTranslations('home')
  const sectionRef = useRef<HTMLElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)
  const heroKeyRef = useRef<HTMLDivElement>(null)
  const heroKeyLogoRef = useRef<HTMLImageElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    if (typeof window === 'undefined' || !sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onLeave: () => {
            gsap.set([maskRef.current, contentRef.current], { visibility: 'hidden' })
          },
          onEnterBack: () => {
            gsap.set([maskRef.current, contentRef.current], { visibility: 'visible' })
          },
        },
      })

      if (heroKeyRef.current) {
        tl.to(heroKeyRef.current, { duration: 1, scale: 1 })
      }

      if (heroKeyLogoRef.current) {
        tl.to(heroKeyLogoRef.current, { opacity: 0 }, '<')
      }

      if (contentRef.current) {
        tl.to(contentRef.current, { opacity: 0 }, '<')
      }

      if (maskRef.current) {
        tl.to(
          maskRef.current,
          {
            maskSize: 'clamp(20vh, 25%, 30vh)',
          },
          0.15
        )
      }

      if (heroKeyRef.current) {
        tl.to(
          heroKeyRef.current,
          {
            opacity: 0,
            duration: 0.2,
          },
          0.4
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      {/* Masked layer — SVG logo mask that shrinks on scroll */}
      <div ref={maskRef} className="hero-logo-mask fixed top-0 z-40 h-screen w-full">
        <div ref={heroKeyRef} className="fixed block h-screen w-full scale-125 overflow-hidden">
          {/* Foreground — transparent subject, fades on scroll */}
          <Image
            ref={heroKeyLogoRef}
            src="/images/hero/hero-fg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute h-full w-full object-cover"
          />
          {/* Background — base scene */}
          <Image
            src="/images/hero/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
            quality={90}
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Content overlay — fixed, centered */}
      <div
        ref={contentRef}
        className="fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center px-4 text-center"
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-px animate-pulse bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </div>
    </section>
  )
}
