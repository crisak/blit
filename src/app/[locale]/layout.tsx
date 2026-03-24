import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Outfit, Baskervville, JetBrains_Mono } from 'next/font/google'
import { routing } from '@/i18n/routing'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Providers } from '@/components/providers'
import '../globals.css'

const fontSans = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontSerif = Baskervville({
  subsets: ['latin'],
  variable: '--font-serif',
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    metadataBase: new URL('https://blito.art'),
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Blito' }],
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/gallery/banner/bg-form-contact.webp',
          width: 1200,
          height: 630,
          alt: 'Street art mural',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased flex min-h-screen flex-col font-sans bg-background text-foreground`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
