import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaTwitter, FaDiscord } from 'react-icons/fa';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  resume: FaFilePdf,
  twitter: FaTwitter,
  discord: FaDiscord,
};

const SocialLinks = ({ links, size = 'md', variant = 'default', className = '' }) => {
  const sizes = {
    sm: { button: 'p-2', icon: 16 },
    md: { button: 'p-3', icon: 20 },
    lg: { button: 'p-4', icon: 24 },
  };

  const variants = {
    default: 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-accent/50 hover:bg-accent/10',
    solid: 'bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-white',
    minimal: 'bg-transparent text-gray-400 hover:text-white',
  };

  if (!links || links.length === 0) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link, index) => {
        const Icon = iconMap[link.icon] || FaEnvelope;
        const isResume = link.icon === 'resume';

        return (
          <motion.a
            key={link.icon}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            download={isResume ? link.download || true : undefined}
            className={`rounded-full transition-all duration-300 group ${variants[variant]} ${sizes[size].button}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            title={link.label}
            aria-label={link.label}
          >
            <Icon size={sizes[size].icon} />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;