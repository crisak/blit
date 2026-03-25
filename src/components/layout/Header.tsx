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
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])

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
      {/* Minimal Header - Only Logo and Hamburger */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[201] transition-all duration-300',
          isMenuOpen ? 'pointer-events-none' : ''
        )}
        style={{
          background: isMenuOpen ? 'transparent' : 'transparent',
        }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo - Only visible when menu is closed */}
            {!isMenuOpen && (
              <Link href="/" className="flex items-center gap-2 group transition-all duration-300">
                <Image
                  src="/images/logo/logo-white.svg"
                  alt="BLITO Logo"
                  width={40}
                  height={44}
                  className="h-10 w-auto brightness-0 invert transition-all duration-300 group-hover:opacity-80"
                  priority
                />
              </Link>
            )}

            {/* Spacer when logo is hidden */}
            {isMenuOpen && <div />}

            {/* Right side - Language (hidden when menu closed) + Hamburger */}
            <div className="flex items-center gap-4">
              {/* Hamburger Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(
                  'relative w-12 h-12 flex items-center justify-center',
                  'rounded-lg transition-all duration-200',
                  'text-white hover:bg-white/10',
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
          zIndex: 300,
        }}
      >
        {/* Left Panel - Full Height Image (50% width) */}
        <div
          ref={leftPanelRef}
          className="hidden lg:block w-1/2 h-full relative overflow-hidden"
          style={{ zIndex: 1 }}
        >
          {/* Images with cinematic transition */}
          {navLinks.map((link, index) => (
            <div
              key={link.href}
              ref={(el) => {
                imagesRef.current[index] = el
              }}
              className="absolute inset-0"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transform:
                  hoveredIndex === index
                    ? 'translateX(0)'
                    : hoveredIndex !== null
                      ? 'translateX(-5%)'
                      : 'translateX(0)',
                transitionProperty: 'opacity, transform',
                transitionDuration: hoveredIndex !== null ? '0.8s, 1.2s' : '0.3s, 0.3s',
              }}
            >
              <Image
                src={link.image}
                alt={t(link.labelKey)}
                fill
                className="object-cover"
                sizes="50vw"
                quality={90}
                priority={index === 0}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>
          ))}

          {/* Logo at top left of overlay */}
          <div className="absolute top-8 left-8 z-10">
            <Image
              src="/images/logo/logo-white.svg"
              alt="BLITO Logo"
              width={50}
              height={55}
              className="h-12 w-auto brightness-0 invert"
              priority
            />
          </div>
        </div>

        {/* Right Panel - Menu Links */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 relative">
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
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
            <ul className="flex flex-col gap-3 md:gap-5">
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
                          hoveredIndex === index ? 'text-gray-400' : 'text-gray-600'
                        )}
                      >
                        0{index + 1}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Switcher + Social Links inside menu */}
            <div className="mt-12 md:mt-16 pt-8 border-t border-gray-800/50">
              <div className="flex items-center justify-between">
                {/* Language Switcher */}
                <LanguageSwitcher />

                {/* Social Links */}
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
      </div>
    </>
  )
}
