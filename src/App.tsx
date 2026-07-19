import { useCallback, useEffect, useState } from "react";
import type { Section } from "./types";
import MatrixRain from "./components/MatrixRain";
import Nav from "./components/Nav";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ResumeSection from "./components/sections/ResumeSection";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home')

  const scrollTo = useCallback((section: Section) => {
    setActiveSection(section)
    const el = document.getElementById(section)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  // Update active section on scroll
  useEffect(() => {
    const sections: Section[] = ['home', 'about', 'skills', 'projects', 'resume', 'contact']
    const observers: IntersectionObserver[] = []

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <div style={{ background: '#000', minHeight: '100vh', position: 'relative' }}>
      <MatrixRain />
      <Nav active={activeSection} onNav={scrollTo} />

      {/* Overlay to darken matrix for readability */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.55)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <HomeSection onNav={scrollTo} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </div>
  )
}