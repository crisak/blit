import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import type { Artwork } from '@/lib/types/artwork'

interface RelatedArtworksProps {
  artworks: Artwork[]
}

export function RelatedArtworks({ artworks }: RelatedArtworksProps) {
  const t = useTranslations('artworkDetail')

  if (artworks.length === 0) return null

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-2xl font-bold text-white">{t('relatedWorks')}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {artworks.map((artwork) => {
          const mainImage = artwork.images[0]
          return (
            <Link
              key={artwork.id}
              href={`/gallery/${artwork.slug}`}
              className="group block overflow-hidden rounded-lg bg-gray-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {mainImage && (
                  <Image
                    src={mainImage.url}
                    alt={mainImage.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-white line-clamp-1 group-hover:text-gray-300 transition-colors">
                  {artwork.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{artwork.year}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
