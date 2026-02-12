'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import type { FilterOptions } from '@/lib/types/artwork'

export function useFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Obtener filtros actuales desde URL
  const currentFilters: FilterOptions = {
    category:
      (searchParams.get('category') as FilterOptions['category']) || undefined,
    technique:
      (searchParams.get('technique') as FilterOptions['technique']) ||
      undefined,
    city: searchParams.get('city') || undefined,
    orientation:
      (searchParams.get('orientation') as FilterOptions['orientation']) ||
      undefined,
    search: searchParams.get('search') || undefined,
  }

  // Actualizar filtros en la URL
  const updateFilters = useCallback(
    (newFilters: Partial<FilterOptions>) => {
      const params = new URLSearchParams(searchParams.toString())

      // Actualizar o eliminar cada filtro
      Object.entries(newFilters).forEach(([key, value]) => {
        if (value && value !== 'all') {
          params.set(key, value.toString())
        } else {
          params.delete(key)
        }
      })

      // Navegar a la nueva URL
      router.push(`${pathname}?${params.toString()}`)
    },
    [pathname, router, searchParams]
  )

  // Limpiar todos los filtros
  const clearFilters = useCallback(() => {
    router.push(pathname)
  }, [pathname, router])

  // Actualizar un solo filtro
  const setFilter = useCallback(
    (key: keyof FilterOptions, value: string | undefined) => {
      updateFilters({ [key]: value })
    },
    [updateFilters]
  )

  return {
    currentFilters,
    updateFilters,
    clearFilters,
    setFilter,
  }
}
