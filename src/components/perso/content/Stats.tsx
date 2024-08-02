const stats = [
  { id: 1, name: "Commission moyenne par transaction", value: "7000€" },
  { id: 2, name: "Ventes moyennes par agent par mois", value: "2" },
  { id: 3, name: "Des honoraires dès 80 000€ de CA atteint", value: "100%" },
  { id: 3, name: "Conseillers dans le monde", value: "85 000" },
];

export default function Stats() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-5xl font-bold tracking-tight text-slate-900 text-center leading-[3rem]">
          La Team Reseau d&apos;eXp c&apos;est ça:
        </h2>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 mt-16">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-blue-700 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
