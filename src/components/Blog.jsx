import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { posts } from '../data/content.js'

const formatDate = (iso) => new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

export default function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <p className="eyebrow">GET /blog</p>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Writing on code</h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {posts.map((post, idx) => (
            <Reveal key={post.slug} delay={idx * 70}>
              <a href="#blog" style={{
                textDecoration: 'none', color: 'inherit', padding: '22px 4px',
                borderTop: idx === 0 ? 'none' : '1px solid var(--border)',
                display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
                alignItems: 'flex-start'
              }} className="blog-row">
                <div style={{ maxWidth: 560 }}>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 16.5, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                    {post.title}
                    <ArrowUpRight size={14} className="blog-arrow" style={{ color: 'var(--text-faint)', transition: 'transform 0.15s ease, color 0.15s ease' }} />
                  </h3>
                  <p style={{ fontSize: 14 }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                    {post.tags.map(t => (
                      <span key={t} className="mono" style={{ fontSize: 11.5, color: 'var(--text-faint)' }}>#{t}</span>
                    ))}
                  </div>
                </div>
                <p className="mono" style={{ fontSize: 12.5, color: 'var(--text-faint)', whiteSpace: 'nowrap' }}>{formatDate(post.date)}</p>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mono" style={{ fontSize: 12, color: 'var(--text-faint)', marginTop: 24 }}>
          // sample posts — replace with your own writing in src/data/content.js
        </p>
      </div>

      <style>{`
        .blog-row:hover .blog-arrow { transform: translate(2px, -2px); color: var(--teal); }
      `}</style>
    </section>
  )
}
