import SectionWrap from "../SectionWrap"
import SectionHeading from "../SectionHeading"

export default function AboutSection() {
    const stats = [
      { label: 'Years Coding', value: '3+' },
      { label: 'Projects Built', value: '10+' },
      { label: 'Technologies', value: '15+' },
      { label: 'Coffee / day', value: '∞' },
    ]
  
    return (
      <SectionWrap id="about">
        <SectionHeading label="// 01. about_me" title="Who I Am" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              I'm <strong style={{ color: '#00ff41' }}>Mukonazwothe Mudau</strong> — a passionate software developer who loves turning complex problems into elegant, efficient solutions.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              I thrive at the intersection of clean code and beautiful UI, crafting full-stack applications that are both powerful under the hood and a joy to use. When I'm not coding, I'm exploring algorithms, contributing to open source, or deep in a side project.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              I believe great software is built with intention — every line of code should serve a purpose, every interface should tell a story.
            </p>
  
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                ['Location', 'South Africa 🇿🇦'],
                ['Email', 'mukonazwothemudau90@gmail.com'],
                ['Available', 'Open to opportunities'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: '1rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem' }}>
                  <span style={{ color: '#00ff41', minWidth: '90px' }}>{k}:</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {stats.map(s => (
              <div
                key={s.label}
                style={{
                  background: 'rgba(0,255,65,0.04)',
                  border: '1px solid rgba(0,255,65,0.15)',
                  padding: '1.5rem',
                  textAlign: 'center',
                  transition: 'border-color 0.2s, background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,255,65,0.5)'
                  ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(0,255,65,0.08)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,255,65,0.15)'
                  ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(0,255,65,0.04)'
                }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00ff41', fontFamily: "'JetBrains Mono', monospace" }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.4rem' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrap>
    )
  }