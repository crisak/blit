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

  // JSON-LD Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Blito - Portafolio de arte callejero',
    description:
      'Portafolio y galería de arte urbano con arte callejero, murales y obras de grafiti.',
    url: `https://blito.com/${locale}`,
    inLanguage: locale,
    image: '/images/gallery/banner/bg-form-contact.webp',

    author: {
      '@type': 'Pablo',
      name: 'Blito',
      description: 'Artista urbano apasionado por transformar espacios públicos',
    },
  }

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
