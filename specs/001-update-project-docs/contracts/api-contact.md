# API Contract: Contact

**Base path**: `/api/contact`

> ⚠️ Updated per PRD v2.0 — segmented form with conditional fields.

## POST /api/contact

Submits a segmented contact form message.

### Request Body

**Always required:**

```json
{
  "name": "string",
  "email": "string (valid email)",
  "type": "mural_comercial | encargo | prensa | otro",
  "message": "string"
}
```

**Conditional fields by type:**

| Type            | Additional Fields                                                         |
| --------------- | ------------------------------------------------------------------------- |
| mural_comercial | `location`, `dimensions`, `interior_exterior`, `timeline`, `budget_range` |
| encargo         | `description`, `timeline`                                                 |
| prensa          | `medium`, `request_type`, `deadline`                                      |
| otro            | —                                                                         |

### Full Example (mural_comercial)

```json
{
  "name": "string",
  "email": "string",
  "type": "mural_comercial",
  "message": "string",
  "conditionalFields": {
    "location": "string",
    "dimensions": "string",
    "interior_exterior": "interior | exterior",
    "timeline": "string",
    "budget_range": "string"
  }
}
```

### Response 200

```json
{
  "success": true
}
```

Auto-response confirming receipt (48h).

### Response 400 (Validation Error)

```json
{
  "error": "Validation error",
  "details": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### Response 500

```json
{
  "error": "Internal server error"
}
```

## Notes

- MVP: The handler validates input with Zod and logs the submission. No actual email delivery.
- Future: The Go backend will handle email sending. The contract remains the same.
- Contact WhatsApp: +57 312 357 4867 (persistent floating button site-wide)
