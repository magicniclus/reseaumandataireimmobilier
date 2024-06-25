import { CheckIcon } from "@heroicons/react/20/solid";

/* eslint-disable @next/next/no-img-element */
const Beneficies = () => {
  return (
    <section className="w-full py-24 md:py-16">
      <div className="max-w-5xl w-full px-4 md:px-6 mx-auto">
        <div className=" flex flex-col md:flex-row justify-between items-center mt-12">
          <div className="w-full md:w-6/12 md:pr-6">
            <img
              src="https://via.placeholder.com/500"
              className="w-full h-auto rounded-lg object-cover"
              alt="Financement"
            />
          </div>
          <div className="w-full md:w-6/12 md:pl-6 flex flex-col justify-between mt-12 md:mt-0">
            <h2 className="text-2xl text-slate-700 font-bold">
              Obtenez un financement pour vos rénovations à{" "}
              <span className="text-yellow">0% d&apos;intérêt**</span>
            </h2>
            <ul className="list-inside text-xl mt-7">
              <li className="flex">
                <CheckIcon className="h-7 w-7 min-w-[28px] mr-2 mb-2" />
                <p>
                  <span className="font-bold text-yellow-500">
                    Je soumets ma demande
                  </span>{" "}
                  et je serai contacté par un conseiller pour discuter de mon
                  projet.
                </p>
              </li>
              <li className="mt-5 flex">
                <CheckIcon className="h-7 w-7 min-w-[28px] mr-2  mb-2" />
                <p>
                  <span className="font-bold text-yellow-500">
                    Mon conseiller prépare une étude
                  </span>{" "}
                  adaptée aux spécificités de mon logement.
                </p>
              </li>
              <li className="mt-5 flex">
                <CheckIcon className="h-7 w-7 min-w-[28px] mr-2  mb-2" />
                <p>
                  <span className="font-bold text-yellow-500">
                    Les aides financières sont directement appliquées
                  </span>{" "}
                  sur le devis.
                </p>
              </li>
              <li className="mt-5 flex">
                <CheckIcon className="h-7 w-7 min-w-[28px] mr-2  mb-2" />
                <p>
                  <span className="font-bold text-yellow-500">
                    Un technicien d&apos;ECO-Nouvelle-Aquitaine
                  </span>{" "}
                  supervise la réalisation des travaux.
                </p>
              </li>
            </ul>
            <a
              href="#form"
              className="px-3 py-4 bg-yellow-500 rounded-lg text-white mt-7 w-max"
            >
              Demandez votre estimation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficies;
