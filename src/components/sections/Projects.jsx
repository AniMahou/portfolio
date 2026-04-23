import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projects, projectCategories } from '../../data/projectsData';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import Button from '../common/Button';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <SectionTitle
          icon="🚀"
          title="Projects"
          subtitle="A collection of projects that showcase my skills in full-stack development, AI/ML, and system design."
        />

        {/* Category Filter */}
        <FadeInWhenVisible direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map((category) => (
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

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {displayedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <span className="text-6xl">📭</span>
            <h3 className="text-2xl font-bold text-white mt-4 mb-2">No projects found</h3>
            <p className="text-gray-400">No projects in this category yet. Check back soon!</p>
          </motion.div>
        )}

        {/* View All / View More Button */}
        {filteredProjects.length > 0 && (
          <FadeInWhenVisible direction="up" delay={0.3}>
            <div className="text-center mt-12">
              {filteredProjects.length > 6 && !showAll && (
                <Button
                  onClick={() => setShowAll(true)}
                  variant="outline"
                  size="lg"
                >
                  View All Projects ({filteredProjects.length})
                </Button>
              )}

              {showAll && filteredProjects.length > 6 && (
                <Button
                  onClick={() => setShowAll(false)}
                  variant="ghost"
                  size="lg"
                >
                  Show Less
                </Button>
              )}
            </div>
          </FadeInWhenVisible>
        )}

        {/* GitHub CTA */}
        <FadeInWhenVisible direction="up" delay={0.4}>
          <div className="text-center mt-16">
            <div className="glass-card inline-block p-8 max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <FaGithub size={40} className="mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">
                  More on GitHub
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Explore my open-source contributions, side projects, and experiments on GitHub.
                </p>
                <Button
                  href="https://github.com/tabibhassan"
                  variant="primary"
                  size="md"
                  icon={FaGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit My GitHub
                </Button>
              </motion.div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Projects;