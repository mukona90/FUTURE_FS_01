import { useState, useEffect } from 'react'
import type { Section } from '../../types'
import SectionWrap from '../SectionWrap'

const TITLES = ['Full Stack Developer', 'Problem Solver', 'Software Engineer', 'Cyber Security and Networking']

export default function HomeSection({ onNav }: { onNav: (s: Section) => void }) {
    const [typed, setTyped] = useState('')
    const [titleIdx, setTitleIdx] = useState(0)
    const [charIdx, setCharIdx] = useState(0)
    const [deleting, setDeleting] = useState(false)
  
    useEffect(() => {
      const current = TITLES[titleIdx]
      const speed = deleting ? 50 : 80
  
      const timeout = setTimeout(() => {
        if (!deleting) {
          setTyped(current.slice(0, charIdx + 1))
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1800)
          } else {
            setCharIdx(c => c + 1)
          }
        } else {
          setTyped(current.slice(0, charIdx - 1))
          if (charIdx - 1 === 0) {
            setDeleting(false)
            setTitleIdx(i => (i + 1) % TITLES.length)
            setCharIdx(0)
          } else {
            setCharIdx(c => c - 1)
          }
        }
      }, speed)
  
      return () => clearTimeout(timeout)
    }, [charIdx, deleting, titleIdx])
  
    return (
      <SectionWrap id="home">
        <div style={{ textAlign: 'center' }}>
          {/* Glitch name */}
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              color: '#00ff41',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              Hello, World. I'm
            </p>
            <h1 style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: 0,
              lineHeight: 1.1,
              textShadow: '0 0 40px rgba(0,255,65,0.3)',
            }}>
              Mukonazwothe
              <br />
              <span style={{ color: '#00ff41' }}>Mudau</span>
            </h1>
          </div>
  
          {/* Typewriter */}
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: 'rgba(255,255,255,0.6)',
            minHeight: '2rem',
            marginBottom: '2.5rem',
          }}>
            &lt; {typed}<span style={{ color: '#00ff41', animation: 'blink 1s step-end infinite' }}>|</span> /&gt;
          </div>
  
          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNav('projects')}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#000',
                background: '#00ff41',
                border: 'none',
                padding: '0.75rem 2rem',
                cursor: 'pointer',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'all 0.2s',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#33ff6b')}
              onMouseLeave={e => (e.currentTarget.style.background = '#00ff41')}
            >
              View Projects
            </button>
            <button
              onClick={() => onNav('contact')}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#00ff41',
                background: 'transparent',
                border: '1px solid #00ff41',
                padding: '0.75rem 2rem',
                cursor: 'pointer',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'all 0.2s',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(0,255,65,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Contact Me
            </button>
          </div>
  
          {/* Scroll cue */}
          <div style={{
            marginTop: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            opacity: 0.4,
          }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>scroll</p>
            <div style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, #00ff41, transparent)',
            }} />
          </div>
        </div>
  
        <style>{`
          @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        `}</style>
      </SectionWrap>
    )
};