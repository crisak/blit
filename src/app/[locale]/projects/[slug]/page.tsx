import { notFound } from 'next/navigation'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { getArtworkBySlug, getRelatedArtworks, getPopularArtworks } from '@/lib/services/artworkService'
import { routing } from '@/i18n/routing'
import { ArtworkDetailClient } from './ArtworkDetailClient'
import { RelatedArtworks } from '@/components/gallery/RelatedArtworks'

export const revalidate = 3600

interface ArtworkPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const popularArtworks = await getPopularArtworks(20)
  const params: { locale: string; slug: string }[] = []

  for (const locale of routing.locales) {
    for (const artwork of popularArtworks) {
      params.push({ locale, slug: artwork.slug })
    }
  }

  return params
}

export async function generateMetadata({ params }: ArtworkPageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const artwork = await getArtworkBySlug(slug)
  const t = await getTranslations({ locale, namespace: 'artworkDetail' })

  if (!artwork) {
    return { title: t('title') }
  }

  const mainImage = artwork.images[0]
  const siteUrl = 'https://blito.art'

  return {
    title: artwork.title,
    description: artwork.description,
    alternates: {
      canonical: `${siteUrl}/${locale}/projects/${slug}`,
      languages: {
        es: `${siteUrl}/es/projects/${slug}`,
        en: `${siteUrl}/en/projects/${slug}`,
      },
    },
    openGraph: {
      title: artwork.title,
      description: artwork.description,
      url: `${siteUrl}/${locale}/projects/${slug}`,
      siteName: 'Blito - Street Art',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'article',
      images: mainImage
        ? [
            {
              url: mainImage.url,
              width: mainImage.width,
              height: mainImage.height,
              alt: mainImage.alt,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: artwork.title,
      description: artwork.description,
      images: mainImage ? [mainImage.url] : [],
    },
  }
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const artwork = await getArtworkBySlug(slug)

  if (!artwork) {
    notFound()
  }

  const relatedArtworks = await getRelatedArtworks(slug, artwork.category, 4)

  const siteUrl = 'https://blito.art'
  const mainImage = artwork.images[0]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: artwork.title,
    description: artwork.description,
    image: mainImage?.url,
    dateCreated: `${artwork.year}`,
    artMedium: artwork.technique,
    artform: artwork.category,
    width: artwork.dimensions
      ? { '@type': 'Distance', name: `${artwork.dimensions.width} ${artwork.dimensions.unit}` }
      : undefined,
    height: artwork.dimensions
      ? { '@type': 'Distance', name: `${artwork.dimensions.height} ${artwork.dimensions.unit}` }
      : undefined,
    creator: {
      '@type': 'Person',
      name: 'Blito',
      url: siteUrl,
    },
    url: `${siteUrl}/${locale}/projects/${slug}`,
    inLanguage: locale,
    locationCreated: {
      '@type': 'Place',
      name: `${artwork.location.city}, ${artwork.location.country}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <ArtworkDetailClient artwork={artwork} locale={locale} siteUrl={siteUrl} />
          <RelatedArtworks artworks={relatedArtworks} />
        </div>
      </main>
    </>
  )
}
