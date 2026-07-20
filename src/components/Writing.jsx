import { Feather, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { writing } from '../data/content.js'

export default function Writing() {
  return (
    <section id="writing">
      <div className="container">
        <p className="eyebrow violet">GET /writing</p>
        <div className="section-head">
          <h2 className="section-title">Off the clock</h2>
          <p className="section-sub">When I'm not shipping APIs, I write — short stories and shayri.</p>
        </div>

        <Reveal>
          <a
            href={writing.url}
            target="_blank"
            rel="noreferrer"
            className="panel panel-hover"
            style={{
              display: 'flex', alignItems: 'center', gap: 24, padding: 28,
              textDecoration: 'none', flexWrap: 'wrap'
            }}
          >
            <div style={{
              width: 56, height: 56, borderRadius: 14, flexShrink: 0,
              background: 'linear-gradient(140deg, var(--violet-dim), var(--amber-dim))',
              border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Feather size={24} style={{ color: 'var(--violet)' }} />
            </div>

            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'var(--text)', marginBottom: 6 }}>
                {writing.name}
              </h3>
              <p style={{ fontSize: 14, maxWidth: 520 }}>{writing.tagline}</p>
            </div>

            <span className="mono btn btn-ghost" style={{ flexShrink: 0 }}>
              read stories <ArrowUpRight size={14} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
