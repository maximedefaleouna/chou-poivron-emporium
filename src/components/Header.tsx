import { Button } from "@/components/ui/button";
import { Leaf, Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const productCategories = [
    { name: "🥬 Nos Choux", href: "/produits?cat=Choux" },
    { name: "🫑 Nos Poivrons", href: "/produits?cat=Poivrons" },
  ];

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Produits", href: "/produits", hasDropdown: true },
    { name: "Notre Ferme", href: "/notre-ferme" },
    { name: "Blog", href: "/blog" },
    { name: "Recettes", href: "/recettes" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+33123456789" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span>01 23 45 67 89</span>
              </a>
              <a href="mailto:contact@legumes-frais.fr" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4" />
                <span>contact@legumes-frais.fr</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span>🚚 Livraison gratuite dès 50€</span>
              <span>🌱 100% Bio & Local</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold text-foreground">Légumes Frais</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Depuis 1985</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger asChild>
                      <button className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${isActive(link.href) ? 'text-primary' : 'text-foreground/80'}`}>
                        {link.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48">
                      <DropdownMenuItem asChild>
                        <Link to="/produits" className="w-full cursor-pointer">
                          Tous les produits
                        </Link>
                      </DropdownMenuItem>
                      {productCategories.map((cat) => (
                        <DropdownMenuItem key={cat.name} asChild>
                          <Link to={cat.href} className="w-full cursor-pointer">
                            {cat.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${isActive(link.href) ? 'text-primary bg-primary/10' : 'text-foreground/80'}`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button>
                <Phone className="h-4 w-4" />
                Nous Contacter
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button 
                className="p-2 hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-foreground" />
                ) : (
                  <Menu className="h-6 w-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
          <nav className="container mx-auto px-4 py-4 border-t border-border/50 bg-background">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.name} className="space-y-1">
                    <Link
                      to="/produits"
                      className={`flex items-center justify-between py-3 px-4 rounded-md text-base font-medium transition-colors hover:bg-accent ${isActive(link.href) ? 'text-primary bg-primary/10' : 'text-foreground/80'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    <div className="pl-4 space-y-1">
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.name}
                          to={cat.href}
                          className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`py-3 px-4 rounded-md text-base font-medium transition-colors hover:bg-accent ${isActive(link.href) ? 'text-primary bg-primary/10' : 'text-foreground/80'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="pt-4 mt-4 border-t border-border/50 space-y-3">
                <Button className="w-full">
                  <Phone className="h-4 w-4" />
                  Nous Contacter
                </Button>
              </div>
              <div className="pt-4 text-sm text-muted-foreground space-y-2">
                <a href="tel:+33123456789" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  01 23 45 67 89
                </a>
                <a href="mailto:contact@legumes-frais.fr" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@legumes-frais.fr
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
