const Offre = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-16 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold tracking-tight text-slate-900 text-center leading-[3rem]">
          Découvrez une toute nouvelle facon de faire de l’immobilier
        </h2>
        <p className="mt-10 text-lg text-center">
          Que vous soyez un agent immobilier débutant ou expérimenté,
          l&apos;équipe <span className="font-bold">Reseau</span> d&apos;eXp
          vous offre une opportunité unique de développer votre activité et de{" "}
          <span className="font-bold">maximiser vos revenus</span>. En
          rejoignant notre équipe, vous bénéficierez d&apos;avantages exclusifs
          spécialement conçus pour vous aider à atteindre vos objectifs
          professionnels et à faire passer votre carrière au{" "}
          <span className="font-bold">niveau supérieur</span>.
        </p>
        <p className="mt-3 text-lg text-center">
          <span className="font-bold">Rejoignez-nous</span> et découvrez comment
          nous pouvons propulser votre succès dans l&apos;immobilier avec des{" "}
          <span className="font-bold">outils de prospection</span>, des{" "}
          <span className="font-bold">formations</span> et un soutien inégalés.
        </p>
        <div className="w-full mt-10 mx-auto flex justify-center">
          <a className=" p-3 bg-blue-700 text-white rounded-md" href="#form">
            Rejoignez-nous
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offre;
