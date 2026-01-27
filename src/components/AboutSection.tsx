import { Leaf, Heart, Truck, Award } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Biologique",
    description: "Cultivé sans pesticides ni produits chimiques"
  },
  {
    icon: Heart,
    title: "Passion Familiale",
    description: "3 générations de savoir-faire agricole"
  },
  {
    icon: Truck,
    title: "Livraison Fraîche",
    description: "Livraison le jour même de la récolte"
  },
  {
    icon: Award,
    title: "Qualité Certifiée",
    description: "Label Agriculture Biologique certifié"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wider">Notre Histoire</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Une Ferme, Une Passion
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Depuis plus de 50 ans, notre famille cultive avec amour ces terres fertiles. 
            Nous croyons en une agriculture respectueuse de l'environnement qui produit 
            des légumes au goût authentique.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-card p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
