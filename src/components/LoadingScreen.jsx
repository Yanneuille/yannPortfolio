
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
    >
      <div className="text-center">
        <motion.div
          className="inline-block"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-16 h-16 rounded-full border-4 border-t-primary border-r-transparent border-b-blue-400 border-l-purple-500" />
        </motion.div>
        
        <motion.h2
          className="mt-6 text-xl font-bold gradient-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Chargement...
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
