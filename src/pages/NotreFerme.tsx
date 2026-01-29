import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Users,
  Truck,
  Heart,
  Sun,
  Droplets,
  TreeDeciduous,
  Sparkles,
  Target,
  Clock,
  MapPin,
} from "lucide-react";
import heroImg from "@/assets/mines/ferme.jpg";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Leaf,
    title: "100% Bio & Local",
    description:
      "Légumes cultivés sans pesticides ni engrais chimiques, directement de notre terre à votre table.",
  },
  {
    icon: Heart,
    title: "Cultivé avec Passion",
    description:
      "Chaque légume est soigné avec attention, du semis à la récolte.",
  },
  {
    icon: Droplets,
    title: "Irrigation Responsable",
    description:
      "Système d'arrosage optimisé et récupération d'eau de pluie pour préserver la ressource.",
  },
  {
    icon: Sparkles,
    title: "Fraîcheur Garantie",
    description:
      "Récolté le matin même, livré dans la journée. Une fraîcheur que vous sentirez !",
  },
];

const qualities = [
  {
    title: "Transparence Totale",
    description:
      "Vous savez exactement d'où viennent vos légumes et comment ils sont cultivés.",
  },
  {
    title: "Relation Directe",
    description: "Pas d'intermédiaire, vous achetez directement au producteur.",
  },
  {
    title: "Saisonnalité Respectée",
    description:
      "Nous cultivons selon les cycles naturels, sans forcer la nature.",
  },
  {
    title: "Emballages Écoresponsables",
    description: "Des paniers réutilisables et des emballages biodégradables.",
  },
];

const NotreFerme = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 ">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-foreground/40" />
          </div>

          <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-center text-background px-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                Notre Aventure
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
                Une passion simple : cultiver des légumes bons, sains et
                accessibles
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium">
                  Notre Engagement
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
                  Au service du goût
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Notre activité repose sur un circuit direct : de notre ferme
                    à votre table. Nous produisons à Kara pour garantir une
                    fraîcheur maximale et une disponibilité rapide de nos
                    produits.
                  </p>
                  <p>
                    Nous avons mis en place un système simple pour nos clients :
                    des commandes accessibles dès 500 F et une logistique qui
                    couvre toute la ville de Kara ainsi que des expéditions
                    régulières.
                  </p>
                  <p>
                    Le sérieux et la réactivité sont nos priorités. Que ce soit
                    pour le paiement par Mobile Money ou la livraison à
                    domicile, nous faisons en sorte que l'accès à nos produits
                    soit le plus fluide possible.
                  </p>
                </div>
                <Button asChild className="mt-6">
                  <Link to="/produits">Découvrir nos légumes</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="bg-primary/10 border-0">
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Target className="h-5 w-5 text-primary" />
                        <span className="text-4xl font-bold text-primary">
                          100%
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Engagement bio
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-accent border-0">
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-4xl font-bold text-primary">
                          &lt;24h
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        De la terre à vous
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4 pt-8">
                  <Card className="bg-accent border-0">
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-4xl font-bold text-primary">
                          0km
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Circuit ultra-court
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/10 border-0">
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Heart className="h-5 w-5 text-primary" />
                        <span className="text-4xl font-bold text-primary">
                          ∞
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        De passion
                      </p>
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
              <span className="text-primary font-medium">
                Ce qui nous guide
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                Des valeurs simples et sincères
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="border-0 bg-card hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Notre Approche */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-medium">Notre Approche</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                Pourquoi nous sommes différents
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <Card className="border-0 bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-foreground text-xl mb-4">
                      Simplicité et Authenticité
                    </h3>
                    <p className="text-muted-foreground">
                      Nous ne sommes pas une grande exploitation. C'est ce qui
                      fait notre force : nous pouvons donner à chaque légume
                      l'attention qu'il mérite, sans compromis sur la qualité.
                      Pas de marketing sophistiqué, juste des produits honnêtes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-foreground text-xl mb-4">
                      Projet humain
                    </h3>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-3">
                          Derrière cette ferme, il y a avant tout des personnes,
                          la passion, la volonté et le désir.
                        </p>
                        <p className="text-muted-foreground">
                          Nous travaillons chaque jour pour produire des légumes
                          de qualité en mettant tout notre cœur dans ce que nous
                          cultivons.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-foreground text-xl mb-4">
                      Ce que vous obtenez
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {qualities.map((quality, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">
                              {quality.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {quality.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Process */}
        <section className="py-16 md:py-24 bg-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-medium">Notre Processus</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                Comment ça marche
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Sun className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground mb-2">
                    1. La Culture
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sélection minutieuse des semences, culture bio, soins
                    quotidiens par notre agriculteur passionné.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground mb-2">
                    2. La Récolte
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Récolte manuelle le matin même, à parfaite maturité, pour
                    préserver tout le goût et les nutriments.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground mb-2">
                    3. La Livraison
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Préparation soignée et livraison rapide pour que vos légumes
                    arrivent aussi frais que s'ils venaient de votre jardin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Prêt à goûter la différence ?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Commandez votre premier panier de légumes et découvrez ce que
              "frais" veut vraiment dire. Sans engagement, juste pour le
              plaisir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/produits">Voir nos légumes</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">Poser une question</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotreFerme;
