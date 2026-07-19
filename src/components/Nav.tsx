import { useState } from 'react'
import type { Section } from '../types'

export default function Nav({ active, onNav }: { active: Section; onNav: (s: Section) => void }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const links: Section[] = ['home', 'about', 'skills', 'projects', 'resume', 'contact']
  
    return (
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,255,65,0.15)',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60px',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => onNav('home')}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1rem',
            fontWeight: 700,
            color: '#00ff41',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.05em',
          }}
        >
          &lt;MM /&gt;
        </button>
  
        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem' }} className="hidden sm:flex">
          {links.map(link => (
            <button
              key={link}
              onClick={() => onNav(link)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
                fontWeight: active === link ? 600 : 400,
                color: active === link ? '#00ff41' : 'rgba(255,255,255,0.5)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                transition: 'color 0.2s',
                padding: '4px 0',
                borderBottom: active === link ? '1px solid #00ff41' : '1px solid transparent',
              }}
            >
              {link}
            </button>
          ))}
        </div>
  
        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#00ff41',
            fontSize: '1.4rem',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
  
        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              background: 'rgba(0,0,0,0.96)',
              borderBottom: '1px solid rgba(0,255,65,0.2)',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              zIndex: 99,
            }}
          >
            {links.map(link => (
              <button
                key={link}
                onClick={() => { onNav(link); setMenuOpen(false) }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.9rem',
                  color: active === link ? '#00ff41' : 'rgba(255,255,255,0.6)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  textAlign: 'left',
                }}
              >
                {active === link ? '▶ ' : '  '}{link}
              </button>
            ))}
          </div>
        )}
      </nav>
    )
  }