'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import { Button } from '@/components/ui'
import { SplashScreen } from '@/components/splash'
import ArtworkCard from '@/components/gallery/ArtworkCard'
import artworksData from '@/lib/data/artworks.json'
import type { Artwork } from '@/lib/types/artwork'

export function HomeContent() {
  const t = useTranslations('home')
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'es'
  const [showSplash, setShowSplash] = useState(true)

  // Get featured artworks (max 6)
  const artworks = artworksData as Artwork[]
  const featuredArtworks = artworks.filter((artwork) => artwork.featured).slice(0, 6)

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} duration={2500} />}

      {/* Hero Section */}
      <section
        className={`relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden transition-opacity duration-300 ${showSplash ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/banner/bg-form-contact.webp"
            alt="Street art mural"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950/90" />
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
          {/* Subtitle - small caps style */}
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 mb-6 animate-fade-in">
            Street Art Portfolio
          </p>

          {/* Main Title with animation */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-8 font-heading text-white tracking-tight animate-slide-up">
            {t('title')}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
            {t('subtitle')}
          </p>

          {/* CTA Buttons with animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Link href="/gallery">
              <Button size="lg" variant="primary">
                {t('cta.gallery')}
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg" variant="secondary">
                {t('cta.shop')}
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              {t('featured.title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">{t('featured.subtitle')}</p>
          </div>

          {/* Artworks Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} locale={locale} />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-12 text-center">
            <Link href="/gallery">
              <Button size="lg" variant="secondary">
                {t('featured.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=800&fit=crop"
                alt="Artist at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">{t('about.title')}</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">{t('about.content')}</p>
              <Link href="/about">
                <Button size="lg" variant="primary">
                  {t('about.cta')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
