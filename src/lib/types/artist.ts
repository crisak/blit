export interface SocialLink {
  platform: string
  url: string
  label: string
}

export interface ArtistProfile {
  name: string
  bio: string
  trajectory: string
  philosophy: string
  profileImage: {
    url: string
    alt: string
    width: number
    height: number
  }
  socialLinks: SocialLink[]
  email: string
}
