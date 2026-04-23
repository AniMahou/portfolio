export const navLinks = [
    {
      id: 'home',
      label: 'Home',
      icon: '🏠',
    },
    {
      id: 'about',
      label: 'About',
      icon: '👤',
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: '💼',
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: '🚀',
    },
    {
      id: 'achievements',
      label: 'Achievements',
      icon: '🏆',
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: '⚡',
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: '📬',
    },
  ];
  
  export const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.05,
      },
    },
  };
  
  export const mobileItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };