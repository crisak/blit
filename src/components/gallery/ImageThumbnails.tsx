'use client'

import Image from 'next/image'
import type { ArtworkImage } from '@/lib/types/artwork'
import { cn } from '@/lib/utils/cn'

interface ImageThumbnailsProps {
  images: ArtworkImage[]
  currentIndex: number
  onSelect: (index: number) => void
}

export function ImageThumbnails({ images, currentIndex, onSelect }: ImageThumbnailsProps) {
  if (images.length <= 1) return null

  return (
    <div className="flex gap-2 overflow-x-auto py-2">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={cn(
            'relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200',
            index === currentIndex
              ? 'border-white ring-1 ring-white/50'
              : 'border-transparent opacity-60 hover:opacity-100'
          )}
          aria-label={`${image.alt} - ${index + 1}`}
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="64px"
            className="object-cover"
          />
        </button>
      ))}
    </div>
  )
}
