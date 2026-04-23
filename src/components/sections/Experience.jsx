import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/experienceData';
import SectionTitle from '../ui/SectionTitle';
import ExperienceCard from '../ui/ExperienceCard';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import Card from '../ui/Card';
import Button from '../common/Button';
import { FaFilePdf } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <SectionTitle
          icon="💼"
          title="Experience"
          subtitle="My professional journey, internships, and leadership roles that shaped my career."
        />

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Resume Download Card */}
        <FadeInWhenVisible direction="up" delay={0.3}>
          <Card variant="gradient" padding="lg" className="mt-12 text-center">
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                <FaFilePdf size={28} className="text-accent" />
              </div>
              
              <h3 className="text-xl font-bold text-white">
                Want the full story?
              </h3>
              
              <p className="text-gray-400 max-w-md">
                Download my complete resume for detailed work history, projects, and achievements.
              </p>
              
              <Button
                href="/resume.pdf"
                variant="primary"
                size="lg"
                icon={FaFilePdf}
                iconPosition="left"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Button>
            </motion.div>
          </Card>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Experience;