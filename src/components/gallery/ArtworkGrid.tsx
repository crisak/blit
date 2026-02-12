import Link from 'next/link'
import type { Artwork } from '@/lib/types/artwork'
import ArtworkCard from './ArtworkCard'
import { useTranslations } from 'next-intl'

interface ArtworkGridProps {
  artworks: Artwork[]
}

export default function ArtworkGrid({ artworks }: ArtworkGridProps) {
  const t = useTranslations('gallery')

  if (artworks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4">🎨</div>
        <h3 className="text-2xl font-bold text-white mb-2">{t('noResults')}</h3>
        <p className="text-gray-400 mb-6">{t('tryDifferent')}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {artworks.map((artwork, index) => (
        <Link
          key={artwork.id}
          href={`/gallery/${artwork.slug}`}
          className="group block animate-fade-in-up"
          prefetch={false}
          style={{
            animationDelay: `${index * 50}ms`,
            animationFillMode: 'both',
          }}
        >
          <ArtworkCard artwork={artwork} />
        </Link>
      ))}
    </div>
  )
}
