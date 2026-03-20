import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { getArtistProfile } from '@/lib/services/artistService'
import { ArtistBio } from '@/components/about/ArtistBio'
import { ArtistTrajectory } from '@/components/about/ArtistTrajectory'
import { SocialLinks } from '@/components/about/SocialLinks'

export const dynamic = 'force-static'

interface AboutPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  const tMeta = await getTranslations({ locale, namespace: 'metadata' })
  const siteUrl = 'https://blito.art'

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${siteUrl}/${locale}/about`,
      languages: {
        es: `${siteUrl}/es/about`,
        en: `${siteUrl}/en/about`,
      },
    },
    openGraph: {
      title: `${t('title')} | ${tMeta('title')}`,
      description: t('description'),
      url: `${siteUrl}/${locale}/about`,
      siteName: 'Blito - Street Art',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('title')} | ${tMeta('title')}`,
      description: t('description'),
    },
  }
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const artist = await getArtistProfile()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl space-y-16">
        <ArtistBio artist={artist} />
        <ArtistTrajectory trajectory={artist.trajectory} philosophy={artist.philosophy} />
        <SocialLinks links={artist.socialLinks} email={artist.email} />
      </div>
    </main>
  )
}
