import { NextRequest, NextResponse } from 'next/server'
import { getArtworkBySlug } from '@/lib/services/artworkService'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const artwork = await getArtworkBySlug(slug)

    if (!artwork) {
      return NextResponse.json(
        { error: 'Not found', message: 'Artwork not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ data: artwork })
  } catch (error) {
    console.error('[API] GET /api/artworks/[slug] error:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to fetch artwork' },
      { status: 500 }
    )
  }
}
