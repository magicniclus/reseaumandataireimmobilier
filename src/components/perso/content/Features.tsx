import {
  AcademicCapIcon,
  CircleStackIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Coaching personnalisé",
    description:
      "Que vous soyez un agent immobilier débutant ou expérimenté, l'équipe Reseau d'eXp vous offre l'opportunité unique de développer vos connaissance, compétences et de maximiser vos revenus.",
    icon: AcademicCapIcon,
  },
  {
    name: "Formation à l'IA`",
    description:
      "Dans l'immobilier d'aujourd'hui, l'IA est un outil indispensable pour maximiser vos chances de conversion, vous garantissant un retour sur investissement optimal, nous vous formons à son utilisation.",
    icon: CircleStackIcon,
  },
  {
    name: "Script de prospection",
    description:
      "Suivez notre script de prospection pour attirer des clients potentiels qualifiés et dominez votre secteur ! Nous vous garantissons une exclusivité territoriale pour chaque lead généré.",
    icon: PencilSquareIcon,
  },
];

export default function Featurs() {
  return (
    <div className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Et bien plus encore...
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
