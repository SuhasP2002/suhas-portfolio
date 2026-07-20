import { Code2, Server, Layout, Database, Wrench, FlaskConical, Network } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { skills } from '../data/content.js'

const icons = {
  Languages: Code2,
  Backend: Server,
  Frontend: Layout,
  Databases: Database,
  'DevOps & Tools': Wrench,
  Testing: FlaskConical,
  'API & Architecture': Network
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="eyebrow">GET /skills</p>
        <div className="section-head">
          <h2 className="section-title">Stack</h2>
          <p className="section-sub">Tools I reach for daily, grouped by where they sit in the stack.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          {skills.map((group, i) => {
            const Icon = icons[group.category] || Code2
            return (
              <Reveal key={group.category} delay={i * 60}>
                <div className="panel panel-hover" style={{ padding: '20px 22px', height: '100%' }}>
                  <p className="mono" style={{
                    fontSize: 12, color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: 8,
                    marginBottom: 14, textTransform: 'lowercase'
                  }}>
                    <Icon size={14} style={{ color: 'var(--teal)' }} /> {group.category}
                    <span style={{ color: 'var(--text-faint)' }}>({group.items.length})</span>
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {group.items.map(item => (
                      <span key={item} className="mono chip-skill" style={chipStyle}>{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <style>{`
        .chip-skill { transition: border-color 0.15s ease, color 0.15s ease, transform 0.15s ease; }
        .chip-skill:hover { border-color: var(--teal); color: var(--teal); transform: translateY(-1px); }
      `}</style>
    </section>
  )
}

const chipStyle = {
  fontSize: 12.5, padding: '6px 12px', borderRadius: 20,
  border: '1px solid var(--border)', color: 'var(--text-dim)', background: 'var(--surface-raised)'
}
