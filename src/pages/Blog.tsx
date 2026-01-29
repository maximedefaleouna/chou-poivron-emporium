import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-vegetables.jpg";
import conservationImg from "@/assets/mines/conservation.jpg";
import rotationImg from "@/assets/mines/rotation.jpg";
import spinachImg from "@/assets/spinach.jpg";

const articles = [
  {
    id: 1,
    title: "Les bienfaits des légumes de saison",
    excerpt:
      "Découvrez pourquoi consommer des légumes de saison est bon pour votre santé et pour la planète.",
    image: heroImg,
    date: "15 Janvier 2024",
    author: "Marie Martin",
    category: "Santé",
    readTime: "5 min",
    url: "https://thebeautyplantfactory.com/les-9-principaux-avantages-du-chou-des-informations-nutritionnelles-et-des-recettes-saines/", // Ajoutez une URL pour chaque article
  },
  {
    id: 2,
    title: "Comment conserver vos légumes plus longtemps",
    excerpt:
      "Nos astuces pour garder vos légumes frais et croquants pendant plusieurs semaines.",
    image: conservationImg,
    date: "10 Janvier 2024",
    author: "Jean Dupont",
    category: "Conseils",
    readTime: "4 min",
    url: "https://www.lesfruitsetlegumesfrais.com/bien-manger/comment-conserver-les-fruits-et-legumes-plus-longtemps",
  },
  {
    id: 3,
    title: "La rotation des cultures : notre secret",
    excerpt:
      "Comment nous préservons la qualité de nos sols grâce à des techniques ancestrales.",
    image: rotationImg,
    date: "5 Janvier 2024",
    author: "Pierre Bernard",
    category: "Agriculture",
    readTime: "6 min",
    url: "https://www.agrialpro.fr/blog/post/rotation-des-cultures-principes-avantages-et-exemples-pour-une-agriculture-durable",
  },
  {
    id: 4,
    title: "Les superaliments de votre potager",
    excerpt:
      "Ces légumes ordinaires aux propriétés nutritionnelles extraordinaires.",
    image: spinachImg,
    date: "28 Décembre 2023",
    author: "Marie Martin",
    category: "Nutrition",
    readTime: "7 min",
    url: "https://www.gerbeaud.com/sante/super-aliments-maison-bienfaits-conseils-de-culture,2177.html",
  },
];

const categories = [
  "Tous",
  "Santé",
  "Conseils",
  "Agriculture",
  "Nutrition",
  "Recettes",
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-28">
        {/* Hero */}
        <div className="bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Notre Blog
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conseils, astuces et actualités de notre ferme pour vous aider à
              mieux manger.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="container mx-auto py-8 ">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === "Tous" ? "default" : "outline"}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <div className="container mx-auto px-4 mb-12  ">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4">{articles[0].category}</Badge>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {articles[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {articles[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {articles[0].readTime}
                  </span>
                </div>
                <a
                  href={articles[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-fit gap-2">
                    Lire l'article
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* Si vous voulez aussi un lien pour voir plus d'articles */}
            <a
              href="https://exemple.com/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                Voir plus d'articles
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
