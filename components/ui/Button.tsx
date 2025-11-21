import React from 'react';
import { motion } from 'framer-motion';
import { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '', icon }) => {
  
  const baseStyles = "px-8 py-4 rounded-full font-heading font-bold text-lg flex items-center justify-center gap-3 transition-colors duration-300";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-purple-500/40 border-2 border-transparent",
    secondary: "bg-white text-indigo-600 shadow-md hover:shadow-lg border-2 border-indigo-100",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {children}
    </motion.button>
  );
};
