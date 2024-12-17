import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItem {
  icon: LucideIcon;
  text: string;
  href: string;
}

interface ContactInfoProps {
  items: ContactItem[];
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ items }) => {
  return (
    <div>
      <h3 className="text-secondary font-bold text-lg mb-4">Contact</h3>
      <ul className="space-y-4">
        {items.map(({ icon: Icon, text, href }) => (
          <li key={text} className="flex items-center space-x-2">
            <Icon className="h-5 w-5 text-secondary" />
            <a
              href={href}
              className="hover:text-secondary transition-colors duration-300"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};