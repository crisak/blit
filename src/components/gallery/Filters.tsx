'use client'

import { useFilters } from '@/hooks/useFilters'
import { useTranslations } from 'next-intl'
import { getUniqueCities } from '@/lib/services/artworkService'
import { useState, useEffect } from 'react'
import type { FilterOptions, ArtworkCategory, ArtworkTechnique } from '@/lib/types/artwork'

interface FiltersProps {
  currentFilters: FilterOptions
}

export default function Filters({ currentFilters }: FiltersProps) {
  const t = useTranslations('gallery.filters')
  const { setFilter, clearFilters } = useFilters()
  const [cities, setCities] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  // Cargar ciudades disponibles
  useEffect(() => {
    setCities(getUniqueCities())
  }, [])

  const categories: Array<ArtworkCategory | 'all'> = [
    'all',
    'mural',
    'street',
    'canvas',
    'digital',
    'commission',
    'exhibition',
  ]

  const techniques: Array<ArtworkTechnique | 'all'> = [
    'all',
    'spray',
    'stencil',
    'marker',
    'acrylic',
    'mixed',
    'digital',
  ]

  const orientations: Array<'all' | 'landscape' | 'portrait' | 'square'> = [
    'all',
    'landscape',
    'portrait',
    'square',
  ]

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.trim() === '') {
      setFilter('search', undefined)
    } else {
      setFilter('search', value)
    }
  }

  const hasActiveFilters =
    currentFilters.category ||
    currentFilters.technique ||
    currentFilters.city ||
    currentFilters.orientation ||
    currentFilters.search

  return (
    <div className="rounded-lg bg-gray-800/50 p-4 backdrop-blur-sm">
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between md:hidden"
      >
        <span className="font-semibold text-white">
          🔍 {t('title')}
          {hasActiveFilters && (
            <span className="ml-2 inline-block h-2 w-2 rounded-full bg-accent-pink"></span>
          )}
        </span>
        <span className="text-xl text-gray-400">{isOpen ? '▲' : '▼'}</span>
      </button>

      {/* Filters Content */}
      <div className={`mt-4 space-y-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
        {/* Search */}
        <div>
          <label htmlFor="search" className="mb-2 block text-sm font-medium text-gray-300">
            {t('search')}
          </label>
          <input
            id="search"
            type="text"
            defaultValue={currentFilters.search || ''}
            onChange={handleSearchChange}
            placeholder={t('searchPlaceholder')}
            className="w-full rounded-lg border border-gray-600 bg-gray-900/50 px-4 py-2 text-white placeholder-gray-500 transition-colors focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/50"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Category Filter */}
          <div>
            <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-300">
              {t('category')}
            </label>
            <select
              id="category"
              value={currentFilters.category || 'all'}
              onChange={(e) => setFilter('category', e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-900/50 px-4 py-2 text-white transition-colors focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/50"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {t(`categories.${category}` as any)}
                </option>
              ))}
            </select>
          </div>

          {/* Technique Filter */}
          <div>
            <label htmlFor="technique" className="mb-2 block text-sm font-medium text-gray-300">
              {t('technique')}
            </label>
            <select
              id="technique"
              value={currentFilters.technique || 'all'}
              onChange={(e) => setFilter('technique', e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-900/50 px-4 py-2 text-white transition-colors focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/50"
            >
              {techniques.map((technique) => (
                <option key={technique} value={technique}>
                  {t(`techniques.${technique}` as any)}
                </option>
              ))}
            </select>
          </div>

          {/* City Filter */}
          <div>
            <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-300">
              {t('city')}
            </label>
            <select
              id="city"
              value={currentFilters.city || 'all'}
              onChange={(e) => setFilter('city', e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-900/50 px-4 py-2 text-white transition-colors focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/50"
            >
              <option value="all">{t('orientations.all')}</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Orientation Filter */}
          <div>
            <label
              htmlFor="orientation"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              {t('orientation')}
            </label>
            <select
              id="orientation"
              value={currentFilters.orientation || 'all'}
              onChange={(e) => setFilter('orientation', e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-900/50 px-4 py-2 text-white transition-colors focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/50"
            >
              {orientations.map((orientation) => (
                <option key={orientation} value={orientation}>
                  {t(`orientations.${orientation}` as any)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <div className="flex justify-end">
            <button
              onClick={clearFilters}
              className="rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              ✖ {t('clear')}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
