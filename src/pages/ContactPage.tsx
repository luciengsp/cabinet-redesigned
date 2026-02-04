import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Printer, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Le nom est requis').max(100, 'Le nom est trop long'),
  firstname: z.string().trim().min(1, 'Le prénom est requis').max(100, 'Le prénom est trop long'),
  email: z.string().trim().email('Email invalide').max(255, 'Email trop long'),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(1, 'Le sujet est requis').max(200, 'Le sujet est trop long'),
  message: z.string().trim().min(10, 'Le message doit faire au moins 10 caractères').max(2000, 'Le message est trop long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      firstname: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    
    try {
      // Using Formspree - Replace with your form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          firstname: data.firstname,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Notre équipe est à votre disposition pour répondre à vos questions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <AnimatedSection direction="left" className="lg:col-span-1">
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Coordonnées
                </h2>
                
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">{t('contact.address')}</p>
                        <p className="text-muted-foreground text-sm">
                          9 rue de Clichy<br />75009 Paris
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">{t('contact.phone')}</p>
                        <a href="tel:+33142657722" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                          01 42 65 77 22
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Printer className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">{t('contact.fax')}</p>
                        <p className="text-muted-foreground text-sm">01 42 65 77 55</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Email</p>
                        <a href="mailto:contact@cabinet-ph.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                          contact@cabinet-ph.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Envoyez-nous un message
                  </h2>

                  {status === 'success' && (
                    <Alert className="mb-6 border-primary/30 bg-primary/5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <AlertDescription className="text-foreground">
                        {t('contact.form.success')}
                      </AlertDescription>
                    </Alert>
                  )}

                  {status === 'error' && (
                    <Alert variant="destructive" className="mb-6">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        {t('contact.form.error')}
                      </AlertDescription>
                    </Alert>
                  )}

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('contact.form.name')}</FormLabel>
                              <FormControl>
                                <Input placeholder="Dupont" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="firstname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('contact.form.firstname')}</FormLabel>
                              <FormControl>
                                <Input placeholder="Jean" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('contact.form.email')}</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="jean.dupont@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('contact.form.phone')}</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="01 23 45 67 89" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.subject')}</FormLabel>
                            <FormControl>
                              <Input placeholder="Demande de rendez-vous" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.message')}</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Votre message..." 
                                className="min-h-[150px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full sm:w-auto"
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? (
                          'Envoi en cours...'
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {t('contact.form.submit')}
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-muted">
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
      </section>
    </div>
  );
};

export default ContactPage;
