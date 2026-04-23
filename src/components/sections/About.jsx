import React from 'react';
import { motion } from 'framer-motion';
import { aboutCards } from '../../data/aboutData';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import { staggerContainer, staggerItem } from '../../utils/animationVariants';

const About = () => {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <SectionTitle
          icon="👤"
          title="About Me"
          subtitle="Learn more about my journey, mission, and what drives me to build exceptional digital experiences."
        />

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {aboutCards.map((card) => (
            <motion.div key={card.id} variants={staggerItem}>
              <Card variant="gradient" padding="lg">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {card.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    {/* Stats if available */}
                    {card.stats && (
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold gradient-text">
                          {card.stats.value}
                        </span>
                        <span className="text-sm text-gray-400">
                          {card.stats.label}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed">
                  {card.description}
                </p>

                {/* Gradient bar */}
                <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${card.color} opacity-50`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Info Section */}
        <FadeInWhenVisible direction="up">
          <Card variant="glass" padding="xl" className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span>📋</span>
                  <span className="gradient-text">Quick Info</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🎓</span>
                    <div>
                      <p className="text-sm text-gray-400">Education</p>
                      <p className="text-white font-medium">Junior Year, IUT</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white font-medium">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💡</span>
                    <div>
                      <p className="text-sm text-gray-400">Status</p>
                      <p className="text-green-400 font-medium">Open to opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span>🎯</span>
                  <span className="gradient-text">Interests</span>
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {['AI/ML', 'Web Dev', 'Open Source', 'DevOps', 'Cloud', 'System Design'].map((interest) => (
                    <motion.span
                      key={interest}
                      className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(108, 99, 255, 0.2)' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>

                {/* Languages */}
                <h3 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                  <span>🗣️</span>
                  <span className="gradient-text">Languages</span>
                </h3>
                <div className="space-y-2">
                  {['English (Fluent)', 'Bangla (Native)', 'Hindi (Conversational)'].map((lang) => (
                    <div key={lang} className="flex items-center gap-2 text-gray-400">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default About;