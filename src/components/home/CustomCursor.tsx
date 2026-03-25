'use client'

import { useEffect, useState } from 'react'
import sprayCursor from '@/public/images/gallery/utils/spray.png'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoverType, setHoverType] = useState<'link' | 'image' | 'button' | 'expand' | 'default'>(
    'default'
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.closest("[data-cursor='expand']")) {
        setIsHovering(true)
        setHoverType('expand')
      } else if (target.closest("[data-cursor='image']")) {
        setIsHovering(true)
        setHoverType('image')
      } else if (target.closest("a, button, [role='button']")) {
        setIsHovering(true)
        setHoverType('link')
      } else if (target.closest("[data-cursor='button']")) {
        setIsHovering(true)
        setHoverType('button')
      } else {
        setIsHovering(false)
        setHoverType('default')
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleElementHover)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleElementHover)
    }
  }, [isVisible])

  const getCursorSize = () => {
    switch (hoverType) {
      case 'expand':
        return 48
      case 'image':
        return 64
      case 'button':
        return 40
      case 'link':
        return 36
      default:
        return 36
    }
  }

  const getRotation = () => {
    if (hoverType === 'expand') return -45
    return 0
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-out',
      }}
    >
      <div
        className="relative transition-all duration-100"
        style={{
          width: getCursorSize(),
          height: getCursorSize(),
          transform: `translate(-20%, -20%) translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <img
          src={sprayCursor.src}
          alt="Custom cursor"
          width={getCursorSize()}
          height={getCursorSize()}
          className="pointer-events-none"
          style={{
            transform: `rotate(${getRotation()}deg)`,
            transition: 'transform 0.15s ease-out',
            borderRadius: '50%',
          }}
        />
      </div>

      {isHovering && hoverType === 'expand' && (
        <div
          className="absolute flex items-center justify-center rounded-full border-2 border-white/50 bg-black/50 backdrop-blur-sm"
          style={{
            width: 56,
            height: 56,
            left: position.x - 28,
            top: position.y - 28,
            opacity: 1,
            transition: 'opacity 0.15s ease-out',
          }}
        >
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
          </svg>
        </div>
      )}

      {isHovering && hoverType === 'image' && (
        <div
          className="absolute rounded-full bg-white/90 px-3 py-1.5"
          style={{
            left: position.x + getCursorSize() / 2 + 8,
            top: position.y - 24,
            opacity: 1,
            transition: 'opacity 0.15s ease-out',
          }}
        >
          <span className="text-xs font-medium text-gray-900">Ver proyecto</span>
        </div>
      )}

      {isHovering && hoverType === 'link' && (
        <div
          className="absolute h-0.5 bg-accent-pink"
          style={{
            width: 32,
            left: position.x - 16,
            top: position.y + 20,
            transform: 'scaleX(1)',
            opacity: 1,
            transition: 'opacity 0.15s ease-out',
          }}
        />
      )}
    </div>
  )
}
