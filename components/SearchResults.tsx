import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { PUBLICATIONS, TALKS, PARTICIPATIONS } from '../constants';
import { Publication, Talk, Section, Participation } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

// Helper component to highlight search matches
const Highlight: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim() || !text) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={i} className="bg-blue-200/80 text-blue-900 dark:bg-violet-500/40 dark:text-violet-200 font-medium px-1 rounded-sm">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};


interface SearchResultsProps {
  query: string;
  onResultClick: (section: Section) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, onResultClick }) => {
    const { theme } = useTheme();
    const { language } = useLanguage();
    const lowerCaseQuery = query.toLowerCase();

    const filteredPublications = PUBLICATIONS.filter(p =>
        p.title[language].toLowerCase().includes(lowerCaseQuery) ||
        p.authors.join(', ').toLowerCase().includes(lowerCaseQuery) ||
        (p.journal && p.journal[language].toLowerCase().includes(lowerCaseQuery))
    );

    const filteredTalks = TALKS.filter(t =>
        t.title[language].toLowerCase().includes(lowerCaseQuery) ||
        (t.authors && t.authors.join(', ').toLowerCase().includes(lowerCaseQuery)) ||
        t.event[language].toLowerCase().includes(lowerCaseQuery) ||
        t.venue[language].toLowerCase().includes(lowerCaseQuery)
    );

    const filteredParticipations = PARTICIPATIONS.filter(p =>
        p.title[language].toLowerCase().includes(lowerCaseQuery) ||
        p.location[language].toLowerCase().includes(lowerCaseQuery) ||
        (p.description && p.description[language].toLowerCase().includes(lowerCaseQuery))
    );

    const totalResults = filteredPublications.length + filteredTalks.length + filteredParticipations.length;

    const content = {
      foundResults: {
        en: `Found ${totalResults} result${totalResults !== 1 ? 's' : ''} for`,
        fr: `Trouvé ${totalResults} résultat${totalResults !== 1 ? 's' : ''} pour`,
      },
      publications: { en: 'Publications', fr: 'Publications' },
      talks: { en: 'Talks & Presentations', fr: 'Présentations & Exposés' },
      participations: { en: 'Attendance & Participation', fr: 'Présence et Participation' },
      noResultsTitle: {
        en: 'No Results Found',
        fr: 'Aucun Résultat Trouvé',
      },
      noResultsSuggestion: {
        en: 'Please try a different search term.',
        fr: 'Veuillez essayer un autre terme de recherche.',
      },
    };

    const ResultSection: React.FC<{title: string, count: number, children: React.ReactNode, icon: string}> = ({title, count, children, icon}) => {
        if (count === 0) return null;
        return (
            <div className="mb-12">
                <h2 className={`text-xl sm:text-2xl font-bold mb-4 flex items-center ${theme.textHeader}`}>
                    <i className={`fas ${icon} mr-3 ${theme.textLink}`}></i>
                    {title} ({count})
                </h2>
                <ul className="space-y-4">
                    {children}
                </ul>
            </div>
        )
    }

    const renderPublication = (pub: Publication, index: number) => (
         <li key={`pub-${index}`} className={`p-6 rounded-lg shadow-md transition-shadow duration-300 ${theme.card} ${theme.cardHover} cursor-pointer flex items-start space-x-4`} onClick={() => onResultClick('publications')}>
             <div className="text-2xl pt-1 select-none" aria-hidden="true">{pub.icon}</div>
             <div>
                <h3 className={`font-semibold ${theme.textHeader}`}><Highlight text={pub.title[language]} highlight={query} /></h3>
                <p className={`text-sm ${theme.textMuted} mt-1`}><Highlight text={pub.authors.join(', ')} highlight={query} /></p>
                {pub.journal && <p className={`text-sm italic ${theme.textMuted}`}><Highlight text={pub.journal[language]} highlight={query} /></p>}
             </div>
        </li>
    );

    const renderTalk = (talk: Talk, index: number) => (
         <li key={`talk-${index}`} className={`p-6 rounded-lg shadow-md transition-shadow duration-300 ${theme.card} ${theme.cardHover} cursor-pointer flex items-start space-x-4`} onClick={() => onResultClick('talks')}>
             <div className="text-2xl pt-1 select-none" aria-hidden="true">🎙️</div>
             <div>
                <h3 className={`font-semibold ${theme.textHeader}`}><Highlight text={talk.title[language]} highlight={query} /></h3>
                <p className={`text-sm ${theme.textMuted} mt-1`}><Highlight text={`${talk.event[language]}, ${talk.venue[language]}`} highlight={query} /></p>
             </div>
        </li>
    );
    
    const renderParticipation = (item: Participation, index: number) => (
         <li key={`part-${index}`} className={`p-6 rounded-lg shadow-md transition-shadow duration-300 ${theme.card} ${theme.cardHover} cursor-pointer flex items-start space-x-4`} onClick={() => onResultClick('participations')}>
            <div className="text-2xl pt-1 select-none" aria-hidden="true">{item.icon}</div>
            <div>
                <h3 className={`font-semibold ${theme.textHeader}`}><Highlight text={item.title[language]} highlight={query} /></h3>
                <p className={`text-sm ${theme.textMuted} mt-1`}><Highlight text={item.location[language]} highlight={query} /></p>
            </div>
        </li>
    );

    return (
        <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className={`text-2xl sm:text-3xl font-bold mb-8 ${theme.textHeader}`}>
                {content.foundResults[language]} "<span className={theme.textLink}>{query}</span>"
            </h1>

            {totalResults > 0 ? (
                <>
                    <ResultSection title={content.publications[language]} count={filteredPublications.length} icon="fa-book-open">
                        {filteredPublications.map(renderPublication)}
                    </ResultSection>
                     <ResultSection title={content.talks[language]} count={filteredTalks.length} icon="fa-bullhorn">
                        {filteredTalks.map(renderTalk)}
                    </ResultSection>
                    <ResultSection title={content.participations[language]} count={filteredParticipations.length} icon="fa-graduation-cap">
                        {filteredParticipations.map(renderParticipation)}
                    </ResultSection>
                </>

            ) : (
                <div className={`text-center py-16 px-6 rounded-lg ${theme.card} flex flex-col items-center justify-center animate-fade-in-up`}>
                    <i className={`fas fa-search text-5xl mb-6 ${theme.textMuted}`}></i>
                    <h3 className={`text-2xl font-bold mb-2 ${theme.textHeader}`}>
                        {content.noResultsTitle[language]}
                    </h3>
                    <p className={`text-lg ${theme.textBody}`}>
                        {content.noResultsSuggestion[language]}
                    </p>
                </div>
            )}
        </div>
    );
};

export default SearchResults;