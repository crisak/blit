import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import {
  HeroSection,
  FeaturedWorks,
  AboutPreview,
  StatisticsSection,
  MapPreview,
  CollaborationsSection,
  CollectivesSection,
} from '@/components/home'
import { HomeClientWrapper } from '@/components/home/HomeClientWrapper'
import { CustomCursor, WhatsAppButton } from '@/components/home'

// Configure as SSG (Static Site Generation)
export const dynamic = 'force-static'

interface HomeProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: '/es',
        en: '/en',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `/${locale}`,
      siteName: 'Blito - Street Art',
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/images/gallery/banner/bg-form-contact.webp',
          width: 1200,
          height: 630,
          alt: 'Blito - Street Art Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/gallery/banner/bg-form-contact.webp'],
    },
  }
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const siteUrl = 'https://blito.art'

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Blito - Street Art Portfolio',
      description:
        'Portfolio de arte urbano. Explora murales, graffiti y obras de street art del artista Blito en Colombia.',
      url: `${siteUrl}/${locale}`,
      inLanguage: locale,
      image: `${siteUrl}/images/gallery/banner/bg-form-contact.webp`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Blito',
      alternateName: 'Pablo Guerrero',
      description:
        'El artista de arte callejero conocido como Blito cuenta con 10 años de trayectoria en el sector cultural y forma parte del colectivo Sabor Latino Crew.',
      url: siteUrl,
      sameAs: [
        'https://www.instagram.com/blito.col/',
        'https://www.threads.net/@blito.col',
        'https://www.facebook.com/libreton94',
        'https://www.instagram.com/ilegales.col/',
        'https://www.instagram.com/saborlatinocrewoficial/',
      ],
      jobTitle: 'Street Artist',
      knowsAbout: ['Street Art', 'Graffiti', 'Murals', 'Urban Art', 'Colombia'],
      areaServed: {
        '@type': 'Country',
        name: 'Colombia',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VisualArtwork',
      creator: {
        '@type': 'Person',
        name: 'Blito',
      },
      locationCreated: {
        '@type': 'Country',
        name: 'Colombia',
      },
    },
  ]

  return (
    <>
      {/* JSON-LD Script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Persistent UI Elements */}
      <CustomCursor />
      <WhatsAppButton />

      {/* Client wrapper for splash screen */}
      <HomeClientWrapper>
        {/* All content is Server Components for SEO */}
        <main>
          <HeroSection />
          <FeaturedWorks />
          <StatisticsSection />
          <AboutPreview />
          <MapPreview />
          <CollaborationsSection />
          <CollectivesSection />
        </main>
      </HomeClientWrapper>
    </>
  )
}
