import React, { useMemo } from 'react';
import SectionWrapper from './SectionWrapper';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { EDUCATION_HISTORY, WORK_EXPERIENCE, ACADEMIC_PROFILES } from '../constants';

const content = {
  aboutMe: { en: 'About Me', fr: 'À Propos' },
  phdTitle: { en: 'PhD in Applied Mathematics', fr: 'Doctorat en Mathématiques Appliquées' },
  intro: {
    en: 'Born in 1996 in Morocco, I’m a PhD graduate in Applied Mathematics and a proud member of the Amazigh population of North Africa. My work focuses on the mathematical modeling of infectious diseases using reaction-diffusion systems and optimal control to address real-world public health challenges.',
    fr: 'Né en 1996 au Maroc, je suis titulaire d\'un doctorat en mathématiques appliquées et fier membre de la population amazighe d\'Afrique du Nord. Mon travail se concentre sur la modélisation mathématique des maladies infectieuses à l\'aide de systèmes de réaction-diffusion et de contrôle optimal pour relever les défis de santé publique du monde réel.',
  },
  connect: { en: 'Connect', fr: 'Contact' },
  career: { en: 'Career & Education', fr: 'Parcours et Formation' },
  research: {
    en: 'Core Research Interests',
    fr: 'Principaux Domaines de Recherche',
  },
  interests: {
    en: ['Mathematical Epidemiology', 'PDEs & ODEs', 'Reaction-Diffusion Systems', 'Boundary Value Problems', 'Finite Element Method (FEM)', 'Finite Volume Method (FVM)', 'PINNs'],
    fr: ['Épidémiologie Mathématique', 'EDP & EDO', 'Systèmes Réaction-Diffusion', 'Problèmes aux Limites', 'Méthode des Éléments Finis (FEM)', 'Méthode des Volumes Finis (FVM)', 'PINNs'],
  }
};

const About: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  
  const timelineItems = useMemo(() => [
    ...WORK_EXPERIENCE.map(item => ({ ...item, type: 'work' as const })),
    ...EDUCATION_HISTORY.map(item => ({ ...item, type: 'education' as const }))
  ].sort((a, b) => parseInt(b.dates.split('–')[0], 10) - parseInt(a.dates.split('–')[0], 10)), []);

  return (
    <SectionWrapper title={content.aboutMe[language]} id="about">
      <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
        {/* Left Column: Profile Card */}
        <div className="md:col-span-2 space-y-8 sticky top-28 animate-fade-in-up">
           <img
            src="https://lh3.googleusercontent.com/ZiDwuAQ3Vv36mDPfE-vtRYpeawksW4X3tr323lELW4oWuJa5SgoytSPsaB1KZk1-GakU5okLHkVgOCIxIoDvsTX6TeDDFIYs9xwVTFZd7uxNSuI6DPoGaY1nU1BWBRzkhkJa4B_5_45t-a2TKp0beXNoPnjQ-ogY6Apyd1hDM2_UN8dBa5GJbw=w1280"
            alt="Dr. Omar Elamraoui"
            className={`rounded-2xl w-48 h-48 sm:w-56 sm:h-56 object-cover shadow-lg mx-auto border-4 ${theme.card}`}
          />
          <div className="text-center">
            <h2 className={`text-2xl font-bold ${theme.textHeader}`}>Omar Elamraoui</h2>
            <p className={`${theme.textMuted}`}>{content.phdTitle[language]}</p>
          </div>
          
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${theme.textHeader} flex items-center justify-center`}>
              <i className={`fas fa-link mr-2 ${theme.textLink}`}></i> {content.connect[language]}
            </h3>
            <div className={`p-4 rounded-lg ${theme.card} shadow-sm`}>
              <a href="mailto:o.elamraoui@uhp.ac.ma" className={`block text-center ${theme.textLink} ${theme.textLinkHover} mb-3`}>o.elamraoui@uhp.ac.ma</a>
              <div className="flex flex-wrap gap-4 justify-center">
                {ACADEMIC_PROFILES.map(profile => (
                  <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={profile.name} className={`text-xl ${theme.textMuted} hover:${theme.textLink} transition-colors transform hover:scale-110`}>
                    <i className={profile.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-lg font-semibold text-center ${theme.textHeader}`}>{content.research[language]}</h3>
            <ul className="flex flex-wrap gap-2 justify-center">
              {content.interests[language].map(interest => (
                <li key={interest} className={`text-xs font-medium px-3 py-1 rounded-full ${theme.accent} ${theme.accentText}`}>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Right Column: Timeline and Bio */}
        <div className="md:col-span-3">
          <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <p className={`text-lg leading-relaxed mb-12 ${theme.textBody}`}>
              {content.intro[language]}
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h3 className={`text-2xl sm:text-3xl font-bold mb-8 ${theme.textHeader}`}>{content.career[language]}</h3>
            <div className={`relative border-l-2 ml-3 ${theme.name === 'dark' ? 'border-gray-700' : 'border-slate-200'}`}>
              {timelineItems.map((item, index) => (
                <div key={index} className="mb-10 ml-8 animate-fade-in-up" style={{ animationDelay: `${300 + (index + 1) * 100}ms`}}>
                  <span className={`absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full ring-8 ${theme.name === 'dark' ? 'bg-gray-700 ring-gray-900' : 'bg-slate-100 ring-slate-50'}`}>
                    <i className={`fas ${item.type === 'work' ? 'fa-briefcase' : 'fa-graduation-cap'} ${theme.textLink}`}></i>
                  </span>
                  <div className={`p-4 rounded-lg shadow-sm ${theme.card}`}>
                    <p className={`text-sm font-semibold ${theme.textMuted}`}>{item.dates}</p>
                    <h4 className={`text-lg font-bold mt-1 ${theme.textHeader}`}>{item.type === 'work' ? item.role[language] : item.degree[language]}</h4>
                    <p className={`font-medium ${theme.textBody}`}>{item.institution[language]}</p>
                    {item.details && <p className={`mt-2 text-sm ${item.type === 'education' ? 'italic' : ''} ${theme.textMuted}`}>{item.details[language]}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
