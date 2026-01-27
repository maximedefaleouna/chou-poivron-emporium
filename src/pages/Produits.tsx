import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, Grid3X3, List } from "lucide-react";

// // Choux
// import cabbageImg from "@/assets/cabbage.jpg";
// import redCabbageImg from "@/assets/red-cabbage.jpg";
// import savoyCabbageImg from "@/assets/savoy-cabbage.jpg";
// import napaCabbageImg from "@/assets/napa-cabbage.jpg";
// import whiteCabbageImg from "@/assets/white-cabbage.jpg";
// import brusselsSproutsImg from "@/assets/brussels-sprouts.jpg";

// // Poivrons
// import peppersImg from "@/assets/peppers.jpg";
// import redPeppersImg from "@/assets/red-peppers.jpg";
// import yellowPeppersImg from "@/assets/yellow-peppers.jpg";
// import greenPeppersImg from "@/assets/green-peppers.jpg";
// import orangePeppersImg from "@/assets/orange-peppers.jpg";
// import miniPeppersImg from "@/assets/mini-peppers.jpg";

// const allProducts = [
//   // Choux
//   { id: 1, name: "Chou Vert Bio", description: "Chou vert classique cultivé sans pesticides, idéal pour les potées traditionnelles et les salades croquantes.", price: "2.50", unit: "pièce", image: cabbageImg, category: "Choux", badge: "Populaire" },
//   { id: 2, name: "Chou Rouge Bio", description: "Magnifique chou rouge aux reflets violets, parfait pour les salades colorées et la choucroute maison.", price: "2.90", unit: "pièce", image: redCabbageImg, category: "Choux" },
//   { id: 3, name: "Chou de Milan", description: "Chou frisé aux feuilles gaufrées, texture tendre et saveur douce. Excellent braisé ou en potée.", price: "3.20", unit: "pièce", image: savoyCabbageImg, category: "Choux", badge: "Nouveau" },
//   { id: 4, name: "Chou Chinois (Napa)", description: "Chou allongé aux feuilles tendres, incontournable pour les plats asiatiques et les woks.", price: "3.50", unit: "pièce", image: napaCabbageImg, category: "Choux" },
//   { id: 5, name: "Chou Blanc Bio", description: "Chou blanc traditionnel, parfait pour la choucroute, les salades ou les potées d'hiver.", price: "2.20", unit: "pièce", image: whiteCabbageImg, category: "Choux" },
//   { id: 6, name: "Choux de Bruxelles", description: "Mini-choux savoureux, délicieux rôtis au four ou sautés avec des lardons.", price: "4.90", unit: "kg", image: brusselsSproutsImg, category: "Choux", badge: "Premium" },
//   // Poivrons
//   { id: 7, name: "Poivrons Multicolores", description: "Assortiment de poivrons rouges, jaunes et verts, croquants et sucrés.", price: "4.90", unit: "kg", image: peppersImg, category: "Poivrons", badge: "Best-seller" },
//   { id: 8, name: "Poivrons Rouges Bio", description: "Poivrons rouges mûrs à point, les plus sucrés de tous. Excellents grillés ou farcis.", price: "5.50", unit: "kg", image: redPeppersImg, category: "Poivrons", badge: "Populaire" },
//   { id: 9, name: "Poivrons Jaunes Bio", description: "Poivrons jaunes soleil, doux et juteux. Apportent couleur et saveur à vos plats.", price: "5.50", unit: "kg", image: yellowPeppersImg, category: "Poivrons" },
//   { id: 10, name: "Poivrons Verts Bio", description: "Poivrons verts croquants au goût légèrement herbacé. Parfaits pour les sautés et farcis.", price: "4.50", unit: "kg", image: greenPeppersImg, category: "Poivrons" },
//   { id: 11, name: "Poivrons Orange Bio", description: "Poivrons orange sucrés et fruités, excellents crus en apéritif ou dans les salades.", price: "5.90", unit: "kg", image: orangePeppersImg, category: "Poivrons", badge: "Nouveau" },
//   { id: 12, name: "Mini Poivrons Sucrés", description: "Petits poivrons multicolores extra-sucrés, parfaits pour l'apéritif ou les enfants.", price: "6.90", unit: "kg", image: miniPeppersImg, category: "Poivrons", badge: "Premium" },
// ];

// Choux
import cabbageImg from "@/assets/cabbage.jpg";
import redCabbageImg from "@/assets/mines/img5.jpeg";
import savoyCabbageImg from "@/assets/mines/img9.jpeg";
import napaCabbageImg from "@/assets/napa-cabbage.jpg";
import whiteCabbageImg from "@/assets/white-cabbage.jpg";
import brusselsSproutsImg from "@/assets/mines/img6.jpeg";
import greenChoux from "@/assets/mines/img12.jpeg";

// Poivrons
import peppersImg from "@/assets/peppers.jpg";
import redPeppersImg from "@/assets/mines/img7.jpeg";
import yellowPeppersImg from "@/assets/mines/img4.jpeg";
import greenPeppersImg from "@/assets/green-peppers.jpg";
import orangePeppersImg from "@/assets/mines/img10.png";
import miniPeppersImg from "@/assets/mines/img11.jpg";

const allProducts = [
  // Choux
  {
    id: 1,
    name: "Chou Vert Bio",
    description:
      "Chou vert classique cultivé sans pesticides, idéal pour les potées traditionnelles et les salades croquantes.",
    price: "2.50",
    unit: "pièce",
    image: cabbageImg,
    category: "Choux",
    badge: "Populaire",
  },
  {
    id: 2,
    name: "Chou Rouge Bio",
    description:
      "Magnifique chou rouge aux reflets violets, parfait pour les salades colorées et la choucroute maison.",
    price: "2.90",
    unit: "pièce",
    image: redCabbageImg,
    category: "Choux",
  },
  {
    id: 3,
    name: "Chou de Milan",
    description:
      "Chou frisé aux feuilles gaufrées, texture tendre et saveur douce. Excellent braisé ou en potée.",
    price: "3.20",
    unit: "pièce",
    image: savoyCabbageImg,
    category: "Choux",
    badge: "Nouveau",
  },
  {
    id: 4,
    name: "Chou Chinois (Napa)",
    description:
      "Chou allongé aux feuilles tendres, incontournable pour les plats asiatiques et les woks.",
    price: "3.50",
    unit: "pièce",
    image: napaCabbageImg,
    category: "Choux",
  },
  {
    id: 5,
    name: "Chou Blanc Bio",
    description:
      "Chou blanc traditionnel, parfait pour la choucroute, les salades ou les potées d'hiver.",
    price: "2.20",
    unit: "pièce",
    image: whiteCabbageImg,
    category: "Choux",
  },
  {
    id: 6,
    name: "Choux de Bruxelles",
    description:
      "Mini-choux savoureux, délicieux rôtis au four ou sautés avec des lardons.",
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
    description:
      "Assortiment de poivrons rouges, jaunes et verts, croquants et sucrés. Parfaits pour toutes vos recettes.",
    price: "4.90",
    unit: "kg",
    image: greenPeppersImg,
    category: "Poivrons",
    badge: "Best-seller",
  },
  {
    id: 8,
    name: "Poivrons Rouges Bio",
    description:
      "Poivrons rouges mûrs à point, les plus sucrés de tous. Excellents grillés ou farcis.",
    price: "5.50",
    unit: "kg",
    image: redPeppersImg,
    category: "Poivrons",
    badge: "Populaire",
  },
  {
    id: 9,
    name: "Poivrons Jaunes Bio",
    description:
      "Poivrons jaunes soleil, doux et juteux. Apportent couleur et saveur à vos plats.",
    price: "5.50",
    unit: "kg",
    image: greenChoux,
    category: "Choux",
  },
  {
    id: 10,
    name: "Poivrons Verts Bio",
    description:
      "Poivrons verts croquants au goût légèrement herbacé. Parfaits pour les sautés et les farcis.",
    price: "4.50",
    unit: "kg",
    image: yellowPeppersImg,
    category: "Poivrons",
  },
  {
    id: 11,
    name: "Poivrons Orange Bio",
    description:
      "Poivrons orange sucrés et fruités, excellents crus en apéritif ou dans les salades.",
    price: "5.90",
    unit: "kg",
    image: orangePeppersImg,
    category: "Poivrons",
    badge: "Nouveau",
  },
  {
    id: 12,
    name: "Mini Poivrons Sucrés",
    description:
      "Petits poivrons multicolores extra-sucrés, parfaits pour l'apéritif ou les enfants.",
    price: "6.90",
    unit: "kg",
    image: miniPeppersImg,
    category: "Poivrons",
    badge: "Premium",
  },
];
const categories = ["Tous", "Choux", "Poivrons"];

const Produits = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "Tous" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-28">
        {/* Hero Banner */}
        <div className="bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Nos Choux & Poivrons
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Spécialistes depuis 35 ans, nous cultivons les meilleurs choux et
              poivrons bio de la région. Une réputation d'excellence.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un produit..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === "Tous"
                    ? "🥬 Tous"
                    : cat === "Choux"
                      ? "🥬 Choux"
                      : "🫑 Poivrons"}
                </Button>
              ))}
            </div>

            {/* View Mode */}
            <div className="hidden md:flex gap-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            {filteredProducts.length} produit
            {filteredProducts.length > 1 ? "s" : ""} trouvé
            {filteredProducts.length > 1 ? "s" : ""}
          </p>

          {/* Products Grid */}
          <div
            className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}
          >
            {filteredProducts.map((product) => (
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Aucun produit trouvé pour cette recherche.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Produits;
