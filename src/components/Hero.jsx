import { useEffect, useRef, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { profile, heroStats } from '../data/content.js'

const REQUEST_LINE = `GET /suhas-pai/summary HTTP/1.1`

const responseLines = [
  '{',
  `  "name": "${profile.name}",`,
  `  "title": "${profile.title}",`,
  `  "location": "${profile.location}",`,
  `  "experience_years": 2,`,
  `  "stack": ["Java", "Spring Boot", "PostgreSQL", "React.js"],`,
  `  "status": "open_to_opportunities"`,
  '}'
]

function useCountUp(target, start) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf
    const duration = 1100
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target])
  return value
}

function Stat({ stat, delay }) {
  const [start, setStart] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setStart(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  const value = useCountUp(stat.value, start)
  return (
    <div>
      <div className="mono" style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)' }}>
        {value}{stat.suffix || ''}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-faint)', marginTop: 2 }}>{stat.label}</div>
    </div>
  )
}

export default function Hero() {
  const [reqTyped, setReqTyped] = useState('')
  const [showResponse, setShowResponse] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true

    let i = 0
    const typer = setInterval(() => {
      i++
      setReqTyped(REQUEST_LINE.slice(0, i))
      if (i >= REQUEST_LINE.length) {
        clearInterval(typer)
        setTimeout(() => setShowResponse(true), 350)
      }
    }, 35)
    return () => clearInterval(typer)
  }, [])

  useEffect(() => {
    if (!showResponse) return
    let i = 0
    const lineTimer = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= responseLines.length) clearInterval(lineTimer)
    }, 90)
    return () => clearInterval(lineTimer)
  }, [showResponse])

  return (
    <section id="top" style={{ paddingTop: 64, paddingBottom: 72, borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div className="floating-orb" style={{ width: 420, height: 420, background: 'var(--teal)', opacity: 0.13, top: -160, left: -140 }} />
      <div className="floating-orb" style={{ width: 380, height: 380, background: 'var(--amber)', opacity: 0.1, top: -100, right: -160, animationDelay: '-6s' }} />
      <div className="grid-backdrop" />

      <div className="container-wide" style={{ display: 'grid', gap: 44, gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', alignItems: 'center', position: 'relative' }} id="hero-grid">
        <div>
          <p className="eyebrow">status: 200 — available for new roles</p>
          <h1 style={{ fontSize: 'clamp(34px, 4.6vw, 54px)', lineHeight: 1.08, maxWidth: 620 }}>
            I build backend systems<br />that <span style={{ color: 'var(--amber)' }}>don't fall over</span>.
          </h1>
          <p style={{ marginTop: 20, maxWidth: 520, fontSize: 16.5 }}>
            {profile.title} in {profile.location}, shipping secure Spring Boot APIs and full-stack
            SaaS products — from JWT auth to AI-assisted workflows.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">view_projects()</a>
            <a href="#contact" className="btn btn-ghost">say_hello()</a>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: 28,
            marginTop: 48, paddingTop: 28, borderTop: '1px solid var(--border)', maxWidth: 520
          }} id="hero-stats">
            {heroStats.map((s, i) => <Stat key={s.label} stat={s} delay={i * 120} />)}
          </div>
        </div>

        <div className="mono panel" style={{
          overflow: 'hidden', boxShadow: '0 30px 70px -24px rgba(0,0,0,0.6)', width: '100%'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderBottom: '1px solid var(--border)', background: 'var(--surface-raised)' }}>
            <span style={dot('#F2727A')} /><span style={dot('#F2A93B')} /><span style={dot('#56E8CE')} />
            <span style={{ marginLeft: 8, fontSize: 12, color: 'var(--text-faint)' }}>api-console — zsh</span>
          </div>
          <div style={{ padding: '18px 18px 24px', fontSize: 13.5, lineHeight: 1.8, minHeight: 210 }}>
            <div>
              <span style={{ color: 'var(--teal)' }}>$</span>{' '}
              <span>curl {reqTyped}</span>
              {reqTyped.length < REQUEST_LINE.length && <span style={cursor} />}
            </div>
            {showResponse && (
              <div style={{ marginTop: 14 }}>
                <div style={{ marginBottom: 6 }}>
                  <span className="status-badge status-2xx status-live">200 OK</span>
                </div>
                {responseLines.slice(0, visibleLines).map((line, idx) => (
                  <div key={idx} style={{ color: idx === 0 || idx === responseLines.length - 1 ? 'var(--text-dim)' : 'var(--text)', animation: 'count-fade 0.3s ease both' }}>
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to about section" className="mono" style={{
        display: 'flex', justifyContent: 'center', marginTop: 56, color: 'var(--text-faint)',
        textDecoration: 'none', animation: 'bob 2.2s ease-in-out infinite'
      }}>
        <ArrowDown size={18} />
      </a>

      <style>{`
        @keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
        @media (max-width: 880px) {
          #hero-grid { grid-template-columns: 1fr !important; }
          #hero-stats { grid-template-columns: repeat(2, auto) !important; row-gap: 20px !important; }
        }
      `}</style>
    </section>
  )
}

const dot = (color) => ({ width: 10, height: 10, borderRadius: '50%', background: color, display: 'inline-block' })

const cursor = {
  display: 'inline-block', width: 7, height: 14, background: 'var(--teal)', marginLeft: 2,
  animation: 'blink 1s step-end infinite', verticalAlign: 'middle'
}
