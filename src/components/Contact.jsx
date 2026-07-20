import { useState } from 'react'
import { Mail, Phone, Github, Linkedin, Download, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data/content.js'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sent

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="contact">
      <div className="container">
        <p className="eyebrow">POST /contact</p>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Let's talk</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: 48 }} id="contact-grid">
          <Reveal>
            <div>
              <p style={{ fontSize: 15, maxWidth: 380, marginBottom: 28 }}>
                Open to backend and full-stack roles. Fastest way to reach me is email — I'll usually reply within a day.
              </p>
              <div className="mono" style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 13.5 }}>
                <a href={`mailto:${profile.email}`} style={infoLink}><Mail size={15} /> {profile.email}</a>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} style={infoLink}><Phone size={15} /> {profile.phone}</a>
                <a href={profile.github} target="_blank" rel="noreferrer" style={infoLink}><Github size={15} /> github ↗</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" style={infoLink}><Linkedin size={15} /> linkedin ↗</a>
                <a href="/resume.pdf" download style={{ ...infoLink, color: 'var(--amber)' }}><Download size={15} /> download résumé</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={submit} className="panel" style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: 24 }}>
              <Field label="name" value={form.name} onChange={update('name')} required />
              <Field label="email" type="email" value={form.email} onChange={update('email')} required />
              <Field label="message" as="textarea" value={form.message} onChange={update('message')} required />

              <button type="submit" className="mono btn btn-primary" style={{ marginTop: 4, justifyContent: 'center' }}>
                send_message()
              </button>

              {status === 'sent' && (
                <p className="mono" style={{ fontSize: 12.5, color: 'var(--teal)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <CheckCircle2 size={14} /> Opening your email app — just hit send there.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          #contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function Field({ label, value, onChange, type = 'text', as = 'input', required }) {
  const Tag = as
  return (
    <label className="mono" style={{ fontSize: 12.5, color: 'var(--text-dim)', display: 'flex', flexDirection: 'column', gap: 6 }}>
      {label}{required && <span style={{ color: 'var(--amber)' }}> *</span>}
      <Tag
        type={as === 'input' ? type : undefined}
        value={value}
        onChange={onChange}
        required={required}
        rows={as === 'textarea' ? 5 : undefined}
        style={inputStyle}
      />
    </label>
  )
}

const infoLink = { color: 'var(--text-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 9 }

const inputStyle = {
  background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 7,
  padding: '10px 12px', color: 'var(--text)', fontFamily: 'var(--font-sans)', fontSize: 14,
  resize: 'vertical', outline: 'none'
}
