import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    title: "Commandes & Livraison",
    questions: [
      {
        question: "Comment passer une commande ?",
        answer: "Vous pouvez commander directement sur notre site en ajoutant les produits à votre panier. Le paiement est sécurisé et vous recevez une confirmation par email."
      },
      {
        question: "Quels sont les délais de livraison ?",
        answer: "Nous livrons en 24 à 48h selon votre zone géographique. Les légumes sont récoltés le matin et expédiés le jour même."
      },
      {
        question: "La livraison est-elle gratuite ?",
        answer: "Oui, la livraison est gratuite pour toute commande supérieure à 50€. En dessous, les frais de port sont de 5,90€."
      },
      {
        question: "Dans quelles zones livrez-vous ?",
        answer: "Nous livrons dans toute la France métropolitaine. Pour les DOM-TOM, contactez-nous pour plus d'informations."
      }
    ]
  },
  {
    title: "Produits & Qualité",
    questions: [
      {
        question: "Vos légumes sont-ils vraiment bio ?",
        answer: "Oui, notre ferme est certifiée Agriculture Biologique (AB) et Ecocert. Tous nos légumes sont cultivés sans pesticides ni engrais chimiques."
      },
      {
        question: "Comment conservez-vous la fraîcheur des légumes ?",
        answer: "Les légumes sont récoltés le matin, triés et emballés dans des caisses isothermes avec des packs de froid pour garantir leur fraîcheur."
      },
      {
        question: "Que faire si je reçois des produits abîmés ?",
        answer: "Contactez-nous dans les 24h avec une photo. Nous vous rembourserons ou renverrons les produits concernés gratuitement."
      },
      {
        question: "Comment sont choisis les légumes des paniers ?",
        answer: "Les paniers sont composés selon les récoltes du jour. Vous pouvez préciser vos préférences ou allergies lors de la commande."
      }
    ]
  },
  {
    title: "Paiement & Remboursement",
    questions: [
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer: "Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal, et le virement bancaire. Tous les paiements sont sécurisés."
      },
      {
        question: "Puis-je annuler ma commande ?",
        answer: "Vous pouvez annuler votre commande jusqu'à 18h la veille de l'expédition. Contactez-nous par email ou téléphone."
      },
      {
        question: "Comment fonctionne le remboursement ?",
        answer: "Les remboursements sont effectués sous 5 à 7 jours ouvrés sur le même moyen de paiement utilisé lors de la commande."
      }
    ]
  },
  {
    title: "La Ferme & Visites",
    questions: [
      {
        question: "Peut-on visiter la ferme ?",
        answer: "Oui ! Nous organisons des visites guidées tous les samedis de 10h à 12h. Réservez sur notre page Contact."
      },
      {
        question: "Proposez-vous des ateliers ?",
        answer: "Nous organisons régulièrement des ateliers cuisine et jardinage. Consultez notre page Blog pour les prochaines dates."
      },
      {
        question: "Où êtes-vous situés ?",
        answer: "Notre ferme est située à 123 Route de la Ferme, 75000 Paris. Accès facile en voiture ou en transports en commun."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-28">
        {/* Hero */}
        <div className="bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Foire aux Questions
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trouvez les réponses à toutes vos questions sur nos produits, livraisons et services.
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.title}-${index}`}
                      className="border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-8 bg-accent/50 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
              Vous n'avez pas trouvé votre réponse ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Notre équipe est disponible pour répondre à toutes vos questions.
            </p>
            <Button asChild>
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
