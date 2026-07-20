import { useState } from 'react'
import { Shuffle, CheckCircle2, XCircle, Terminal } from 'lucide-react'
import { puzzles, puzzleOfTheDay } from '../data/puzzles.js'

const difficultyColor = { easy: 'var(--teal)', medium: 'var(--amber)', hard: 'var(--red)' }

export default function DebugChallenge() {
  const [index, setIndex] = useState(puzzleOfTheDay())
  const [selected, setSelected] = useState(null)
  const puzzle = puzzles[index]

  const pick = (i) => {
    if (selected !== null) return
    setSelected(i)
  }

  const next = () => {
    let n = index
    while (n === index) n = Math.floor(Math.random() * puzzles.length)
    setIndex(n)
    setSelected(null)
  }

  const solved = selected !== null
  const correct = selected === puzzle.answer

  return (
    <div className="panel panel-hover" style={{ padding: 22, height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
        <p className="mono" style={{ fontSize: 12, color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Terminal size={14} style={{ color: 'var(--teal)' }} /> debug challenge — today's build
        </p>
        <span className="mono" style={{ fontSize: 10.5, color: difficultyColor[puzzle.difficulty], textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {puzzle.difficulty}
        </span>
      </div>

      <p style={{ fontSize: 14.5, color: 'var(--text)', marginBottom: 16, lineHeight: 1.55 }}>{puzzle.prompt}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        {puzzle.options.map((opt, i) => {
          const isAnswer = i === puzzle.answer
          const isPicked = i === selected
          let bg = 'var(--surface-raised)'
          let border = 'var(--border)'
          let color = 'var(--text-dim)'
          if (solved && isAnswer) { bg = 'var(--teal-dim)'; border = 'rgba(86,232,206,0.4)'; color = 'var(--teal)' }
          else if (solved && isPicked && !isAnswer) { bg = 'var(--red-dim)'; border = 'rgba(242,114,122,0.4)'; color = 'var(--red)' }

          return (
            <button
              key={i}
              onClick={() => pick(i)}
              disabled={solved}
              className="mono"
              style={{
                textAlign: 'left', padding: '10px 12px', borderRadius: 8, fontSize: 13,
                background: bg, border: `1px solid ${border}`, color,
                cursor: solved ? 'default' : 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                transition: 'all 0.15s ease'
              }}
            >
              {solved && isAnswer && <CheckCircle2 size={14} />}
              {solved && isPicked && !isAnswer && <XCircle size={14} />}
              {opt}
            </button>
          )
        })}
      </div>

      {solved && (
        <p className="mono" style={{ fontSize: 12, color: correct ? 'var(--teal)' : 'var(--text-faint)', marginBottom: 16, lineHeight: 1.6 }}>
          {correct ? '200 OK — ' : '// '}{puzzle.explanation}
        </p>
      )}

      <button onClick={next} className="mono btn btn-ghost" style={{ fontSize: 12, padding: '8px 14px' }}>
        <Shuffle size={13} /> new challenge
      </button>
    </div>
  )
}
