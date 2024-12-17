import React from 'react';
import { Menu, X, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from './NavLink';
import { NavButton } from './NavButton';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'À Propos', href: '/about' },
  { name: 'Témoignages', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
    setIsOpen(false);
  };

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Award className="h-8 w-8 text-secondary" />
              <span className="ml-2 text-xl font-bold text-secondary">Perform Plus</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
            <NavButton onClick={handleContactClick}>Prendre RDV</NavButton>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-accent transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
            <div className="mt-4">
              <NavButton onClick={handleContactClick}>Prendre RDV</NavButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};