import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer style={{ padding: '32px 0' }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
        alignItems: 'center'
      }}>
        <span className="mono" style={{ fontSize: 12, color: 'var(--text-faint)' }}>
          © {new Date().getFullYear()} {profile.name} · built with React + Express
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-link" style={iconLink}><Github size={16} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-link" style={iconLink}><Linkedin size={16} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-link" style={iconLink}><Mail size={16} /></a>
          <span className="mono" style={{ fontSize: 12, color: 'var(--text-faint)', display: 'flex', alignItems: 'center', gap: 6 }}>
            status: <span className="status-badge status-2xx status-live" style={{ padding: '2px 8px' }}>200 OK</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

const iconLink = {
  color: 'var(--text-dim)', display: 'flex', padding: 6, borderRadius: 7,
  border: '1px solid var(--border)', transition: 'color 0.15s ease, border-color 0.15s ease'
}
