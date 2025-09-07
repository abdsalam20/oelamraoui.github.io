import React from 'react';
import { Publication, Talk, PublicationStatus, Theme, ThemeName, AcademicProfile, LocalizedString, EducationItem, WorkItem, Section, Participation } from './types';

export const SECTIONS: { id: Section; title: LocalizedString }[] = [
    { id: 'home', title: { en: 'Home', fr: 'Accueil' } },
    { id: 'about', title: { en: 'About Me', fr: 'À Propos' } },
    { id: 'publications', title: { en: 'Publications', fr: 'Publications' } },
    { id: 'talks', title: { en: 'Talks', fr: 'Présentations' } },
    { id: 'participations', title: { en: 'Participations', fr: 'Participations' } },
    { id: 'contact', title: { en: 'Contact', fr: 'Contact' } },
];

export const THEMES: Record<ThemeName, Theme> = {
  light: {
    name: 'light',
    background: 'bg-slate-50',
    card: 'bg-white',
    cardHover: 'hover:shadow-xl',
    textHeader: 'text-slate-900',
    textBody: 'text-slate-700',
    textMuted: 'text-slate-500',
    textLink: 'text-blue-600',
    textLinkActive: 'text-blue-600 font-semibold',
    textLinkHover: 'hover:text-blue-600',
    primaryBg: 'bg-blue-600',
    primaryBgHover: 'hover:bg-blue-700',
    divider: 'bg-blue-600',
    accent: 'bg-blue-100',
    accentText: 'text-blue-800',
    navBg: 'bg-white/80',
    navBorder: 'border-slate-200',
    navText: 'text-slate-600',
    buttonActiveBg: 'bg-blue-600',
    buttonActiveText: 'text-white',
    buttonInactiveBg: 'bg-white',
    buttonInactiveText: 'text-slate-700',
    buttonInactiveHoverBg: 'hover:bg-slate-100',
    homeGradient: 'from-slate-50 to-white'
  },
  dark: {
    name: 'dark',
    background: 'bg-gray-900',
    card: 'bg-gray-800',
    cardHover: 'hover:shadow-2xl hover:shadow-violet-500/10',
    textHeader: 'text-gray-100',
    textBody: 'text-gray-300',
    textMuted: 'text-gray-400',
    textLink: 'text-violet-400',
    textLinkActive: 'text-violet-400 font-semibold',
    textLinkHover: 'hover:text-violet-300',
    primaryBg: 'bg-violet-600',
    primaryBgHover: 'hover:bg-violet-700',
    divider: 'bg-violet-500',
    accent: 'bg-violet-900/50',
    accentText: 'text-violet-300',
    navBg: 'bg-gray-900/80',
    navBorder: 'border-gray-700',
    navText: 'text-gray-300',
    buttonActiveBg: 'bg-violet-600',
    buttonActiveText: 'text-white',
    buttonInactiveBg: 'bg-gray-700',
    buttonInactiveText: 'text-gray-200',
    buttonInactiveHoverBg: 'hover:bg-gray-600',
    homeGradient: 'from-gray-900 to-gray-800'
  }
};


export const PUBLICATIONS: Publication[] = [
  // Refereed Journal Publications
  {
    icon: '✅',
    title: {
      en: 'Spatio-temporal SIR model with Robin boundary condition and automatic lockdown policy.',
      fr: 'Modèle SIR spatio-temporel avec condition aux limites de Robin et politique de confinement automatique.'
    },
    authors: ['O. Elamraoui', 'EL-H. Essoufi', 'A. Zafrar'],
    journal: {
      en: 'International Journal of Applied and Computational Mathematics (IACM)',
      fr: 'International Journal of Applied and Computational Mathematics (IACM)'
    },
    year: 2022,
    doi: '10.1007/s40819-022-01482-3',
    status: PublicationStatus.Published,
  },
  {
    icon: '✅',
    title: {
      en: 'A time-space SIR model for disease spread across two regions: analysis and numerical simulations.',
      fr: 'Un modèle SIR temps-espace pour la propagation de maladies entre deux régions : analyse et simulations numériques.'
    },
    authors: ['O. Elamraoui', 'EL-H. Essoufi', 'H. Rahnaoui', 'A. Zafrar'],
    journal: {
      en: 'International Journal of Biomathematics',
      fr: 'International Journal of Biomathematics'
    },
    year: 2024,
    doi: '10.1142/S1793524524500062',
    status: PublicationStatus.Published,
  },
  {
    icon: '✅',
    title: {
      en: 'Nonlinear variational inequality in Reflexive Banach space with application in epidemiology.',
      fr: 'Inégalité variationnelle non linéaire dans un espace de Banach réflexif avec application en épidémiologie.'
    },
    authors: ['O. Elamraoui', 'EL-H. Essoufi', 'A. Zafrar'],
    journal: {
      en: 'Boletim da Sociedade Paranaense de Matemática',
      fr: 'Boletim da Sociedade Paranaense de Matemática'
    },
    status: PublicationStatus.Accepted,
  },
  // Submitted Journal Publications
  {
    icon: '📤',
    title: {
      en: 'Spatio-temporal SIRV Model with Optimal Control for Vaccination between Two Regions: Analysis and Numerical Simulation.',
      fr: 'Modèle SIRV spatio-temporel avec contrôle optimal pour la vaccination entre deux régions : Analyse et simulation numérique.'
    },
    authors: ['O. Elamraoui', 'EL-H. Essoufi', 'A. Zafrar'],
    status: PublicationStatus.Submitted,
  },
  {
    icon: '📤',
    title: {
      en: 'A mathematical model for energy harvesting: Two piezoelectric bodies in mutual contact with friction.',
      fr: 'Un modèle mathématique pour la récupération d\'énergie : Deux corps piézoélectriques en contact mutuel avec frottement.'
    },
    authors: ['A. Zafrar', 'O. Elamraoui', 'EL-H. Essoufi'],
    status: PublicationStatus.Submitted,
  },
  {
    icon: '📤',
    title: {
      en: 'Switching cases for fractional time SEIR Model with memory and space diffusion.',
      fr: 'Cas de commutation pour un modèle SEIR en temps fractionnaire avec mémoire et diffusion spatiale.'
    },
    authors: ['O. Elamraoui', 'EL-H. Essoufi', 'A. Zafrar'],
    status: PublicationStatus.Submitted,
  },
  // Papers in Preparation
  {
    icon: '🛠️',
    title: {
      en: "Migration and Immigration Reaction-Diffusion SIR Model: Mathematical and Numerical Study.",
      fr: "Modèle SIR à réaction-diffusion avec migration et immigration : Étude mathématique et numérique."
    },
    authors: ['O. Elamraoui', 'et al.'],
    status: PublicationStatus.InPreparation,
  },
  {
    icon: '🛠️',
    title: {
      en: "New result in Richards Equation.",
      fr: "Nouveau résultat dans l'équation de Richards."
    },
    authors: ['O. Elamraoui', 'et al.'],
    status: PublicationStatus.InPreparation,
  }
];

export const TALKS: Talk[] = [
  {
    title: {
      en: "Modeling epidemic dynamics using variational inequalities and reaction-diffusion systems",
      fr: "Modélisation de la dynamique des épidémies par les inéquations variationnelles et les systèmes de réaction-diffusion"
    },
    authors: ["O. Elamraoui", "E.-H. Essoufi", "A. Zafrar"],
    event: {
      en: "The 1st International Conference on Artificial Intelligence and Mathematics: From Theory to Application (ICAIM’25)",
      fr: "1ère Conférence Internationale sur l'Intelligence Artificielle et les Mathématiques : de la Théorie à l'Application (ICAIM’25)"
    },
    venue: { en: "ENSA-Fez", fr: "ENSA-Fès" },
    date: "June 23–25, 2025",
    thumbnail: "https://picsum.photos/seed/icaim25/400/200",
  },
  {
    title: {
      en: "Applications of Variational Inequality and Reaction-Diffusion Equations in Epidemiology",
      fr: "Applications des inéquations variationnelles et des équations de réaction-diffusion en épidémiologie"
    },
    authors: ["O. Elamraoui", "E.-H. Essoufi", "A. Zafrar"],
    event: {
      en: "The 7th Edition of the International Conference on Research in Applied Mathematics and Computer Science (ICRAMCS)",
      fr: "7ème édition de la Conférence Internationale sur la Recherche en Mathématiques Appliquées et Informatique (ICRAMCS)"
    },
    venue: { en: "ENSA Marrakech", fr: "ENSA Marrakech" },
    date: "April 26–28, 2025",
    thumbnail: "https://picsum.photos/seed/icramcs7/400/200",
  },
  {
    title: {
      en: "Spatio-temporal SIR model with Robin boundary condition for modelling lockdown",
      fr: "Modèle SIR spatio-temporel avec condition aux limites de Robin pour la modélisation du confinement"
    },
    authors: ["O. Elamraoui", "E.-H. Essoufi", "A. Zafrar"],
    event: {
      en: "The International Conference on Applied Mathematics and Data Science (ICAMDS 22)",
      fr: "Conférence Internationale sur les Mathématiques Appliquées et la Science des Données (ICAMDS 22)"
    },
    venue: { en: "FSBM Casablanca", fr: "FSBM Casablanca" },
    date: "December 16–17, 2022",
    thumbnail: "https://picsum.photos/seed/icamds22/400/200",
  },
  {
    title: {
      en: "Modeling Epidemic Diffusion",
      fr: "Modélisation de la diffusion épidémique"
    },
    authors: ["O. Elamraoui", "E.-H. Essoufi"],
    event: {
      en: "The 9th Edition of Doctoral Day",
      fr: "9ème édition de la Journée Doctorale"
    },
    venue: { en: "FST Settat", fr: "FST Settat" },
    date: "June 16, 2022",
    thumbnail: "https://picsum.photos/seed/doctoralday9/400/200",
  },
];

export const PARTICIPATIONS: Participation[] = [
  {
    icon: '📌',
    title: {
      en: "Participation in CIMPA school: 'Transport optimal, EDP et optimisation: applications en sciences des données'",
      fr: "Participation à l'école CIMPA : 'Transport optimal, EDP et optimisation: applications en sciences des données'"
    },
    date: 'May 21–31, 2025',
    location: {
      en: 'Essaouira, Morocco',
      fr: 'Essaouira, Maroc'
    }
  },
  {
    icon: '📌',
    title: {
      en: 'Participation in the ISAAC-ICMAM Conference of Women in Mathematics',
      fr: 'Participation à la conférence ISAAC-ICMAM des Femmes en Mathématiques'
    },
    date: 'November 27–29, 2024',
    location: {
      en: 'Online / On-site',
      fr: 'En ligne / Sur place'
    }
  },
  {
    icon: '📌',
    title: {
      en: 'Participation in the ICMAM Latin America conference',
      fr: 'Participation à la conférence ICMAM Amérique Latine'
    },
    date: 'October 14–18, 2024',
    location: {
      en: 'Pontificia Universidad Javeriana—Cali, Colombia',
      fr: 'Pontificia Universidad Javeriana—Cali, Colombie'
    }
  },
  {
    icon: '📌',
    title: {
      en: 'Participation in the Session 100 seminar in EDP and applied mathematics in America',
      fr: 'Participation au séminaire Session 100 en EDP et mathématiques appliquées en Amérique'
    },
    date: 'October 7–10, 2024',
    location: {
      en: 'Virtual Seminar',
      fr: 'Séminaire Virtuel'
    }
  },
  {
    icon: '📌',
    title: {
      en: 'Participation in the organisation team of the 11th edition of Doctoral Day',
      fr: 'Participation à l\'équipe d\'organisation de la 11ème édition de la Journée Doctorale'
    },
    date: 'June 11, 2024',
    location: {
      en: 'ISSS Settat',
      fr: 'ISSS Settat'
    }
  },
  {
    icon: '📌',
    title: {
      en: 'Participation in the organisation team of the 10th edition of Doctoral Day',
      fr: 'Participation à l\'équipe d\'organisation de la 10ème édition de la Journée Doctorale'
    },
    date: 'June 14, 2023',
    location: {
      en: 'FST Settat',
      fr: 'FST Settat'
    }
  },
  {
    icon: '📌',
    title: {
      en: 'Attended the webinars presented at the International Conference on Digital Technologies and Applications',
      fr: 'Participation aux webinaires de la Conférence Internationale sur les Technologies et Applications Numériques'
    },
    date: 'January 29–30, 2021',
    location: {
      en: 'Fez, Morocco',
      fr: 'Fès, Maroc'
    }
  },
  {
    icon: '📌',
    title: {
      en: "Participation in the seminar of Mathématique's AHMED INTISSAR",
      fr: "Participation au séminaire de Mathématiques d'AHMED INTISSAR"
    },
    date: 'January 14, 2020',
    location: {
      en: 'FST Settat',
      fr: 'FST Settat'
    }
  }
];

export const ACADEMIC_PROFILES: AcademicProfile[] = [
    { name: 'Google Scholar', url: '#', icon: 'fas fa-graduation-cap' },
    { name: 'ORCID', url: '#', icon: 'fab fa-orcid' },
    { name: 'ResearchGate', url: '#', icon: 'fab fa-researchgate' },
    { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin' }
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    dates: '2019 – 2024',
    degree: { en: 'PhD in Applied Mathematics', fr: 'Doctorat en Mathématiques Appliquées' },
    institution: { en: 'Hassan First University, FST Settat, Morocco', fr: 'Université Hassan Premier, FST Settat, Maroc' },
    details: { en: 'Thesis: Mathematical analysis of reaction-diffusion models in epidemiology', fr: 'Thèse : Analyse mathématique de modèles de réaction-diffusion en épidémiologie' }
  },
  {
    dates: '2017 – 2019',
    degree: { en: 'Master’s Degree in Mathematics and Applications', fr: 'Master en Mathématiques et Applications' },
    institution: { en: 'Hassan First University, FST Settat', fr: 'Université Hassan Premier, FST Settat' }
  },
  {
    dates: '2014 – 2017',
    degree: { en: 'Bachelor’s Degree in Applied Mathematics', fr: 'Licence en Mathématiques Appliquées' },
    institution: { en: 'Hassan First University, FST Settat', fr: 'Université Hassan Premier, FST Settat' }
  }
];

export const WORK_EXPERIENCE: WorkItem[] = [
  {
    dates: '2021 – 2025',
    role: { en: 'Teaching Assistant (Vacataire)', fr: 'Enseignant Vacataire' },
    institution: { en: 'Hassan First University – FST Settat', fr: 'Université Hassan Premier – FST Settat' },
    details: { 
      en: 'Taught undergraduate courses in algorithms, numerical analysis, algebra, and analysis. Conducted tutorials and labs.',
      fr: 'Enseignement de cours de premier cycle en algorithmique, analyse numérique, algèbre et analyse. Direction de travaux dirigés et pratiques.'
    }
  },
  {
    dates: '2022 – 2024',
    role: { en: 'Academic Tutor (Volunteer)', fr: 'Tuteur Académique (Bénévole)' },
    institution: { en: 'CTDE Club, FST Settat', fr: 'Club CTDE, FST Settat' },
    details: { 
      en: 'Organized tutoring sessions for students in MIP, GEGM, and BCG tracks, focusing on foundational mathematics.',
      fr: 'Organisation de séances de tutorat pour les étudiants des filières MIP, GEGM et BCG, axées sur les mathématiques fondamentales.'
    }
  }
];