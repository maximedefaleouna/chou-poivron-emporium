import heroImage from "@/assets/mines/hero.jpg";
import { Button } from "@/components/ui/button";
import { Leaf, ShoppingBasket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="text-primary font-semibold text-lg">
            100% Bio & Local
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Des Légumes Frais
          <br />
          <span className="text-primary">Direct du Potager</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Découvrez nos choux croquants et nos poivrons , cultivés avec passion
          dans notre jardin. Qualité et fraîcheur garanties.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2 text-lg px-8 py-6">
            <ShoppingBasket className="h-5 w-5" />
            Voir nos produits
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10"
          >
            En savoir plus
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
