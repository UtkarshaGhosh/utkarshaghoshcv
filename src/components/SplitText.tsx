import React, { useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string | ((t: number) => number)
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars'
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  threshold?: number
  rootMargin?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  textAlign?: React.CSSProperties['textAlign']
  onLetterAnimationComplete?: () => void
}

function simpleSplit(el: HTMLElement, mode: SplitTextProps['splitType']) {
  const text = el.textContent || ''
  el.textContent = ''
  const container = document.createDocumentFragment()

  const createSpan = (txt: string, cls: string) => {
    const span = document.createElement('span')
    span.textContent = txt
    span.className = cls
    span.style.display = 'inline-block'
    span.style.willChange = 'transform, opacity'
    return span
  }

  const words = text.split(/(\s+)/)
  const targets: HTMLElement[] = []

  if (mode === 'words' || mode === 'lines') {
    words.forEach(w => {
      if (/\s+/.test(w)) {
        container.appendChild(document.createTextNode(w))
      } else {
        const span = createSpan(w, 'split-word')
        targets.push(span)
        container.appendChild(span)
      }
    })
  } else if (mode === 'words, chars') {
    words.forEach(w => {
      if (/\s+/.test(w)) {
        container.appendChild(document.createTextNode(w))
      } else {
        const wordWrap = document.createElement('span')
        wordWrap.className = 'split-word inline-block'
        for (const ch of w.split('')) {
          const c = createSpan(ch, 'split-char')
          wordWrap.appendChild(c)
          targets.push(c)
        }
        container.appendChild(wordWrap)
      }
    })
  } else {
    // chars (default)
    for (const ch of text.split('')) {
      if (ch === ' ') {
        container.appendChild(document.createTextNode(' '))
      } else {
        const c = createSpan(ch, 'split-char')
        targets.push(c)
        container.appendChild(c)
      }
    }
  }

  el.appendChild(container)
  return targets
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLElement>(null)
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    if ((document as any).fonts?.status === 'loaded') setFontsLoaded(true)
    else (document as any).fonts?.ready?.then(() => setFontsLoaded(true))
  }, [])

  useGSAP(
    () => {
      const el = ref.current
      if (!el || !fontsLoaded) return
      const original = el.getAttribute('data-original-text')
      if (!original) el.setAttribute('data-original-text', el.textContent || '')
      el.innerHTML = el.getAttribute('data-original-text') || ''
      const targets = simpleSplit(el, splitType)

      const startPct = (1 - threshold) * 100
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin)
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px'
      const sign = marginValue === 0 ? '' : marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`
      const start = `top ${startPct}%${sign}`

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease: ease as any,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
            anticipatePin: 0.4,
          },
          onComplete: onLetterAnimationComplete,
          willChange: 'transform, opacity',
          force3D: true,
        }
      )

      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === el) st.kill()
        })
      }
    },
    { dependencies: [text, delay, duration, ease, splitType, JSON.stringify(from), JSON.stringify(to), threshold, rootMargin, fontsLoaded], scope: ref }
  )

  const style = useMemo<React.CSSProperties>(() => ({ textAlign, wordWrap: 'break-word', willChange: 'transform, opacity' }), [textAlign])
  const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`

  const Tag: any = tag
  return <Tag ref={ref} style={style} className={classes}>{text}</Tag>
}

export default SplitText
