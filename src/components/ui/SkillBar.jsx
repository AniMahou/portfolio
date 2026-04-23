import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, proficiency, index, color = 'accent' }) => {
  const colorMap = {
    accent: 'from-accent to-purple-400',
    blue: 'from-blue-500 to-cyan-400',
    green: 'from-green-500 to-emerald-400',
    purple: 'from-purple-500 to-pink-400',
    orange: 'from-orange-500 to-red-400',
    yellow: 'from-yellow-500 to-orange-400',
    pink: 'from-pink-500 to-rose-400',
  };

  const barColor = colorMap[color] || colorMap.accent;

  return (
    <motion.div
      className="mb-4 last:mb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Label and Percentage */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <motion.span 
          className="text-sm font-bold text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.8, duration: 0.3 }}
        >
          {proficiency}%
        </motion.span>
      </div>

      {/* Progress Bar Container */}
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
        {/* Background glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${barColor} opacity-20 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
        />

        {/* Main Progress Bar */}
        <motion.div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${barColor} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ 
            delay: index * 0.1 + 0.3,
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 2,
            }}
          />
        </motion.div>
      </div>

      {/* Proficiency Level Label */}
      <motion.p
        className="text-xs text-gray-500 mt-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.5 }}
      >
        {proficiency >= 90 ? 'Expert' : proficiency >= 75 ? 'Advanced' : proficiency >= 60 ? 'Intermediate' : 'Learning'}
      </motion.p>
    </motion.div>
  );
};

export default SkillBar;