import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations/contact'
import { submitContact } from '@/lib/services/contactService'

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json()

    const result = contactSchema.safeParse(body)

    if (!result.success) {
      const details = result.error.issues.map((issue) => ({
        field: issue.path[0] as string,
        message: issue.message,
      }))

      return NextResponse.json(
        { error: 'Validation error', details },
        { status: 400 }
      )
    }

    await submitContact(result.data)

    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('[API] POST /api/contact error:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to process contact submission' },
      { status: 500 }
    )
  }
}
