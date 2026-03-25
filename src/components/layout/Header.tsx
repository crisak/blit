'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import { LanguageSwitcher } from './LanguageSwitcher'
import { cn } from '@/lib/utils/cn'
import gsap from 'gsap'

const navLinks = [
  { href: '/', labelKey: 'home' },
  { href: '/projects', labelKey: 'projects' },
  { href: '/about', labelKey: 'about' },
  { href: '/contact', labelKey: 'contact' },
] as const

export function Header() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuOverlayRef = useRef<HTMLDivElement>(null)
  const menuLinksRef = useRef<HTMLDivElement>(null)
  const menuTlRef = useRef<gsap.core.Timeline | null>(null)

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
            x: -40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.3'
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

  const isMenuTransitioning = isMenuOpen

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

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-8">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'relative px-4 py-2 text-sm font-medium rounded-lg',
                        'transition-all duration-200',
                        isActiveLink(link.href)
                          ? 'text-white bg-gray-800/50'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                      )}
                    >
                      {t(link.labelKey)}
                      {isActiveLink(link.href) && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="w-px h-6 bg-gray-800" />
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button - GTA VI Style */}
            <div className="flex items-center gap-4 md:hidden">
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
        className="fixed inset-0 z-[200] flex flex-col justify-center px-8 md:px-16"
        style={{
          background: 'rgba(5, 5, 8, 0.97)',
          backdropFilter: 'blur(20px)',
          clipPath: 'circle(0% at calc(100% - 48px) 32px)',
        }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-accent-pink/5 pointer-events-none" />

        {/* Decorative elements */}
        <div className="absolute top-32 right-8 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-8 w-48 h-48 bg-accent-cyan/10 rounded-full blur-3xl" />

        {/* Menu Links Container */}
        <div ref={menuLinksRef} className="relative z-10">
          <ul className="flex flex-col gap-2 md:gap-4">
            {navLinks.map((link, index) => (
              <li key={link.href} className="overflow-hidden">
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'menu-link block py-3 md:py-4',
                    'font-heading font-bold uppercase',
                    'text-5xl md:text-7xl lg:text-8xl',
                    'tracking-wider',
                    'transition-all duration-300',
                    'text-gray-400 hover:text-white',
                    isActiveLink(link.href) && 'text-white'
                  )}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  <span className="inline-flex items-baseline">
                    <span
                      className="transition-all duration-300 hover:translate-x-4 inline-block"
                      style={{ display: 'inline-block' }}
                    >
                      {t(link.labelKey)}
                    </span>
                    <span className="ml-4 text-xl md:text-2xl text-gray-600">0{index + 1}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-gray-800/50">
            <div className="flex gap-6">
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
    </>
  )
}
