import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, ChevronRight, Users, BarChart, Target } from 'lucide-react';
import { Button } from '../../components/common/Button';

const features = [
  {
    icon: LineChart,
    title: 'Analyse Financière',
    description: 'Projections détaillées et modélisation financière sur 3-5 ans',
  },
  {
    icon: Users,
    title: 'Étude de Marché',
    description: 'Analyse approfondie du marché et positionnement stratégique',
  },
  {
    icon: BarChart,
    title: 'Plan Opérationnel',
    description: 'Stratégie détaillée de mise en œuvre et objectifs mesurables',
  },
  {
    icon: Target,
    title: 'Stratégie Marketing',
    description: 'Plan marketing ciblé et stratégies d\'acquisition clients',
  },
];

export const BusinessPlan = () => {
  return (
    <div className="pt-20">
      <div className="relative h-[60vh] bg-black">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
          alt="Business Plan"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Business Plans Stratégiques
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Transformez votre vision en stratégie actionnable avec nos plans d'affaires sur mesure
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Notre Approche</h2>
            <p className="text-gray-600 mb-8">
              Nous développons des business plans complets et stratégiques qui servent de feuille de route 
              pour votre succès. Notre approche combine analyse approfondie, expertise financière et 
              vision stratégique pour créer un plan d'action concret et réalisable.
            </p>
            <Button>
              Prendre Rendez-vous <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};