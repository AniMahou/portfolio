import React, { useCallback, useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  const generateParticles = useCallback(() => {
    const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.3 + 0.1,
        color: Math.random() > 0.7 ? 'rgba(108, 99, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
      });
    }

    setParticles(newParticles);
  }, []);

  useEffect(() => {
    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateParticles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            boxShadow: particle.color.includes('108') 
              ? `0 0 ${particle.size * 3}px ${particle.color}`
              : 'none',
          }}
        />
      ))}
      
      {/* Gradient orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(108, 99, 255, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDuration: '15s',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(139, 133, 255, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDuration: '18s',
          animationDelay: '5s',
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-5 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animationDuration: '12s',
          animationDelay: '2s',
        }}
      />
    </div>
  );
};

export default ParticleBackground;