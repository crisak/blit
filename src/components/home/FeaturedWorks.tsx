import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui'
import ArtworkCard from '@/components/gallery/ArtworkCard'
import artworksData from '@/lib/data/artworks.json'
import type { Artwork } from '@/lib/types/artwork'

export function FeaturedWorks() {
  const t = useTranslations('home')

  // Get featured artworks (max 6)
  const artworks = artworksData as Artwork[]
  const featuredArtworks = artworks.filter((artwork) => artwork.featured).slice(0, 6)

  return (
    <section className="bg-gray-950 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">{t('featured.title')}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">{t('featured.subtitle')}</p>
        </div>

        {/* Artworks Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
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
  )
}
