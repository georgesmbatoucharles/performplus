import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, path }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary cursor-pointer"
    >
      <div>
        <span className="rounded-lg inline-flex p-3 bg-black text-secondary ring-4 ring-white">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {description}
        </p>
      </div>
      <div className="mt-6">
        <span className="text-secondary group-hover:text-black transition-colors duration-300 text-sm font-medium flex items-center">
          En savoir plus
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};