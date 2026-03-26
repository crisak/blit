'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui'
import artworksData from '@/lib/data/artworks.json'
import type { Artwork } from '@/lib/types/artwork'

export function FeaturedWorks() {
  const t = useTranslations('home')
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [expandedArtwork, setExpandedArtwork] = useState<Artwork | null>(null)

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedArtwork) {
        setExpandedArtwork(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [expandedArtwork])

  useEffect(() => {
    if (expandedArtwork) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [expandedArtwork])

  const handleExpand = useCallback((artwork: Artwork) => {
    setExpandedArtwork(artwork)
  }, [])

  const handleClose = useCallback(() => {
    setExpandedArtwork(null)
  }, [])

  return (
    <>
      <section ref={sectionRef} className="bg-gray-950 px-4 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              {t('featured.title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400">
              {t('featured.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArtworks.map((artwork, index) => {
              const mainImage = artwork.images[0]
              const isLarge = index === 0 || index === 3
              const isPortrait = index === 1 || index === 4

              return (
                <div
                  key={artwork.id}
                  className={`featured-card group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                    isLarge
                      ? 'aspect-[4/3] sm:col-span-2'
                      : isPortrait
                        ? 'aspect-[3/4]'
                        : 'aspect-square'
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <Link
                      href={`/projects/${artwork.slug}`}
                      className="block h-full w-full"
                      data-cursor="image"
                    >
                      <Image
                        src={mainImage?.url || ''}
                        alt={mainImage?.alt || artwork.title}
                        fill
                        sizes={
                          isLarge
                            ? '(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw'
                            : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw'
                        }
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                    </Link>

                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        handleExpand(artwork)
                      }}
                      className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-100"
                      data-cursor="expand"
                      aria-label="Expandir imagen"
                      style={{
                        cursor:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M12 5v14M5 12h14'/%3E%3C/svg%3E\") 12 12, pointer",
                      }}
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                        <svg
                          className="h-8 w-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                          />
                        </svg>
                      </div>
                    </button>

                    <div className="absolute left-4 top-4 z-10 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
                        👁 {artwork.views.toLocaleString()}
                      </div>
                      <div className="rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
                        ❤️ {artwork.likes.toLocaleString()}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 z-10 p-4 transition-transform duration-300 group-hover:-translate-y-2">
                      <span className="mb-2 inline-block rounded-full bg-accent-pink/90 px-3 py-1 text-xs font-semibold text-white">
                        {artwork.category}
                      </span>
                      <h3 className="mb-1 text-lg font-bold text-white line-clamp-1 transition-colors duration-300 group-hover:text-accent-pink md:text-xl lg:text-2xl">
                        {artwork.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="flex items-center gap-1">📍 {artwork.location.city}</span>
                        <span>{artwork.year}</span>
                      </div>
                    </div>

                    <div className="absolute right-4 top-4 h-6 w-6 border-t-2 border-r-2 border-white/0 transition-all duration-300 group-hover:right-5 group-hover:top-5 group-hover:h-8 group-hover:w-8 group-hover:border-white/50" />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
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

      {expandedArtwork && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={handleClose}
        >
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-3 transition-all hover:bg-white/20 hover:scale-110"
            aria-label="Cerrar imagen expandida"
          >
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={expandedArtwork.images[0]?.url || ''}
              alt={expandedArtwork.images[0]?.alt || expandedArtwork.title}
              width={expandedArtwork.images[0]?.width || 1920}
              height={expandedArtwork.images[0]?.height || 1080}
              className="max-h-[85vh] w-auto object-contain"
              quality={100}
              priority
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <div className="flex items-end justify-between">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-accent-pink/90 px-3 py-1 text-xs font-semibold text-white">
                    {expandedArtwork.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {expandedArtwork.title}
                  </h3>
                  <p className="mt-1 text-gray-300">
                    📍 {expandedArtwork.location.city}, {expandedArtwork.year}
                  </p>
                  {expandedArtwork.dimensions && (
                    <p className="text-sm text-gray-400">
                      {expandedArtwork.dimensions.width}×{expandedArtwork.dimensions.height}{' '}
                      {expandedArtwork.dimensions.unit}
                    </p>
                  )}
                </div>
                <div className="flex gap-4 text-white">
                  <div className="text-center">
                    <div className="text-xl font-bold">👁</div>
                    <div className="text-xs text-gray-400">
                      {expandedArtwork.views.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">❤️</div>
                    <div className="text-xs text-gray-400">
                      {expandedArtwork.likes.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={`/projects/${expandedArtwork.slug}`}
            className="absolute bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white px-6 py-3 font-semibold text-gray-900 transition-all hover:scale-105"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            Ver proyecto completo
          </Link>
        </div>
      )}
    </>
  )
}
