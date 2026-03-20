'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import type { ArtworkImage } from '@/lib/types/artwork'
import { cn } from '@/lib/utils/cn'

interface ImageViewerProps {
  images: ArtworkImage[]
  currentIndex: number
  onClose: () => void
  onChangeIndex: (index: number) => void
}

export function ImageViewer({ images, currentIndex, onClose, onChangeIndex }: ImageViewerProps) {
  const t = useTranslations('artworkDetail')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const positionStart = useRef({ x: 0, y: 0 })

  const currentImage = images[currentIndex]

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) {
      dialog.showModal()
    }
  }, [])

  const resetZoom = useCallback(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  const handleClose = useCallback(() => {
    dialogRef.current?.close()
    onClose()
  }, [onClose])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        resetZoom()
        onChangeIndex(currentIndex - 1)
      } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        resetZoom()
        onChangeIndex(currentIndex + 1)
      } else if (e.key === '+' || e.key === '=') {
        setScale((s) => Math.min(s + 0.5, 4))
      } else if (e.key === '-') {
        setScale((s) => Math.max(s - 0.5, 1))
        if (scale <= 1.5) setPosition({ x: 0, y: 0 })
      }
    },
    [currentIndex, handleClose, images.length, onChangeIndex, resetZoom, scale]
  )

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -0.25 : 0.25
      const newScale = Math.max(1, Math.min(scale + delta, 4))
      setScale(newScale)
      if (newScale <= 1) setPosition({ x: 0, y: 0 })
    },
    [scale]
  )

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (scale <= 1) return
      setIsDragging(true)
      dragStart.current = { x: e.clientX, y: e.clientY }
      positionStart.current = { ...position }
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    },
    [scale, position]
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || scale <= 1) return
      const dx = e.clientX - dragStart.current.x
      const dy = e.clientY - dragStart.current.y
      setPosition({
        x: positionStart.current.x + dx,
        y: positionStart.current.y + dy,
      })
    },
    [isDragging, scale]
  )

  const handlePointerUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleDoubleClick = useCallback(() => {
    if (scale > 1) {
      resetZoom()
    } else {
      setScale(2.5)
    }
  }, [scale, resetZoom])

  if (!currentImage) return null

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 m-0 h-screen w-screen max-h-screen max-w-full bg-black/95 backdrop-blur-sm p-0"
      onKeyDown={handleKeyDown}
      onClick={(e) => {
        if (e.target === dialogRef.current) handleClose()
      }}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
        <span className="text-sm text-white/70">
          {t('imageOf', { current: currentIndex + 1, total: images.length })}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale((s) => Math.min(s + 0.5, 4))}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            aria-label={t('zoomIn')}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </button>
          <button
            onClick={() => {
              setScale((s) => Math.max(s - 0.5, 1))
              if (scale <= 1.5) setPosition({ x: 0, y: 0 })
            }}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            aria-label={t('zoomOut')}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>
          <button
            onClick={handleClose}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            aria-label={t('closeViewer')}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation arrows */}
      {currentIndex > 0 && (
        <button
          onClick={() => {
            resetZoom()
            onChangeIndex(currentIndex - 1)
          }}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          aria-label={t('previousImage')}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {currentIndex < images.length - 1 && (
        <button
          onClick={() => {
            resetZoom()
            onChangeIndex(currentIndex + 1)
          }}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          aria-label={t('nextImage')}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image container */}
      <div
        className={cn(
          'flex h-full w-full items-center justify-center overflow-hidden',
          scale > 1 ? 'cursor-grab' : 'cursor-zoom-in',
          isDragging && 'cursor-grabbing'
        )}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onDoubleClick={handleDoubleClick}
      >
        <div
          className="relative transition-transform duration-150 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          }}
        >
          <Image
            src={currentImage.url}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className="max-h-[90vh] max-w-[90vw] object-contain select-none"
            sizes="100vw"
            priority
            draggable={false}
          />
        </div>
      </div>
    </dialog>
  )
}
