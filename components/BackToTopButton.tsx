import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-30
        w-12 h-12 rounded-full
        flex items-center justify-center
        text-white text-xl
        shadow-lg
        transition-all duration-300 ease-in-out
        transform hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${theme.primaryBg} ${theme.primaryBgHover}
        ${theme.name === 'dark' 
            ? 'focus:ring-violet-400 focus:ring-offset-gray-900' 
            : 'focus:ring-blue-500 focus:ring-offset-slate-50'
        }
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default BackToTopButton;
