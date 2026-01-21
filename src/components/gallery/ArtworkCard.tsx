import Image from 'next/image'
import Link from 'next/link'
import { Artwork } from '@/lib/types/artwork'

interface ArtworkCardProps {
  artwork: Artwork
  locale: string
}

export default function ArtworkCard({ artwork, locale }: ArtworkCardProps) {
  const mainImage = artwork.images[0]

  return (
    <Link
      href={`/${locale}/gallery/${artwork.slug}`}
      className="group relative block overflow-hidden rounded-lg bg-gray-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={mainImage?.url || ''}
          alt={mainImage?.alt || artwork.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

        {/* Featured Badge */}
        {artwork.featured && (
          <div className="absolute right-3 top-3 rounded-full bg-accent-pink px-3 py-1 text-xs font-semibold text-white shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="mb-2 text-xl font-bold transition-colors duration-300 group-hover:text-accent-pink">
          {artwork.title}
        </h3>

        <div className="mb-3 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
            {artwork.technique}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
            {artwork.category}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-300">
          <span className="flex items-center gap-1">📍 {artwork.location.city}</span>
          <span>{artwork.year}</span>
        </div>
      </div>
    </Link>
  )
}
