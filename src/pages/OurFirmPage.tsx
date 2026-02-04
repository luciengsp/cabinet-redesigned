import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home, Landmark, HardHat, KeyRound, Building, Calculator, FileText, Scale, Users, Monitor, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const OurFirmPage = () => {
  const { language, setLanguage, t } = useLanguage();

  // Ensure English language when viewing this page
  if (language !== 'en') {
    setLanguage('en');
  }

  const specializations = [
    { icon: Building2, label: t('services.property') },
    { icon: Landmark, label: t('services.development') },
    { icon: Home, label: t('services.scpi') },
    { icon: HardHat, label: t('services.construction') },
    { icon: KeyRound, label: t('services.management') },
    { icon: Building, label: t('services.hotel') },
  ];

  const missions = [
    { icon: Calculator, title: t('missions.financial'), description: t('missions.financial.desc') },
    { icon: FileText, title: t('missions.fiscal'), description: t('missions.fiscal.desc') },
    { icon: Users, title: t('missions.social'), description: t('missions.social.desc') },
    { icon: Scale, title: t('missions.legal'), description: t('missions.legal.desc') },
    { icon: Monitor, title: t('missions.it'), description: t('missions.it.desc') },
    { icon: TrendingUp, title: t('missions.consulting'), description: t('missions.consulting.desc') },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary to-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="text-primary-foreground/80 font-medium mb-4 tracking-wide">
                {t('hero.subtitle')}
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
                {t('hero.tagline')}
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('about.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t('about.description')}
              </p>
              <p className="text-primary font-semibold text-xl">
                {t('about.expertise')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specializations.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-default group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <p className="font-medium text-sm text-foreground">{item.label}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('missions.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('missions.subtitle')}
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <mission.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {mission.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {mission.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to work with us?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Our team is at your disposal to answer your questions and support you in your projects.
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link to="/contact">
                {t('contact.title')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default OurFirmPage;
