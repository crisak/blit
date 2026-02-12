import Image from 'next/image'
import { Artwork } from '@/lib/types/artwork'
import { useTranslations } from 'next-intl'

interface ArtworkCardProps {
  artwork: Artwork
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  const t = useTranslations('gallery.filters')
  const mainImage = artwork.images[0]

  // Traducir categoría
  const getCategoryLabel = (category: string) => {
    return t(`categories.${category}` as any) || category
  }

  // Traducir técnica
  const getTechniqueLabel = (technique: string) => {
    return t(`techniques.${technique}` as any) || technique
  }

  return (
    <div className="group relative block overflow-hidden rounded-lg bg-gray-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent-pink/20">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={mainImage?.url || ''}
          alt={mainImage?.alt || artwork.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Featured Badge */}
        {artwork.featured && (
          <div className="absolute right-3 top-3 rounded-full bg-accent-pink px-3 py-1 text-xs font-semibold text-white shadow-lg">
            ⭐ Featured
          </div>
        )}

        {/* Stats */}
        <div className="absolute left-3 top-3 flex gap-2">
          <div className="rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
            👁 {artwork.views.toLocaleString()}
          </div>
          <div className="rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
            ❤️ {artwork.likes.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="mb-2 text-lg font-bold line-clamp-1 transition-colors duration-300 group-hover:text-accent-pink">
          {artwork.title}
        </h3>

        <div className="mb-2 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-accent-pink/80 px-2.5 py-1 font-medium">
            {getCategoryLabel(artwork.category)}
          </span>
          <span className="rounded-full bg-white/10 px-2.5 py-1 backdrop-blur-sm">
            {getTechniqueLabel(artwork.technique)}
          </span>
          <span className="rounded-full bg-white/10 px-2.5 py-1 backdrop-blur-sm">
            {artwork.orientation === 'landscape' && '🖼️'}
            {artwork.orientation === 'portrait' && '🖼️'}
            {artwork.orientation === 'square' && '⬜'}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-300">
          <span className="flex items-center gap-1">📍 {artwork.location.city}</span>
          <span className="text-xs">{artwork.year}</span>
        </div>

        {/* Dimensions if available */}
        {artwork.dimensions && (
          <div className="mt-2 text-xs text-gray-400">
            {artwork.dimensions.width} × {artwork.dimensions.height} {artwork.dimensions.unit}
          </div>
        )}
      </div>
    </div>
  )
}
