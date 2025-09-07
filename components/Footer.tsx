import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const bgColor = theme.name === 'dark' ? 'bg-gray-800' : 'bg-slate-800';
  const textColor = theme.name === 'dark' ? 'text-gray-300' : 'text-slate-200';
  const mutedColor = theme.name === 'dark' ? 'text-gray-500' : 'text-slate-400';
  
  const copyrightText = language === 'en' 
    ? `© ${new Date().getFullYear()} Dr. Omar Elamraoui. All Rights Reserved.`
    : `© ${new Date().getFullYear()} Dr. Omar Elamraoui. Tous droits réservés.`;
  
  const builtWithText = language === 'en'
    ? 'Built with React & Tailwind CSS.'
    : 'Créé avec React & Tailwind CSS.';

  return (
    <footer className={`${bgColor} ${textColor} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <p>{copyrightText}</p>
        <p className={`text-sm ${mutedColor} mt-2`}>{builtWithText}</p>
      </div>
    </footer>
  );
};

export default Footer;