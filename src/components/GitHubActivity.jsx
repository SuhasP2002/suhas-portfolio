import { useState } from 'react'
import { Github, Users, Flame, GitCommit } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data/content.js'

// Small wrapper around an <img> that swaps to a fallback panel if the
// external stats service is unreachable or rate-limited, so the section
// never renders a broken-image icon.
function LiveImage({ src, alt, height = 165, fallback, imgStyle = {} }) {
  const [errored, setErrored] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (errored) {
    return (
      <div style={{
        height, display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--text-faint)', fontSize: 12.5, textAlign: 'center', padding: 16
      }} className="mono">
        {fallback || 'metric temporarily unavailable — GitHub image service may be rate-limited'}
      </div>
    )
  }

  return (
    <div style={{ position: 'relative', minHeight: loaded ? 'auto' : height }}>
      {!loaded && <div className="skeleton" style={{ position: 'absolute', inset: 0 }} />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setErrored(true)}
        onLoad={() => setLoaded(true)}
        style={{ width: '100%', display: loaded ? 'block' : 'block', opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease', ...imgStyle }}
      />
    </div>
  )
}

export default function GitHubActivity() {
  const user = profile.githubUsername

  return (
    <section id="github" style={{ position: 'relative' }}>
      <div className="grid-backdrop" style={{ opacity: 0.3 }} />
      <div className="container-wide" style={{ position: 'relative' }}>
        <p className="eyebrow violet">GET /github-activity</p>
        <div className="section-head">
          <h2 className="section-title">Live metrics</h2>
          <p className="section-sub">Real-time data pulled straight from GitHub — and this page's own visitor count.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          <Reveal className="span-2" style={{ gridColumn: 'span 2' }}>
            <div className="panel panel-hover" style={{ padding: 22 }}>
              <PanelLabel icon={GitCommit} text="contribution graph" />
              <LiveImage
                src={`https://ghchart.rshah.org/56E8CE/${user}`}
                alt={`${profile.name}'s GitHub contribution graph`}
                height={140}
              />
              <a href={profile.github} target="_blank" rel="noreferrer" className="mono" style={ghLink}>
                <Github size={13} /> @{user} ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="panel panel-hover" style={{ padding: 22, height: '100%' }}>
              <PanelLabel icon={Flame} text="streak stats" />
              <LiveImage
                src={`https://streak-stats.demolab.com?user=${user}&theme=dark&hide_border=true&background=00000000&stroke=232C48&ring=56E8CE&fire=F2A93B&currStreakLabel=ECF0F9`}
                alt={`${profile.name}'s GitHub streak stats`}
                height={150}
              />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="panel panel-hover" style={{ padding: 22, height: '100%' }}>
              <PanelLabel icon={Github} text="repo stats" />
              <LiveImage
                src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=56E8CE&icon_color=F2A93B&text_color=ECF0F9`}
                alt={`${profile.name}'s GitHub stats card`}
                height={150}
              />
            </div>
          </Reveal>

          <Reveal delay={200} style={{ gridColumn: 'span 2' }}>
            <VisitorPanel />
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #github [style*="span 2"] { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}

function PanelLabel({ icon: Icon, text }) {
  return (
    <p className="mono" style={{ fontSize: 12, color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
      <Icon size={14} style={{ color: 'var(--violet)' }} /> {text}
    </p>
  )
}

const ghLink = {
  marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 7,
  fontSize: 12.5, color: 'var(--text-dim)', textDecoration: 'none'
}

function VisitorPanel() {
  return (
    <div className="panel panel-hover" style={{ padding: 22, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
      <div style={{
        width: 52, height: 52, borderRadius: 14, background: 'var(--violet-dim)', border: '1px solid rgba(167,139,250,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
      }}>
        <Users size={22} style={{ color: 'var(--violet)' }} />
      </div>
      <div style={{ flex: 1, minWidth: 180 }}>
        <p className="mono" style={{ fontSize: 12, color: 'var(--text-dim)', marginBottom: 8 }}>page views · this site</p>
        <LiveImage
          src="https://visitor-badge.laobi.icu/badge?page_id=suhaspai.portfolio.live&left_color=15%2C1e%2C38&right_color=A78BFA&left_text=visitors"
          alt="Visitor count badge"
          height={24}
          fallback="badge unavailable — service may be rate-limited"
          imgStyle={{ width: 'auto' }}
        />
      </div>
      <p className="mono" style={{ fontSize: 11.5, color: 'var(--text-faint)', maxWidth: 220 }}>
        counted live, no cookies — just a simple hit counter
      </p>
    </div>
  )
}
