export const fadeInUp = {
    initial: { 
      opacity: 0, 
      y: 60,
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
  
  export const fadeInDown = {
    initial: { 
      opacity: 0, 
      y: -60,
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
  
  export const fadeInLeft = {
    initial: { 
      opacity: 0, 
      x: -60,
    },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
  
  export const fadeInRight = {
    initial: { 
      opacity: 0, 
      x: 60,
    },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
  
  export const scaleUp = {
    initial: { 
      opacity: 0, 
      scale: 0.8,
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
  
  export const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  export const staggerItem = {
    initial: { 
      opacity: 0, 
      y: 30,
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
  
  export const cardHover = {
    whileHover: { 
      scale: 1.02,
      y: -8,
      transition: { 
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    whileTap: { 
      scale: 0.98,
    },
  };
  
  export const slideInFromBottom = {
    initial: { 
      opacity: 0, 
      y: 100,
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };
  
  export const rotateIn = {
    initial: { 
      opacity: 0, 
      rotate: -10,
      scale: 0.9,
    },
    animate: { 
      opacity: 1, 
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };