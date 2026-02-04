import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-display font-bold text-xl">PH</span>
              </div>
              <div>
                <p className="font-display font-semibold text-lg">Cabinet Ponzini Hanser</p>
                <p className="text-primary-foreground/70 text-sm">{t('hero.subtitle')}</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t('footer.network')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">{t('contact.title')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <p className="text-primary-foreground/80">
                  9 rue de Clichy<br />75009 Paris
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/70" />
                <a href="tel:+33142657722" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  01 42 65 77 22
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/70" />
                <a href="mailto:contact@cabinet-ph.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  contact@cabinet-ph.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Navigation</h3>
            <nav className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/missions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t('nav.missions')}
              </Link>
              <Link to="/informations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t('nav.info')}
              </Link>
              <Link to="/outils" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t('nav.tools')}
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t('nav.contact')}
              </Link>
              <Link to="/plan-acces" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t('nav.access')}
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Cabinet Ponzini Hanser. {t('footer.rights')}.</p>
          <Link to="/mentions-legales" className="hover:text-primary-foreground transition-colors">
            {t('footer.legal')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
