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
        answer:
          "Vous pouvez consulter nos produits sur le site, puis nous contacter directement. Les livraisons commencent à partir d'un achat de 500 F.",
      },
      {
        question: "La livraison est-elle gratuite ?",
        answer:
          "La livraison est gratuite pour toute commande supérieure à 5000 F. En dessous de ce montant, les frais de port sont appliqués à partir de 500 F.",
      },
      {
        question: "Dans quelles zones livrez-vous ?",
        answer:
          "Nous livrons partout à Kara et nous effectuons des expéditions partout ailleurs.",
      },
    ],
  },
  {
    title: "Produits & Qualité",
    questions: [
      {
        question: "Vos légumes sont-ils vraiment bio ?",
        answer:
          "Oui, notre ferme est strictement basée sur des cultures Bio pour préserver la santé de nos clients. Tous nos légumes sont cultivés sans pesticides ni engrais chimiques.",
      },
      {
        question: "Quelle est la philosophie de la ferme ?",
        answer:
          "Derrière cette ferme, il y a avant tout des personnes, de la passion, de la volonté et le désir de proposer des produits sains.",
      },
    ],
  },
  {
    title: "Paiement & Remboursement",
    questions: [
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer:
          "Nous acceptons les paiements en cash (espèces) ainsi que via  Flooz, Mixx by yas et Flooz.",
      },
      {
        question: "Que faire si je souhaite un remboursement ?",
        answer:
          "Nous gérons les remboursements avec soin. Contactez-nous directement pour discuter des modalités selon votre situation.",
      },
    ],
  },
  {
    title: "La Ferme & Visites",
    questions: [
      {
        question: "Où êtes-vous situés ?",
        answer:
          "Nous sommes situés à Kara, dans la région de la Kara, plus précisément à Sanda Kagbanda, dans la préfecture de Bassar.",
      },
    ],
  },
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
              Trouvez les réponses à toutes vos questions sur nos produits,
              livraisons et services.
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
