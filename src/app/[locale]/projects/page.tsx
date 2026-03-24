import { Suspense } from 'react'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import type { Metadata } from 'next'
import { getArtworks } from '@/lib/services/artworkService'
import type { FilterOptions } from '@/lib/types/artwork'
import ArtworkGrid from '@/components/gallery/ArtworkGrid'
import ArtworkGridSkeleton from '@/components/gallery/ArtworkGridSkeleton'
import Filters from '@/components/gallery/Filters'

export const dynamic = 'force-dynamic'

interface GalleryPageProps {
  params: Promise<{
    locale: string
  }>
  searchParams: Promise<{
    category?: string
    technique?: string
    city?: string
    orientation?: string
    featured?: string
    year?: string
    search?: string
  }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gallery' })
  const tMeta = await getTranslations({ locale, namespace: 'metadata' })
  const siteUrl = 'https://blito.art'

  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: {
      canonical: `${siteUrl}/${locale}/projects`,
      languages: {
        es: `${siteUrl}/es/projects`,
        en: `${siteUrl}/en/projects`,
      },
    },
    openGraph: {
      title: `${t('title')} | ${tMeta('title')}`,
      description: t('subtitle'),
      url: `${siteUrl}/${locale}/projects`,
      siteName: 'Blito - Street Art',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('title')} | ${tMeta('title')}`,
      description: t('subtitle'),
    },
  }
}

export default async function GalleryPage({
  params,
  searchParams,
}: GalleryPageProps) {
  // Resolver las promesas
  const { locale } = await params
  const filters = await searchParams

  // Configurar locale para next-intl
  setRequestLocale(locale)

  // Construir FilterOptions desde searchParams
  const filterOptions: FilterOptions = {
    category:
      filters.category && filters.category !== 'all'
        ? (filters.category as FilterOptions['category'])
        : undefined,
    technique:
      filters.technique && filters.technique !== 'all'
        ? (filters.technique as FilterOptions['technique'])
        : undefined,
    city: filters.city && filters.city !== 'all' ? filters.city : undefined,
    orientation:
      filters.orientation && filters.orientation !== 'all'
        ? (filters.orientation as FilterOptions['orientation'])
        : undefined,
    featured: filters.featured === 'true' ? true : undefined,
    year: filters.year ? parseInt(filters.year) : undefined,
    search: filters.search || undefined,
  }

  // Obtener artworks con filtros (SSR - se ejecuta en cada request)
  const artworks = await getArtworks(filterOptions)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <GalleryHeader />

        {/* Filters */}
        <div className="mb-8">
          <Suspense fallback={<div className="h-20 bg-gray-800/50 rounded-lg animate-pulse" />}>
            <Filters currentFilters={filterOptions} />
          </Suspense>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-400">
          <p className="text-sm">
            Mostrando <span className="text-white font-semibold">{artworks.length}</span>{' '}
            {artworks.length === 1 ? 'obra' : 'obras'}
          </p>
        </div>

        {/* Artwork Grid */}
        <Suspense fallback={<ArtworkGridSkeleton />}>
          <ArtworkGrid artworks={artworks} />
        </Suspense>
      </div>
    </main>
  )
}

function GalleryHeader() {
  const t = useTranslations('gallery')

  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient-graffiti">
        {t('title')}
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">{t('subtitle')}</p>
    </div>
  )
}
