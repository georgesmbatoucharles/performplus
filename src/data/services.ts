import { LineChart, FileSearch, PiggyBank } from 'lucide-react';
import { ServiceType } from '../types/service';

export const services: ServiceType[] = [
  {
    title: 'Business Plans',
    description: 'Des plans d\'affaires solides pour des résultats concrets. Stratégies sur mesure et projections financières détaillées.',
    icon: LineChart,
    path: '/services/business-plan',
  },
  {
    title: 'Diagnostic Management',
    description: 'Identifiez, analysez, optimisez. Évaluation approfondie des processus et de la performance organisationnelle.',
    icon: FileSearch,
    path: '/services/management-diagnostic',
  },
  {
    title: 'Services Financiers',
    description: 'Les meilleures solutions financières pour vos objectifs. Optimisation du capital et stratégies de financement.',
    icon: PiggyBank,
    path: '/services/financial-services',
  },
];