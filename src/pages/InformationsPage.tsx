import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InformationsPage = () => {
  const { t } = useLanguage();

  const fiscalData = [
    { label: 'Barème IR 2024', value: '0% → 45%', description: '5 tranches d\'imposition' },
    { label: 'Taux IS PME', value: '15% / 25%', description: 'Jusqu\'à 42 500€ / au-delà' },
    { label: 'TVA normale', value: '20%', description: 'Taux standard' },
    { label: 'TVA intermédiaire', value: '10%', description: 'Travaux, restauration...' },
    { label: 'TVA réduite', value: '5,5%', description: 'Produits de première nécessité' },
    { label: 'Prélèvement forfaitaire', value: '30%', description: 'Flat tax sur revenus financiers' },
  ];

  const socialData = [
    { label: 'SMIC horaire brut', value: '11,65 €', description: 'Au 1er janvier 2024' },
    { label: 'SMIC mensuel brut', value: '1 766,92 €', description: 'Base 35h' },
    { label: 'Plafond Sécurité Sociale', value: '3 864 €/mois', description: 'PSS 2024' },
    { label: 'Indemnité transport', value: '50%', description: 'Part employeur obligatoire' },
    { label: 'Mutuelle obligatoire', value: '50%', description: 'Part employeur minimum' },
    { label: 'Ticket restaurant', value: '60% max', description: 'Part employeur' },
  ];

  const legalData = [
    { label: 'Taux d\'intérêt légal', value: '4,22%', description: 'Particuliers - 1er semestre 2024' },
    { label: 'Taux BCE', value: '4,50%', description: 'Taux directeur' },
    { label: 'Capital min. SAS', value: '1 €', description: 'Librement fixé par statuts' },
    { label: 'Capital min. SARL', value: '1 €', description: 'Librement fixé par statuts' },
  ];

  const patrimonialData = [
    { label: 'IRL (T4 2023)', value: '142,06', description: 'Indice de Référence des Loyers' },
    { label: 'ICC (T3 2023)', value: '2 182', description: 'Indice Coût Construction' },
    { label: 'ILAT (T3 2023)', value: '132,47', description: 'Bureaux et activités' },
    { label: 'Livret A', value: '3%', description: 'Taux en vigueur' },
  ];

  const newsItems = [
    {
      title: 'Loi de finances 2024',
      date: 'Janvier 2024',
      summary: 'Les principales mesures fiscales pour les entreprises et les particuliers.'
    },
    {
      title: 'Réforme de la facturation électronique',
      date: 'Décembre 2023',
      summary: 'Report et nouvelles modalités d\'application pour les entreprises.'
    },
    {
      title: 'Nouveau plafond Sécurité Sociale',
      date: 'Janvier 2024',
      summary: 'Revalorisation du plafond de la Sécurité Sociale pour 2024.'
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t('info.title')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Retrouvez les chiffres clés et les actualités pour votre entreprise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="fiscal" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="fiscal">{t('info.fiscal')}</TabsTrigger>
              <TabsTrigger value="social">{t('info.social')}</TabsTrigger>
              <TabsTrigger value="legal">{t('info.legal')}</TabsTrigger>
              <TabsTrigger value="patrimonial">{t('info.patrimonial')}</TabsTrigger>
            </TabsList>

            <TabsContent value="fiscal">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fiscalData.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.05}>
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-2xl font-bold text-primary">{item.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="social">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {socialData.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.05}>
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-2xl font-bold text-primary">{item.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="legal">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {legalData.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.05}>
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-2xl font-bold text-primary">{item.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="patrimonial">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {patrimonialData.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.05}>
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-2xl font-bold text-primary">{item.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('info.news')}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.summary}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InformationsPage;
