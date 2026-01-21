import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outline';
  hoverable?: boolean;
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({
  children,
  className,
  variant = 'default',
  hoverable = false,
  ...props
}: CardProps) {
  const variantStyles = {
    default: 'bg-gray-900',
    elevated: 'bg-gray-900 shadow-xl shadow-black/30',
    outline: 'bg-transparent border border-gray-800',
  };

  return (
    <div
      className={cn(
        'rounded-lg overflow-hidden',
        'transition-all duration-200',
        variantStyles[variant],
        hoverable && [
          'hover:bg-gray-800',
          'hover:shadow-lg hover:shadow-black/20',
          'hover:-translate-y-0.5',
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn('px-5 py-4 border-b border-gray-800', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={cn('p-5', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn('px-5 py-4 border-t border-gray-800 bg-gray-900/50', className)}
      {...props}
    >
      {children}
    </div>
  );
}
