const Ptz = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-20">
        <div className="w-7/12 pr-2">
          <h2 className="text-slate-700 text-2xl font-bold">
            Financez vos travaux <br />{" "}
            <span className="text-yellow-500">à taux 0%*</span>
          </h2>
          <p className="text-slate-500 mt-7">
            Avec «{" "}
            <span className="font-bold">Mon ÉCO-PTZ Prime Rénov&apos;</span> »
            vous pouvez bénéficier d’un prêt{" "}
            <span className="font-bold">jusqu’à 30 000 € sans intérêt</span>{" "}
            pour financer vos travaux de rénovation énergétique.
          </p>
          <p className="text-slate-500 mt-3">
            Comment ça marche ? C’est simple et sans intermédiaire :{" "}
            <span className="font-bold">
              nous gérons votre demande de financement de A à Z.
            </span>
          </p>
          <p className="text-slate-500 mt-3">
            La durée de remboursement de cet{" "}
            <span className="font-bold">Eco-prêt à taux zéro</span>
            peut aller jusqu’à 15 ans et s’adresse à tous les propriétaires,
            <span className="font-bold">sans conditions de ressources</span>,
            qu’ils habitent le logement ou qu’ils le mettent en location.
          </p>

          <p className="text-slate-500 mt-3 text-xs mb-7">
            *Un crédit vous engage et doit être remboursé. Vérifiez vos
            capacités de remboursement avant de vous engager.
          </p>
          <a className="bg-yellow-500 text-lg px-3 py-2 rounded-md text-white mt-7">
            Estimer mes travaux
          </a>
        </div>
        <div className="w-5/12"></div>
      </div>
    </section>
  );
};

export default Ptz;
