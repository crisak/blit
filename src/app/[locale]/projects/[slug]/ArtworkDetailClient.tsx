'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import type { Artwork } from '@/lib/types/artwork'
import { ImageViewer } from '@/components/gallery/ImageViewer'
import { ImageThumbnails } from '@/components/gallery/ImageThumbnails'
import { ShareButtons } from '@/components/gallery/ShareButtons'

interface ArtworkDetailClientProps {
  artwork: Artwork
  locale: string
  siteUrl: string
}

export function ArtworkDetailClient({ artwork, locale, siteUrl }: ArtworkDetailClientProps) {
  const t = useTranslations('artworkDetail')
  const tFilters = useTranslations('gallery.filters')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [viewerOpen, setViewerOpen] = useState(false)

  const currentImage = artwork.images[currentImageIndex]
  const shareUrl = `${siteUrl}/${locale}/projects/${artwork.slug}`

  const getCategoryLabel = (category: string) => {
    return tFilters(`categories.${category}` as Parameters<typeof tFilters>[0]) || category
  }

  const getTechniqueLabel = (technique: string) => {
    return tFilters(`techniques.${technique}` as Parameters<typeof tFilters>[0]) || technique
  }

  return (
    <>
      {/* Back link */}
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {t('backToGallery')}
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image section */}
        <div>
          {currentImage && (
            <button
              onClick={() => setViewerOpen(true)}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl cursor-zoom-in"
              aria-label={t('zoomIn')}
            >
              <Image
                src={currentImage.url}
                alt={currentImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
                placeholder={currentImage.blurDataURL ? 'blur' : 'empty'}
                blurDataURL={currentImage.blurDataURL}
              />
            </button>
          )}
          <ImageThumbnails
            images={artwork.images}
            currentIndex={currentImageIndex}
            onSelect={setCurrentImageIndex}
          />
        </div>

        {/* Info section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-white md:text-4xl">{artwork.title}</h1>

          <p className="text-gray-300 leading-relaxed">
            {artwork.description || t('noDescription')}
          </p>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-800/50 p-4">
              <span className="text-xs text-gray-500 uppercase tracking-wider">{t('category')}</span>
              <p className="mt-1 text-sm font-medium text-white">
                {getCategoryLabel(artwork.category)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-800/50 p-4">
              <span className="text-xs text-gray-500 uppercase tracking-wider">{t('technique')}</span>
              <p className="mt-1 text-sm font-medium text-white">
                {getTechniqueLabel(artwork.technique)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-800/50 p-4">
              <span className="text-xs text-gray-500 uppercase tracking-wider">{t('year')}</span>
              <p className="mt-1 text-sm font-medium text-white">{artwork.year}</p>
            </div>
            <div className="rounded-lg bg-gray-800/50 p-4">
              <span className="text-xs text-gray-500 uppercase tracking-wider">{t('location')}</span>
              <p className="mt-1 text-sm font-medium text-white">
                {artwork.location.city}, {artwork.location.country}
              </p>
            </div>
            {artwork.dimensions && (
              <div className="rounded-lg bg-gray-800/50 p-4">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {t('dimensions')}
                </span>
                <p className="mt-1 text-sm font-medium text-white">
                  {artwork.dimensions.width} x {artwork.dimensions.height} {artwork.dimensions.unit}
                </p>
              </div>
            )}
          </div>

          {/* Dominant colors */}
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('colors')}</span>
            <div className="mt-2 flex gap-2">
              {artwork.colors.map((color) => (
                <div
                  key={color}
                  className="h-8 w-8 rounded-full border border-gray-700"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4 text-sm text-gray-400">
            <span>{t('views')}: {artwork.views.toLocaleString()}</span>
            <span>{t('likes')}: {artwork.likes.toLocaleString()}</span>
          </div>

          {/* Share */}
          <ShareButtons url={shareUrl} title={artwork.title} description={artwork.description} />
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {viewerOpen && (
        <ImageViewer
          images={artwork.images}
          currentIndex={currentImageIndex}
          onClose={() => setViewerOpen(false)}
          onChangeIndex={setCurrentImageIndex}
        />
      )}
    </>
  )
}
