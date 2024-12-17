import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Goldman Sachs',
    logo: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'Morgan Stanley',
    logo: 'https://images.unsplash.com/photo-1614028674096-24769a9c489b?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'JP Morgan',
    logo: 'https://images.unsplash.com/photo-1614028674074-6c36b71129c5?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'HSBC',
    logo: 'https://images.unsplash.com/photo-1614028674108-e83b8f6b3e3a?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'BNP Paribas',
    logo: 'https://images.unsplash.com/photo-1614028674144-c8e9a0a2c4f9?auto=format&fit=crop&w=200&h=100&q=80',
  },
];

export const PartnersSlider: React.FC = () => {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold text-secondary mb-12"
        >
          Ils nous font confiance
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="flex space-x-12 animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 h-20 w-40 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};