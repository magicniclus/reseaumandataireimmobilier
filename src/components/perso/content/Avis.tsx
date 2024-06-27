/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarIcon } from "@heroicons/react/20/solid";

interface AvisItem {
  id: number;
  date: string;
  avis: string;
  name: string;
  note: number;
}

export const avis: AvisItem[] = [
  {
    id: 0,
    date: "2024-05-04",
    avis: "Merci pour votre aide précieuse ! Les étapes étaient bien expliquées et le processus très transparent.",
    name: "Jean Dupont",
    note: 5,
  },
  {
    id: 1,
    date: "2024-01-23",
    avis: "Ravi de la simplicité du service. J'ai pu me concentrer sur mon activité sans me soucier des papiers administratifs.",
    name: "Jean Dupont",
    note: 5,
  },
  {
    id: 2,
    date: "2024-04-09",
    avis: "Excellente plateforme, très intuitive. Le support client a répondu rapidement à mes questions. Hautement recommandé !",
    name: "Jean Dupont",
    note: 5,
  },
  {
    id: 3,
    date: "2023-11-03",
    avis: "Je n'aurais jamais pensé que créer une auto-entreprise serait si facile ! Merci à Info Autoentreprise pour leur efficacité.",
    name: "Jean Dupont",
    note: 5,
  },
  {
    id: 4,
    date: "2024-03-03",
    avis: "Service impeccable. Les démarches étaient bien moins compliquées que je ne le pensais grâce à Info Autoentreprise.",
    name: "Jean Dupont",
    note: 5,
  },
  {
    id: 5,
    date: "2023-12-15",
    avis: "Le site est bien structuré, et j'ai pu créer mon auto-entreprise en quelques clics. Les explications étaient très claires.",
    name: "Jean Dupont",
    note: 4,
  },
  {
    id: 6,
    date: "2024-04-07",
    avis: "Info Autoentreprise est top ! Le site m'a guidé à travers chaque étape. Je suis très satisfait de mon expérience.",
    name: "Jean Dupont",
    note: 4,
  },
  {
    id: 7,
    date: "2023-11-08",
    avis: "J'ai trouvé la création de mon auto-entreprise incroyablement simple grâce à Info Autoentreprise. Tout était clair et rapide !",
    name: "Jean Dupont",
    note: 5,
  },
  // Autres avis
];

const Avis = () => {
  return (
    <section className=" py-24 md:py-16 relative">
      {/* <div className="absolute bottom-0 right-0 h-4 bg-slate-300 w-full" /> */}
      <div className="mx-auto sm:px-6 px-4 flex justify-between flex-col items-center max-w-5xl">
        <h2 className="text-2xl text-slate-700 font-bold">
          Nos cliens nous recommandent
        </h2>
        <p>Nos avis préférés</p>
        <div className="w-[80%] max-w-[250px] h-2 rounded-full bg-yellow-500 mt-7" />
        <Carousel className="w-full mt-12">
          <CarouselContent className="-ml-1">
            {avis.map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 px-3 flex flex-col items-center">
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="p-1 rounded-full bg-white shadow-lg">
                      <img
                        src="/google.png"
                        alt="avis google"
                        className="w-5 h-5 objet-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center text-sm mt-2">
                    <p>{_?.avis}</p>
                  </div>
                  <div className="text-center text-sm mt-2">
                    <p>{_?.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Avis;
