import SectionWrap from "../SectionWrap"
import SectionHeading from "../SectionHeading"
import { experience } from "../../data/experience"
import { education } from "../../data/experience"

export default function ResumeSection() {
    return (
      <SectionWrap id="resume">
        <SectionHeading label="// 04. resume" title="Experience & Education" />
  
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {/* Experience */}
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              color: '#00ff41',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '1.5rem',
            }}>
              $ work_experience
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {experience.map((exp, i) => (
                <div key={i} style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '1px solid rgba(0,255,65,0.2)' }}>
                  <div style={{
                    position: 'absolute',
                    left: '-4px',
                    top: '6px',
                    width: '7px',
                    height: '7px',
                    background: '#00ff41',
                    borderRadius: '50%',
                  }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.2rem', marginBottom: '0.3rem' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', margin: 0 }}>{exp.role}</h3>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#00ff41' }}>{exp.period}</span>
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', paddingLeft: '1rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#00ff41' }}>›</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
  
          {/* Education */}
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              color: '#00ff41',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '1.5rem',
            }}>
              $ education
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {education.map((edu, i) => (
                <div key={i} style={{ paddingLeft: '1.5rem', borderLeft: '1px solid rgba(0,255,65,0.2)', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '-4px',
                    top: '6px',
                    width: '7px',
                    height: '7px',
                    background: '#00ff41',
                    borderRadius: '50%',
                  }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.2rem' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', margin: 0 }}>{edu.degree}</h3>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#00ff41' }}>{edu.period}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(0,255,65,0.6)', margin: '0.3rem 0 0', fontFamily: "'JetBrains Mono', monospace" }}>
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
  
            {/* Download CV button */}
            <div style={{ marginTop: '2.5rem' }}>
              <a
                href="/Mukonazwothe_Mudau_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#000',
                  background: '#00ff41',
                  border: 'none',
                  padding: '0.75rem 1.8rem',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                }}
              >
                ↓ Open CV
              </a>
            </div>
          </div>
        </div>
      </SectionWrap>
    )
  }