import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-extrabold mb-4 text-accent-spray font-heading">
        {t('title')}
      </h1>
      <p className="text-xl text-secondary">{t('subtitle')}</p>
    </main>
  );
}
