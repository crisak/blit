# API Contract: Projects

**Base path**: `/api/projects`

> ⚠️ This contract supersedes the previous `/api/artworks` contract per PRD v2.0.

## GET /api/projects

Returns a filtered list of projects.

### Query Parameters

| Param    | Type   | Default | Description                                                                   |
| -------- | ------ | ------- | ----------------------------------------------------------------------------- |
| category | string | —       | Filter by category (murales_urbanos, murales_comerciales, galeria, comunidad) |
| city     | string | —       | Filter by city/department                                                     |
| tags     | string | —       | Comma-separated tags                                                          |
| year     | number | —       | Filter by year (2015-2026)                                                    |
| search   | string | —       | Free-text search across title and description                                 |

### Response 200

```json
[
  {
    "id": "uuid",
    "slug": "string",
    "title": "string",
    "poster": "string (url)",
    "category": "murales_urbanos | murales_comerciales | galeria | comunidad",
    "city": "string",
    "department": "string",
    "tags": ["string"],
    "date": "ISO 8601",
    "coordinates": { "lat": 0.0, "lng": 0.0 }
  }
]
```

### Response 500

```json
{
  "error": "Internal server error"
}
```

---

## GET /api/projects/:slug

Returns a single project by slug.

### Path Parameters

| Param | Type   | Description      |
| ----- | ------ | ---------------- |
| slug  | string | Project URL slug |

### Response 200

```json
{
  "id": "uuid",
  "slug": "string",
  "title": "string",
  "poster": "string (url)",
  "description": "string (html o markdown)",
  "category": "murales_urbanos | murales_comerciales | galeria | comunidad",
  "city": "string",
  "department": "string",
  "tags": ["string"],
  "palette": ["#hex"],
  "date": "ISO 8601",
  "coordinates": { "lat": 0.0, "lng": 0.0 },
  "collaborators": ["string"],
  "media": [
    {
      "type": "image | gif | video | youtube",
      "url": "string",
      "caption": "string (opcional)"
    }
  ]
}
```

### Response 404

```json
{
  "error": "Not found"
}
```

### Response 500

```json
{
  "error": "Internal server error"
}
```

---

## GET /api/map/points

Returns all projects with coordinates for map visualization.

### Response 200

```json
[
  {
    "projectId": "uuid",
    "slug": "string",
    "title": "string",
    "poster": "string (url)",
    "city": "string",
    "department": "string",
    "category": "murales_urbanos | murales_comerciales | galeria | comunidad",
    "coordinates": { "lat": 0.0, "lng": 0.0 }
  }
]
```

### Response 500

```json
{
  "error": "Internal server error"
}
```
