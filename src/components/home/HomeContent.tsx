'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui';
import { SplashScreen } from '@/components/splash';

export function HomeContent() {
  const t = useTranslations('home');
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} duration={2500} />}
      <section
        className={`relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden transition-opacity duration-300 ${showSplash ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/banner/bg-form-contact.jpg"
            alt="Street art mural"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950/90" />
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
          {/* Subtitle - small caps style */}
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
            Street Art Portfolio
          </p>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-8 font-heading text-white tracking-tight">
            {t('title')}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery">
              <Button size="lg" variant="primary">
                {t('cta.gallery')}
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg" variant="secondary">
                {t('cta.shop')}
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}
