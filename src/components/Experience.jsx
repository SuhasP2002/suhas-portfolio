import Reveal from './Reveal.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="eyebrow">GET /experience</p>
        <h2 className="section-title" style={{ marginBottom: 44 }}>Work history</h2>

        <div style={{ position: 'relative' }}>
          <div className="timeline-rail" style={{
            position: 'absolute', left: 7, top: 8, bottom: 8, width: 2,
            background: 'linear-gradient(180deg, var(--teal), var(--border) 90%)'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {experience.map((job, i) => (
              <Reveal key={job.role + job.period} delay={i * 100}>
                <div style={{ display: 'flex', gap: 22 }}>
                  <div style={{ flexShrink: 0, paddingTop: 6, position: 'relative', zIndex: 1 }}>
                    <span style={{
                      display: 'block', width: 16, height: 16, borderRadius: '50%',
                      background: i === 0 ? 'var(--teal)' : 'var(--surface-raised)',
                      border: `2px solid ${i === 0 ? 'var(--teal)' : 'var(--border-hover)'}`,
                      boxShadow: i === 0 ? '0 0 12px var(--teal)' : 'none'
                    }} />
                  </div>

                  <div className="panel panel-hover" style={{ padding: 26, flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, marginBottom: 4 }}>{job.role}</h3>
                        <p className="mono" style={{ fontSize: 13, color: 'var(--text-dim)' }}>{job.company} · {job.location} · {job.type}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span className={`status-badge status-2xx ${i === 0 ? 'status-live' : ''}`}>{job.status}</span>
                        <p className="mono" style={{ fontSize: 12, color: 'var(--text-faint)', marginTop: 6 }}>{job.period}</p>
                      </div>
                    </div>

                    <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
                      {job.highlights.map((h, idx) => (
                        <li key={idx} style={{ fontSize: 14.5, color: 'var(--text-dim)', lineHeight: 1.6 }}>{h}</li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {job.stack.map(s => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
