import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import SectionWrapper from './SectionWrapper';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const content = {
    title: { en: 'Ask Gemini', fr: 'Demandez à Gemini' },
    placeholder: { en: 'Ask me anything about Omar\'s research, or any general question...', fr: 'Posez-moi une question sur les recherches d\'Omar, ou toute question générale...' },
    button: { en: 'Generate', fr: 'Générer' },
    generating: { en: 'Generating...', fr: 'Génération...' },
    error: { en: 'An error occurred. Please try again.', fr: 'Une erreur est survenue. Veuillez réessayer.' },
    responseTitle: { en: 'Response', fr: 'Réponse' }
};

const Gemini: React.FC = () => {
    const { theme } = useTheme();
    const { language } = useLanguage();
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!prompt || loading) return;

        setLoading(true);
        setError('');
        setResponse('');

        try {
            if (!process.env.API_KEY) {
                throw new Error("API_KEY environment variable not set.");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const result = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });

            setResponse(result.text);

        } catch (e) {
            console.error(e);
            setError(content.error[language]);
        } finally {
            setLoading(false);
        }
    };
    
    const inputClasses = `w-full px-4 py-3 mt-2 border rounded-md bg-transparent focus:outline-none focus:ring-2 ${
        theme.name === 'dark'
        ? 'border-gray-600 focus:ring-violet-500 focus:border-violet-500 placeholder-gray-400'
        : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500 placeholder-slate-500'
    }`;


    return (
        <SectionWrapper title={content.title[language]} id="gemini">
            <div className="max-w-4xl mx-auto">
                <div className={`p-8 rounded-lg shadow-lg animate-fade-in-up ${theme.card}`}>
                    <div aria-busy={loading}>
                        <label htmlFor="gemini-prompt" className="sr-only">
                            {content.placeholder[language]}
                        </label>
                        <textarea
                            id="gemini-prompt"
                            rows={4}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder={content.placeholder[language]}
                            className={inputClasses}
                            disabled={loading}
                        />
                        <button
                            onClick={handleGenerate}
                            disabled={loading || !prompt}
                            className={`w-full mt-4 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all transform hover:scale-[1.02] duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${theme.primaryBg} ${theme.primaryBgHover}`}
                        >
                            {loading ? (
                                <>
                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                    {content.generating[language]}
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-magic mr-2"></i>
                                    {content.button[language]}
                                </>
                            )}
                        </button>
                    </div>

                    {error && (
                         <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-md" role="alert">
                            <p>{error}</p>
                        </div>
                    )}

                    {response && (
                        <div className="mt-8" aria-live="polite">
                            <h3 className={`text-xl font-bold mb-4 ${theme.textHeader}`}>{content.responseTitle[language]}</h3>
                             <div className={`p-6 rounded-md whitespace-pre-wrap ${theme.name === 'dark' ? 'bg-gray-700/50' : 'bg-slate-100'} ${theme.textBody}`}>
                                {response}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Gemini;
