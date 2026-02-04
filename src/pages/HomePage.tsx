import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Home, Landmark, HardHat, KeyRound, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  const { t } = useLanguage();

  const specializations = [
    { icon: Building2, label: t('services.property') },
    { icon: Landmark, label: t('services.development') },
    { icon: Home, label: t('services.scpi') },
    { icon: HardHat, label: t('services.construction') },
    { icon: KeyRound, label: t('services.management') },
    { icon: Building, label: t('services.hotel') },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary via-primary to-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
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
                <Link to="/missions">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
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
            
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent rounded-2xl blur-xl" />
                <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-primary-foreground font-display font-bold text-2xl">PH</span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-lg text-foreground">Claude Ponzini</p>
                      <p className="font-display font-semibold text-lg text-foreground">Catherine Hanser</p>
                      <p className="text-sm text-muted-foreground">Associés</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-8 h-[1px] bg-primary" />
                    <span>Depuis 1976</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
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

      {/* Network Badge */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-4 bg-accent/50 rounded-full px-8 py-4 border border-border">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <p className="text-foreground font-medium">
                {t('footer.network')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={0}>
              <Link to="/informations">
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <span className="text-primary group-hover:text-primary-foreground text-xl font-bold transition-colors">#</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {t('info.fiscal')}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      IR, IS, ISF, TVA...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <Link to="/informations">
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <span className="text-primary group-hover:text-primary-foreground text-xl font-bold transition-colors">📰</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {t('info.news')}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Dernières actualités fiscales et sociales
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <Link to="/informations">
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <span className="text-primary group-hover:text-primary-foreground text-xl font-bold transition-colors">🔍</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {t('info.spotlight')}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Focus sur des sujets d'actualité
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Besoin d'un accompagnement ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
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

export default HomePage;
