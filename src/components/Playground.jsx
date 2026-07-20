import Reveal from './Reveal.jsx'
import DevPulse from './DevPulse.jsx'
import DebugChallenge from './DebugChallenge.jsx'

export default function Playground() {
  return (
    <section id="lab">
      <div className="container-wide">
        <p className="eyebrow amber">GET /lab</p>
        <div className="section-head">
          <h2 className="section-title">The lab</h2>
          <p className="section-sub">A couple of live, interactive corners of the site — refresh either any time.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20, alignItems: 'stretch' }}>
          <Reveal><DevPulse /></Reveal>
          <Reveal delay={100}><DebugChallenge /></Reveal>
        </div>
      </div>
    </section>
  )
}
