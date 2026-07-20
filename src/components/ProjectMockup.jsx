// Lightweight, hand-built "browser preview" illustrations for each project.
// These are stylized abstractions of each app's UI (not real screenshots —
// swap in actual screenshots later by replacing this component's usage with
// <img> tags if you'd like real captures).

function Chrome({ accent, children }) {
  return (
    <div style={{
      borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)',
      background: 'var(--surface-raised)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 12px', borderBottom: '1px solid var(--border)' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#F2727A', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#F2A93B', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#56E8CE', display: 'inline-block' }} />
        <div style={{
          marginLeft: 10, flex: 1, height: 16, borderRadius: 4, background: 'var(--surface)',
          border: '1px solid var(--border)'
        }} />
      </div>
      <div style={{ height: 168, position: 'relative', background: `linear-gradient(160deg, ${accent}14, var(--surface) 65%)` }}>
        {children}
      </div>
    </div>
  )
}

function Bar({ w, h, top, left, color = 'var(--border-hover)' }) {
  return <div style={{ position: 'absolute', top, left, width: w, height: h, borderRadius: 4, background: color }} />
}

export default function ProjectMockup({ variant, accent = 'var(--teal)' }) {
  if (variant === 'ecommerce') {
    return (
      <Chrome accent={accent}>
        <div style={{ position: 'absolute', inset: 14, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 7, padding: 8 }}>
              <div style={{ height: 44, borderRadius: 5, background: `linear-gradient(135deg, ${accent}33, ${accent}0d)`, marginBottom: 6 }} />
              <Bar w="80%" h={6} top="auto" left="auto" />
              <div style={{ marginTop: 6 }}><Bar w="45%" h={6} top="auto" left="auto" color={accent} /></div>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 12, right: 14, width: 26, height: 26, borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#12100a' }}>3</div>
      </Chrome>
    )
  }

  if (variant === 'travel') {
    return (
      <Chrome accent={accent}>
        <svg viewBox="0 0 300 168" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <path d="M20 130 Q 80 40 150 90 T 280 50" stroke={accent} strokeWidth="2" fill="none" strokeDasharray="5 6" opacity="0.7" />
          {[[20, 130], [110, 78], [190, 100], [280, 50]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={7} fill={accent} opacity="0.25" />
              <circle cx={x} cy={y} r={3.5} fill={accent} />
            </g>
          ))}
        </svg>
        <div style={{
          position: 'absolute', left: 14, bottom: 12, right: 14, background: 'var(--surface)',
          border: '1px solid var(--border)', borderRadius: 7, padding: '8px 10px', display: 'flex', gap: 8, alignItems: 'center'
        }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: `${accent}33`, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <Bar w="60%" h={6} top="auto" left="auto" />
            <div style={{ marginTop: 5 }}><Bar w="35%" h={5} top="auto" left="auto" color="var(--border)" /></div>
          </div>
        </div>
      </Chrome>
    )
  }

  // health / wellness dashboard
  return (
    <Chrome accent={accent}>
      <div style={{ position: 'absolute', inset: 14, display: 'flex', gap: 10 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 7, padding: 8, flex: 1 }}>
            <svg viewBox="0 0 100 40" style={{ width: '100%', height: 34 }}>
              <polyline points="0,32 15,22 30,26 45,10 60,18 75,6 100,14" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[0, 1].map(i => (
              <div key={i} style={{ flex: 1, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 7, height: 30 }} />
            ))}
          </div>
        </div>
        <div style={{ width: 64, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 36 36" style={{ width: 44, height: 44 }}>
            <circle cx="18" cy="18" r="15" fill="none" stroke="var(--border)" strokeWidth="4" />
            <circle cx="18" cy="18" r="15" fill="none" stroke={accent} strokeWidth="4" strokeDasharray="70 100" strokeLinecap="round" transform="rotate(-90 18 18)" />
          </svg>
        </div>
      </div>
    </Chrome>
  )
}
