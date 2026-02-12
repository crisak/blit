# Code Style Rules

## TypeScript
- Strict mode con `noUncheckedIndexedAccess` habilitado
- **Nunca usar `any`** — usar tipos propios, `unknown`, generics o type narrowing
- Variables no usadas deben tener prefijo `_`

## Prettier
- Sin punto y coma
- Comillas simples
- Trailing commas (es5)
- 100 caracteres de ancho
- Indentación de 2 espacios

## Imports
- Usar siempre el path alias `@/*` (mapea a `./src/*`)
- Navegación: usar `Link`, `useRouter`, `usePathname` desde `@/i18n/routing`, nunca desde `next/link` o `next/navigation`

## Estilos
- Usar `cn()` desde `@/lib/utils/cn` para combinar clases de Tailwind
- Tailwind CSS v4 con PostCSS plugin
