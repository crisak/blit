import { useTranslations } from 'next-intl'

interface ArtistTrajectoryProps {
  trajectory: string
  philosophy: string
}

export function ArtistTrajectory({ trajectory, philosophy }: ArtistTrajectoryProps) {
  const t = useTranslations('about')

  return (
    <section className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">{t('trajectory')}</h2>
        <p className="text-gray-300 leading-relaxed">{trajectory}</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">{t('philosophy')}</h2>
        <p className="text-gray-300 leading-relaxed">{philosophy}</p>
      </div>
    </section>
  )
}
