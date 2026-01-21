import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui'

export function AboutPreview() {
  const t = useTranslations('home')

  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=800&fit=crop"
              alt="Urban artist working on street art"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">{t('about.title')}</h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">{t('about.content')}</p>
            <Link href="/about">
              <Button size="lg" variant="primary">
                {t('about.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
