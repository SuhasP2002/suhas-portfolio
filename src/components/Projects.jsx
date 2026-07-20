import { Github, ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'
import ProjectMockup from './ProjectMockup.jsx'
import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container-wide">
        <p className="eyebrow">GET /projects</p>
        <div className="section-head">
          <h2 className="section-title">Things I've shipped</h2>
          <p className="section-sub">Production-shaped side projects — real auth, real payments, real deploys.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div className="panel panel-hover" style={{ padding: 20, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 18 }}>
                  <ProjectMockup variant={p.mockup} accent={p.accent} />
                </div>

                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
                  <span className={`method-badge method-${p.method}`}>{p.method}</span>
                  <span className="mono" style={{ fontSize: 13, color: 'var(--text-dim)' }}>{p.endpoint}</span>
                  <span className="status-badge status-2xx" style={{ marginLeft: 'auto' }}>{p.status}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 17, marginBottom: 10, lineHeight: 1.3 }}>{p.name}</h3>
                <p style={{ fontSize: 14, marginBottom: 10, flex: 1 }}>{p.description}</p>
                <p className="mono" style={{ fontSize: 12, color: 'var(--text-faint)', marginBottom: 16, lineHeight: 1.5 }}>{p.infra}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 18 }}>
                  {p.stack.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 16, marginTop: 'auto' }}>
                  <a href={p.github} target="_blank" rel="noreferrer" className="mono" style={linkStyle}>
                    <Github size={14} /> code
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="mono" style={linkStyle}>
                      <ExternalLink size={14} /> live demo
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const linkStyle = { fontSize: 13, color: 'var(--teal)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }
