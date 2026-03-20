import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui'

export function HeroSection() {
  const t = useTranslations('home')

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/banner/bg-form-contact.webp"
          alt="Fondo de mural de arte callejero"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950/90" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center">
        {/* Subtitle - small caps style */}
        <p className="animate-fade-in mb-6 text-xs uppercase tracking-[0.3em] text-gray-400 md:text-sm">
          Street Art Portfolio
        </p>

        {/* Main Title with animation */}
        <h1 className="animate-slide-up mb-8 font-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-8xl">
          {t('title')}
        </h1>

        {/* Description */}
        <p className="animation-delay-200 animate-fade-in mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
          {t('subtitle')}
        </p>

        {/* CTA Buttons with animation */}
        <div className="animation-delay-400 animate-fade-in flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/gallery">
            <Button size="lg" variant="primary">
              {t('cta.gallery')}
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="secondary">
              {t('cta.about')}
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-[-100px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </div>
    </section>
  )
}
