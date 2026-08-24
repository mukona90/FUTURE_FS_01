import SectionWrap from "../SectionWrap"
import SectionHeading from "../SectionHeading"
import { useState } from "react"
import { socials } from "../../data/socials"

export default function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState('')
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setSending(true)
      setError('')

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        })

        const payload = await response.json().catch(() => null)
        if (!response.ok) {
          throw new Error(payload?.error || 'Failed to send message')
        }

        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 4000)
      } catch (err) {
        const messageText = err instanceof Error ? err.message : 'Could not send message. Please try again.'
        setError(messageText)
      } finally {
        setSending(false)
      }
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
                <a
                  key={s.label}
                  href={s.handle}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    padding: '0.45rem 0.35rem',
                    border: '1px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,255,65,0.25)'
                    ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,255,65,0.04)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent'
                    ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                  }}
                >
                  <span style={{ color: '#00ff41', fontSize: '0.5rem' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'rgba(0,255,65,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>{s.display ?? s.handle}</div>
                  </div>
                </a>
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
              disabled={sending}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#000',
                background: sent ? '#33ff6b' : '#00ff41',
                border: 'none',
                padding: '0.8rem',
                cursor: sending ? 'not-allowed' : 'pointer',
                opacity: sending ? 0.75 : 1,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'all 0.2s',
              }}
            >
              {sending ? 'Sending...' : sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
            {error ? (
              <p style={{ margin: 0, color: '#ff6b6b', fontSize: '0.8rem' }}>
                {error}
              </p>
            ) : null}
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
            © 2026 Mukonazwothe Mudau — Building things that work. Breaking things to learn why.
          </p>
        </div>
      </SectionWrap>
    )
  }