import SectionWrap from "../SectionWrap"
import SectionHeading from "../SectionHeading"

export default function ResumeSection() {
    const experience = [
      {
        role: 'Full Stack Developer',
        period: 'March 2026 – Present',
        points: [
          'Built a full-stack shuttles and tours management platform using React, Vite, Tailwind CSS, Express.js, PostgreSQL, JWTauthentication, and REST APIs.',
          'Developed role-based workflows for customers, admins, and drivers, including protected routes, cookie-based sessions, user registration/login, password reset, and admin-only access control.',
          'Implemented booking management for tour packages and shuttle transfers, including booking creation, editing, cancellation, pricing calculations, booking references, status tracking, and customer booking history.',
          'Built admin and driver operations features such as tour CRUD, shuttle assignment, vehicle management, booking updates, dashboard metrics, and driver trip start/completion workflows.'
        ],
      },
      {
        role: 'Java Developer',
        period: 'Mar 2026 – May 2026',
        points: [
          'Built a Java Swing desktop application that analyses aerial road images and converts road regions into a weighted graph.',
          'Implemented pothole-like damage detection using image features such as brightness, saturation, and local texture variation.',
          'Developed Dijkstra’s shortest-path routing to find safer routes between selected start and destination points.',
          'Added image similarity comparison and custom data structures, including graph, hash map, array list, and min heap implementations.'
        ],
      },
      {
        role: 'Full-Stack Mobile App Developer',
        period: 'Jan 2026 – Jan 2026',
        points: [
          'Built a full-stack cross-platform todo app using React Native, Expo Router, TypeScript, and Convex for real-time backend data storage',
          'Implemented complete task management features including create, edit, delete, complete, clear-all, and real-time progress tracking.',
          'Designed a custom mobile UI with light/dark mode, gradient-based theme system, reusable components, and responsive tab navigation.',
          'Integrated persistent user preferences with AsyncStorage and structured the app with reusable hooks, component based architecture, and typed backend models.'
        ],
      },
    ]
  
    const education = [
      {
        degree: 'BSc in Information Tech in ComScienc&Inf',
        institution: 'University of Johannesburg',
        period: '2023 – 2026',
      },
      {
        degree: 'Introduction to Cybersecurity',
        institution: 'Cisco Networking Academy',
        period: '2026',
      },
    ]
  
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
              <button
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#33ff6b')}
                onMouseLeave={e => (e.currentTarget.style.background = '#00ff41')}
              >
                ↓ Download CV
              </button>
            </div>
          </div>
        </div>
      </SectionWrap>
    )
  }