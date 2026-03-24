import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }

export function fadeIn(element: string | Element, delay = 0) {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay,
    ease: 'power3.out',
  })
}

export function fadeInUp(element: string | Element, delay = 0) {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay,
    ease: 'power3.out',
  })
}

export function slideInLeft(element: string | Element, delay = 0) {
  return gsap.from(element, {
    opacity: 0,
    x: -50,
    duration: 0.8,
    delay,
    ease: 'power3.out',
  })
}

export function slideInRight(element: string | Element, delay = 0) {
  return gsap.from(element, {
    opacity: 0,
    x: 50,
    duration: 0.8,
    delay,
    ease: 'power3.out',
  })
}

export function staggerFadeIn(elements: string | Element[], stagger = 0.1) {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger,
    ease: 'power3.out',
  })
}

export function parallax(element: string | Element, speed = 0.5) {
  return gsap.to(element, {
    yPercent: -30 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}

export function scrollReveal(element: string | Element, options?: {
  start?: string
  end?: string
  scrub?: boolean | number
  toggleActions?: string
}) {
  return gsap.from(element, {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: options?.start ?? 'top 80%',
      end: options?.end ?? 'bottom 20%',
      scrub: options?.scrub ?? 1,
      toggleActions: options?.toggleActions ?? 'play none none reverse',
    },
  })
}

export function scaleIn(element: string | Element, delay = 0) {
  return gsap.from(element, {
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    delay,
    ease: 'back.out(1.7)',
  })
}

export function textReveal(element: string | Element, delay = 0) {
  return gsap.from(element, {
    opacity: 0,
    y: '100%',
    duration: 0.8,
    delay,
    ease: 'power3.out',
  })
}
