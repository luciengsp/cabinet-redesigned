import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.missions': 'Nos Missions',
    'nav.info': 'Base d\'informations',
    'nav.tools': 'Outils Pratiques',
    'nav.contact': 'Nous Contacter',
    'nav.access': 'Plan d\'accès',
    'nav.english': 'Our Firm',
    
    // Hero
    'hero.title': 'Cabinet Ponzini Hanser',
    'hero.subtitle': 'Experts-Comptables',
    'hero.tagline': 'Depuis 1976, nous accompagnons les professionnels de l\'immobilier avec expertise et engagement.',
    'hero.cta': 'Découvrir nos services',
    
    // About
    'about.title': 'Notre Cabinet',
    'about.description': 'Le Cabinet Ponzini Hanser est un cabinet d\'expertise comptable et de commissariat aux comptes fondé en 1976. Claude Ponzini et Catherine Hanser, associés experts-comptables et commissaires aux comptes, dirigent une équipe de collaborateurs expérimentés.',
    'about.expertise': 'Notre spécialité : l\'immobilier sous toutes ses formes.',
    
    // Services
    'services.title': 'Nos Spécialisations Immobilières',
    'services.property': 'Sociétés immobilières',
    'services.development': 'Promotion immobilière',
    'services.scpi': 'SCPI / OPCI',
    'services.construction': 'Construction',
    'services.management': 'Gestion locative',
    'services.hotel': 'Hôtellerie',
    
    // Missions
    'missions.title': 'Nos Missions',
    'missions.subtitle': 'Un accompagnement complet pour votre entreprise',
    'missions.financial': 'Mission Comptable',
    'missions.financial.desc': 'Tenue de comptabilité, établissement des comptes annuels, situations intermédiaires',
    'missions.fiscal': 'Mission Fiscale',
    'missions.fiscal.desc': 'Déclarations fiscales, optimisation, assistance contrôle fiscal',
    'missions.social': 'Mission Sociale',
    'missions.social.desc': 'Paie et déclarations sociales, conseil en droit social',
    'missions.legal': 'Mission Juridique',
    'missions.legal.desc': 'Secrétariat juridique, rédaction d\'actes',
    'missions.it': 'Mission Informatique',
    'missions.it.desc': 'Conseil en systèmes d\'information, mise en place d\'outils',
    'missions.consulting': 'Conseil en Gestion',
    'missions.consulting.desc': 'Tableaux de bord, prévisionnel, accompagnement stratégique',
    
    // Contact
    'contact.title': 'Nous Contacter',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.fax': 'Fax',
    'contact.form.name': 'Nom',
    'contact.form.firstname': 'Prénom',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer',
    'contact.form.success': 'Votre message a été envoyé avec succès.',
    'contact.form.error': 'Une erreur est survenue. Veuillez réessayer.',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.legal': 'Mentions légales',
    'footer.network': 'Membre du réseau Prodige - Experts France',
    
    // Info Hub
    'info.title': 'Base d\'informations',
    'info.fiscal': 'Chiffres Fiscaux',
    'info.social': 'Chiffres Sociaux',
    'info.legal': 'Chiffres Juridiques',
    'info.patrimonial': 'Chiffres Patrimoniaux',
    'info.news': 'Actualités',
    'info.spotlight': 'Zoom Sur...',
    
    // Tools
    'tools.title': 'Outils Pratiques',
    'tools.subtitle': 'Des outils pour vous aider au quotidien',
    'tools.calculators': 'Calculatrices & Simulateurs',
    'tools.cta': 'Pour un conseil personnalisé, n\'hésitez pas à nous contacter.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.missions': 'Our Missions',
    'nav.info': 'Information',
    'nav.tools': 'Practical Tools',
    'nav.contact': 'Contact Us',
    'nav.access': 'Access Map',
    'nav.english': 'Our Firm',
    
    // Hero
    'hero.title': 'Cabinet Ponzini Hanser',
    'hero.subtitle': 'Chartered Accountants',
    'hero.tagline': 'Since 1976, we have been supporting real estate professionals with expertise and commitment.',
    'hero.cta': 'Discover our services',
    
    // About
    'about.title': 'Our Firm',
    'about.description': 'Cabinet Ponzini Hanser is an accounting and auditing firm founded in 1976. Claude Ponzini and Catherine Hanser, partner chartered accountants and statutory auditors, lead a team of experienced professionals.',
    'about.expertise': 'Our specialty: real estate in all its forms.',
    
    // Services
    'services.title': 'Our Real Estate Specializations',
    'services.property': 'Property companies',
    'services.development': 'Real estate development',
    'services.scpi': 'SCPI / OPCI',
    'services.construction': 'Construction',
    'services.management': 'Property management',
    'services.hotel': 'Hospitality',
    
    // Missions
    'missions.title': 'Our Missions',
    'missions.subtitle': 'Comprehensive support for your business',
    'missions.financial': 'Accounting Services',
    'missions.financial.desc': 'Bookkeeping, annual accounts, interim statements',
    'missions.fiscal': 'Tax Services',
    'missions.fiscal.desc': 'Tax returns, optimization, tax audit assistance',
    'missions.social': 'Social Services',
    'missions.social.desc': 'Payroll and social declarations, employment law advice',
    'missions.legal': 'Legal Services',
    'missions.legal.desc': 'Legal secretariat, drafting of documents',
    'missions.it': 'IT Services',
    'missions.it.desc': 'Information systems consulting, tool implementation',
    'missions.consulting': 'Management Consulting',
    'missions.consulting.desc': 'Dashboards, forecasting, strategic support',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.fax': 'Fax',
    'contact.form.name': 'Last Name',
    'contact.form.firstname': 'First Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Your message has been sent successfully.',
    'contact.form.error': 'An error occurred. Please try again.',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.legal': 'Legal Notice',
    'footer.network': 'Member of Prodige - Experts France network',
    
    // Info Hub
    'info.title': 'Information Hub',
    'info.fiscal': 'Tax Figures',
    'info.social': 'Social Figures',
    'info.legal': 'Legal Figures',
    'info.patrimonial': 'Asset Figures',
    'info.news': 'News',
    'info.spotlight': 'Spotlight',
    
    // Tools
    'tools.title': 'Practical Tools',
    'tools.subtitle': 'Tools to help you every day',
    'tools.calculators': 'Calculators & Simulators',
    'tools.cta': 'For personalized advice, don\'t hesitate to contact us.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
