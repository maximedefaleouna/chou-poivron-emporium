import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChefHat, Flame } from "lucide-react";
import souptompoi from "@/assets/mines/soupetomatpoivre.jpg";
import courpoisaut from "@/assets/mines/courpoisaut.jpg";
import retpoi from "@/assets/mines/ratoullepoivre.jpg";
import carrotsImg from "@/assets/mines/carochourap.webp";
import choux from "@/assets/mines/choux.jpg";
import grachoux from "@/assets/mines/gratinchoux.jpg";

const recipes = [
  {
    id: 1,
    title: "Ratatouille aux Poivrons",
    description:
      "Un classique provençal avec nos poivrons frais et autres légumes.",
    image: retpoi, // Aubergine comme base pour la ratatouille
    time: "45 min",
    servings: 4,
    difficulty: "Facile",
    category: "Plat principal",
    url: "https://www.cuisineaz.com/recettes/ratatouille-de-poivrons-63126.aspx",
    product: "🫑 Poivron",
  },
  {
    id: 2,
    title: "Soupe de Tomates et Poivrons",
    description: "Un potage crémeux aux tomates et poivrons frais du jardin.",
    image: souptompoi,
    time: "30 min",
    servings: 6,
    difficulty: "Facile",
    category: "Soupe",
    url: "https://www.marmiton.org/recettes/recette_veloute-tomates-poivrons_45459.aspx",
    product: "🫑 Poivron",
  },
  {
    id: 3,
    title: "Courgettes et Poivrons Sautés",
    description: "Un accompagnement rapide et coloré avec nos poivrons.",
    image: courpoisaut,
    time: "20 min",
    servings: 4,
    difficulty: "Facile",
    category: "Accompagnement",
    url: "https://www.cuisineaz.com/recettes/poelee-de-courgettes-et-poivrons-au-parmesan-121720.aspx",
    product: "🫑 Poivron",
  },
  {
    id: 4,
    title: "Carottes et Chou Râpé",
    description: "Une salade croquante avec notre chou frais et carottes.",
    image: carrotsImg,
    time: "15 min",
    servings: 4,
    difficulty: "Facile",
    category: "Entrée",
    url: "https://www.cuisineaz.com/recettes/salade-de-chou-et-carotte-japonaise-121643.aspx",
    product: "🥬 Chou",
  },
  {
    id: 5,
    title: "Salade d'Épinards et Chou",
    description:
      "Une salade fraîche et nutritive avec des feuilles de chou jeune.",
    image: choux,
    time: "15 min",
    servings: 2,
    difficulty: "Facile",
    category: "Entrée",
    url: "https://www.cuisineaz.com/recettes/salade-au-chou-blanc-121978.aspx",
    product: "🥬 Chou",
  },
  {
    id: 6,
    title: "Gratin de Pommes de Terre et Chou",
    description: "Un gratin réconfortant avec des lamelles de chou fondant.",
    image: grachoux,
    time: "60 min",
    servings: 6,
    difficulty: "Moyen",
    category: "Plat principal",
    url: "https://www.marechal-fraicheur.fr/fr_FR/products/gratin-de-chou-blanc",
    product: "🥬 Chou",
  },
];

const categories = [
  "Toutes",
  "Entrée",
  "Soupe",
  "Plat principal",
  "Accompagnement",
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Facile":
      return "bg-primary/10 text-primary";
    case "Moyen":
      return "bg-accent text-accent-foreground";
    case "Difficile":
      return "bg-destructive/10 text-destructive";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Recettes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-28">
        {/* Hero */}
        <div className="bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Nos Recettes
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des idées pour cuisiner nos choux et poivrons frais de la ferme.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="container mx-auto px-4 py-8 text-center max-w-3xl">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Recettes mettant en valeur nos choux et poivrons
          </h2>
          <p className="text-muted-foreground">
            Bien que nos images montrent divers légumes, toutes ces recettes
            sont adaptées pour mettre en valeur la qualité exceptionnelle de nos
            choux croquants et poivrons colorés, cultivés avec passion dans
            notre ferme.
          </p>
        </div>

        {/* Categories */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === "Toutes" ? "default" : "outline"}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <a
                key={recipe.id}
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full cursor-pointer">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      {/* <Badge variant="secondary">{recipe.category}</Badge> */}
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="outline"
                        className="bg-background/80 backdrop-blur-sm"
                      >
                        {recipe.product}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {recipe.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {recipe.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {recipe.servings}
                        </span>
                      </div>
                      <Badge className={getDifficultyColor(recipe.difficulty)}>
                        {recipe.difficulty}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://exemple.com/recettes-choux-poivrons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                Voir plus de recettes
              </Button>
            </a>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-accent/10 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              Astuces pour nos produits
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <ChefHat className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      Avec nos Choux
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Nos choux sont particulièrement croquants et savoureux.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Idéal pour les salades crues émincées finement</li>
                    <li>• Parfait dans les soupes et potages</li>
                    <li>• Excellent farci ou en gratin</li>
                    <li>• Se marie bien avec les pommes et noix</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Flame className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      Avec nos Poivrons
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Nos poivrons offrent des couleurs vives et un goût sucré
                    unique.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Parfaits grillés, farcis ou sautés</li>
                    <li>• Apportent couleur et croquant aux plats</li>
                    <li>• Excellents marinés dans l'huile d'olive</li>
                    <li>• Se déclinent en rouge, jaune et vert</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recettes;
