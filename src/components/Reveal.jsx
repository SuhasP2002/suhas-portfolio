import { useEffect, useRef, useState } from 'react'

// Wraps children in a div that fades/slides into view the first time it
// crosses into the viewport. Respects prefers-reduced-motion via CSS.
export default function Reveal({ children, delay = 0, as = 'div', className = '', style = {} }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const Tag = as

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  )
}
