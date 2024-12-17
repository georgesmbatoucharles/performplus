import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, MessageSquare, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SocialLink } from './SocialLink';
import { ContactInfo } from './ContactInfo';
import { NavigationLinks } from './NavigationLinks';
import { ServiceLinks } from './ServiceLinks';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: MessageSquare, href: '#', label: 'LinkedIn' }, // Using MessageSquare instead of LinkedIn
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const contactInfo = [
  { icon: Phone, text: '+33 1 23 45 67 89', href: 'tel:+33123456789' },
  { icon: Mail, text: 'contact@performplus.fr', href: 'mailto:contact@performplus.fr' },
  { icon: MapPin, text: '75008 Paris, France', href: 'https://goo.gl/maps' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-secondary font-bold text-lg">Perform Plus</h3>
            <p className="text-sm">
              Solutions financières innovantes pour des entreprises performantes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <NavigationLinks />

          {/* Services */}
          <ServiceLinks />

          {/* Contact Info */}
          <ContactInfo items={contactInfo} />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Perform Plus. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-sm hover:text-secondary">
                Mentions Légales
              </Link>
              <Link to="/confidentialite" className="text-sm hover:text-secondary">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};