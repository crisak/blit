import { contactSchema } from '@/lib/validations/contact'
import type { ContactSubmission } from '@/lib/types/contact'

/**
 * Validates and processes a contact form submission.
 * MVP: Logs the submission. No email delivery.
 */
export async function submitContact(
  data: ContactSubmission
): Promise<{ success: boolean }> {
  const result = contactSchema.safeParse(data)

  if (!result.success) {
    throw new Error('Validation failed')
  }

  // MVP: Log the submission (no email delivery)
  console.log('[Contact] New submission:', {
    name: result.data.name,
    email: result.data.email,
    subject: result.data.subject,
    timestamp: new Date().toISOString(),
  })

  return { success: true }
}
