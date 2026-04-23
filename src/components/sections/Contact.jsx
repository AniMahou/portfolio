import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
} from 'react-icons/fa';
import { SITE_CONFIG } from '../../utils/constants';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../common/Button';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import { staggerContainer, staggerItem } from '../../utils/animationVariants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus('sending');
    
    // Simulate sending (replace with actual EmailJS or API call)
    try {
      // For now, we'll simulate a successful send
      // TODO: Replace with actual @emailjs/browser implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone}`,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: `${SITE_CONFIG.location} (Remote Available)`,
      href: null,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialActions = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      description: 'Quick chat for inquiries',
      href: `https://wa.me/${SITE_CONFIG.phone.replace(/[^0-9]/g, '')}`,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      description: 'Professional networking',
      href: SITE_CONFIG.socials.linkedin,
      color: 'from-blue-500 to-blue-700',
    },
  ];

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <SectionTitle
          icon="📬"
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together to transform your ideas into reality."
        />

        {/* Contact CTA Banner */}
        <FadeInWhenVisible direction="up">
          <Card variant="gradient" padding="xl" className="mb-16 max-w-4xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 border-2 border-accent/30 mb-6"
              >
                <span className="text-4xl">💼</span>
              </motion.div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Let's Work Together
              </h3>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Ready to transform your ideas into reality? I create powerful AI solutions 
                and stunning web applications that drive real business results. Let's build 
                something amazing together! Available for freelance projects, consulting, 
                and long-term partnerships.
              </p>
            </div>
          </Card>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <FadeInWhenVisible direction="left" delay={0.2}>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaEnvelope className="text-accent" />
                Contact Information
              </h3>
            </FadeInWhenVisible>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div key={info.label} variants={staggerItem}>
                    <Card variant="glass" padding="md" className="group cursor-pointer">
                      {info.href ? (
                        <a
                          href={info.href}
                          className="flex items-center gap-4"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                            <Icon className="text-white" size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-400 mb-1">{info.label}</p>
                            <p className="text-white font-medium text-sm truncate group-hover:text-accent transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                            <Icon className="text-white" size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-400 mb-1">{info.label}</p>
                            <p className="text-white font-medium text-sm truncate">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Social Action Buttons */}
            <FadeInWhenVisible direction="left" delay={0.4}>
              <div className="space-y-3 mt-6">
                {socialActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <motion.a
                      key={action.label}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${action.color} hover:shadow-lg transition-all duration-300 group`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">{action.label}</p>
                        <p className="text-white/80 text-sm">{action.description}</p>
                      </div>
                      <span className="text-white/60 group-hover:translate-x-1 transition-transform">→</span>
                    </motion.a>
                  );
                })}
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <FadeInWhenVisible direction="right" delay={0.2}>
              <Card variant="glass" padding="xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        } text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        } text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.subject ? 'border-red-500' : 'border-white/10'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                    <div className="flex justify-between items-center mt-1">
                      <span className={`text-xs ${formData.message.length > 500 ? 'text-red-400' : 'text-gray-500'}`}>
                        {formData.message.length}/500
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={status === 'sending' ? FaSpinner : status === 'success' ? FaCheckCircle : FaPaperPlane}
                      className="w-full"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                    </Button>
                  </div>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-center"
                      >
                        <div className="flex items-center justify-center gap-2 text-green-400">
                          <FaCheckCircle />
                          <span>Message sent successfully! I'll get back to you soon.</span>
                        </div>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-center"
                      >
                        <p className="text-red-400">
                          Failed to send message. Please try again or email me directly.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </Card>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;