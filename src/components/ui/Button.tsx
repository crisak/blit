'use client'

import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'link' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon' | 'icon-sm' | 'icon-xs' | 'icon-lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-white text-gray-950',
    'hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]',
    'active:scale-[0.98] active:bg-gray-300',
  ].join(' '),
  secondary: [
    'bg-gray-900 border border-gray-800 text-gray-100',
    'hover:bg-gray-800 hover:border-gray-700 hover:text-white',
    'active:scale-[0.98] active:bg-gray-700',
  ].join(' '),
  ghost: [
    'bg-transparent text-gray-400',
    'hover:bg-gray-900 hover:text-white',
    'active:bg-gray-800',
  ].join(' '),
  danger: [
    'bg-red-600 text-white',
    'hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]',
    'active:scale-[0.98] active:bg-red-700',
  ].join(' '),
  link: 'text-primary underline-offset-4 hover:underline bg-transparent',
  outline: [
    'border border-gray-700 bg-transparent text-gray-200',
    'hover:bg-gray-800 hover:text-white',
    'active:bg-gray-700',
  ].join(' '),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
  icon: 'size-10',
  'icon-sm': 'size-8',
  'icon-xs': 'size-6',
  'icon-lg': 'size-12',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
          'transition-all duration-200 ease-out',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950',
          'disabled:pointer-events-none disabled:opacity-40',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
