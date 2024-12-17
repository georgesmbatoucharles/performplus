import React from 'react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Clients Satisfaits', value: '500+', icon: Users },
  { label: 'Pays', value: '20+', icon: Globe },
  { label: 'Taux de Réussite', value: '95%', icon: TrendingUp },
  { label: "Années d'Expérience", value: '15+', icon: Award },
];

export const AboutSection: React.FC = () => {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-secondary sm:text-4xl"
          >
            Notre Excellence en Chiffres
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center">
                <stat.icon className="h-8 w-8 text-secondary" />
              </div>
              <p className="mt-4 text-4xl font-extrabold text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-base text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};