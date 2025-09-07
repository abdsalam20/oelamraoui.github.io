import React, { useMemo } from 'react';
import SectionWrapper from './SectionWrapper';
import { PUBLICATIONS } from '../constants';
import { Publication, PublicationStatus } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const PublicationItem: React.FC<{ pub: Publication; index: number }> = ({ pub, index }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <li
      className={`mb-6 p-6 rounded-lg shadow-md transition-shadow duration-300 animate-fade-in-up flex items-start space-x-4 ${theme.card} ${theme.cardHover}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-2xl pt-1 select-none" aria-hidden="true">{pub.icon}</div>
      <div className="flex-1">
        <h3 className={`text-lg font-semibold ${theme.textHeader}`}>{pub.title[language]}</h3>
        <p className={`${theme.textMuted} my-2 text-sm`}>{pub.authors.join(', ')}</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm mt-3">
          <p className={`italic ${theme.textMuted}`}>
            {pub.journal && (
              <>
                {pub.status === PublicationStatus.Accepted && (language === 'en' ? 'Accepted in ' : 'Accepté dans ')}
                {pub.journal[language]}
                {pub.year && `, ${pub.year}`}
              </>
            )}
          </p>
          <div className="mt-2 sm:mt-0">
            {pub.doi && (
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className={`font-medium ${theme.textLink} ${theme.textLinkHover}`}>
                DOI <i className="fas fa-external-link-alt text-xs"></i>
              </a>
            )}
            {pub.link && (
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className={`ml-4 font-medium ${theme.textLink} ${theme.textLinkHover}`}>
                Link <i className="fas fa-external-link-alt text-xs"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};


const Publications: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  
  const publicationGroups = useMemo(() => [
    {
      title: { en: 'Refereed & Accepted Publications', fr: 'Publications Arbitrées et Acceptées' },
      icon: 'fas fa-award',
      statuses: [PublicationStatus.Published, PublicationStatus.Accepted],
    },
    {
      title: { en: 'Submitted Journal Publications', fr: 'Publications Soumises' },
      icon: 'fas fa-hourglass-half',
      statuses: [PublicationStatus.Submitted],
    },
    {
      title: { en: 'Papers in Preparation', fr: 'Articles en Préparation' },
      icon: 'fas fa-tools',
      statuses: [PublicationStatus.InPreparation],
    },
  ], []);

  const sectionTitle = language === 'en' ? 'Publications' : 'Publications';
  const emptyMessage = language === 'en' 
    ? 'New publications will be listed here soon.' 
    : 'De nouvelles publications seront bientôt listées ici.';

  return (
    <SectionWrapper title={sectionTitle} id="publications">
      <div className="max-w-4xl mx-auto">
        {PUBLICATIONS.length > 0 ? (
          <div className="space-y-12">
            {publicationGroups.map(group => {
              const pubsInGroup = PUBLICATIONS.filter(p => group.statuses.includes(p.status));
              if (pubsInGroup.length === 0) return null;

              return (
                <div key={group.title.en} className="animate-fade-in-up">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-6 flex items-center ${theme.textHeader}`}>
                    <i className={`${group.icon} mr-3 ${theme.textLink}`}></i>
                    {group.title[language]}
                  </h3>
                  <ul>
                    {pubsInGroup.map((pub, index) => (
                      <PublicationItem key={pub.title.en + index} pub={pub} index={index} />
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={`text-center py-10 px-6 rounded-lg ${theme.card} animate-fade-in-up`}>
            <p className={`text-lg ${theme.textBody}`}>
              <i className="fas fa-book-open mr-3 opacity-75"></i>
              {emptyMessage}
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Publications;