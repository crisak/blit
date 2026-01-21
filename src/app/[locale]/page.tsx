import { HomeContent } from '@/components/home';
import { setRequestLocale } from 'next-intl/server';

// Configure as SSG (Static Site Generation)
export const dynamic = 'force-static';

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}
