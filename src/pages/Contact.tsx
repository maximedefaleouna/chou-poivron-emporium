import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-28">
        {/* Hero */}
        <div className="bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Contactez-nous
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une question ? Une suggestion ? Nous sommes là pour vous aider.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Téléphone
                      </h3>
                      <p className="text-muted-foreground">+228 92 52 20 29</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Du lundi au vendredi, 9h-18h
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">
                        shalomtagba@gmail.com
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Réponse sous 24h
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Adresse</h3>
                      <p className="text-muted-foreground">123 Tchanadè</p>
                      <p className="text-muted-foreground">31000 Kara, Togo</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Horaires d'ouverture
                      </h3>
                      <p className="text-muted-foreground">
                        Lundi - Vendredi : 9h - 18h
                      </p>
                      <p className="text-muted-foreground">
                        Samedi : 9h - 13h (visites)
                      </p>
                      <p className="text-muted-foreground">Dimanche : Fermé</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Envoyez-nous un message
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-foreground"
                        >
                          Prénom *
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Votre prénom"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium text-foreground"
                        >
                          Nom *
                        </label>
                        <Input id="lastName" placeholder="Votre nom" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Téléphone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+228 __ __ __ __"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground"
                      >
                        Sujet *
                      </label>
                      <Input
                        id="subject"
                        placeholder="Objet de votre message"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Votre message..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full gap-2">
                      <Send className="h-4 w-4" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
              Nous trouver
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden bg-accent">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6980718283965!2d1.1862501750031757!3d9.027188888950956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102e42e1e10819b9%3A0xdf2d2e979304d53c!2sKara%2C%20Togo!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Notre localisation à Kara, Togo"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
