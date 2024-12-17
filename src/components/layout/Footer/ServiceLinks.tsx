import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  'Business Plans',
  'Diagnostic Management',
  'Services Financiers',
];

export const ServiceLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-secondary font-bold text-lg mb-4">Nos Services</h3>
      <ul className="space-y-2">
        {services.map((service) => (
          <li key={service}>
            <Link
              to="/services"
              className="hover:text-secondary transition-colors duration-300"
            >
              {service}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};