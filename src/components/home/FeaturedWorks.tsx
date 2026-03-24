'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui'
import artworksData from '@/lib/data/artworks.json'
import type { Artwork } from '@/lib/types/artwork'

export function FeaturedWorks() {
  const t = useTranslations('home')
  const sectionRef = useRef<HTMLElement>(null)

  const artworks = artworksData as Artwork[]
  const featuredArtworks = artworks.filter((artwork) => artwork.featured).slice(0, 6)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('.featured-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-gray-950 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">{t('featured.title')}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">{t('featured.subtitle')}</p>
        </div>

        {/* Asymmetric Grid with Overlapping */}
        <div className="featured-grid grid gap-4 md:gap-6">
          {featuredArtworks.map((artwork, index) => {
            const mainImage = artwork.images[0]
            const isLarge = index === 0 || index === 3
            const isMedium = index === 1 || index === 4
            const isSmall = index === 2 || index === 5

            return (
              <Link
                key={artwork.id}
                href={`/projects/${artwork.slug}`}
                className={`featured-card group relative block overflow-hidden rounded-xl transition-all duration-500 hover:z-10 ${isLarge ? 'aspect-[4/3] md:col-span-2 md:row-span-2' : isMedium ? 'aspect-[3/4] md:aspect-square' : 'aspect-square'}`}
              >
                {/* Image */}
                <Image
                  src={mainImage?.url || ''}
                  alt={mainImage?.alt || artwork.title}
                  fill
                  sizes={
                    isLarge ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent-pink/0 transition-colors duration-300 group-hover:bg-accent-pink/10" />

                {/* Top Badge */}
                <div className="absolute left-3 top-3 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
                    👁 {artwork.views.toLocaleString()}
                  </div>
                  <div className="rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
                    ❤️ {artwork.likes.toLocaleString()}
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 group-hover:-translate-y-2">
                  {/* Category Tag */}
                  <span className="mb-2 inline-block rounded-full bg-accent-pink/90 px-3 py-1 text-xs font-semibold text-white">
                    {artwork.category}
                  </span>

                  {/* Title */}
                  <h3 className="mb-1 text-lg font-bold text-white line-clamp-1 transition-colors duration-300 group-hover:text-accent-pink md:text-xl lg:text-2xl">
                    {artwork.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="flex items-center gap-1">📍 {artwork.location.city}</span>
                    <span>{artwork.year}</span>
                    {artwork.dimensions && (
                      <span>
                        {artwork.dimensions.width}×{artwork.dimensions.height}{' '}
                        {artwork.dimensions.unit}
                      </span>
                    )}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute right-3 top-3 h-6 w-6 border-t-2 border-r-2 border-white/0 transition-all duration-300 group-hover:right-4 group-hover:top-4 group-hover:h-8 group-hover:w-8 group-hover:border-white/50" />
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-white/30 bg-transparent font-semibold text-white transition-all hover:scale-105 hover:border-white/60 hover:bg-white/10"
            >
              <span className="relative z-10">{t('featured.viewAll')}</span>
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

      <style jsx>{`
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, minmax(200px, auto));
        }

        @media (min-width: 768px) {
          .featured-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 250px);
          }
        }

        .featured-card {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.6s ease-out,
            transform 0.6s ease-out;
        }

        .featured-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .featured-card:nth-child(1) {
          transition-delay: 0ms;
        }
        .featured-card:nth-child(2) {
          transition-delay: 100ms;
        }
        .featured-card:nth-child(3) {
          transition-delay: 200ms;
        }
        .featured-card:nth-child(4) {
          transition-delay: 300ms;
        }
        .featured-card:nth-child(5) {
          transition-delay: 400ms;
        }
        .featured-card:nth-child(6) {
          transition-delay: 500ms;
        }
      `}</style>
    </section>
  )
}
