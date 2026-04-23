import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const LottieAnimation = ({ 
  animationData, 
  width = 400, 
  height = 400, 
  loop = true, 
  autoplay = true,
  className = '',
  style = {},
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    let lottieInstance = null;

    const loadLottie = async () => {
      try {
        const lottie = await import('lottie-react');
        const LottieComponent = lottie.default;
        
        // We need to use a different approach since we can't render a component imperatively
        // Instead, we'll set up the container
        if (containerRef.current && animationData) {
          // Store the animation data for rendering
          containerRef.current._animationData = animationData;
          containerRef.current._loop = loop;
          containerRef.current._autoplay = autoplay;
          containerRef.current.forceUpdate?.();
        }
      } catch (error) {
        console.error('Failed to load Lottie:', error);
      }
    };

    loadLottie();
  }, [animationData, loop, autoplay]);

  // Use dynamic import in a different way
  const LottieComponent = React.lazy(() => import('lottie-react'));

  if (!animationData) {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{ width, height, ...style }}
      >
        <div className="text-gray-500 text-sm">Animation not loaded</div>
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      className={className}
      style={{ width, height, ...style }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <React.Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
        </div>
      }>
        <LottieComponent
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
          style={{ width: '100%', height: '100%' }}
        />
      </React.Suspense>
    </motion.div>
  );
};

export default LottieAnimation;