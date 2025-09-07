import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const languages: Language[] = ['en', 'fr'];

  return (
    <div className={`flex border rounded-full p-0.5 ${theme.name === 'dark' ? 'border-gray-600' : 'border-slate-300'}`}>
      {languages.map(lang => {
        const isActive = language === lang;
        return (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`
              px-2 py-0.5 text-xs font-bold rounded-full transition-colors duration-300
              focus:outline-none focus:ring-2
              ${isActive
                ? `${theme.buttonActiveBg} ${theme.buttonActiveText} ${theme.name === 'dark' ? 'ring-violet-500' : 'ring-blue-500'}`
                : `${theme.buttonInactiveBg} ${theme.buttonInactiveText} ${theme.buttonInactiveHoverBg} ring-transparent`
              }
            `}
            aria-label={`Switch to ${lang === 'en' ? 'English' : 'French'}`}
            aria-pressed={isActive}
          >
            {lang.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;