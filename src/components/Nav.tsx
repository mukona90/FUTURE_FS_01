import { useEffect, useState } from 'react'
import type { Section } from '../types'

export default function Nav({ active, onNav }: { active: Section; onNav: (s: Section) => void }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640)
    const links: Section[] = ['home', 'about', 'skills', 'projects', 'resume', 'contact']

    useEffect(() => {
      if (!menuOpen) return
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }, [menuOpen])

    useEffect(() => {
      const mediaQuery = window.matchMedia('(min-width: 640px)')
      const syncViewport = () => {
        const mobile = !mediaQuery.matches
        setIsMobile(mobile)
        if (!mobile) setMenuOpen(false)
      }
      syncViewport()
      mediaQuery.addEventListener('change', syncViewport)
      return () => mediaQuery.removeEventListener('change', syncViewport)
    }, [])
  
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
          padding: '0 1rem',
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
        {!isMobile && (
        <div style={{ display: 'flex', gap: '2rem' }}>
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
        )}
  
        {/* Mobile hamburger */}
        {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          style={{
            background: 'none',
            border: '1px solid rgba(0,255,65,0.35)',
            cursor: 'pointer',
            color: '#00ff41',
            fontSize: '1.2rem',
            fontFamily: "'JetBrains Mono', monospace",
            width: '38px',
            height: '38px',
            display: 'grid',
            placeItems: 'center',
            backgroundColor: 'rgba(0,255,65,0.05)',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        )}
  
        {/* Mobile side drawer */}
        {isMobile && menuOpen && (
          <div>
            <button
              aria-label="Close menu overlay"
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                top: '60px',
                background: 'rgba(0,0,0,0.6)',
                border: 'none',
                zIndex: 98,
              }}
            />
            <aside
              style={{
                position: 'fixed',
                top: '60px',
                right: 0,
                width: 'min(78vw, 320px)',
                height: 'calc(100vh - 60px)',
                background: 'rgba(0,0,0,0.97)',
                borderLeft: '1px solid rgba(0,255,65,0.25)',
                padding: '1.5rem 1.2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                zIndex: 99,
                boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
              }}
            >
              {links.map(link => (
                <button
                  key={link}
                  onClick={() => { onNav(link); setMenuOpen(false) }}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.9rem',
                    color: active === link ? '#00ff41' : 'rgba(255,255,255,0.65)',
                    background: 'rgba(255,255,255,0.03)',
                    border: active === link ? '1px solid rgba(0,255,65,0.45)' : '1px solid rgba(255,255,255,0.08)',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    textAlign: 'left',
                    padding: '0.75rem 0.8rem',
                  }}
                >
                  {active === link ? '▶ ' : ''}{link}
                </button>
              ))}
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.76rem',
                  color: 'rgba(255,255,255,0.5)',
                  background: 'none',
                  border: '1px dashed rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  textAlign: 'center',
                  marginTop: '0.2rem',
                  padding: '0.5rem',
                }}
              >
                Close Menu
              </button>
            </aside>
          </div>
        )}
      </nav>
    )
  }