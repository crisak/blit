# API Contract: Contact

**Base path**: `/api/contact`

## POST /api/contact

Submits a contact form message.

### Request Body

```json
{
  "name": "string (min 2, max 100)",
  "email": "string (valid email)",
  "subject": "string (min 5, max 200)",
  "message": "string (min 10, max 2000)"
}
```

### Response 200

```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

### Response 400 (Validation Error)

```json
{
  "error": "Validation error",
  "details": [
    {
      "field": "email",
      "message": "Invalid email format"
    },
    {
      "field": "name",
      "message": "Name must be at least 2 characters"
    }
  ]
}
```

### Response 500

```json
{
  "error": "Internal server error",
  "message": "string"
}
```

## Notes

- MVP: The handler validates input and logs the submission. No actual email delivery.
- Future: The Go backend will handle email sending. The contract remains the same.
