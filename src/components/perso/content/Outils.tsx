/* eslint-disable @next/next/no-img-element */
const Outils = () => {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-24 md:py-16 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold tracking-tight text-slate-900 text-center leading-[3rem]">
          Rejoignez l&apos;Équipe Réseau d&apos;eXp et Boostez Votre Carrière
          Immobilière!
        </h2>
        <div className="w-full flex justify-between items-center mt-16">
          <div className="w-1/2">
            <img src="/mac.png" className="w-[90%] h-auto" />
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl text-slate-900 font-bold">
              Avenue-Immo – Génération de demande d&apos;estimation Ultra
              Performante
            </h3>
            <div className="h-2 w-1/3 bg-yellow-500 rounded-full mt-5" />
            <p className="mt-8">
              Quel agent n&apos;a jamais révé de recevoir des leads qualifiés et
              exclusifs en quelques clics ?{" "}
              <span className="font-bold">Reseau</span> vous offre cette
              opportunité unique avec notre outil Avenue-Immo.com !
            </p>
            <ul className="mt-5 disc">
              <li>
                <span className="font-bold">Accès à Avenue-Immo : </span>
                Utilisez notre plateforme de génération de demandes
                d&apos;estimation immobilière ultra performante pour attirer des
                clients potentiels qualifiés.
              </li>
              <li className="mt-3">
                <span className="font-bold">Leads Exclusifs :</span>
                Obtenez des leads exclusifs et dominez votre secteur ! Nous vous
                garantissons une exclusivité territoriale pour chaque lead
                généré.
              </li>
              <li className="mt-3">
                <span className="font-bold">Conversion Élevée : </span>
                Notre système est conçu pour maximiser vos chances de
                conversion, vous garantissant un retour sur investissement
                optimal.
              </li>
            </ul>
            <div className="w-full mt-10 mx-auto">
              <a
                className=" p-3 bg-blue-700 text-white rounded-md"
                href="#form"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outils;
