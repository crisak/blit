import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils/cn'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/blito.col/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Threads',
    href: 'https://www.threads.net/@blito.col',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 6.74 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.186.408-2.167 1.41-2.94.915-.707 2.188-1.08 3.618-1.08.237 0 .477.014.717.04 1.68.16 3.139 1.044 4.154 2.507l1.735-1.735c.349-2.553-.17-4.542-1.598-6.116-1.448-1.596-3.615-2.433-6.44-2.486C9.637 1.83 7.164 3.32 5.889 5.65c-1.515 2.77-1.566 6.07-.142 9.29 1.424 3.22 3.933 5.58 7.07 6.628 2.708.902 5.09.745 7.078-.468 1.017-.62 1.878-1.483 2.555-2.558l2.028 2.028c-1.192 1.672-2.942 3.006-5.193 3.84-2.023.747-4.197 1.137-6.39 1.145z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/libreton94',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

const footerLinks = [
  { href: '/projects', labelKey: 'links.projects' },
  { href: '/about', labelKey: 'links.about' },
  { href: '/contact', labelKey: 'links.contact' },
] as const

const collectives = [
  { name: 'Ilegales', href: 'https://www.instagram.com/ilegales.col/', isCommerce: true },
  { name: 'Sabor Latino Crew', href: 'https://www.instagram.com/saborlatinocrewoficial/' },
  { name: 'Sabor Latino Callejero', href: 'https://www.instagram.com/saborlatinocallejero/' },
] as const

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group transition-all duration-300">
              <span
                className={cn(
                  'text-2xl font-extrabold font-heading text-white',
                  'transition-all duration-300',
                  'group-hover:text-gray-300'
                )}
              >
                BLITO
              </span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">{t('description')}</p>
            <a
              href="https://www.ilegales.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-pink/20 px-3 py-1 text-xs font-medium text-accent-pink transition-colors hover:bg-accent-pink/30"
            >
              <span>Tienda</span>
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-4">
              {t('linksTitle')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm text-gray-400',
                      'transition-all duration-200',
                      'hover:text-white hover:pl-1'
                    )}
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collectives */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-4">
              Colectivos
            </h3>
            <ul className="space-y-3">
              {collectives.map((collective) => (
                <li key={collective.name}>
                  <a
                    href={collective.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center gap-1 text-sm text-gray-400',
                      'transition-all duration-200',
                      'hover:text-white'
                    )}
                  >
                    <span>{collective.name}</span>
                    {'isCommerce' in collective && collective.isCommerce && (
                      <span className="rounded bg-accent-pink/20 px-1.5 py-0.5 text-[10px] font-medium text-accent-pink">
                        tienda
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-4">
              {t('socialTitle')}
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'p-2 rounded-lg text-gray-500',
                    'transition-all duration-200',
                    'hover:text-white hover:bg-gray-800'
                  )}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {currentYear} Blito. {t('rights')}
            </p>
            <p className="text-xs text-gray-700">{t('madeWith')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
