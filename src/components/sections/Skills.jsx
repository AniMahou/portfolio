import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skillsData';
import SectionTitle from '../ui/SectionTitle';
import SkillBar from '../ui/SkillBar';
import Card from '../ui/Card';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const colorMap = {
    1: 'blue',
    2: 'green',
    3: 'purple',
    4: 'orange',
    5: 'yellow',
    6: 'pink',
  };

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <SectionTitle
          icon="⚡"
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to bring ideas to life and build exceptional digital products."
        />

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveSkill(skill.id)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <Card
                variant={activeSkill === skill.id ? 'gradient' : 'default'}
                padding="lg"
                className={`h-full transition-all duration-300 ${
                  activeSkill === skill.id ? 'scale-[1.02]' : ''
                }`}
              >
                {/* Segment Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {skill.segment}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {skill.tools.length} tools
                    </p>
                  </div>
                </div>

                {/* Skill Bars */}
                <div>
                  {skill.tools.map((tool, toolIndex) => (
                    <SkillBar
                      key={tool.name}
                      name={tool.name}
                      proficiency={tool.proficiency}
                      index={toolIndex}
                      color={colorMap[skill.id] || 'accent'}
                    />
                  ))}
                </div>

                {/* Average Proficiency Indicator */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Overall</span>
                    <span className="font-bold gradient-text">
                      {Math.round(
                        skill.tools.reduce((acc, tool) => acc + tool.proficiency, 0) /
                          skill.tools.length
                      )}
                      %
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <FadeInWhenVisible direction="up" delay={0.4}>
          <div className="mt-16">
            <Card variant="glass" padding="xl" className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">
                <span className="gradient-text">Currently Learning</span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Rust', icon: '🦀' },
                  { name: 'WebAssembly', icon: '⚡' },
                  { name: 'System Design', icon: '🏗️' },
                  { name: 'Blockchain', icon: '⛓️' },
                ].map((item) => (
                  <motion.div
                    key={item.name}
                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-3xl block mb-2">{item.icon}</span>
                    <span className="text-sm text-gray-400">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </FadeInWhenVisible>

        {/* Technology Stack Summary */}
        <FadeInWhenVisible direction="up" delay={0.5}>
          <div className="mt-12 max-w-4xl mx-auto">
            <Card variant="gradient" padding="xl">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  💡 Technology Philosophy
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  I believe in choosing the right tool for the job. While I have deep expertise 
                  in the MERN stack and Python ecosystem, I'm always eager to learn new technologies 
                  that solve problems more effectively. Clean code, scalable architecture, and 
                  user-centric design are my north stars.
                </p>
              </div>
            </Card>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Skills;