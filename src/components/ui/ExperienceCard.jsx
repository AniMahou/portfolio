import React from 'react';
import { motion } from 'framer-motion';
import Tag from '../common/Tag';
import { fadeInLeft } from '../../utils/animationVariants';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      className="relative pl-10 pb-16 last:pb-0"
      variants={fadeInLeft}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent" />
      
      {/* Timeline dot */}
      <motion.div
        className="absolute left-[-8px] top-1 w-[17px] h-[17px] rounded-full border-2 border-accent bg-dark"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
      >
        <div className="absolute inset-1 rounded-full bg-accent" />
      </motion.div>

      {/* Content card */}
      <motion.div
        className="glass-card p-6 hover:border-accent/30 transition-all duration-300"
        whileHover={{ x: 5 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{experience.icon}</span>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {experience.company}
              </h3>
              <p className="text-accent font-medium text-sm">
                {experience.designation}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Tag color="accent" size="xs">
              {experience.type}
            </Tag>
            <span className="text-gray-500 text-sm whitespace-nowrap">
              {experience.date}
            </span>
          </div>
        </div>

        {/* Location */}
        {experience.location && (
          <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
            <span>📍</span>
            {experience.location}
          </p>
        )}

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed mb-4">
          {experience.details}
        </p>

        {/* Tags */}
        {experience.tags && experience.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <Tag key={tag} color="gray" size="xs">
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;