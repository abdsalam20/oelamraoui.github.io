import React, { useState, useRef } from 'react';
import { Section } from '../types';
import { SECTIONS } from '../constants';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange, searchQuery, onSearchChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
  const { language } = useLanguage();

  const activeLinkClasses = theme.textLinkActive;
  const inactiveLinkClasses = `${theme.navText} ${theme.textLinkHover} transition-colors duration-300`;
  const linkBaseClasses = 'block py-2 px-3 rounded md:p-0';

  const handleLinkClick = (section: Section) => {
    onSectionChange(section);
    setIsOpen(false);
  }

  const placeholderText = {
    en: 'Search...',
    fr: 'Rechercher...'
  };

  return (
    <nav className={`backdrop-blur-md shadow-sm fixed w-full z-20 top-0 start-0 border-b ${theme.navBg} ${theme.navBorder}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className={`self-center text-lg sm:text-xl font-bold whitespace-nowrap ${theme.textHeader}`}>Dr. Omar Elamraoui</span>
        </a>
        <div className="flex items-center md:order-2 space-x-1 sm:space-x-2 md:space-x-3 rtl:space-x-reverse">
          {/* --- DESKTOP SEARCH BAR --- */}
          <div className="relative hidden md:block">
            <div className="flex items-center h-10">
              <div
                className={`flex items-center transition-all duration-300 ease-in-out rounded-full ${isSearchExpanded ? `w-60 shadow-inner ${theme.name === 'dark' ? 'bg-gray-700' : 'bg-slate-100'}` : 'w-10'}`}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={placeholderText[language]}
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onBlur={() => {
                    if (!searchQuery) setIsSearchExpanded(false);
                  }}
                  className={`
                    flex-grow h-full p-2 pl-10 text-sm bg-transparent rounded-full focus:outline-none
                    transition-opacity duration-200
                    ${theme.textBody} ${
                      theme.name === 'dark' 
                          ? 'placeholder-gray-400' 
                          : 'placeholder-slate-500'
                  }
                    ${isSearchExpanded ? 'opacity-100' : 'opacity-0 cursor-default'}
                  `}
                  style={{ transitionDelay: isSearchExpanded ? '100ms' : '0ms' }}
                  aria-hidden={!isSearchExpanded}
                  tabIndex={isSearchExpanded ? 0 : -1}
                />
              </div>
              <button
                onClick={() => {
                  if (!isSearchExpanded) {
                    setIsSearchExpanded(true);
                    searchInputRef.current?.focus();
                  }
                }}
                className={`absolute top-0 left-0 h-10 w-10 flex items-center justify-center rounded-full transition-colors ${theme.textMuted} hover:${theme.textHeader}`}
                aria-label="Toggle search"
              >
                <i className="fas fa-search"></i>
              </button>
              {searchQuery && isSearchExpanded && (
                <button
                  onClick={() => onSearchChange('')}
                  className={`absolute top-0 right-0 h-10 w-10 flex items-center justify-center rounded-full transition-opacity ${theme.textMuted} hover:${theme.textHeader}`}
                  aria-label="Clear search"
                >
                  <i className="fas fa-times-circle"></i>
                </button>
              )}
            </div>
          </div>
          
          <LanguageSwitcher />
          <ThemeSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1 md:items-center`} id="navbar-default">
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-6 lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${isOpen ? `${theme.card} ${theme.navBorder}` : 'bg-transparent'}`}>
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(section.id as Section);
                  }}
                  className={`${linkBaseClasses} ${activeSection === section.id && !searchQuery ? activeLinkClasses : inactiveLinkClasses}`}
                  aria-current={activeSection === section.id && !searchQuery ? 'page' : undefined}
                >
                  {section.title[language]}
                </a>
              </li>
            ))}
          </ul>
          
          {/* --- MOBILE SEARCH BAR --- */}
          <div className="relative mt-4 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <i className={`fas fa-search ${theme.textMuted}`}></i>
            </div>
            <input
              type="text"
              id="navbar-search-input-mobile"
              className={`block w-full p-2 ps-10 text-sm border rounded-lg focus:outline-none focus:ring-2 ${theme.textBody} ${
                theme.name === 'dark'
                  ? 'bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-violet-500 focus:border-violet-500'
                  : 'bg-slate-50 border-slate-300 placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500'
              }`}
              placeholder={placeholderText[language]}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            {searchQuery && (
                <button onClick={() => onSearchChange('')} className="absolute inset-y-0 end-0 flex items-center pe-3" aria-label="Clear search">
                    <i className={`fas fa-times-circle ${theme.textMuted} hover:${theme.textHeader}`}></i>
                </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;