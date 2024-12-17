import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
        {subtitle}
      </p>
    </div>
  );
};