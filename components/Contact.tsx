import React from 'react';
import SectionWrapper from './SectionWrapper';
import { useTheme } from '../contexts/ThemeContext';
import { ACADEMIC_PROFILES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const content = {
  getInTouch: { en: 'Get In Touch', fr: 'Contactez-moi' },
  contactInfo: { en: 'Contact Information', fr: 'Coordonnées' },
  intro: { 
    en: 'I am always open to discussing new research projects, collaborations, or opportunities. Please feel free to reach out through email or the contact form.',
    fr: 'Je suis toujours ouvert à la discussion de nouveaux projets de recherche, collaborations ou opportunités. N\'hésitez pas à me contacter par e-mail ou via le formulaire de contact.'
  },
  email: { en: 'Email', fr: 'E-mail' },
  professional: { en: 'Professional', fr: 'Professionnel' },
  personal: { en: 'Personal', fr: 'Personnel' },
  profiles: { en: 'Academic Profiles', fr: 'Profils Académiques' },
  location: { en: 'Location', fr: 'Adresse' },
  sendMessage: { en: 'Send a Message', fr: 'Envoyer un Message' },
  name: { en: 'Your Name', fr: 'Votre Nom' },
  yourEmail: { en: 'Your Email', fr: 'Votre E-mail' },
  subject: { en: 'Subject', fr: 'Sujet' },
  message: { en: 'Message', fr: 'Message' },
  submit: { en: 'Send Message', fr: 'Envoyer le Message' },
  myLocation: { en: 'My Location', fr: 'Ma Localisation' },
};

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const inputClasses = `w-full px-4 py-2 mt-2 border rounded-md bg-transparent focus:outline-none focus:ring-2 ${
    theme.name === 'dark'
      ? 'border-gray-600 focus:ring-violet-500 focus:border-violet-500'
      : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500'
  }`;

  return (
    <SectionWrapper title={content.getInTouch[language]} id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold ${theme.textHeader} mb-4`}>{content.contactInfo[language]}</h3>
              <p className={theme.textBody}>
                {content.intro[language]}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className={`text-lg font-semibold ${theme.textHeader} flex items-center`}>
                <i className="fas fa-envelope mr-3"></i> {content.email[language]}
              </h4>
              <div>
                <span className={`font-medium ${theme.textMuted}`}>{content.professional[language]}:</span>
                <a href="mailto:o.elamraoui@uhp.ac.ma" className={`block ${theme.textLink} ${theme.textLinkHover}`}>o.elamraoui@uhp.ac.ma</a>
              </div>
              <div>
                <span className={`font-medium ${theme.textMuted}`}>{content.personal[language]}:</span>
                <a href="mailto:oelamraoui34@gmail.com" className={`block ${theme.textLink} ${theme.textLinkHover}`}>oelamraoui34@gmail.com</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className={`text-lg font-semibold ${theme.textHeader} flex items-center`}>
                <i className="fas fa-link mr-3"></i> {content.profiles[language]}
              </h4>
              <div className="flex flex-wrap gap-4">
                {ACADEMIC_PROFILES.map(profile => (
                  <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-2 ${theme.textLink} ${theme.textLinkHover} transition-transform transform hover:scale-105`}>
                    <i className={profile.icon}></i>
                    <span>{profile.name}</span>
                  </a>
                ))}
              </div>
            </div>

             <div className="space-y-4">
              <h4 className={`text-lg font-semibold ${theme.textHeader} flex items-center`}>
                <i className="fas fa-map-marker-alt mr-3"></i> {content.location[language]}
              </h4>
              <p className={theme.textBody}>
                University Hassan First<br/>
                Department of Mathematics and Computer Science, Settat, Morocco<br/>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${theme.textLink} ${theme.textLinkHover}`}>University Website</a>
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={`p-8 rounded-lg shadow-lg animate-fade-in-up ${theme.card}`} style={{ animationDelay: '150ms' }}>
            <h3 className={`text-xl sm:text-2xl font-bold ${theme.textHeader} mb-6`}>{content.sendMessage[language]}</h3>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className={`block font-medium ${theme.textBody}`}>{content.name[language]}</label>
                <input type="text" id="name" name="name" className={inputClasses} required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className={`block font-medium ${theme.textBody}`}>{content.yourEmail[language]}</label>
                <input type="email" id="email" name="email" className={inputClasses} required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className={`block font-medium ${theme.textBody}`}>{content.subject[language]}</label>
                <input type="text" id="subject" name="subject" className={inputClasses} required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className={`block font-medium ${theme.textBody}`}>{content.message[language]}</label>
                <textarea id="message" name="message" rows={5} className={inputClasses} required></textarea>
              </div>
              <button
                type="submit"
                className={`w-full text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 shadow-md ${theme.primaryBg} ${theme.primaryBgHover}`}
              >
                <i className="fas fa-paper-plane mr-2"></i> {content.submit[language]}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
           <h3 className={`text-xl sm:text-2xl font-bold ${theme.textHeader} mb-4 text-center`}>{content.myLocation[language]}</h3>
           <div className={`rounded-lg shadow-lg overflow-hidden ${theme.card}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.195034177435!2d-7.618642584805728!3d33.0003059809919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda6056580543557%3A0x6b75a7f5d9d3a58b!2sHassan%201st%20University%20of%20Settat!5e0!3m2!1sen!2sma!4v1672873219873!5m2!1sen!2sma"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="University Hassan First Location"
            ></iframe>
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;