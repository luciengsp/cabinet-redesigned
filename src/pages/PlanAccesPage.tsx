import { MapPin, Phone, Printer, Navigation } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PlanAccesPage = () => {
  const { t } = useLanguage();

  const openInGoogleMaps = () => {
    window.open('https://www.google.com/maps/dir//9+Rue+de+Clichy,+75009+Paris', '_blank');
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary to-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('nav.access')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Comment nous trouver
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Map & Info Section */}
      <section className="min-h-[70vh] relative">
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.3008431661857!2d2.3287889!3d48.8782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3f1ee9c7e3%3A0x4c1f7e6c0e9e4e0a!2s9%20Rue%20de%20Clichy%2C%2075009%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cabinet Ponzini Hanser location"
          />
        </div>

        {/* Info Card Overlay */}
        <div className="absolute top-6 left-6 z-10 max-w-sm">
          <AnimatedSection>
            <Card className="shadow-xl">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold text-lg">PH</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">Cabinet Ponzini Hanser</p>
                    <p className="text-xs text-muted-foreground">{t('hero.subtitle')}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Adresse</p>
                      <p className="text-sm text-muted-foreground">
                        9 rue de Clichy<br />75009 Paris
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Téléphone</p>
                      <a href="tel:+33142657722" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        01 42 65 77 22
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Printer className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Fax</p>
                      <p className="text-sm text-muted-foreground">01 42 65 77 55</p>
                    </div>
                  </div>
                </div>

                <Button onClick={openInGoogleMaps} className="w-full mt-4" size="lg">
                  <Navigation className="mr-2 h-4 w-4" />
                  Itinéraire
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Transport Info */}
        <div className="absolute bottom-6 right-6 z-10 max-w-xs">
          <AnimatedSection delay={0.2}>
            <Card className="shadow-xl">
              <CardContent className="p-4">
                <p className="font-semibold text-sm text-foreground mb-2">Accès en transports</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>🚇 Métro : Trinité - d'Estienne d'Orves (ligne 12)</p>
                  <p>🚇 Métro : Liège (ligne 13)</p>
                  <p>🚌 Bus : 26, 32, 43, 68, 81</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PlanAccesPage;
