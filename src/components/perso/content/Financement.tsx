/* eslint-disable @next/next/no-img-element */
const Financement = () => {
  return (
    <section className="w-full py-24 md:py-16">
      <div className="max-w-5xl w-full px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center h-min">
        <div className="w-full md:w-1/2 md:pr-6 flex flex-col justify-between">
          <h2 className="text-2xl text-slate-700 font-bold">
            Obtenez un financement pour vos rénovations à{" "}
            <span className="text-yellow">0% d&apos;intérêt**</span>
          </h2>
          <div className="flex flex-col mt-7">
            <p className="text-slate-500">
              Profitez de l&apos;offre{" "}
              <strong>« Mon ÉCO-PTZ Prime Rénov&apos; »</strong> pour obtenir un
              prêt allant jusqu&apos;à{" "}
              <strong>30 000 € sans frais d&apos;intérêt</strong> pour vos
              améliorations énergétiques.
            </p>
            <p className="text-slate-500 mt-4">
              Le processus est direct :{" "}
              <strong>
                nous prenons en charge votre demande de financement du début à
                la fin.
              </strong>
            </p>
            <p className="text-slate-500 mt-4">
              Vous pouvez rembourser ce{" "}
              <strong>prêt écologique sans intérêt</strong> sur une période
              allant jusqu&apos;à 15 ans, accessible à tous les propriétaires,{" "}
              <strong>indépendamment de leurs ressources</strong>, que le
              logement soit occupé par eux ou mis en location.
            </p>
            <p className="text-xs italic mt-3 text-slate-500">
              Un crédit vous engage et doit être remboursé. Vérifiez vos
              capacités de remboursement avant de vous engager.
            </p>
          </div>
          <a
            href="#form"
            className="px-3 py-4 bg-yellow-500 rounded-lg text-white mt-7 w-max"
          >
            Demandez votre estimation
          </a>
        </div>
        <div className="w-full md:w-1/2 relative flex flex-col mt-12 md:mt-0">
          <img
            src="/ptz.png"
            alt="Eco-prêt"
            className="w-32 h-auto absolute top-4 right-28"
          />
          <img
            src="/maprimerenov2.png"
            alt="Prime Rénov"
            className="w-28 h-auto absolute bottom-16 left-28"
          />
          <div className="flex w-full justify-between items-end">
            <img
              src="https://via.placeholder.com/500"
              className="w-[60%] h-[200px] rounded-lg object-cover"
              alt="Financement"
            />
            <img
              src="https://via.placeholder.com/500"
              className="w-[30%] h-[150px] rounded-lg object-cover"
              alt="Financement"
            />
          </div>
          <div className="flex w-full justify-between items-end mt-5">
            <img
              src="https://via.placeholder.com/500"
              className="w-[30%] h-[150px] rounded-lg object-cover"
              alt="Financement"
            />
            <img
              src="https://via.placeholder.com/500"
              className="w-[60%] h-[200px] rounded-lg object-cover"
              alt="Financement"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financement;
