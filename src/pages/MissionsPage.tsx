import { Calculator, FileText, Scale, Users, Monitor, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

const MissionsPage = () => {
  const { t } = useLanguage();

  const missions = [
    { 
      icon: Calculator, 
      title: t('missions.financial'), 
      description: t('missions.financial.desc'),
      details: [
        'Tenue de comptabilité',
        'Établissement des comptes annuels',
        'Situations intermédiaires',
        'Révision des comptes'
      ]
    },
    { 
      icon: FileText, 
      title: t('missions.fiscal'), 
      description: t('missions.fiscal.desc'),
      details: [
        'Déclarations fiscales (IS, TVA, CFE...)',
        'Optimisation fiscale',
        'Assistance contrôle fiscal',
        'Conseil en structuration'
      ]
    },
    { 
      icon: Users, 
      title: t('missions.social'), 
      description: t('missions.social.desc'),
      details: [
        'Bulletins de paie',
        'Déclarations sociales',
        'Conseil en droit social',
        'Audit social'
      ]
    },
    { 
      icon: Scale, 
      title: t('missions.legal'), 
      description: t('missions.legal.desc'),
      details: [
        'Secrétariat juridique',
        'Rédaction d\'actes',
        'Assemblées générales',
        'Modifications statutaires'
      ]
    },
    { 
      icon: Monitor, 
      title: t('missions.it'), 
      description: t('missions.it.desc'),
      details: [
        'Conseil en systèmes d\'information',
        'Mise en place d\'outils de gestion',
        'Formation aux logiciels',
        'Dématérialisation'
      ]
    },
    { 
      icon: TrendingUp, 
      title: t('missions.consulting'), 
      description: t('missions.consulting.desc'),
      details: [
        'Tableaux de bord',
        'Prévisionnel',
        'Accompagnement stratégique',
        'Business plan'
      ]
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t('missions.title')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t('missions.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Missions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <mission.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {mission.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {mission.description}
                    </p>
                    <ul className="space-y-2">
                      {mission.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Commissariat aux Comptes */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Commissariat aux Comptes
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Claude Ponzini et Catherine Hanser sont également commissaires aux comptes inscrits auprès de la Compagnie Régionale de Paris.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">Audit légal</h4>
                  <p className="text-sm text-muted-foreground">Certification des comptes annuels</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">Missions spécifiques</h4>
                  <p className="text-sm text-muted-foreground">Apports, fusions, transformations</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">Attestations</h4>
                  <p className="text-sm text-muted-foreground">Rapports et attestations diverses</p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default MissionsPage;
