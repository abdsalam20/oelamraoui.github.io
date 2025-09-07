import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TALKS } from '../constants';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Talks: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const sectionTitle = language === 'en' ? 'Talks & Presentations' : 'Présentations & Exposés';
  const emptyMessage = language === 'en' 
    ? 'More talks and presentations will be listed here soon.' 
    : 'D\'autres présentations seront bientôt listées ici.';

  return (
    <SectionWrapper title={sectionTitle} id="talks">
      <div className="max-w-4xl mx-auto">
        {TALKS.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {TALKS.map((talk, index) => (
              <div 
                key={index} 
                className={`rounded-lg shadow-lg flex flex-col group transform hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 animate-fade-in-up overflow-hidden ${theme.card} ${theme.cardHover}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {talk.thumbnail && (
                  <img src={talk.thumbnail} alt={talk.title[language]} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" />
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <p className={`text-sm font-semibold mb-2 ${theme.textLink}`}>
                    <i className="far fa-calendar-alt mr-2"></i>{talk.date}
                  </p>
                  <h3 className={`font-bold text-lg group-hover:${theme.textLink} transition-colors duration-300 ${theme.textHeader}`}>{talk.title[language]}</h3>
                  {talk.authors && (
                    <p className={`text-sm ${theme.textMuted} mt-2`}>
                      <i className="fas fa-users mr-2 opacity-75"></i>
                      {talk.authors.join(', ')}
                    </p>
                  )}
                  <div className="mt-4 flex-grow">
                    <p className={`${theme.textBody}`}>
                      <i className={`fas fa-map-marker-alt mr-2 opacity-75 ${theme.textMuted}`}></i>
                      <strong>{talk.event[language]}</strong>, {talk.venue[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`text-center py-10 px-6 rounded-lg ${theme.card} animate-fade-in-up`}>
            <p className={`text-lg ${theme.textBody}`}>
              <i className="fas fa-bullhorn mr-3 opacity-75"></i>
              {emptyMessage}
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Talks;