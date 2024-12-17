import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`
        px-3 py-2 text-sm font-medium transition-all duration-300
        ${isActive 
          ? 'text-secondary border-b-2 border-secondary' 
          : 'text-gray-600 hover:text-secondary'}
      `}
    >
      {children}
    </Link>
  );
};