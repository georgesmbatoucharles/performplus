import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'À Propos', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const NavigationLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-secondary font-bold text-lg mb-4">Navigation</h3>
      <ul className="space-y-2">
        {links.map(({ name, path }) => (
          <li key={name}>
            <Link
              to={path}
              className="hover:text-secondary transition-colors duration-300"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};