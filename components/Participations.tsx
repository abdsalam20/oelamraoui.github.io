import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PARTICIPATIONS } from '../constants';
import { Participation } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const ParticipationItem: React.FC<{ item: Participation; index: number }> = ({ item, index }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div
      className={`p-6 rounded-lg shadow-md transition-shadow duration-300 animate-fade-in-up flex items-start space-x-4 ${theme.card} ${theme.cardHover}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-2xl pt-1 select-none" aria-hidden="true">{item.icon}</div>
      <div className="flex-1">
        <h3 className={`text-lg font-semibold ${theme.textHeader}`}>{item.title[language]}</h3>
        <p className={`${theme.textMuted} my-1 text-sm`}>
          <i className="far fa-calendar-alt mr-2"></i>{item.date}
        </p>
        <p className={`${theme.textMuted} text-sm`}>
          <i className="fas fa-map-marker-alt mr-2"></i>{item.location[language]}
        </p>
        {item.description && <p className={`${theme.textBody} mt-3`}>{item.description[language]}</p>}
      </div>
    </div>
  );
};

const Participations: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  
  const sectionTitle = '🎓 ' + (language === 'en' ? 'Attendance & Participation' : 'Présence et Participation');
  const emptyMessage = language === 'en' 
    ? 'Participation details will be listed here soon.' 
    : 'Les détails des participations seront bientôt listés ici.';

  return (
    <SectionWrapper title={sectionTitle} id="participations">
      <div className="max-w-4xl mx-auto">
        {PARTICIPATIONS.length > 0 ? (
          <div className="space-y-6">
            {PARTICIPATIONS.map((item, index) => (
              <ParticipationItem key={item.title.en + index} item={item} index={index} />
            ))}
          </div>
        ) : (
          <div className={`text-center py-10 px-6 rounded-lg ${theme.card} animate-fade-in-up`}>
            <p className={`text-lg ${theme.textBody}`}>
              <i className="fas fa-handshake mr-3 opacity-75"></i>
              {emptyMessage}
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Participations;