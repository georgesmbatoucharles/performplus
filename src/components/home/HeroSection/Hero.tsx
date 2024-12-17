import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-black h-screen flex items-center">
      <HeroBackground />
      <HeroContent />
    </div>
  );
};