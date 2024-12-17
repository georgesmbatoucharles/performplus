import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button';

export const HeroContent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="block">Transformez vos ambitions</span>
          <span className="block text-secondary">en succès avec Perform Plus</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Des solutions financières innovantes pour des entreprises performantes
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Button icon={ArrowRight} onClick={() => navigate('/contact')}>
            Prendre RDV
          </Button>
          <Button variant="secondary" onClick={() => navigate('/services')}>
            Nos Services
          </Button>
        </div>
      </div>
    </div>
  );
};