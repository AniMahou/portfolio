import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';
import Tag from '../common/Tag';
import Button from '../common/Button';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const tagColors = {
    'React': 'blue',
    'Next.js': 'blue',
    'Python': 'yellow',
    'Node.js': 'green',
    'Go': 'blue',
    'TypeScript': 'blue',
    'JavaScript': 'yellow',
    'Docker': 'blue',
    'Kubernetes': 'purple',
    'MongoDB': 'green',
    'PostgreSQL': 'blue',
    'Redis': 'red',
    'Kafka': 'purple',
    'AWS': 'yellow',
    'GCP': 'red',
    'Tailwind CSS': 'green',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      layout
      className="group"
    >
      <motion.div
        className="relative h-full glass-card overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
        whileHover={{ y: -8 }}
        layout
      >
        {/* Image/Icon Area */}
        <div className="relative h-48 bg-gradient-to-br from-accent/10 to-dark-card flex items-center justify-center overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(108, 99, 255, 0.3) 1px, transparent 0)',
              backgroundSize: '20px 20px',
            }} />
          </div>

          {/* Project icon */}
          <motion.span
            className="text-7xl relative z-10"
            whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            {project.image}
          </motion.span>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <Tag color="accent" size="xs">
                ⭐ Featured
              </Tag>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <Tag color="purple" size="xs">
              {project.category}
            </Tag>
          </div>

          {/* Hover overlay with stats */}
          <motion.div
            className="absolute inset-0 bg-dark/80 backdrop-blur-sm flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {project.stats && (
              <>
                <div className="text-center">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar size={16} />
                    <span className="font-bold">{project.stats.stars}</span>
                  </div>
                  <span className="text-xs text-gray-400">Stars</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 text-green-400">
                    <FaCodeBranch size={16} />
                    <span className="font-bold">{project.stats.commits}</span>
                  </div>
                  <span className="text-xs text-gray-400">Commits</span>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {isExpanded ? project.longDescription : project.description}
          </p>

          {/* Read More / Less */}
          {project.longDescription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-accent text-sm font-medium mb-4 hover:text-accent-light transition-colors"
            >
              {isExpanded ? 'Show less' : 'Read more...'}
            </button>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.techStack.map((tech) => (
              <Tag
                key={tech}
                color={tagColors[tech] || 'gray'}
                size="xs"
              >
                {tech}
              </Tag>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <Button
              href={project.githubLink}
              variant="secondary"
              size="sm"
              icon={FaGithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </Button>

            {project.deploymentLink && (
              <Button
                href={project.deploymentLink}
                variant="outline"
                size="sm"
                icon={FaExternalLinkAlt}
                iconPosition="right"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            )}

            {!project.deploymentLink && (
              <span className="text-gray-600 text-sm italic">
                Local deployment only
              </span>
            )}
          </div>
        </div>

        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gradient-border" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;