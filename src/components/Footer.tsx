import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const productLinks = [
    { name: "Tous les produits", href: "/produits" },
    { name: "🥬 Nos Choux", href: "/produits?cat=Choux" },
    { name: "🫑 Nos Poivrons", href: "/produits?cat=Poivrons" },
  ];

  const infoLinks = [
    { name: "Notre Ferme", href: "/notre-ferme" },
    { name: "Blog", href: "/blog" },
    { name: "Recettes", href: "/recettes" },
    { name: "FAQ", href: "/faq" },
    { name: "Livraison", href: "/livraison" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "CGV", href: "/cgv" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
    { name: "Cookies", href: "/cookies" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="font-serif text-xl font-bold text-background">
                Légumes Frais
              </span>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Nous cultivons depuis avec passion les meilleurs choux et poivrons
              bio.Une réputation d'excellence bâtie sur notre savoir faire.
            </p>
            <div className="space-y-2 text-sm text-background/70">
              <a
                href="tel:+22892522029"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +228 92 52 20 29
              </a>
              <a
                href="mailto:contact@legumes-frais.fr"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                shalomtagba@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  123 Tchanadè
                  <br />
                  31000 Kara, Togo
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif font-bold text-background mb-4">
              Nos Produits
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-serif font-bold text-background mb-4">
              Informations
            </h4>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-serif font-bold text-background mb-4">
              Suivez-nous
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                // href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                // href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                // href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                // href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <h4 className="font-serif font-bold text-background mb-4">Légal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={""}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>© 2026 Légumes Frais. Tous droits réservés. Kara Togo.</p>
            <div className="flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/80px-Visa_Inc._logo.svg.png"
                alt="Visa"
                className="h-6 opacity-70"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/80px-Mastercard-logo.svg.png"
                alt="Mastercard"
                className="h-6 opacity-70"
              />
              <span className="text-background/50">🔒 Paiement sécurisé</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
