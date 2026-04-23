import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievements, achievementCategories } from '../../data/achievementsData';
import SectionTitle from '../ui/SectionTitle';
import AchievementCard from '../ui/AchievementCard';
import Dropdown from '../ui/Dropdown';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredAchievements = activeCategory === 'All'
    ? achievements
    : achievements.filter(a => a.category === activeCategory);

  const INITIAL_DISPLAY = 6;
  const displayedAchievements = showAll 
    ? filteredAchievements 
    : filteredAchievements.slice(0, INITIAL_DISPLAY);

  const hasMoreItems = filteredAchievements.length > INITIAL_DISPLAY;

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <SectionTitle
          icon="🏆"
          title="Achievements"
          subtitle="Milestones, competitions, and recognitions that mark my journey in tech and innovation."
        />

        {/* Category Filter */}
        <FadeInWhenVisible direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {achievementCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="wait">
            {displayedAchievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index % 6}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <span className="text-6xl">🏅</span>
            <h3 className="text-2xl font-bold text-white mt-4 mb-2">No achievements yet</h3>
            <p className="text-gray-400">Achievements in this category coming soon!</p>
          </motion.div>
        )}

        {/* View More Dropdown */}
        {hasMoreItems && !showAll && (
          <FadeInWhenVisible direction="up" delay={0.3}>
            <div className="mt-12 max-w-md mx-auto">
              <Dropdown
                trigger={`View More Achievements (${filteredAchievements.length - INITIAL_DISPLAY} more)`}
                onToggle={(isOpen) => {
                  if (isOpen) setShowAll(true);
                  else setShowAll(false);
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAchievements.slice(INITIAL_DISPLAY).map((achievement, index) => (
                    <AchievementCard
                      key={achievement.id}
                      achievement={achievement}
                      index={index}
                    />
                  ))}
                </div>
              </Dropdown>
            </div>
          </FadeInWhenVisible>
        )}

        {/* Show Less Button */}
        {showAll && hasMoreItems && (
          <FadeInWhenVisible direction="up">
            <div className="text-center mt-8">
              <motion.button
                onClick={() => setShowAll(false)}
                className="text-accent hover:text-accent-light font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show Less
              </motion.button>
            </div>
          </FadeInWhenVisible>
        )}

        {/* Stats Overview */}
        <FadeInWhenVisible direction="up" delay={0.4}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '12+', label: 'Achievements', icon: '🏆' },
              { value: '5', label: 'Hackathons', icon: '💻' },
              { value: '2', label: 'Research Papers', icon: '📄' },
              { value: '3', label: 'Leadership Roles', icon: '👥' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-2xl">{stat.icon}</span>
                <div className="text-2xl font-bold gradient-text mt-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Achievements;