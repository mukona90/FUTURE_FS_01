import SectionWrap from "../SectionWrap"
import SectionHeading from "../SectionHeading"

export default function SkillsSection() {
    const groups = [
      {
        category: 'Frontend',
        skills: [
          { name: 'React / React Native / Next.js', level: 88 },
          { name: 'TypeScript', level: 82 },
          { name: 'Tailwind CSS', level: 90 },
          { name: 'HTML / CSS / JavaScript', level: 95 },
        ],
      },
      {
        category: 'Backend',
        skills: [
          { name: 'Node.js / Express', level: 80 },
          { name: 'Python', level: 75 },
          { name: 'REST APIs', level: 85 },
          { name: 'PostgreSQL & MySQL', level: 88 },
          { name: 'Java', level: 90 },
          { name: 'C#', level: 85 },
        ],
      },
      {
        category: 'Tools & Other',
        skills: [
          { name: 'Git / GitHub', level: 90 },
          { name: 'Docker', level: 65 },
          { name: 'Postman', level: 78 },
          { name: 'Figma', level: 70 },
        ],
      },
    ]
  
    const badges = ['React', 'TypeScript', 'Node.js', 'Python', 'Next.js', 'PostgreSQL', 'MySQL', 'Docker', 'Git', 'Postman', 'REST APIs', 'Tailwind', 'Express', 'Django', 'Figma', 'Java', 'C#', 'React Native', 'JWT', 'Resend', 'Vite', 'Convex', 'bcrypt', 'axios']
  
    return (
      <SectionWrap id="skills">
        <SectionHeading label="// 02. skills" title="What I Work With" />
  
        {/* Skill bars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {groups.map(group => (
            <div key={group.category}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                color: '#00ff41',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '1.2rem',
              }}>
                {group.category}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {group.skills.map(skill => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)' }}>{skill.name}</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#00ff41' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                      <div style={{
                        height: '100%',
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, #00ff41, #33ff6b)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(0,255,65,0.5)',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
  
        {/* Badge cloud */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {badges.map(b => (
            <span
              key={b}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                color: '#00ff41',
                border: '1px solid rgba(0,255,65,0.3)',
                padding: '0.3rem 0.7rem',
                background: 'rgba(0,255,65,0.05)',
                letterSpacing: '0.05em',
                cursor: 'default',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLSpanElement).style.background = 'rgba(0,255,65,0.15)'
                ;(e.currentTarget as HTMLSpanElement).style.borderColor = '#00ff41'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLSpanElement).style.background = 'rgba(0,255,65,0.05)'
                ;(e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(0,255,65,0.3)'
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </SectionWrap>
    )
  }