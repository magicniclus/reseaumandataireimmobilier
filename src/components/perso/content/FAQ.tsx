import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Quelle est la mission principale d'un agent eXp Realty?",
    answer:
      "Chez eXp Realty, la mission principale d'un agent est de fournir un service exceptionnel à ses clients en matière d'achat, de vente et de location de biens immobiliers, tout en bénéficiant du soutien et des ressources d'un réseau global.",
  },
  {
    question: "C'est quoi la team Reseau d'eXp?",
    answer:
      "La team Reseau d'eXp est un groupe d'agents immobiliers indépendants qui travaillent ensemble pour partager des ressources, des outils uniques, des connaissances et des opportunités d'affaires, tout en bénéficiant du soutien et de la formation de l'équipe eXp Realty.",
  },
  {
    question: "C'est quoi Avenue-immo",
    answer:
      "Avenue-immo est un site d'estimaiton immobiliere en ligne créé par le fondateur de la team Réseau, qui permet aux membres de l'équipe de générer des leads qualifiés et de maximiser leurs opportunités d'affaires à prix coutant et donc de dominer leurs marché local.",
  },
  {
    question:
      "Quels sont les avantages de devenir un agent immobilier indépendant?",
    answer:
      "En devenant un agent immobilier indépendant, vous avez la liberté de gérer votre propre emploi du temps, de fixer vos propres objectifs et de maximiser vos revenus potentiels en fonction de vos efforts et de votre dévouement.",
  },
  {
    question:
      "Qu'est-ce qui distingue eXp Realty des autres agences immobilières?",
    answer:
      "eXp Realty se distingue par son modèle d'agence immobilière virtuelle, qui offre aux agents la possibilité de travailler de n'importe où, de bénéficier d'un programme de partage des revenus, et d'accéder à une plateforme technologique de pointe.",
  },
  {
    question: "Comment devenir un agent chez eXp Realty?",
    answer:
      "Pour devenir un agent chez eXp Realty, vous devez d'abord obtenir votre licence immobilière. Ensuite, vous pouvez rejoindre notre réseau en suivant notre processus d'intégration qui inclut une formation complète et un mentorat.",
  },
  {
    question: "Quels sont les avantages de travailler avec eXp Realty?",
    answer:
      "eXp Realty offre de nombreux avantages, y compris un modèle de commission attractif, des opportunités de revenu passif via le programme de partage des revenus, et l'accès à une plateforme technologique de pointe pour gérer votre activité.",
  },
  {
    question:
      "Comment fonctionne le programme de partage des revenus chez eXp Realty?",
    answer:
      "Le programme de partage des revenus chez eXp Realty permet aux agents de gagner un pourcentage des commissions générées par les agents qu'ils parrainent, créant ainsi des opportunités de revenus passifs supplémentaires.",
  },
  {
    question: "Quel type de soutien est offert aux agents eXp Realty?",
    answer:
      "eXp Realty offre un soutien complet à ses agents, y compris des formations en ligne, des outils technologiques avancés, et l'accès à un réseau global de professionnels de l'immobilier pour collaborer et partager des ressources.",
  },
  // Ajoutez plus de questions si nécessaire...
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto w-fulldivide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Questions Fréquentes
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
