import { GraduationCap, Award, MapPin } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile, education, certifications } from '../data/content.js'

const initials = profile.name.split(' ').map(w => w[0]).join('')

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="eyebrow">GET /about</p>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Summary</h2>

        <Reveal>
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 40 }}>
            <div className="mono" style={{
              width: 64, height: 64, borderRadius: 16, flexShrink: 0,
              background: 'linear-gradient(140deg, var(--teal-dim), var(--amber-dim))',
              border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, fontWeight: 700, color: 'var(--text)'
            }}>
              {initials}
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <p style={{ fontSize: 16.5, maxWidth: 700 }}>{profile.summary}</p>
              <p className="mono" style={{ fontSize: 12.5, color: 'var(--text-faint)', marginTop: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={13} /> {profile.location}
              </p>
            </div>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          <Reveal delay={80}>
            <div className="panel panel-hover" style={{ padding: 24, height: '100%' }}>
              <p className="mono" style={cardLabel}><GraduationCap size={13} /> education</p>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 16, marginBottom: 6 }}>{education.school}</h3>
              <p style={{ fontSize: 14, marginBottom: 4 }}>{education.degree}</p>
              <p className="mono" style={{ fontSize: 12.5, color: 'var(--text-faint)' }}>{education.period} · {education.gpa}</p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="panel panel-hover" style={{ padding: 24, height: '100%' }}>
              <p className="mono" style={cardLabel}><Award size={13} /> certifications</p>
              <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {certifications.map(c => (
                  <li key={c} style={{ fontSize: 14, color: 'var(--text-dim)' }}>{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const cardLabel = { fontSize: 11.5, color: 'var(--teal)', letterSpacing: '0.05em', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }
