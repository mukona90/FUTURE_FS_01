import SectionWrap from "../SectionWrap"
import SectionHeading from "../SectionHeading"
import { projects } from "../../data/projects"

export default function ProjectsSection() {
    const statusColor: Record<string, string> = {
      Live: '#00ff41',
      'Open Source': '#00aaff',
      'In Dev': '#ffaa00',
    }
  
    return (
      <SectionWrap id="projects">
        <SectionHeading label="// 03. projects" title="Things I've Built" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.2rem' }}>
          {projects.map(p => (
            <div
              key={p.id}
              style={{
                background: 'rgba(0,0,0,0.7)',
                border: p.featured ? '1px solid rgba(0,255,65,0.4)' : '1px solid rgba(255,255,255,0.08)',
                padding: '1.5rem',
                position: 'relative',
                transition: 'all 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,255,65,0.6)'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 30px rgba(0,255,65,0.08)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = p.featured ? 'rgba(0,255,65,0.4)' : 'rgba(255,255,255,0.08)'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  color: 'rgba(0,255,65,0.5)',
                }}>
                  {p.id}
                </span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  color: statusColor[p.status],
                  border: `1px solid ${statusColor[p.status]}`,
                  padding: '2px 6px',
                  opacity: 0.8,
                }}>
                  {p.status}
                </span>
              </div>
  
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#ffffff',
                margin: '0 0 0.7rem',
              }}>
                {p.name}
              </h3>
  
              <p style={{
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.65,
                margin: '0 0 1.2rem',
              }}>
                {p.desc}
              </p>
  
              {/* Tech stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    color: 'rgba(0,255,65,0.7)',
                    background: 'rgba(0,255,65,0.06)',
                    padding: '2px 6px',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrap>
    )
  }