'use client'

import { useState, useRef, useEffect, useTransition } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { cn } from '@/lib/utils/cn'

const locales = [
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
] as const

type LocaleCode = (typeof locales)[number]['code']

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLocale = locales.find((l) => l.code === locale) ?? locales[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLocaleChange = (newLocale: LocaleCode) => {
    if (newLocale === locale) {
      setIsOpen(false)
      return
    }

    setIsOpen(false)
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
      router.refresh()
    })
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          'flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium',
          'transition-all duration-200',
          'text-gray-400 hover:text-white hover:bg-gray-800',
          'border border-transparent hover:border-gray-700',
          isOpen && 'bg-gray-800 text-white border-gray-700',
          isPending && 'opacity-50 cursor-wait'
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Change language"
      >
        <span className="text-base" aria-hidden="true">
          {currentLocale.flag}
        </span>
        <span>{currentLocale.label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cn('h-4 w-4 transition-transform duration-200', isOpen && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-32 rounded-lg bg-gray-900 border border-gray-800 shadow-xl shadow-black/40 overflow-hidden"
          role="listbox"
          aria-label="Available languages"
        >
          {locales.map((localeOption) => (
            <button
              key={localeOption.code}
              onClick={() => handleLocaleChange(localeOption.code)}
              disabled={isPending}
              className={cn(
                'flex w-full items-center gap-2 px-3 py-2.5 text-sm',
                'transition-all duration-150',
                localeOption.code === locale
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              )}
              role="option"
              aria-selected={localeOption.code === locale}
            >
              <span className="text-base" aria-hidden="true">
                {localeOption.flag}
              </span>
              <span>{localeOption.label}</span>
              {localeOption.code === locale && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-auto h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
