import React from 'react';
import { motion } from 'framer-motion';

const shapes = [
  { type: 'circle', size: 8 },
  { type: 'square', size: 6 },
  { type: 'triangle', size: 10 },
  { type: 'circle', size: 4 },
  { type: 'square', size: 12 },
  { type: 'plus', size: 8 },
];

const FloatingElements = ({ count = 6, className = '' }) => {
  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    shape: shapes[i % shapes.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    rotation: Math.random() * 360,
  }));

  const renderShape = (shape, size) => {
    const baseStyle = {
      width: size,
      height: size,
      border: '1px solid rgba(108, 99, 255, 0.2)',
      background: 'rgba(108, 99, 255, 0.05)',
    };

    switch (shape.type) {
      case 'circle':
        return <div style={{ ...baseStyle, borderRadius: '50%' }} />;
      case 'square':
        return <div style={{ ...baseStyle, borderRadius: '2px' }} />;
      case 'triangle':
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid rgba(108, 99, 255, 0.1)`,
            }}
          />
        );
      case 'plus':
        return (
          <div
            style={{
              width: size,
              height: size,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                width: '100%',
                height: '1px',
                background: 'rgba(108, 99, 255, 0.2)',
                transform: 'translateY(-50%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                width: '1px',
                height: '100%',
                background: 'rgba(108, 99, 255, 0.2)',
                transform: 'translateX(-50%)',
              }}
            />
          </div>
        );
      default:
        return <div style={baseStyle} />;
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, element.rotation, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {renderShape(element.shape, element.shape.size)}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;