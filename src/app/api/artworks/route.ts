import { NextRequest, NextResponse } from 'next/server'
import { getArtworks } from '@/lib/services/artworkService'
import type { FilterOptions } from '@/lib/types/artwork'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl

    const filters: FilterOptions = {}

    const category = searchParams.get('category')
    if (category && category !== 'all') {
      filters.category = category as FilterOptions['category']
    }

    const technique = searchParams.get('technique')
    if (technique && technique !== 'all') {
      filters.technique = technique as FilterOptions['technique']
    }

    const city = searchParams.get('city')
    if (city) {
      filters.city = city
    }

    const orientation = searchParams.get('orientation')
    if (orientation && orientation !== 'all') {
      filters.orientation = orientation as FilterOptions['orientation']
    }

    const featured = searchParams.get('featured')
    if (featured === 'true') {
      filters.featured = true
    }

    const year = searchParams.get('year')
    if (year) {
      const parsedYear = parseInt(year, 10)
      if (!isNaN(parsedYear)) {
        filters.year = parsedYear
      }
    }

    const search = searchParams.get('search')
    if (search) {
      filters.search = search
    }

    const artworks = await getArtworks(filters)

    return NextResponse.json({ data: artworks, total: artworks.length })
  } catch (error) {
    console.error('[API] GET /api/artworks error:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to fetch artworks' },
      { status: 500 }
    )
  }
}
