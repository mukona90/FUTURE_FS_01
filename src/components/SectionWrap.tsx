export default function SectionWrap({ id, children }: { id: string; children: React.ReactNode }) {
    return (
      <section
        id={id}
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 2rem 4rem',
        }}
      >
        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
          {children}
        </div>
      </section>
    )
  };