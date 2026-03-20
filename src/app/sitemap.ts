import type { MetadataRoute } from 'next'
import { getArtworks } from '@/lib/services/artworkService'
import { routing } from '@/i18n/routing'

const siteUrl = 'https://blito.art'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const artworks = await getArtworks()

  const entries: MetadataRoute.Sitemap = []

  // Static pages per locale
  const staticPages = ['', '/gallery', '/about', '/contact']

  for (const page of staticPages) {
    for (const locale of routing.locales) {
      const alternates: Record<string, string> = {}
      for (const altLocale of routing.locales) {
        alternates[altLocale] = `${siteUrl}/${altLocale}${page}`
      }

      entries.push({
        url: `${siteUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : page === '/gallery' ? 'daily' : 'monthly',
        priority: page === '' ? 1.0 : page === '/gallery' ? 0.9 : 0.7,
        alternates: { languages: alternates },
      })
    }
  }

  // Artwork detail pages per locale
  for (const artwork of artworks) {
    for (const locale of routing.locales) {
      const alternates: Record<string, string> = {}
      for (const altLocale of routing.locales) {
        alternates[altLocale] = `${siteUrl}/${altLocale}/gallery/${artwork.slug}`
      }

      entries.push({
        url: `${siteUrl}/${locale}/gallery/${artwork.slug}`,
        lastModified: new Date(artwork.updatedAt),
        changeFrequency: 'monthly',
        priority: artwork.featured ? 0.8 : 0.6,
        alternates: { languages: alternates },
      })
    }
  }

  return entries
}
