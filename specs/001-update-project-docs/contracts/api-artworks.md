# API Contract: Artworks

**Base path**: `/api/artworks`

## GET /api/artworks

Returns a filtered list of artworks.

### Query Parameters

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| category | string | — | Filter by category (mural, street, canvas, digital, commission, exhibition) |
| technique | string | — | Filter by technique (spray, stencil, marker, acrylic, mixed, digital) |
| city | string | — | Filter by city name |
| orientation | string | — | Filter by orientation (landscape, portrait, square) |
| featured | boolean | — | Filter featured artworks only |
| year | number | — | Filter by year |
| search | string | — | Free-text search across title and description |

### Response 200

```json
{
  "data": [
    {
      "id": "string",
      "slug": "string",
      "title": "string",
      "description": "string",
      "category": "mural",
      "technique": "spray",
      "images": [
        {
          "url": "string",
          "alt": "string",
          "width": 1200,
          "height": 800,
          "blurDataURL": "string | undefined"
        }
      ],
      "location": {
        "city": "string",
        "country": "string",
        "coordinates": { "lat": 0, "lng": 0 }
      },
      "dimensions": { "width": 0, "height": 0, "unit": "cm" },
      "year": 2024,
      "colors": ["#hex"],
      "dominantColor": "#hex",
      "orientation": "landscape",
      "featured": true,
      "views": 0,
      "likes": 0,
      "createdAt": "ISO-8601",
      "updatedAt": "ISO-8601"
    }
  ],
  "total": 35
}
```

### Response 500

```json
{
  "error": "Internal server error",
  "message": "string"
}
```

---

## GET /api/artworks/:slug

Returns a single artwork by slug.

### Path Parameters

| Param | Type | Description |
|-------|------|-------------|
| slug | string | Artwork URL slug |

### Response 200

Same artwork object as in list response, unwrapped:

```json
{
  "data": { /* single artwork object */ }
}
```

### Response 404

```json
{
  "error": "Not found",
  "message": "Artwork not found"
}
```

### Response 500

```json
{
  "error": "Internal server error",
  "message": "string"
}
```
