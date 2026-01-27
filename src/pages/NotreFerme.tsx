import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Award, Users, Truck, Heart, Sun, Droplets, TreeDeciduous } from "lucide-react";
import heroImg from "@/assets/hero-vegetables.jpg";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Leaf,
    title: "100% Bio",
    description: "Tous nos légumes sont certifiés agriculture biologique, sans pesticides ni engrais chimiques."
  },
  {
    icon: Sun,
    title: "Circuit Court",
    description: "De notre ferme à votre table en moins de 24h pour une fraîcheur optimale."
  },
  {
    icon: Droplets,
    title: "Respect de l'Eau",
    description: "Système d'irrigation goutte-à-goutte et récupération d'eau de pluie."
  },
  {
    icon: TreeDeciduous,
    title: "Biodiversité",
    description: "Nous préservons la biodiversité avec des haies et des zones sauvages."
  }
];

const team = [
  { name: "Jean Dupont", role: "Fondateur & Agriculteur", description: "40 ans d'expérience en agriculture biologique" },
  { name: "Marie Martin", role: "Responsable Production", description: "Ingénieure agronome passionnée" },
  { name: "Pierre Bernard", role: "Chef Logistique", description: "Garantit la fraîcheur de vos livraisons" },
];

const NotreFerme = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-28">
        {/* Hero */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img 
            src={heroImg} 
            alt="Notre ferme" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <div className="text-center text-background px-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Notre Ferme</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
                Une histoire de passion, de tradition et de respect de la terre depuis 1985
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium">Notre Histoire</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
                  Trois générations de savoir-faire
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fondée en 1985 par Jean Dupont, notre ferme familiale perpétue un héritage de qualité 
                    et de respect de l'environnement. Ce qui a commencé comme un petit potager est devenu 
                    une exploitation de 25 hectares, toujours en agriculture biologique.
                  </p>
                  <p>
                    Aujourd'hui, la troisième génération reprend le flambeau avec la même passion et 
                    les mêmes valeurs : produire des légumes sains, savoureux et respectueux de la planète.
                  </p>
                  <p>
                    Nous cultivons plus de 40 variétés de légumes, récoltés à la main chaque matin 
                    pour vous garantir une fraîcheur incomparable.
                  </p>
                </div>
                <Button asChild className="mt-6">
                  <Link to="/contact">Visitez notre ferme</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="bg-primary/10 border-0">
                    <CardContent className="p-6 text-center">
                      <span className="text-4xl font-bold text-primary">40+</span>
                      <p className="text-sm text-muted-foreground mt-1">Années d'expérience</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-accent border-0">
                    <CardContent className="p-6 text-center">
                      <span className="text-4xl font-bold text-primary">25</span>
                      <p className="text-sm text-muted-foreground mt-1">Hectares cultivés</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4 pt-8">
                  <Card className="bg-accent border-0">
                    <CardContent className="p-6 text-center">
                      <span className="text-4xl font-bold text-primary">40+</span>
                      <p className="text-sm text-muted-foreground mt-1">Variétés de légumes</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/10 border-0">
                    <CardContent className="p-6 text-center">
                      <span className="text-4xl font-bold text-primary">5000+</span>
                      <p className="text-sm text-muted-foreground mt-1">Clients satisfaits</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-medium">Nos Valeurs</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                Notre engagement pour la qualité
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="border-0 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-medium">Notre Équipe</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                Les visages derrière vos légumes
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="aspect-square bg-accent flex items-center justify-center">
                    <Users className="h-20 w-20 text-primary/30" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-serif font-bold text-foreground">{member.name}</h3>
                    <p className="text-primary text-sm font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-2">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Envie de visiter notre ferme ?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Nous organisons des visites guidées tous les samedis. Venez découvrir nos méthodes 
              de culture et repartez avec un panier de légumes frais !
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Réserver une visite</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotreFerme;
