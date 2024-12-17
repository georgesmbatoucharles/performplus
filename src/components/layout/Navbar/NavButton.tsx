import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const NavButton: React.FC<NavButtonProps> = ({ onClick, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/contact');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
        bg-black text-secondary px-6 py-2 rounded-md
        hover:bg-secondary hover:text-black
        transition-all duration-300
        border border-secondary
      "
    >
      {children}
    </button>
  );
};