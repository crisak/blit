'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils/cn'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ReelSection() {
  const t = useTranslations('home')
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return

    // Pause/play video based on visibility
    const video = videoRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!video) return
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay blocked — fallback image remains visible
            })
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(sectionRef.current)

    // GSAP fade-in animation
    const ctx = gsap.context(() => {
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 1,
            },
          }
        )
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => {
      observer.disconnect()
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-black">
      {/* Fallback image — visible until video loads */}
      <Image
        src="/images/gallery/banner/bg-hero-fallback.webp"
        alt=""
        fill
        sizes="100vw"
        className={cn(
          'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
          isVideoReady ? 'opacity-0' : 'opacity-100'
        )}
      />

      {/* Video background */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        onCanPlay={() => setIsVideoReady(true)}
        className={cn(
          'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
          isVideoReady ? 'opacity-100' : 'opacity-0'
        )}
      >
        <source src="/images/gallery/banner/bg-hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/90"
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-end pb-24 text-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gray-400">
          {t('reel.tagline')}
        </p>
        <h2 className="font-heading text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
          {t('reel.title')}
        </h2>
      </div>
    </section>
  )
}
