'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  const t = useTranslations('error')

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black px-4">
      <div className="text-center">
        <div className="text-6xl mb-6">&#9888;</div>
        <h1 className="text-2xl font-bold text-white md:text-4xl">{t('title')}</h1>
        <p className="mt-4 text-gray-400 max-w-md mx-auto">{t('description')}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition-colors hover:bg-gray-200"
          >
            {t('retry')}
          </button>
          <Link
            href="/"
            className="rounded-lg border border-gray-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            {t('backHome')}
          </Link>
        </div>
      </div>
    </main>
  )
}
