import React from 'react';
import { motion } from 'framer-motion';

const MotionDivExplanation = () => {
  return (
    <div className='flex flex-col justify-center items-center p-10 w-full h-screen'>
      {/* Basic Usage */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        This div will fade in and move up.
      </motion.div>

      {/* Hover and Tap Animations */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Hover and click me!
      </motion.div>

      {/* Variants */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
      >
        This uses variants for animation.
      </motion.div>

      {/* Gesture Animations */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        Drag me horizontally!
      </motion.div>

      {/* Exit Animations */}
      <motion.div
        exit={{ opacity: 0 }}
      >
        This will animate when removed from the DOM.
      </motion.div>
    </div>
  );
};

export default MotionDivExplanation;