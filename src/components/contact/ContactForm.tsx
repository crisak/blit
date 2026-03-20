'use client'

import { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { contactSchema } from '@/lib/validations/contact'
import { cn } from '@/lib/utils/cn'

export function ContactForm() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setFieldErrors({})

      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      }

      const result = contactSchema.safeParse(data)
      if (!result.success) {
        const errors: Record<string, string> = {}
        for (const issue of result.error.issues) {
          const field = issue.path[0]
          if (typeof field === 'string' && !errors[field]) {
            errors[field] = issue.message
          }
        }
        setFieldErrors(errors)
        return
      }

      setStatus('submitting')

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(result.data),
        })

        if (response.ok) {
          setStatus('success')
          ;(e.target as HTMLFormElement).reset()
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
    },
    []
  )

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-green-900/20 border border-green-800/50 p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold text-green-400 mb-2">{t('form.success')}</h3>
        <p className="text-gray-400">{t('form.successDescription')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {status === 'error' && (
        <div className="rounded-lg bg-red-900/20 border border-red-800/50 p-4 text-center">
          <p className="text-sm text-red-400">{t('form.errorDescription')}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          {t('form.name')}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={100}
          placeholder={t('form.namePlaceholder')}
          className={cn(
            'w-full rounded-lg bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none',
            'border transition-colors focus:ring-1',
            fieldErrors['name']
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-700 focus:border-gray-500 focus:ring-gray-500'
          )}
        />
        {fieldErrors['name'] && (
          <p className="mt-1 text-sm text-red-400">{fieldErrors['name']}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          {t('form.email')}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t('form.emailPlaceholder')}
          className={cn(
            'w-full rounded-lg bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none',
            'border transition-colors focus:ring-1',
            fieldErrors['email']
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-700 focus:border-gray-500 focus:ring-gray-500'
          )}
        />
        {fieldErrors['email'] && (
          <p className="mt-1 text-sm text-red-400">{fieldErrors['email']}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
          {t('form.subject')}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          minLength={5}
          maxLength={200}
          placeholder={t('form.subjectPlaceholder')}
          className={cn(
            'w-full rounded-lg bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none',
            'border transition-colors focus:ring-1',
            fieldErrors['subject']
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-700 focus:border-gray-500 focus:ring-gray-500'
          )}
        />
        {fieldErrors['subject'] && (
          <p className="mt-1 text-sm text-red-400">{fieldErrors['subject']}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          {t('form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          placeholder={t('form.messagePlaceholder')}
          className={cn(
            'w-full rounded-lg bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none resize-y',
            'border transition-colors focus:ring-1',
            fieldErrors['message']
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-700 focus:border-gray-500 focus:ring-gray-500'
          )}
        />
        {fieldErrors['message'] && (
          <p className="mt-1 text-sm text-red-400">{fieldErrors['message']}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={cn(
          'w-full rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200',
          status === 'submitting'
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-950 hover:bg-gray-200'
        )}
      >
        {status === 'submitting' ? t('form.submitting') : t('form.submit')}
      </button>
    </form>
  )
}
