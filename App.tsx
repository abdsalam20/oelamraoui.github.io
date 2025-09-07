import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Publications from './components/Publications';
import Talks from './components/Talks';
import Participations from './components/Participations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import BackToTopButton from './components/BackToTopButton';
import { Section } from './types';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const { theme } = useTheme();

  const handleSectionChange = useCallback((section: Section) => {
    setActiveSection(section);
    setSearchQuery(''); // Clear search when changing sections
    window.scrollTo(0, 0);
  }, []);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleResultClick = (section: Section) => {
    handleSectionChange(section);
  };

  const renderContent = () => {
    if (searchQuery.trim() !== '') {
      return <SearchResults query={searchQuery} onResultClick={handleResultClick} />;
    }

    switch (activeSection) {
      case 'home':
        return <Home onNavigate={handleSectionChange} />;
      case 'about':
        return <About />;
      case 'publications':
        return <Publications />;
      case 'talks':
        return <Talks />;
      case 'participations':
        return <Participations />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleSectionChange} />;
    }
  };

  return (
    <div className={`font-sans min-h-screen transition-colors duration-300 ${theme.textBody} ${theme.background}`}>
      <Navbar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {renderContent()}
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;