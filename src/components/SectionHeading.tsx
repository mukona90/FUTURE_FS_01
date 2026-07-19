export default function SectionHeading({ label, title }: { label: string; title: string }) {
    return (
      <div style={{ marginBottom: '3rem' }}>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.75rem',
          color: '#00ff41',
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          marginBottom: '0.5rem',
        }}>
          {label}
        </p>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          margin: 0,
        }}>
          {title}
        </h2>
        <div style={{
          width: '48px',
          height: '2px',
          background: '#00ff41',
          marginTop: '1rem',
        }} />
      </div>
    )
};