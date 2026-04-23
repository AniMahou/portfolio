import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaHeart,
  FaArrowUp,
  FaCode,
} from 'react-icons/fa';
import { SITE_CONFIG } from '../../utils/constants';
import { navLinks } from '../../data/navLinks';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: SITE_CONFIG.socials.github, label: 'GitHub' },
    { icon: FaLinkedin, href: SITE_CONFIG.socials.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: SITE_CONFIG.socials.email, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-dark/50 backdrop-blur-lg">
      {/* Gradient line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Column */}
          <div>
            <motion.button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold gradient-text mb-4 hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {SITE_CONFIG.name.split(' ').map(word => word[0]).join('')}
            </motion.button>
            
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Full Stack Developer & AI Enthusiast. Building innovative solutions 
              that bridge technology and real-world problems.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-accent hover:border-accent/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    title={link.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/0 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                <span className="text-gray-500">📍</span> {SITE_CONFIG.location}
              </p>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-gray-400 hover:text-accent transition-colors block"
              >
                <span className="text-gray-500">✉️</span> {SITE_CONFIG.email}
              </a>
              <p className="text-gray-400">
                <span className="text-gray-500">💡</span> Open to opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <span>© {currentYear}</span>
              <span className="text-white font-medium">{SITE_CONFIG.name}</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">All rights reserved</span>
            </p>

            {/* Made with love */}
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" size={14} />
              </motion.span>
              <span>and</span>
              <FaCode className="text-accent" size={14} />
              <span>by Tabib</span>
            </p>

            {/* Back to top */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span>Back to top</span>
              <FaArrowUp size={12} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;