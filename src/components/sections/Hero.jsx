import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaArrowDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { SITE_CONFIG } from '../../utils/constants';
import FloatingElements from '../animations/FloatingElements';
import TextReveal from '../animations/TextReveal';
import Button from '../common/Button';
import Tag from '../common/Tag';

const Hero = ({ scrollToSection }) => {
  const socialLinks = [
    { icon: 'github', url: SITE_CONFIG.socials.github, label: 'GitHub' },
    { icon: 'linkedin', url: SITE_CONFIG.socials.linkedin, label: 'LinkedIn' },
    { icon: 'email', url: SITE_CONFIG.socials.email, label: 'Email' },
    { icon: 'resume', url: '/resume.pdf', label: 'Resume', download: true },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating decorative elements */}
      <FloatingElements count={8} className="opacity-50" />

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4"
            >
              <Tag color="accent" size="md">
                👋 Hello, I'm
              </Tag>
            </motion.div>

            {/* Name */}
            <TextReveal
              as="h1"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
              delay={0.3}
              staggerChildren={0.05}
            >
              {SITE_CONFIG.name}
            </TextReveal>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'AI/ML Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                  'Open Source Contributor',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text font-semibold"
              />
            </motion.div>

            {/* Location and Education */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-gray-400 mb-8"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <span>{SITE_CONFIG.location}</span>
              </div>
              <span className="hidden sm:inline text-gray-600">•</span>
              <div className="flex items-center gap-2">
                <span className="text-lg">🎓</span>
                <span>{SITE_CONFIG.year}, {SITE_CONFIG.university}</span>
              </div>
            </motion.div>

            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5, type: 'spring' }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/30 animate-border-glow">
                <span className="text-2xl">🏆</span>
                <span className="text-accent font-semibold text-lg">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-10"
            >
              {socialLinks.map((link, index) => {
                const icons = {
                  github: FaGithub,
                  linkedin: FaLinkedin,
                  email: FaEnvelope,
                  resume: FaFilePdf,
                };
                const Icon = icons[link.icon];

                return (
                  <motion.a
                    key={link.icon}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={link.download}
                    className="relative p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    title={link.label}
                  >
                    <Icon size={22} />
                    <motion.div
                      className="absolute inset-0 rounded-full border border-accent/0"
                      animate={{
                        borderColor: ['rgba(108, 99, 255, 0)', 'rgba(108, 99, 255, 0.3)', 'rgba(108, 99, 255, 0)'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Button
                onClick={() => scrollToSection('contact')}
                variant="primary"
                size="lg"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                size="lg"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>

          
          {/* Right - Profile Image */}
            <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
                delay: 0.5,
                duration: 1,
                type: 'spring',
                stiffness: 100,
            }}
            >
            <div className="relative">
                {/* Glow effects */}
                <motion.div
                className="absolute -inset-4 rounded-full"
                animate={{
                    boxShadow: [
                    '0 0 40px rgba(108, 99, 255, 0.2)',
                    '0 0 80px rgba(108, 99, 255, 0.4)',
                    '0 0 40px rgba(108, 99, 255, 0.2)',
                    ],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                />
                
                {/* Main image container */}
                <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-accent/30"
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                >
                {/* Actual Image */}
                <img
                    src="/images/profile.jpg"
                    alt="Tabib Hassan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-accent/20', 'via-dark-card', 'to-accent/10', 'flex', 'items-center', 'justify-center');
                    const fallback = document.createElement('div');
                    fallback.className = 'text-center';
                    fallback.innerHTML = `
                        <span class="text-7xl sm:text-8xl lg:text-9xl font-bold gradient-text">TH</span>
                        <p class="text-gray-500 text-sm mt-2">Add your photo at /public/images/profile.jpg</p>
                    `;
                    e.target.parentElement.appendChild(fallback);
                    }}
                />
                </motion.div>

                {/* Decorative ring */}
                <motion.div
                className="absolute -inset-6 rounded-full border border-accent/10"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                />
                <motion.div
                className="absolute -inset-10 rounded-full border border-accent/5"
                animate={{ rotate: -360 }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                />
            </div>
            </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-accent transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-sm">Scroll to explore</span>
          <FaArrowDown size={16} />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;