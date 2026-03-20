# Data Model: Blito Portfolio MVP

**Date**: 2026-03-20
**Feature**: 001-update-project-docs

## Entities

### Artwork (existing — `src/lib/types/artwork.ts`)

Already implemented with 35 records in `src/lib/data/artworks.json`.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | string | yes | Unique identifier |
| slug | string | yes | URL-safe identifier for routing |
| title | string | yes | Artwork title |
| description | string | yes | Full description |
| category | ArtworkCategory | yes | mural, street, canvas, digital, commission, exhibition |
| technique | ArtworkTechnique | yes | spray, stencil, marker, acrylic, mixed, digital |
| images | ArtworkImage[] | yes | Array of images (main + gallery) |
| location | object | yes | { city, country, coordinates? } |
| dimensions | object | no | { width, height, unit: 'cm' or 'm' } |
| year | number | yes | Year created |
| colors | string[] | yes | Hex color codes |
| dominantColor | string | yes | Primary hex color |
| orientation | enum | yes | landscape, portrait, square |
| featured | boolean | yes | Featured on home page |
| views | number | yes | View count |
| likes | number | yes | Like count |
| createdAt | string | yes | ISO date |
| updatedAt | string | yes | ISO date |

**Relationships**: None (self-contained). Related artworks are derived by matching `category`.

### ArtworkImage (existing — embedded in Artwork)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| url | string | yes | Image path |
| alt | string | yes | Alt text for accessibility |
| width | number | yes | Pixel width |
| height | number | yes | Pixel height |
| blurDataURL | string | no | Base64 blur placeholder |

### ArtworkFilters (existing — `src/lib/types/artwork.ts`)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| category | ArtworkCategory or 'all' | no | Filter by category |
| technique | ArtworkTechnique or 'all' | no | Filter by technique |
| city | string | no | Filter by city |
| orientation | enum or 'all' | no | Filter by orientation |
| featured | boolean | no | Filter featured only |
| year | number | no | Filter by year |
| search | string | no | Free-text search |

### Artist Profile (NEW — `src/lib/types/artist.ts`)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| name | string | yes | Artist's display name |
| bio | string | yes | Short biography paragraph |
| trajectory | string | yes | Career trajectory / history |
| philosophy | string | yes | Artistic philosophy |
| profileImage | object | yes | { url, alt, width, height } |
| socialLinks | SocialLink[] | yes | Array of social media links |
| email | string | yes | Contact email |

### SocialLink (embedded in Artist Profile)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| platform | string | yes | instagram, twitter, youtube, etc. |
| url | string | yes | Full URL to profile |
| label | string | yes | Display label |

### Contact Submission (NEW — `src/lib/types/contact.ts`)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| name | string | yes | Sender's name (min 2 chars) |
| email | string | yes | Valid email format |
| subject | string | yes | Message subject (min 5 chars) |
| message | string | yes | Message body (min 10 chars) |

**Validation rules** (shared Zod schema):
- `name`: string, min 2, max 100
- `email`: string, email format
- `subject`: string, min 5, max 200
- `message`: string, min 10, max 2000

## Data Files

| File | Entity | Status |
|------|--------|--------|
| `src/lib/data/artworks.json` | Artwork[] | Existing (35 records) |
| `src/lib/data/artist.json` | ArtistProfile | NEW |

## Service Functions

### artworkService.ts (existing)

| Function | Signature | Notes |
|----------|-----------|-------|
| getArtworks | `(filters?: FilterOptions) => Promise<Artwork[]>` | Existing |
| getArtworkBySlug | `(slug: string) => Promise<Artwork \| null>` | Existing |
| getPopularArtworks | `(limit: number) => Promise<Artwork[]>` | Existing |
| getFeaturedArtworks | `(limit?: number) => Promise<Artwork[]>` | Existing |
| getRelatedArtworks | `(currentSlug: string, category: string, limit: number) => Promise<Artwork[]>` | Existing |
| getUniqueCities | `() => string[]` | Existing |
| getUniqueYears | `() => number[]` | Existing |

### contactService.ts (NEW)

| Function | Signature | Notes |
|----------|-----------|-------|
| submitContact | `(data: ContactSubmission) => Promise<{ success: boolean }>` | Validates and logs (no email in MVP) |

### artistService.ts (NEW — optional, could be inline)

| Function | Signature | Notes |
|----------|-----------|-------|
| getArtistProfile | `() => Promise<ArtistProfile>` | Returns artist data from JSON |
