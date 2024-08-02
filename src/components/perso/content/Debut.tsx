import { DocumentCheckIcon, UsersIcon } from "@heroicons/react/20/solid";

const Debut = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-16 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold tracking-tight text-slate-900 text-center leading-[3rem]">
          Commencer en 3 étapes
        </h2>
        <div className="w-full flex justify-between flex-col md:flex-row text-slate-900 mt-14">
          <div className="flex flex-col items-center min-h-[350px] w-full md:w-3/12">
            <UsersIcon className="h-20 w-20 text-blue-700" />
            <p className="text-yellow-500 font-bold text-lg mt-5">Étape 1/3</p>
            <h3 className="text-3xl font-bold mt-3 text-center">
              Rencontrez votre parrain pour discuter de votre projet
            </h3>
            <p className="text-lg text-center text-slate-500 mt-3">
              Pour tout savoir sur le métier de conseiller immobilier
              indépendant et le fonctionnement de eXp ainsi que de
              l&apos;équipe, remplissez le formulaire ci-dessus.
            </p>
          </div>
          <div className="flex flex-col items-center min-h-[350px] w-full md:w-3/12">
            <DocumentCheckIcon className="h-20 w-20 text-blue-700" />
            <p className="text-yellow-500 font-bold text-lg mt-5">Étape 2/3</p>
            <h3 className="text-3xl font-bold mt-3 text-center">
              Rejoignez-nous
            </h3>
            <p className="text-lg text-center text-slate-500 mt-3">
              Après un échange sur votre projet, les avantages de eXp et de
              Reseau, votre parrain vous guide dans votre inscription à eXp.
            </p>
          </div>
          <div className="flex flex-col items-center min-h-[350px] w-full md:w-3/12">
            <UsersIcon className="h-20 w-20 text-blue-700" />
            <p className="text-yellow-500 font-bold text-lg mt-5">Étape 3/3</p>
            <h3 className="text-3xl font-bold mt-3 text-center">
              Débutez votre parcours d&apos;intégration et de formation
            </h3>
            <p className="text-lg text-center text-slate-500 mt-3">
              Avec les formateurs de eXp, votre parrain et Reseau. Rentrez des
              mandats dès le premier mois !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debut;
