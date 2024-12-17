import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon: Icon, href, label }) => {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-secondary transition-colors duration-300"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
};