import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
import { Theme, ThemeName } from '../types';
import { THEMES } from '../constants';

interface ThemeContextType {
  theme: Theme;
  setThemeName: (name: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const storedTheme = localStorage.getItem('themeName');
    // Migrate old themes: 'nebula' becomes 'dark', others become 'light'.
    if (storedTheme === 'nebula' || storedTheme === 'dark') {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('themeName', themeName);
  }, [themeName]);

  const theme = useMemo(() => THEMES[themeName], [themeName]);

  return (
    <ThemeContext.Provider value={{ theme, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};