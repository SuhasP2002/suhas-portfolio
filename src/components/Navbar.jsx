import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { profile } from '../data/content.js'

const routes = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'github', href: '#github' },
  { label: 'lab', href: '#lab' },
  { label: 'writing', href: '#writing' },
  { label: 'contact', href: '#contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      if (window.scrollY < 80) setActive('')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = routes
      .map(r => document.getElementById(r.href.slice(1)))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && window.scrollY > 80) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(9,13,24,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background 0.25s ease, border-color 0.25s ease'
    }}>
      <nav className="container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#top" className="mono" style={{ fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, zIndex: 101 }}>
          <span style={{ color: 'var(--teal)' }}>~/</span>
          <span>{profile.name.toLowerCase().replace(' ', '-')}</span>
        </a>

        <div className="mono" style={{ display: 'none', gap: 22, fontSize: 13 }} id="desktop-links">
          {routes.map(r => {
            const isActive = active === r.href.slice(1)
            return (
              <a
                key={r.href}
                href={r.href}
                style={{
                  textDecoration: 'none',
                  color: isActive ? 'var(--teal)' : 'var(--text-dim)',
                  position: 'relative',
                  padding: '4px 0',
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-dim)' }}
              >
                <span style={{ color: 'var(--text-faint)' }}>/</span>{r.label}
                {isActive && (
                  <span style={{
                    position: 'absolute', left: 0, right: 0, bottom: -6, height: 2,
                    background: 'var(--teal)', borderRadius: 2, boxShadow: '0 0 6px var(--teal)'
                  }} />
                )}
              </a>
            )
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="/resume.pdf" download className="mono btn btn-ghost" id="nav-resume"
             style={{ padding: '7px 14px', fontSize: 12.5 }}>
            <Download size={13} /> resume
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{
              display: 'flex', background: 'var(--surface)', border: '1px solid var(--border)',
              color: 'var(--text)', borderRadius: 7, padding: '8px', cursor: 'pointer', zIndex: 101
            }}
            id="mobile-toggle"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-links"
        className="mono"
        style={{
          maxHeight: open ? '520px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.35s var(--ease)',
          borderBottom: open ? '1px solid var(--border)' : 'none',
          background: 'rgba(9,13,24,0.97)'
        }}
      >
        <div className="container" style={{ paddingBottom: 16, paddingTop: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {routes.map(r => (
            <a key={r.href} href={r.href} onClick={() => setOpen(false)}
               style={{
                 textDecoration: 'none',
                 color: active === r.href.slice(1) ? 'var(--teal)' : 'var(--text-dim)',
                 padding: '11px 0', borderBottom: '1px solid var(--border)', fontSize: 14
               }}>
              <span style={{ color: 'var(--text-faint)' }}>GET /</span>{r.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          #desktop-links { display: flex !important; }
          #mobile-toggle { display: none !important; }
        }
        @media (max-width: 899px) {
          #nav-resume { display: none; }
        }
      `}</style>
    </header>
  )
}
