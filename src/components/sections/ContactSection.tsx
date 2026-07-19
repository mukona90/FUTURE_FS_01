import SectionWrap from "../SectionWrap"
import SectionHeading from "../SectionHeading"
import { useState } from "react"

export default function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setSent(true)
      setTimeout(() => setSent(false), 4000)
      setForm({ name: '', email: '', message: '' })
    }
  
    const inputStyle: React.CSSProperties = {
      width: '100%',
      background: 'rgba(0,0,0,0.6)',
      border: '1px solid rgba(0,255,65,0.2)',
      color: '#fff',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.85rem',
      padding: '0.75rem 1rem',
      outline: 'none',
      transition: 'border-color 0.2s',
      boxSizing: 'border-box',
    }
  
    const socials = [
      { label: 'GitHub', handle: 'https://github.com/mukona90', icon: '◆' },
      { label: 'LinkedIn', handle: 'https://www.linkedin.com/in/mukonazwothe-mudau-04085516b', icon: '◆' },
    ]
  
    return (
      <SectionWrap id="contact">
        <SectionHeading label="// 05. contact" title="Get In Touch" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          {/* Left */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.92rem' }}>
              I'm always open to new opportunities, collaborations, and interesting conversations. Whether you have a project in mind or just want to say hello — my inbox is always open.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {socials.map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: '#00ff41', fontSize: '0.5rem' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'rgba(0,255,65,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>{s.handle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              required
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(0,255,65,0.6)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,255,65,0.2)')}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              required
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(0,255,65,0.6)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,255,65,0.2)')}
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              required
              rows={5}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(0,255,65,0.6)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,255,65,0.2)')}
            />
            <button
              type="submit"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#000',
                background: sent ? '#33ff6b' : '#00ff41',
                border: 'none',
                padding: '0.8rem',
                cursor: 'pointer',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'all 0.2s',
              }}
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
  
        {/* Footer */}
        <div style={{
          marginTop: '5rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(0,255,65,0.1)',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.1em',
          }}>
            © 2026 Mukonazwothe Mudau — Built with React &amp; passion
          </p>
        </div>
      </SectionWrap>
    )
  }