import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Section } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface HomeProps {
  onNavigate: (section: Section) => void;
}

const content = {
  welcome: {
    en: '👋 Welcome to my academic website!',
    fr: '👋 Bienvenue sur mon site académique !',
  },
  intro1: {
    en: 'I’m Omar Elamraoui, a PhD graduate in Applied Mathematics from University Hassan First, where I focused on the mathematical modeling of infectious diseases using partial differential equations (PDEs) and ordinary differential equations (ODEs).',
    fr: 'Je suis Omar Elamraoui, docteur en Mathématiques Appliquées de l\'Université Hassan Premier, où je me suis concentré sur la modélisation mathématique des maladies infectieuses à l\'aide d\'équations aux dérivées partielles (EDP) et d\'équations différentielles ordinaires (EDO).',
  },
  intro2: {
    en: 'This website serves as a hub for my academic journey, ongoing research, and scientific contributions. Whether you\'re a fellow researcher, student, or simply curious about mathematical epidemiology, feel free to explore!',
    fr: 'Ce site web est une plateforme pour mon parcours académique, mes recherches en cours et mes contributions scientifiques. Que vous soyez chercheur, étudiant ou simplement curieux de l\'épidémiologie mathématique, n\'hésitez pas à explorer !',
  },
  researchFocusTitle: {
    en: 'Research Focus',
    fr: 'Axe de Recherche',
  },
  researchFocusIntro: {
    en: 'My work primarily lies at the intersection of:',
    fr: 'Mon travail se situe principalement à l\'intersection de :',
  },
  researchFocusInterests: {
    en: [
      'Mathematical Epidemiology',
      'Partial differential equations',
      'Reaction–Diffusion Systems',
      'Boundary Value Problems',
      'Numerical Methods (FEM, FVM, PINNs)',
    ],
    fr: [
      'Épidémiologie Mathématique',
      'Équations aux dérivées partielles',
      'Systèmes de Réaction–Diffusion',
      'Problèmes aux limites',
      'Méthodes Numériques (FEM, FVM, PINNs)',
    ],
  },
  researchFocusConclusion: {
    en: 'I’m particularly interested in applying rigorous mathematical tools to real-world health problems such as COVID-19 and other infectious diseases.',
    fr: 'Je suis particulièrement intéressé par l\'application d\'outils mathématiques rigoureux à des problèmes de santé réels tels que le COVID-19 et d\'autres maladies infectieuses.',
  },
  exploreTitle: {
    en: 'Explore My Work',
    fr: 'Explorez Mon Travail',
  },
  navLinks: [
    { id: 'about', icon: '👤', title: { en: 'About Me', fr: 'À Propos' }, description: { en: 'Academic background and contact information', fr: 'Parcours académique et informations de contact' } },
    { id: 'publications', icon: '📄', title: { en: 'Publications', fr: 'Publications' }, description: { en: 'Peer-reviewed journal articles and preprints', fr: 'Articles de revues à comité de lecture et prépublications' } },
    { id: 'talks', icon: '🎙️', title: { en: 'Talks', fr: 'Présentations' }, description: { en: 'Conferences, workshops, and invited seminars', fr: 'Conférences, ateliers et séminaires invités' } },
    { id: 'participations', icon: '🎓', title: { en: 'Participations', fr: 'Participations' }, description: { en: 'Conference attendance and academic events', fr: 'Participation à des conférences et événements académiques' } },
  ],
};

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const welcomeText = content.welcome[language];

  return (
    <div>
      {/* Introduction */}
      <div className="text-center mb-16">
        <h1 className={`
          text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight 
          ${theme.textHeader}
        `}>
          {welcomeText}
        </h1>
        <div className={`max-w-3xl mx-auto mt-6 text-base sm:text-lg ${theme.textBody} space-y-4`}>
          <p>{content.intro1[language]}</p>
          <p>{content.intro2[language]}</p>
        </div>
      </div>

      {/* Grid for two sections */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        {/* Research Focus */}
        <div className={`p-8 rounded-lg shadow-lg ${theme.card} h-full`}>
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 flex items-center ${theme.textHeader}`}>
            <span className="text-2xl mr-3">🔍</span> {content.researchFocusTitle[language]}
          </h2>
          <p className={`${theme.textBody} mb-6`}>
            {content.researchFocusIntro[language]}
          </p>
          <ul className="flex flex-wrap gap-2 justify-start mb-6">
            {content.researchFocusInterests[language].map(interest => (
              <li key={interest} className={`text-sm font-medium px-3 py-1 rounded-full ${theme.accent} ${theme.accentText}`}>
                {interest}
              </li>
            ))}
          </ul>
          <p className={theme.textBody}>
            {content.researchFocusConclusion[language]}
          </p>
        </div>

        {/* Explore My Work */}
        <div className={`p-8 rounded-lg shadow-lg ${theme.card} h-full`}>
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 flex items-center ${theme.textHeader}`}>
            <span className="text-2xl mr-3">🧭</span> {content.exploreTitle[language]}
          </h2>
          <div className="space-y-4">
            {content.navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id as Section);
                }}
                className={`block p-4 rounded-md transition-all duration-300 ${
                  theme.name === 'dark' ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-slate-100 hover:bg-slate-200'
                } hover:shadow-md group border ${theme.name === 'dark' ? 'border-gray-700' : 'border-slate-200'}`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{link.icon}</span>
                  <div>
                    <h3 className={`font-bold group-hover:${theme.textLink} transition-colors duration-200 ${theme.textHeader}`}>{link.title[language]}</h3>
                    <p className={`text-sm ${theme.textMuted}`}>{link.description[language]}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;