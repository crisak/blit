import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedWorks } from '@/components/home/FeaturedWorks'
import { AboutPreview } from '@/components/home/AboutPreview'
import { HomeClientWrapper } from '@/components/home/HomeClientWrapper'

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
          alt: 'Street Art Portfolio',
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

  // JSON-LD Schema for SEO — WebSite + Person
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Blito - Street Art Portfolio',
      description:
        'Portfolio de arte urbano. Explora murales, graffiti y obras de street art.',
      url: `${siteUrl}/${locale}`,
      inLanguage: locale,
      image: `${siteUrl}/images/gallery/banner/bg-form-contact.webp`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Blito',
      description: 'Artista urbano apasionado por transformar espacios públicos en lienzos de expresión.',
      url: siteUrl,
      sameAs: [
        'https://instagram.com/blito',
        'https://twitter.com/blito',
        'https://youtube.com/@blito',
      ],
      jobTitle: 'Street Artist',
      knowsAbout: ['Street Art', 'Graffiti', 'Murals', 'Urban Art'],
    },
  ]

  return (
    <>
      {/* JSON-LD Script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Client wrapper for splash screen */}
      <HomeClientWrapper>
        {/* All content is Server Components for SEO */}
        <HeroSection />
        <FeaturedWorks />
        <AboutPreview />
      </HomeClientWrapper>
    </>
  )
}
