import artworksData from '@/lib/data/artworks.json'
import type { Artwork, FilterOptions } from '@/lib/types/artwork'
import { simulateLatency } from '@/lib/utils/delay'

/**
 * Obtiene todas las obras de arte con filtros opcionales
 * @param filters - Opciones de filtro para las obras
 * @returns Array de obras filtradas
 */
export async function getArtworks(filters?: FilterOptions): Promise<Artwork[]> {
  // Simular latencia de red (1.5 segundos)
  await simulateLatency(1500)

  let filteredArtworks = [...artworksData] as Artwork[]

  // Aplicar filtros
  if (filters) {
    // Filtro por categoría
    if (filters.category && filters.category !== 'all') {
      filteredArtworks = filteredArtworks.filter(
        (artwork) => artwork.category === filters.category
      )
    }

    // Filtro por técnica
    if (filters.technique && filters.technique !== 'all') {
      filteredArtworks = filteredArtworks.filter(
        (artwork) => artwork.technique === filters.technique
      )
    }

    // Filtro por ciudad
    if (filters.city && filters.city !== 'all') {
      filteredArtworks = filteredArtworks.filter(
        (artwork) =>
          artwork.location.city.toLowerCase() === filters.city?.toLowerCase()
      )
    }

    // Filtro por orientación
    if (filters.orientation && filters.orientation !== 'all') {
      filteredArtworks = filteredArtworks.filter(
        (artwork) => artwork.orientation === filters.orientation
      )
    }

    // Filtro por featured
    if (filters.featured !== undefined) {
      filteredArtworks = filteredArtworks.filter(
        (artwork) => artwork.featured === filters.featured
      )
    }

    // Filtro por año
    if (filters.year) {
      filteredArtworks = filteredArtworks.filter(
        (artwork) => artwork.year === filters.year
      )
    }

    // Filtro por búsqueda de texto
    if (filters.search && filters.search.trim() !== '') {
      const searchLower = filters.search.toLowerCase()
      filteredArtworks = filteredArtworks.filter(
        (artwork) =>
          artwork.title.toLowerCase().includes(searchLower) ||
          artwork.description.toLowerCase().includes(searchLower) ||
          artwork.location.city.toLowerCase().includes(searchLower)
      )
    }
  }

  // Ordenar por views (popularidad) descendente
  filteredArtworks.sort((a, b) => b.views - a.views)

  return filteredArtworks
}

/**
 * Obtiene una obra de arte por su slug
 * @param slug - Slug único de la obra
 * @returns Obra encontrada o null
 */
export async function getArtworkBySlug(slug: string): Promise<Artwork | null> {
  // Simular latencia de red (800ms)
  await simulateLatency(800)

  const artwork = artworksData.find(
    (artwork) => artwork.slug === slug
  ) as Artwork | undefined

  return artwork || null
}

/**
 * Obtiene las obras más populares
 * @param limit - Número máximo de obras a retornar
 * @returns Array de obras populares
 */
export async function getPopularArtworks(limit: number = 6): Promise<Artwork[]> {
  // Simular latencia de red (500ms)
  await simulateLatency(500)

  const sortedArtworks = [...artworksData]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit) as Artwork[]

  return sortedArtworks
}

/**
 * Obtiene las obras destacadas
 * @param limit - Número máximo de obras a retornar
 * @returns Array de obras destacadas
 */
export async function getFeaturedArtworks(limit?: number): Promise<Artwork[]> {
  // Simular latencia de red (500ms)
  await simulateLatency(500)

  let featured = artworksData.filter((artwork) => artwork.featured) as Artwork[]

  if (limit) {
    featured = featured.slice(0, limit)
  }

  return featured
}

/**
 * Obtiene todas las ciudades únicas de las obras
 * @returns Array de nombres de ciudades
 */
export function getUniqueCities(): string[] {
  const cities = artworksData
    .map((artwork) => artwork.location.city)
    .filter((city, index, self) => self.indexOf(city) === index)
    .sort()

  return cities
}

/**
 * Obtiene todos los años únicos de las obras
 * @returns Array de años ordenados descendentemente
 */
export function getUniqueYears(): number[] {
  const years = artworksData
    .map((artwork) => artwork.year)
    .filter((year, index, self) => self.indexOf(year) === index)
    .sort((a, b) => b - a)

  return years
}

/**
 * Obtiene obras relacionadas basadas en la categoría
 * @param currentSlug - Slug de la obra actual (para excluirla)
 * @param category - Categoría para filtrar
 * @param limit - Número máximo de obras a retornar
 * @returns Array de obras relacionadas
 */
export async function getRelatedArtworks(
  currentSlug: string,
  category: string,
  limit: number = 4
): Promise<Artwork[]> {
  // Simular latencia de red (400ms)
  await simulateLatency(400)

  const related = artworksData
    .filter(
      (artwork) => artwork.category === category && artwork.slug !== currentSlug
    )
    .sort((a, b) => b.views - a.views)
    .slice(0, limit) as Artwork[]

  return related
}
