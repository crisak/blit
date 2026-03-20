import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { getArtistProfile } from '@/lib/services/artistService'
import { ContactForm } from '@/components/contact/ContactForm'
import { SocialLinks } from '@/components/about/SocialLinks'

export const dynamic = 'force-static'

interface ContactPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  const tMeta = await getTranslations({ locale, namespace: 'metadata' })
  const siteUrl = 'https://blito.art'

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${siteUrl}/${locale}/contact`,
      languages: {
        es: `${siteUrl}/es/contact`,
        en: `${siteUrl}/en/contact`,
      },
    },
    openGraph: {
      title: `${t('title')} | ${tMeta('title')}`,
      description: t('description'),
      url: `${siteUrl}/${locale}/contact`,
      siteName: 'Blito - Street Art',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${t('title')} | ${tMeta('title')}`,
      description: t('description'),
    },
  }
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'contact' })
  const artist = await getArtistProfile()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl font-heading">{t('title')}</h1>
          <p className="mt-4 text-gray-400 text-lg">{t('description')}</p>
        </div>
        <ContactForm />
        <div className="mt-16">
          <SocialLinks links={artist.socialLinks} email={artist.email} />
        </div>
      </div>
    </main>
  )
}
