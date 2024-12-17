import React from 'react';
import { motion } from 'framer-motion';

export const HeroBackground: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80" />
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Bureau moderne"
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75" />
    </motion.div>
  );
};