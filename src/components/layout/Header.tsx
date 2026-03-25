'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import { LanguageSwitcher } from './LanguageSwitcher'
import { cn } from '@/lib/utils/cn'
import gsap from 'gsap'
import Image from 'next/image'

const navLinks = [
  { href: '/', labelKey: 'home', image: '/images/gallery/dos-careloquitos/dos-careloquitos-1.jpg' },
  {
    href: '/projects',
    labelKey: 'projects',
    image: '/images/gallery/dos-careloquitos/dos-careloquitos-2.jpg',
  },
  {
    href: '/about',
    labelKey: 'about',
    image: '/images/gallery/dos-careloquitos/dos-careloquitos-3.jpg',
  },
  {
    href: '/contact',
    labelKey: 'contact',
    image: '/images/gallery/dos-careloquitos/dos-careloquitos-4.jpg',
  },
] as const

export function Header() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const menuOverlayRef = useRef<HTMLDivElement>(null)
  const menuLinksRef = useRef<HTMLDivElement>(null)
  const menuTlRef = useRef<gsap.core.Timeline | null>(null)
  const leftPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const overlay = menuOverlayRef.current
    const linksContainer = menuLinksRef.current

    if (!overlay || !linksContainer) return

    const links = linksContainer.querySelectorAll('.menu-link')

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'

      menuTlRef.current = gsap.timeline()

      menuTlRef.current
        .fromTo(
          overlay,
          {
            clipPath: 'circle(0% at calc(100% - 48px) 32px)',
            opacity: 1,
          },
          {
            clipPath: 'circle(150% at calc(100% - 48px) 32px)',
            duration: 0.6,
            ease: 'power4.inOut',
          }
        )
        .fromTo(
          links,
          {
            opacity: 0,
            x: 40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .fromTo(
          leftPanelRef.current,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.5'
        )
    } else {
      document.body.style.overflow = ''

      if (menuTlRef.current) {
        menuTlRef.current.reverse()
      } else {
        gsap.to(overlay, {
          clipPath: 'circle(0% at calc(100% - 48px) 32px)',
          duration: 0.5,
          ease: 'power4.inOut',
        })
      }
    }

    return () => {
      if (menuTlRef.current) {
        menuTlRef.current.kill()
      }
    }
  }, [isMenuOpen])

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group transition-all duration-300">
              <span
                className={cn(
                  'text-2xl font-extrabold font-heading tracking-tight',
                  'text-white transition-all duration-300',
                  'group-hover:text-gray-300 group-hover:tracking-wide'
                )}
              >
                BLITO
              </span>
            </Link>

            {/* Desktop Navigation - Hidden, only hamburger */}
            <div className="hidden md:flex md:items-center md:gap-8">
              {/* Empty - only hamburger on desktop */}
            </div>

            {/* Right side - Language + Hamburger */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(
                  'relative w-12 h-12 flex items-center justify-center',
                  'rounded-lg transition-all duration-200',
                  'text-white hover:bg-gray-800/50',
                  'z-[201]'
                )}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <svg
                  className="absolute w-6 h-6 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{
                    opacity: isMenuOpen ? 0 : 1,
                    transform: isMenuOpen ? 'rotate(90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className="absolute w-6 h-6 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.5)',
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Fullscreen Menu Overlay - GTA VI Style */}
      <div
        ref={menuOverlayRef}
        className="fixed inset-0 z-[200] flex"
        style={{
          background: 'rgba(5, 5, 8, 0.97)',
          backdropFilter: 'blur(20px)',
          clipPath: 'circle(0% at calc(100% - 48px) 32px)',
        }}
      >
        {/* Left Panel - Logo and Images */}
        <div
          ref={leftPanelRef}
          className="hidden lg:flex lg:w-1/2 xl:w-[55%] flex-col justify-between p-8 xl:p-12"
        >
          {/* Logo at top */}
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="block">
            <span className="text-3xl font-extrabold font-heading tracking-tight text-white">
              BLITO
            </span>
          </Link>

          {/* Main Image Panel */}
          <div className="relative flex-1 flex items-center justify-center my-8 mx-4">
            <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden">
              {/* Base image */}
              {navLinks.map((link, index) => (
                <div
                  key={link.href}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    opacity:
                      hoveredIndex === index
                        ? 1
                        : hoveredIndex === null
                          ? index === 0
                            ? 1
                            : 0
                          : 0,
                  }}
                >
                  <Image
                    src={link.image}
                    alt={t(link.labelKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 50vw"
                    quality={85}
                    priority={index === 0}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              ))}

              {/* Default state when no hover */}
              {hoveredIndex === null && (
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
                      Bienvenido
                    </p>
                    <h2 className="text-white text-3xl font-bold">Explora mi trabajo</h2>
                  </div>
                </div>
              )}
            </div>

            {/* Subtle movement indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {navLinks.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    'w-8 h-1 rounded-full transition-all duration-300',
                    hoveredIndex === index
                      ? 'bg-white w-12'
                      : hoveredIndex === null
                        ? index === 0
                          ? 'bg-white w-12'
                          : 'bg-gray-600'
                        : 'bg-gray-600'
                  )}
                />
              ))}
            </div>
          </div>

          {/* Footer text */}
          <div className="text-gray-500 text-sm">Arte callejero · Colombia</div>
        </div>

        {/* Right Panel - Menu Links */}
        <div className="w-full lg:w-1/2 xl:w-[45%] flex flex-col justify-center px-8 md:px-16 lg:px-20">
          {/* Close button for desktop */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Links Container */}
          <div ref={menuLinksRef} className="relative z-10">
            <ul className="flex flex-col gap-2 md:gap-4">
              {navLinks.map((link, index) => (
                <li key={link.href} className="overflow-hidden">
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={cn(
                      'menu-link block py-3 md:py-4',
                      'font-heading font-bold uppercase',
                      'text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl',
                      'tracking-wider',
                      'transition-all duration-300',
                      hoveredIndex === index ? 'text-white' : 'text-gray-500 hover:text-gray-300',
                      isActiveLink(link.href) && 'text-white'
                    )}
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      transform: hoveredIndex === index ? 'translateX(8px)' : 'translateX(0)',
                    }}
                  >
                    <span className="inline-flex items-baseline">
                      <span className="inline-block">{t(link.labelKey)}</span>
                      <span
                        className={cn(
                          'ml-4 text-lg md:text-xl xl:text-2xl transition-all duration-300',
                          hoveredIndex === index
                            ? 'text-gray-400 translate-x-0'
                            : 'text-gray-600 -translate-x-2'
                        )}
                      >
                        0{index + 1}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-12 md:mt-16 pt-8 border-t border-gray-800/50">
              <div className="flex gap-6 md:gap-8">
                <a
                  href="https://www.instagram.com/blito.col/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Instagram
                </a>
                <a
                  href="https://www.threads.net/@blito.col"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Threads
                </a>
                <a
                  href="https://www.facebook.com/libreton94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
