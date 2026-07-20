import { useEffect, useState } from 'react'
import { ArrowUpRight, MessageSquare, TrendingUp, RefreshCw } from 'lucide-react'

const TOP_STORIES = 'https://hacker-news.firebaseio.com/v0/topstories.json'
const ITEM = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`

export default function DevPulse() {
  const [stories, setStories] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    setError(false)
    try {
      const idsRes = await fetch(TOP_STORIES)
      if (!idsRes.ok) throw new Error('bad response')
      const ids = (await idsRes.json()).slice(0, 5)
      const items = await Promise.all(ids.map(id => fetch(ITEM(id)).then(r => r.json())))
      setStories(items.filter(Boolean))
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  return (
    <div className="panel panel-hover" style={{ padding: 22, height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <p className="mono" style={{ fontSize: 12, color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <TrendingUp size={14} style={{ color: 'var(--amber)' }} /> dev pulse — live from Hacker News
        </p>
        <button onClick={load} aria-label="Refresh feed" className="mono" style={refreshBtn}>
          <RefreshCw size={13} className={loading ? 'spin' : ''} />
        </button>
      </div>

      {loading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[0, 1, 2].map(i => <div key={i} className="skeleton" style={{ height: 18, width: `${90 - i * 12}%` }} />)}
        </div>
      )}

      {!loading && error && (
        <p className="mono" style={{ fontSize: 12.5, color: 'var(--text-faint)' }}>
          Couldn't reach Hacker News right now — try refreshing, or browse{' '}
          <a href="https://news.ycombinator.com" target="_blank" rel="noreferrer" style={{ color: 'var(--teal)' }}>news.ycombinator.com</a> directly.
        </p>
      )}

      {!loading && !error && stories && (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {stories.map(s => (
            <li key={s.id} style={{ borderBottom: '1px solid var(--border)', paddingBottom: 10 }}>
              <a href={s.url || `https://news.ycombinator.com/item?id=${s.id}`} target="_blank" rel="noreferrer"
                 style={{ textDecoration: 'none', color: 'var(--text)', fontSize: 13.5, display: 'flex', gap: 6, lineHeight: 1.4 }}>
                <span style={{ flex: 1 }}>{s.title}</span>
                <ArrowUpRight size={13} style={{ flexShrink: 0, marginTop: 3, color: 'var(--text-faint)' }} />
              </a>
              <div className="mono" style={{ display: 'flex', gap: 12, marginTop: 5, fontSize: 11, color: 'var(--text-faint)' }}>
                <span>▲ {s.score ?? 0}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><MessageSquare size={11} /> {s.descendants ?? 0}</span>
              </div>
            </li>
          ))}
        </ul>
      )}

      <style>{`
        .spin { animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}

const refreshBtn = {
  background: 'transparent', border: '1px solid var(--border)', borderRadius: 6,
  color: 'var(--text-dim)', padding: 6, cursor: 'pointer', display: 'flex'
}
