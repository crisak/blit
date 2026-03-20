import Image from 'next/image'
import type { ArtistProfile } from '@/lib/types/artist'

interface ArtistBioProps {
  artist: ArtistProfile
}

export function ArtistBio({ artist }: ArtistBioProps) {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        <Image
          src={artist.profileImage.url}
          alt={artist.profileImage.alt}
          width={artist.profileImage.width}
          height={artist.profileImage.height}
          className="object-cover w-full h-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white md:text-5xl font-heading">{artist.name}</h1>
        <p className="text-lg text-gray-300 leading-relaxed">{artist.bio}</p>
      </div>
    </section>
  )
}
