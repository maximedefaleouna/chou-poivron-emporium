import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChefHat, Flame } from "lucide-react";
import tomatoesImg from "@/assets/tomatoes.jpg";
import zucchiniImg from "@/assets/zucchini.jpg";
import eggplantImg from "@/assets/eggplant.jpg";
import carrotsImg from "@/assets/carrots.jpg";
import spinachImg from "@/assets/spinach.jpg";
import potatoesImg from "@/assets/potatoes.jpg";

const recipes = [
  {
    id: 1,
    title: "Ratatouille Provençale",
    description: "La recette traditionnelle avec nos légumes du soleil.",
    image: eggplantImg,
    time: "45 min",
    servings: 4,
    difficulty: "Facile",
    category: "Plat principal"
  },
  {
    id: 2,
    title: "Velouté de Tomates",
    description: "Un potage crémeux aux tomates fraîches du jardin.",
    image: tomatoesImg,
    time: "30 min",
    servings: 6,
    difficulty: "Facile",
    category: "Soupe"
  },
  {
    id: 3,
    title: "Courgettes Farcies",
    description: "Courgettes garnies d'un mélange savoureux.",
    image: zucchiniImg,
    time: "50 min",
    servings: 4,
    difficulty: "Moyen",
    category: "Plat principal"
  },
  {
    id: 4,
    title: "Carottes Glacées",
    description: "Un accompagnement sucré-salé irrésistible.",
    image: carrotsImg,
    time: "25 min",
    servings: 4,
    difficulty: "Facile",
    category: "Accompagnement"
  },
  {
    id: 5,
    title: "Salade d'Épinards",
    description: "Une salade fraîche et nutritive.",
    image: spinachImg,
    time: "15 min",
    servings: 2,
    difficulty: "Facile",
    category: "Entrée"
  },
  {
    id: 6,
    title: "Gratin Dauphinois",
    description: "Le classique français avec nos pommes de terre.",
    image: potatoesImg,
    time: "60 min",
    servings: 6,
    difficulty: "Moyen",
    category: "Accompagnement"
  },
];

const categories = ["Toutes", "Entrée", "Soupe", "Plat principal", "Accompagnement", "Dessert"];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Facile": return "bg-primary/10 text-primary";
    case "Moyen": return "bg-accent text-accent-foreground";
    case "Difficile": return "bg-destructive/10 text-destructive";
    default: return "bg-muted text-muted-foreground";
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
              Des idées simples et délicieuses pour sublimer nos légumes de saison.
            </p>
          </div>
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
              <Card key={recipe.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary">{recipe.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{recipe.description}</p>
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
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Voir plus de recettes
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recettes;
