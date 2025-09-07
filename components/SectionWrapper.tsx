import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children, id }) => {
  const { theme } = useTheme();

  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="animate-fade-in-up">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center ${theme.textHeader}`}>{title}</h2>
        <div className={`w-20 h-1 mx-auto mb-12 ${theme.divider}`}></div>
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;