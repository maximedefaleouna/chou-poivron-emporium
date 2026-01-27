import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Choux
import cabbageImg from "@/assets/cabbage.jpg";
import redCabbageImg from "@/assets/red-cabbage.jpg";
import savoyCabbageImg from "@/assets/savoy-cabbage.jpg";
import napaCabbageImg from "@/assets/napa-cabbage.jpg";
import whiteCabbageImg from "@/assets/white-cabbage.jpg";
import brusselsSproutsImg from "@/assets/brussels-sprouts.jpg";

// Poivrons
import peppersImg from "@/assets/peppers.jpg";
import redPeppersImg from "@/assets/red-peppers.jpg";
import yellowPeppersImg from "@/assets/yellow-peppers.jpg";
import greenPeppersImg from "@/assets/green-peppers.jpg";
import orangePeppersImg from "@/assets/orange-peppers.jpg";
import miniPeppersImg from "@/assets/mini-peppers.jpg";

const products = [
  // Choux
  {
    id: 1,
    name: "Chou Vert Bio",
    description: "Chou vert classique cultivé sans pesticides, idéal pour les potées traditionnelles et les salades croquantes.",
    price: "2.50",
    unit: "pièce",
    image: cabbageImg,
    category: "Choux",
    badge: "Populaire",
  },
  {
    id: 2,
    name: "Chou Rouge Bio",
    description: "Magnifique chou rouge aux reflets violets, parfait pour les salades colorées et la choucroute maison.",
    price: "2.90",
    unit: "pièce",
    image: redCabbageImg,
    category: "Choux",
  },
  {
    id: 3,
    name: "Chou de Milan",
    description: "Chou frisé aux feuilles gaufrées, texture tendre et saveur douce. Excellent braisé ou en potée.",
    price: "3.20",
    unit: "pièce",
    image: savoyCabbageImg,
    category: "Choux",
    badge: "Nouveau",
  },
  {
    id: 4,
    name: "Chou Chinois (Napa)",
    description: "Chou allongé aux feuilles tendres, incontournable pour les plats asiatiques et les woks.",
    price: "3.50",
    unit: "pièce",
    image: napaCabbageImg,
    category: "Choux",
  },
  {
    id: 5,
    name: "Chou Blanc Bio",
    description: "Chou blanc traditionnel, parfait pour la choucroute, les salades ou les potées d'hiver.",
    price: "2.20",
    unit: "pièce",
    image: whiteCabbageImg,
    category: "Choux",
  },
  {
    id: 6,
    name: "Choux de Bruxelles",
    description: "Mini-choux savoureux, délicieux rôtis au four ou sautés avec des lardons.",
    price: "4.90",
    unit: "kg",
    image: brusselsSproutsImg,
    category: "Choux",
    badge: "Premium",
  },
  // Poivrons
  {
    id: 7,
    name: "Poivrons Multicolores",
    description: "Assortiment de poivrons rouges, jaunes et verts, croquants et sucrés. Parfaits pour toutes vos recettes.",
    price: "4.90",
    unit: "kg",
    image: peppersImg,
    category: "Poivrons",
    badge: "Best-seller",
  },
  {
    id: 8,
    name: "Poivrons Rouges Bio",
    description: "Poivrons rouges mûrs à point, les plus sucrés de tous. Excellents grillés ou farcis.",
    price: "5.50",
    unit: "kg",
    image: redPeppersImg,
    category: "Poivrons",
    badge: "Populaire",
  },
  {
    id: 9,
    name: "Poivrons Jaunes Bio",
    description: "Poivrons jaunes soleil, doux et juteux. Apportent couleur et saveur à vos plats.",
    price: "5.50",
    unit: "kg",
    image: yellowPeppersImg,
    category: "Poivrons",
  },
  {
    id: 10,
    name: "Poivrons Verts Bio",
    description: "Poivrons verts croquants au goût légèrement herbacé. Parfaits pour les sautés et les farcis.",
    price: "4.50",
    unit: "kg",
    image: greenPeppersImg,
    category: "Poivrons",
  },
  {
    id: 11,
    name: "Poivrons Orange Bio",
    description: "Poivrons orange sucrés et fruités, excellents crus en apéritif ou dans les salades.",
    price: "5.90",
    unit: "kg",
    image: orangePeppersImg,
    category: "Poivrons",
    badge: "Nouveau",
  },
  {
    id: 12,
    name: "Mini Poivrons Sucrés",
    description: "Petits poivrons multicolores extra-sucrés, parfaits pour l'apéritif ou les enfants.",
    price: "6.90",
    unit: "kg",
    image: miniPeppersImg,
    category: "Poivrons",
    badge: "Premium",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🥬 Du potager à l'assiette
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Nos Produits Frais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Spécialistes des choux et poivrons bio depuis plus de 35 ans. Une réputation bâtie sur la qualité et la fraîcheur.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              unit={product.unit}
              image={product.image}
              category={product.category}
              badge={product.badge}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/produits">Voir tous nos produits</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
