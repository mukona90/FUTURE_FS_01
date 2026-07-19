import { useRef, useEffect } from 'react'

export default function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
  
    useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return
  
      const NAME = 'MUKONAZWOTHE MUDAU'
      const CHARS = NAME
      const FONT_SIZE = 14
      let cols = 0
      let drops: number[] = []
  
      const resize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        cols = Math.floor(canvas.width / FONT_SIZE)
        drops = Array(cols).fill(1)
      }
  
      resize()
      window.addEventListener('resize', resize)
  
      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
  
        ctx.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`
  
        for (let i = 0; i < drops.length; i++) {
          const char = CHARS[Math.floor(Math.random() * CHARS.length)]
          const x = i * FONT_SIZE
          const y = drops[i] * FONT_SIZE
  
          // Vary brightness for depth
          const brightness = Math.random()
          if (brightness > 0.97) {
            ctx.fillStyle = '#ffffff'
          } else if (brightness > 0.85) {
            ctx.fillStyle = '#00ff41'
          } else {
            ctx.fillStyle = '#004d14'
          }
  
          ctx.fillText(char, x, y)
  
          if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
        }
      }
  
      const interval = setInterval(draw, 40)
      return () => {
        clearInterval(interval)
        window.removeEventListener('resize', resize)
      }
    }, [])
  
    return (
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    )
};