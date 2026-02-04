import { Link } from 'react-router-dom';
import { Calculator, PiggyBank, Car, Home, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const OutilsPage = () => {
  const { t } = useLanguage();

  const tools = [
    {
      icon: Calculator,
      title: 'Simulateur d\'impôt sur le revenu',
      description: 'Estimez votre impôt sur le revenu pour l\'année en cours.'
    },
    {
      icon: PiggyBank,
      title: 'Calculateur de charges sociales',
      description: 'Calculez les charges sociales sur les salaires.'
    },
    {
      icon: Car,
      title: 'Barème kilométrique',
      description: 'Calculez vos frais kilométriques déductibles.'
    },
    {
      icon: Home,
      title: 'Simulateur de plus-value immobilière',
      description: 'Estimez la plus-value et l\'imposition sur une vente immobilière.'
    },
    {
      icon: TrendingUp,
      title: 'Comparateur LMNP/LMP',
      description: 'Comparez les régimes de location meublée.'
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t('tools.title')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t('tools.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('tools.calculators')}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <tool.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('tools.cta')}
            </p>
            <Button asChild size="lg">
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

export default OutilsPage;
