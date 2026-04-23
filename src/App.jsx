import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from './utils/constants';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import ScrollToTop from './components/layout/ScrollToTop';
import ParticleBackground from './components/animations/ParticleBackground';
import CursorGlow from './components/animations/CursorGlow';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const activeSection = useActiveSection(SITE_CONFIG.sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowScrollTop(scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative bg-dark min-h-screen text-white overflow-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <CursorGlow />
      
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen">
          <Hero scrollToSection={scrollToSection} />
        </section>

        {/* About Section */}
        <section id="about" className="relative">
          <div className="section-divider" />
          <About />
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative">
          <div className="section-divider" />
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative">
          <div className="section-divider" />
          <Projects />
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="relative">
          <div className="section-divider" />
          <Achievements />
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative">
          <div className="section-divider" />
          <Skills />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <div className="section-divider" />
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && <ScrollToTop />}
      </AnimatePresence>
    </div>
  );
}

export default App;