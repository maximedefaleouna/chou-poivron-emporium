import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  unit: string;
  image: string;
  category?: string;
  badge?: string;
}

const ProductCard = ({ 
  name, 
  description, 
  price, 
  unit, 
  image, 
  category,
  badge
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 bg-card">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary text-primary-foreground">{badge}</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        {category && (
          <span className="text-xs text-primary font-medium uppercase tracking-wide">
            {category}
          </span>
        )}
        <h3 className="font-serif text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {description}
        </p>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="text-xl font-bold text-primary">{price}€</span>
          <span className="text-sm text-muted-foreground">/ {unit}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
