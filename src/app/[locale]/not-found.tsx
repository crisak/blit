import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold font-heading text-white/10 md:text-[12rem]">
          {t('title')}
        </h1>
        <h2 className="mt-[-2rem] text-2xl font-bold text-white md:mt-[-3rem] md:text-4xl">
          {t('heading')}
        </h2>
        <p className="mt-4 text-gray-400 max-w-md mx-auto">{t('description')}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition-colors hover:bg-gray-200"
          >
            {t('backHome')}
          </Link>
          <Link
            href="/gallery"
            className="rounded-lg border border-gray-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            {t('backGallery')}
          </Link>
        </div>
      </div>
    </main>
  )
}
