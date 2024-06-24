interface AvisItem {
  id: number;
  date: string;
  avis: string;
  note: number;
}

export const avis: AvisItem[] = [
  {
    id: 0,
    date: "2024-05-04",
    avis: "Merci pour votre aide précieuse ! Les étapes étaient bien expliquées et le processus très transparent.",
    note: 5,
  },
  {
    id: 1,
    date: "2024-01-23",
    avis: "Ravi de la simplicité du service. J'ai pu me concentrer sur mon activité sans me soucier des papiers administratifs.",
    note: 5,
  },
  {
    id: 2,
    date: "2024-04-09",
    avis: "Excellente plateforme, très intuitive. Le support client a répondu rapidement à mes questions. Hautement recommandé !",
    note: 5,
  },
  {
    id: 3,
    date: "2023-11-03",
    avis: "Je n'aurais jamais pensé que créer une auto-entreprise serait si facile ! Merci à Info Autoentreprise pour leur efficacité.",
    note: 5,
  },
  {
    id: 4,
    date: "2024-03-03",
    avis: "Service impeccable. Les démarches étaient bien moins compliquées que je ne le pensais grâce à Info Autoentreprise.",
    note: 5,
  },
  {
    id: 5,
    date: "2023-12-15",
    avis: "Le site est bien structuré, et j'ai pu créer mon auto-entreprise en quelques clics. Les explications étaient très claires.",
    note: 4,
  },
  {
    id: 6,
    date: "2024-04-07",
    avis: "Info Autoentreprise est top ! Le site m'a guidé à travers chaque étape. Je suis très satisfait de mon expérience.",
    note: 4,
  },
  {
    id: 7,
    date: "2023-11-08",
    avis: "J'ai trouvé la création de mon auto-entreprise incroyablement simple grâce à Info Autoentreprise. Tout était clair et rapide !",
    note: 5,
  },
  {
    id: 8,
    date: "2024-01-27",
    avis: "Une expérience vraiment positive avec Info Autoentreprise. Tout a été géré en ligne sans tracas. C'est un gain de temps précieux.",
    note: 4,
  },
  // Autres avis
];

const Avis = () => {
  return (
    <section className="bg-slate-700 mt-20 py-24 relative">
      <div className="absolute bottom-0 right-0 h-4 bg-slate-300 w-full" />
      <div className="mx-auto sm:px-6 lg:px-8 flex justify-between md:flex-row flex-col ">
        {avis.slice(0, 5).map((avis, index) => (
          <div
            key={index}
            className="flex bg-white flex-col items-center justify-center gap-y-6 py-12 md:max-w-[18%] w-full border border-slate-100 rounded-md p-2 md:mt-0 mt-5"
          >
            <div className="flex items-center gap-x-4 text-slate-700">
              <div className="flex flex-col items-center">
                <h3 className="font-semibold">{avis.date}</h3>
                <p className="text-sm text-yellow-500">
                  {/* Génération des étoiles en fonction de la note */}
                  {"★".repeat(avis.note) + "☆".repeat(5 - avis.note)}
                </p>
              </div>
            </div>
            <p className="text-center text-sm text-slate-700">{avis.avis}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Avis;
