import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
    const { theme, setThemeName } = useTheme();
    const isDark = theme.name === 'dark';

    const toggleTheme = () => {
        setThemeName(isDark ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className={`
                w-8 h-8 rounded-full
                flex items-center justify-center
                transition-all duration-300 transform hover:scale-110
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${isDark
                    ? 'focus:ring-violet-400 focus:ring-offset-gray-900'
                    : 'focus:ring-blue-500 focus:ring-offset-white'
                }
            `}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <span className="sr-only">Switch theme</span>
            {isDark ? (
                // When in Dark Mode, display the Moon icon.
                <i className="fas fa-moon text-lg text-violet-400"></i>
            ) : (
                // When in Light Mode, display the Sun icon.
                <i className="fas fa-sun text-lg text-amber-500"></i>
            )}
        </button>
    );
};

export default ThemeSwitcher;