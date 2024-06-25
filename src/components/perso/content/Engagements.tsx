import {
  ChatBubbleLeftEllipsisIcon,
  DocumentCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

/* eslint-disable @next/next/no-img-element */
const incentives = [
  {
    name: "Conseils personnalisés",
    imageSrc: (
      <ChatBubbleLeftEllipsisIcon className="text-slate-700 w-20 h-auto mx-auto" />
    ),
    description:
      "Nos experts dédiés vous accompagnent de A à Z dans vos travaux",
  },
  {
    name: "Experts en rénovation",
    imageSrc: <UserCircleIcon className="text-slate-700 w-20 h-auto mx-auto" />,
    description:
      "Les professionnels de notre réseau sont qualifiés et soigneusement sélectionnés.",
  },
  {
    name: "Aides et financement",
    imageSrc: (
      <DocumentCheckIcon className="text-slate-700 w-20 h-auto mx-auto" />
    ),
    description:
      "Aides directement déduites du devis, possibilités de financement à taux 0% géré de A à Z.",
  },
];

const Engagements = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-700">
                Nos engagements
              </h2>
              <div className="w-[80%] max-w-[250px] h-2 rounded-full bg-yellow-500 mt-7 mx-auto" />
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div
                  key={incentive.name}
                  className="text-center sm:flex sm:text-left lg:block lg:text-center"
                >
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">{incentive.imageSrc}</div>
                  </div>
                  <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-sm font-medium text-gray-900">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagements;
