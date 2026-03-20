import artistData from '@/lib/data/artist.json'
import type { ArtistProfile } from '@/lib/types/artist'

/**
 * Returns the artist profile data
 */
export async function getArtistProfile(): Promise<ArtistProfile> {
  return artistData as ArtistProfile
}
