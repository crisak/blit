'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoverType, setHoverType] = useState<'link' | 'image' | 'button' | 'default'>('default')

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.closest("a, button, [role='button']")) {
        setIsHovering(true)
        setHoverType('link')
      } else if (target.closest("img, [data-cursor='image']")) {
        setIsHovering(true)
        setHoverType('image')
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
    if (!isHovering) return 12
    switch (hoverType) {
      case 'image':
        return 80
      case 'button':
        return 50
      case 'link':
        return 24
      default:
        return 12
    }
  }

  const getBorderColor = () => {
    switch (hoverType) {
      case 'image':
        return 'rgba(255, 255, 255, 0.8)'
      case 'button':
        return 'rgba(255, 255, 255, 0.9)'
      case 'link':
        return 'rgba(255, 255, 255, 0.9)'
      default:
        return 'rgba(255, 255, 255, 0.8)'
    }
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.15s ease-out',
      }}
    >
      <div
        className="absolute rounded-full border-2 transition-all duration-150"
        style={{
          width: getCursorSize(),
          height: getCursorSize(),
          borderColor: getBorderColor(),
          backgroundColor:
            hoverType === 'image'
              ? 'rgba(255, 255, 255, 0.3)'
              : hoverType === 'button'
                ? 'rgba(255, 255, 255, 0.5)'
                : hoverType === 'link'
                  ? 'rgba(255, 255, 255, 0.7)'
                  : 'rgba(255, 255, 255, 0.8)',
          transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${isHovering ? 1 : 0.5})`,
        }}
      />

      {isHovering && hoverType === 'image' && (
        <div
          className="absolute whitespace-nowrap rounded-full bg-white/90 px-3 py-1.5"
          style={{
            left: position.x + getCursorSize() / 2 + 10,
            top: position.y - 20,
            transform: 'translateY(0)',
            opacity: 1,
            transition: 'opacity 0.15s ease-out',
          }}
        >
          <span className="text-xs font-medium text-gray-900">Ver proyecto</span>
        </div>
      )}

      {isHovering && hoverType === 'link' && (
        <div
          className="absolute h-0.5 bg-white"
          style={{
            width: getCursorSize() * 1.5,
            left: position.x - getCursorSize() * 0.25,
            top: position.y + getCursorSize() / 2 + 6,
            transform: `scaleX(${isHovering && hoverType === 'link' ? 1 : 0})`,
            opacity: 1,
            transition: 'opacity 0.15s ease-out',
          }}
        />
      )}
    </div>
  )
}
