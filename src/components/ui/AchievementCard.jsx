import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Tag from '../common/Tag';

const categoryColors = {
  'Hackathon': 'accent',
  'Competition': 'blue',
  'Academic': 'green',
  'Open Source': 'purple',
  'Research': 'yellow',
  'Leadership': 'pink',
};

const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="glass-card p-5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full">
        {/* Position Badge */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <span className="text-lg sm:text-xl font-bold text-white group-hover:text-accent transition-colors">
              {achievement.position}
            </span>
          </div>
          <Tag color={categoryColors[achievement.category] || 'gray'} size="xs">
            {achievement.category}
          </Tag>
        </div>

        {/* Competition Name */}
        <h3 className="text-white font-semibold text-base mb-2">
          {achievement.competition}
        </h3>

        {/* Organization */}
        {achievement.organization && (
          <p className="text-gray-500 text-sm mb-2">
            {achievement.organization}
          </p>
        )}

        {/* Description */}
        {achievement.description && (
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {achievement.description}
          </p>
        )}

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mt-auto">
          {achievement.location && (
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt size={12} />
              {achievement.location}
            </span>
          )}
          {achievement.date && (
            <span className="flex items-center gap-1">
              <FaCalendarAlt size={12} />
              {achievement.date}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;