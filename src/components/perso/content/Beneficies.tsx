import { CheckIcon } from "@heroicons/react/20/solid";

/* eslint-disable @next/next/no-img-element */
const Beneficies = () => {
  return (
    <section className="w-full py-24 md:py-16">
      <div className="max-w-5xl w-full px-4 md:px-6 mx-auto">
        <div className=" flex flex-col md:flex-row justify-between items-center mt-12">
          <div className="w-full md:w-6/12 md:pr-6">
            <img
              src="/global.jpg"
              className="w-full h-auto max-h-[300px] rounded-lg object-cover"
              alt="Financement"
            />
          </div>
          <div className="w-full md:w-6/12 md:pl-6 flex flex-col justify-between mt-12 md:mt-0">
            <h2 className="text-2xl text-slate-700 font-bold">
              Les bénéfices de la{" "}
              <span className="text-yellow">
                rénovation énergétique avec ECO-Nouvelle-Aquitaine
              </span>
            </h2>
            <ul className="list-inside text-xl mt-7">
              <li className="flex">
                <CheckIcon className="h-7 w-7 min-w-[28px] mr-2 mb-2 text-yellow-500" />
                <p>Un confort optimum en toutes saisons</p>
              </li>
              <li className="mt-5 flex">
                <CheckIcon className="h-7 w-7 min-w-[28px] mr-2  mb-2 text-yellow-500" />
                <p>Importantes économies sur vos factures énergétiques</p>
              </li>
              <li className="mt-5 flex">
                <CheckIcon className="h-7 w-7 min-w-[28px] mr-2  mb-2 text-yellow-500" />
                <p>Meilleure classement énergétique sur votre DPE</p>
              </li>
              <li className="mt-5 flex">
                <CheckIcon className="h-7 w-7 min-w-[28px] mr-2  mb-2 text-yellow-500" />
                <p>Valorisation de votre logement</p>
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
